#!/usr/bin/env python3
"""qr.py <text> <out.svg>: QR code (error correction M) as a crisp SVG with a 4-module quiet zone, then decode the
module matrix exactly as written (rendered at 12 px per module) with OpenCV to prove it scans back to <text>."""
import sys, qrcode, numpy as np, cv2
text, out = sys.argv[1], sys.argv[2]
q = qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_M, border=4); q.add_data(text); q.make(fit=True)
M = q.get_matrix(); size = len(M)
path = []
for y, row in enumerate(M):
    x = 0
    while x < size:
        if row[x]:
            e = x
            while e < size and row[e]: e += 1
            path.append('M%d %dh%dv1h-%dz' % (x, y, e - x, e - x)); x = e
        else: x += 1
open(out, 'w').write('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %d %d" shape-rendering="crispEdges"><rect width="%d" height="%d" fill="#fff"/><path fill="#000" d="%s"/></svg>\n' % (size, size, size, size, ''.join(path)))
img = np.kron(np.array([[0 if c else 255 for c in r] for r in M], dtype=np.uint8), np.ones((12, 12), dtype=np.uint8))
got, pts, _ = cv2.QRCodeDetector().detectAndDecode(img)
print('modules %dx%d (with quiet zone), decodes to: %s' % (size, size, got or '(none)'))
sys.exit(0 if got == text else 2)
