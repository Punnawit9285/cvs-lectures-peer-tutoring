/* node build.js [deck|notes|all]: bundle each page into one self-contained HTML file (inline CSS and JS). */
const fs = require('fs'), vm = require('vm');
const rd = f => fs.readFileSync(f, 'utf8');
const FONTS = '<link rel="preconnect" href="https://fonts.googleapis.com">\n<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@500;600;700&family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans+Thai:wght@400;500;600&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap">';
const DATA = JSON.parse(rd('data/sections.json')).map(f => rd('data/' + f + '.js')).join('\n');
const TITLE = 'CVS I &#183; Basic EKG &amp; Rhythm &#183; Peer support 82';
function page(title, cssFiles, body, appFiles) {
  appFiles = [].concat(appFiles);
  const js = DATA + '\n' + appFiles.map(rd).join('\n');
  new vm.Script(js, { filename: appFiles.join('+') });
  if (/<\/script/i.test(js)) throw new Error('script close tag inside JS');
  return '<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n<title>' + title + '</title>\n<meta name="description" content="Dedicated CVS I EKG peer-tutoring deck: cardiophysiology, waves & intervals, leads & swaps, heart rate & paper speed, QRS axis, sinus rhythm & AV blocks (AC75–81 + ECG TBL).">\n' + FONTS + '\n<style>\n' + cssFiles.map(rd).join('\n') + '\n</style>\n</head>\n<body>\n' + body + '\n<script>\n' + js + '\n</script>\n</body>\n</html>\n';
}
function syncImg() {
  fs.mkdirSync('dist/img', { recursive: true });
  const want = new Set(fs.readdirSync('img'));
  for (const f of want) {
    const a = 'img/' + f, b = 'dist/img/' + f;
    if (!fs.existsSync(b) || fs.statSync(a).mtimeMs > fs.statSync(b).mtimeMs) fs.copyFileSync(a, b);
  }
  for (const f of fs.readdirSync('dist/img')) if (!want.has(f)) fs.unlinkSync('dist/img/' + f);
}
const which = process.argv[2] || 'all';
if (which === 'deck' || which === 'all') {
  const html = page(TITLE, ['src/base.css', 'src/flows.css', 'src/deck.css'], rd('src/deck-body.html'), ['src/thai-data.js', 'src/thai-explain.js', 'src/flows.js', 'src/deck-app.js']);
  fs.writeFileSync('dist/deck.html', html); fs.writeFileSync('student.html', html); fs.writeFileSync('index.html', html);
  console.log('deck.html / student.html / index.html', html.length, 'bytes');
}
if (which === 'notes' || which === 'all') {
  const html = page(TITLE + ' (Tutor)', ['src/base.css', 'src/flows.css', 'src/notes.css'], rd('src/notes-body.html'), ['src/thai-data.js', 'src/thai-explain.js', 'src/tutor-notes.js', 'src/tutor-script.js', 'src/flows.js', 'src/notes-app.js']);
  fs.writeFileSync('dist/notes.html', html); fs.writeFileSync('tutor.html', html);
  console.log('notes.html / tutor.html', html.length, 'bytes');
}
syncImg();
