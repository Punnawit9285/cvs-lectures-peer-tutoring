"""Build student.pdf for the dedicated EKG deck on Windows (headless Chrome + PyMuPDF)."""
import os, sys, re, json, time, shutil, hashlib, subprocess, urllib.request
from pathlib import Path
import pymupdf
from PIL import Image

EKG = Path(__file__).resolve().parent.parent
DIST = EKG / "dist"
FONTS_DIR = DIST / "fonts"
PIMG_DIR = DIST / "pimg"
IMG_DIR = EKG / "img"

CHROME_CANDIDATES = [
    os.environ.get("CHROME", ""),
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
    r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
    r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
]
CHROME = next((c for c in CHROME_CANDIDATES if c and os.path.isfile(c)), None)
if not CHROME:
    raise SystemExit("Chrome/Edge not found. Set CHROME env var.")

def ensure_fonts():
    css_file = FONTS_DIR / "fonts.css"
    if css_file.exists() and css_file.stat().st_size > 100:
        return
    FONTS_DIR.mkdir(parents=True, exist_ok=True)
    url = "https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@500;600;700&family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans+Thai:wght@400;500;600&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap"
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"})
    remote_css = urllib.request.urlopen(req, timeout=20).read().decode("utf-8")
    urls = sorted(set(re.findall(r"https://fonts\.gstatic\.com/[^)]+\.woff2", remote_css)))
    local_css = remote_css
    for u in urls:
        fn = "f" + hashlib.sha1(u.encode()).hexdigest()[:12] + ".woff2"
        out = FONTS_DIR / fn
        if not out.exists() or out.stat().st_size == 0:
            out.write_bytes(urllib.request.urlopen(u, timeout=20).read())
        local_css = local_css.replace(u, fn)
    css_file.write_text(local_css, encoding="utf-8")
    print(f"Downloaded {len(urls)} woff2 font files into {FONTS_DIR}")

def sync_pimg():
    PIMG_DIR.mkdir(parents=True, exist_ok=True)
    for src in IMG_DIR.glob("*.jpg"):
        dst = PIMG_DIR / src.name
        if dst.exists() and dst.stat().st_mtime >= src.stat().st_mtime:
            continue
        im = Image.open(src)
        im.thumbnail((900, 900), Image.Resampling.LANCZOS)
        im.save(dst, "JPEG", quality=78, optimize=True)

def extract_pdftext(pdf_path: Path, txt_path: Path):
    doc = pymupdf.open(str(pdf_path))
    lines = []
    for i, page in enumerate(doc):
        t = re.sub(r"\s+", " ", page.get_text("text")).strip()
        lines.append(f"{i+1}\t{t}")
    doc.close()
    txt_path.write_text("\n".join(lines) + "\n", encoding="utf-8")

def chrome_print(out_pdf: Path):
    url = (DIST / "print.html").resolve().as_uri()
    cmd = [
        CHROME, "--headless=new", "--disable-gpu", "--no-pdf-header-footer",
        "--virtual-time-budget=15000",
        f"--print-to-pdf={out_pdf}", url
    ]
    subprocess.run(cmd, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

def chrome_dump_dom():
    url = (DIST / "print.html").resolve().as_uri()
    cmd = [CHROME, "--headless=new", "--disable-gpu", "--virtual-time-budget=15000", "--dump-dom", url]
    res = subprocess.run(cmd, check=True, capture_output=True, text=True, encoding="utf-8", errors="replace")
    return res.stdout

def main():
    os.chdir(EKG)
    ensure_fonts()
    sync_pimg()

    tmp = DIST / "_tmp_pdf"
    if tmp.exists():
        shutil.rmtree(tmp)
    tmp.mkdir(parents=True)

    # Pass 1
    subprocess.run(["node", "print.js"], check=True)
    p1_pdf = tmp / "pass1.pdf"
    p1_txt = tmp / "pass1.txt"
    pages_json = tmp / "pages.json"
    chrome_print(p1_pdf)
    extract_pdftext(p1_pdf, p1_txt)
    res = subprocess.run(["node", "tools/pages.js", str(p1_txt)], check=True, capture_output=True, text=True, encoding="utf-8")
    pages_json.write_text(res.stdout, encoding="utf-8")

    # Iterate until cross-references settle
    settled = False
    student_pdf = EKG / "student.pdf"
    final_txt = tmp / "final.txt"
    for r in range(1, 5):
        subprocess.run(["node", "print.js", str(pages_json)], check=True)
        chrome_print(student_pdf)
        extract_pdftext(student_pdf, final_txt)
        chk = subprocess.run(["node", "tools/pages.js", str(final_txt), "--check", str(pages_json)], capture_output=True, text=True, encoding="utf-8")
        print(f"Round {r}: {chk.stdout.strip()} {chk.stderr.strip()}".strip())
        if chk.returncode == 0:
            settled = True
            break
        res2 = subprocess.run(["node", "tools/pages.js", str(final_txt)], check=True, capture_output=True, text=True, encoding="utf-8")
        pages_json.write_text(res2.stdout, encoding="utf-8")
    if not settled:
        raise SystemExit("Page numbers did not settle or concept pages clipped.")

    # Check DOM fit & table clipping
    dom = chrome_dump_dom()
    if 'data-fitted="1"' not in dom:
        raise SystemExit("print.html fit script did not run")
    for m in re.finditer(r'<section class="cpage" ([^>]*)>', dom):
        a = m.group(1)
        cid = (re.search(r'data-id="([^"]+)"', a) or [None, "?"])[1]
        notes = []
        if "data-tstack" in a: notes.append("stacked")
        sc = re.search(r'data-tscale="([^"]+)"', a)
        if sc: notes.append(f"shrunk to {sc.group(1)}")
        if "data-tclip" in a: notes.append("STILL CUT OFF")
        if notes:
            print(f"Table fit note {cid}: " + ", ".join(notes))
    if 'data-tclip="' in dom:
        raise SystemExit("A table is still cut off in print.html")

    # Verify embedded fonts via PyMuPDF
    doc = pymupdf.open(str(student_pdf))
    n_pages = len(doc)
    fonts = set()
    for page in doc:
        for f in page.get_fonts():
            fonts.add(f[3])
    doc.close()
    print(f"Embedded fonts ({len(fonts)}): {sorted(fonts)}")
    for want in ["BaiJamjuree", "IBMPlexSans", "IBMPlexSansThai", "IBMPlexMono"]:
        if not any(want in f for f in fonts):
            raise SystemExit(f"Required font {want} not embedded in student.pdf!")

    # Stamp SHA1 version hash into README.md
    sha8 = hashlib.sha1(student_pdf.read_bytes()).hexdigest()[:8]
    readme = EKG / "README.md"
    if readme.exists():
        txt = readme.read_text(encoding="utf-8")
        txt = re.sub(r"(ekg/student\.pdf)(\?v=[0-9a-f]+)?", rf"\1?v={sha8}", txt)
        readme.write_text(txt, encoding="utf-8")
    print(f"SUCCESS: student.pdf ({n_pages} pages, {student_pdf.stat().st_size:,} bytes, v={sha8})")
    shutil.rmtree(tmp)

if __name__ == "__main__":
    main()
