#!/usr/bin/env python3
"""sheet.py <pdf> <first> <last> <out.jpg> [cols] [thumbw]: contact sheet of pages with page numbers and a 0.1 grid
(normalized coordinates, origin top-left) to help choose crops for tools/crops.txt."""
import sys
import pymupdf as fitz
from PIL import Image, ImageDraw
pdf, a, b, out = sys.argv[1], int(sys.argv[2]), int(sys.argv[3]), sys.argv[4]
cols = int(sys.argv[5]) if len(sys.argv) > 5 else 3
tw = int(sys.argv[6]) if len(sys.argv) > 6 else 520
d = fitz.open(pdf); pages = list(range(a, min(b, len(d)) + 1)); ims = []
for p in pages:
    pg = d[p - 1]; z = tw / pg.rect.width
    pix = pg.get_pixmap(matrix=fitz.Matrix(z, z))
    im = Image.frombytes('RGB', (pix.width, pix.height), pix.samples)
    dr = ImageDraw.Draw(im)
    for i in range(1, 10):
        x = int(im.width * i / 10); y = int(im.height * i / 10)
        dr.line([(x, 0), (x, im.height)], fill=(255, 0, 255) if i == 5 else (0, 200, 255), width=1)
        dr.line([(0, y), (im.width, y)], fill=(255, 0, 255) if i == 5 else (0, 200, 255), width=1)
    dr.rectangle([0, 0, 44, 20], fill=(255, 255, 0)); dr.text((4, 4), 'p%d' % p, fill=(0, 0, 0))
    ims.append(im)
h = max(i.height for i in ims); rows = (len(ims) + cols - 1) // cols
S = Image.new('RGB', (cols * tw + (cols - 1) * 6, rows * h + (rows - 1) * 6), 'white')
for k, im in enumerate(ims): S.paste(im, ((k % cols) * (tw + 6), (k // cols) * (h + 6)))
S.save(out, quality=80); print(out, S.size)
