#!/usr/bin/env python3
"""crop.py [ONLY]: crop the course figures listed in tools/crops.txt from src-pdf/<pdf>.pdf into img/<name>.jpg.
Line: name pdf page x0 y0 x1 y1 [w=N] [m=x0,y0,x1,y1 ...]. Coordinates are normalized (0–1, origin top-left).
Line "+ name a b c": join earlier crops a, b, c side by side (same height) into img/name.jpg; the parts are not kept.
w = page render width in px (default 2x the page width in points). m = mask a region white (e.g. a slide number)."""
import sys, os
import pymupdf as fitz
from PIL import Image, ImageDraw
os.chdir(os.path.join(os.path.dirname(__file__), '..'))
only = sys.argv[1] if len(sys.argv) > 1 else None
n = 0; made = {}
for line in open('tools/crops.txt', encoding='utf8'):
    line = line.split('#', 1)[0].strip()
    if not line: continue
    f = line.split()
    if f[0] == '+':
        if only and only not in f[1] and not any(only in p for p in f[2:]): continue
        parts = [made.get(p) or Image.open('img/%s.jpg' % p) for p in f[2:]]
        h = min(p.height for p in parts); parts = [p.resize((round(p.width * h / p.height), h), Image.LANCZOS) for p in parts]
        J = Image.new('RGB', (sum(p.width for p in parts) + 24 * (len(parts) - 1), h), 'white'); x = 0
        for p in parts: J.paste(p, (x, 0)); x += p.width + 24
        if J.width > 1800: J = J.resize((1800, round(J.height * 1800 / J.width)), Image.LANCZOS)
        J.save('img/%s.jpg' % f[1], quality=82, optimize=True); n += 1
        for p in f[2:]:
            if os.path.exists('img/%s.jpg' % p): os.remove('img/%s.jpg' % p)
        continue
    name, pdf, page = f[0], f[1], int(f[2]); x0, y0, x1, y1 = map(float, f[3:7])
    if only and only not in name: continue
    w = None; masks = []
    for o in f[7:]:
        if o.startswith('w='): w = int(o[2:])
        elif o.startswith('m='): masks.append(tuple(map(float, o[2:].split(','))))
    pg = fitz.open('src-pdf/%s.pdf' % pdf)[page - 1]
    z = (w / pg.rect.width) if w else 2.0
    clip = fitz.Rect(pg.rect.width * x0, pg.rect.height * y0, pg.rect.width * x1, pg.rect.height * y1)
    pix = pg.get_pixmap(matrix=fitz.Matrix(z, z), clip=clip)
    im = Image.frombytes('RGB', (pix.width, pix.height), pix.samples)
    if masks:
        dr = ImageDraw.Draw(im)
        for m in masks:
            # mask coordinates are page-normalized; convert into the crop
            mx0 = (m[0] - x0) / (x1 - x0) * im.width; my0 = (m[1] - y0) / (y1 - y0) * im.height
            mx1 = (m[2] - x0) / (x1 - x0) * im.width; my1 = (m[3] - y0) / (y1 - y0) * im.height
            dr.rectangle([mx0, my0, mx1, my1], fill='white')
    # keep figures at most 1400 px wide
    if im.width > 1400: im = im.resize((1400, round(im.height * 1400 / im.width)), Image.LANCZOS)
    im.save('img/%s.jpg' % name, quality=82, optimize=True); made[name] = im; n += 1
print(n, 'crops')
os.system('python3 tools/dims.py')
