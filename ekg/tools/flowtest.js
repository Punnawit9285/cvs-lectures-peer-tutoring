/* node tools/flowtest.js: walk every preset through every flowchart and check it ends at the answer its exam item keys (case field x). */
global.window = global; require('../src/flows.js');
const D = window.FLOWS.paths;
let bad = 0;
for (const name of Object.keys(D)) {
  console.log('== ' + name);
  for (const c of D[name].cases) {
    const r = D[name].path(JSON.parse(JSON.stringify(c.v)));
    const ok = !r.err && (!c.x || String(r.dx).includes(c.x));
    if (!ok) bad++;
    console.log((ok ? '  ' : '✗ ') + c.b.padEnd(26) + (r.err ? 'ERR ' + r.err : r.steps.map(s => s.n + (s.val ? '(' + s.val.replace(/<[^>]+>/g, '') + ')' : '')).join(' → ') + '  ⇒ ' + r.dx) + (ok ? '' : '   expected: ' + c.x));
  }
}
if (bad) { console.error(bad + ' preset(s) do not reach their expected answer'); process.exit(1); }
console.log('all presets reach their expected answers');
