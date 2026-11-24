#!/usr/bin/env python3
"""shot.py <out.png> <page> [#hash] [width] [height] [keys...]: screenshot a deck page 
loaded from file:// (Playwright sets any viewport width, so 390 px phone checks need no iframe). Google Fonts requests are answered with the local copies
in dist/fonts (tools/fonts.sh). keys are pressed in order after load (e.g. Enter, Space, a, L); 'click:<css>' clicks."""
import sys, re, pathlib
from playwright.sync_api import sync_playwright
out, page = sys.argv[1], sys.argv[2]
h = sys.argv[3] if len(sys.argv) > 3 else ''
W = int(sys.argv[4]) if len(sys.argv) > 4 else 1366
H = int(sys.argv[5]) if len(sys.argv) > 5 else 900
keys = sys.argv[6:]
css = pathlib.Path('dist/fonts/fonts.css').read_text()
root = pathlib.Path('.').resolve().as_uri()
css = re.sub(r'url\(([^)]+)\)', lambda m: 'url(' + root + '/dist/fonts/' + m.group(1) + ')', css)
errs = []
with sync_playwright() as p:
    b = p.chromium.launch(executable_path='/usr/bin/google-chrome')
    pg = b.new_page(viewport={'width': W, 'height': H})
    pg.on('pageerror', lambda e: errs.append(str(e)))
    pg.route(re.compile(r'https://fonts\.(googleapis|gstatic)\.com/.*'), lambda r: r.fulfill(status=200, content_type='text/css', body=css) if 'googleapis' in r.request.url else r.abort())
    pg.goto(root + '/' + page + h)
    pg.wait_for_timeout(900)
    for k in keys:
        if k.startswith('click:'): pg.click(k[6:])
        else: pg.keyboard.press(k)
        pg.wait_for_timeout(250)
    pg.wait_for_timeout(400)
    sw = pg.evaluate('document.documentElement.scrollWidth')
    pg.screenshot(path=out, full_page='full' in out)
    b.close()
print(out, 'scrollWidth', sw, 'of', W, ('JS ERRORS: ' + ' | '.join(errs)) if errs else 'no JS errors')
