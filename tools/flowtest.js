/* node tools/flowtest.js: print the path every preset takes through every chart, and check it.
   Decision charts (src/flows-charts.js): each case may carry `expect` (the answer its source gives); the path's
   verdict (dx, or the last box) must contain it. Anatomy maps (src/flows-anatomy.js): every route step must name
   a real box and every lit arrow must exist. Exit code 1 on any problem. */
global.window = global;
require('../src/flows.js'); require('../src/flows-charts.js'); require('../src/flows-anatomy.js');
const strip = h => String(h).replace(/<[^>]+>/g, '').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
let bad = 0;
Object.entries(FLOWS.defs).forEach(([name, D]) => {
  const boxes = new Set(D.def.N.map(n => n.id)), edges = new Set(D.def.E.map(e => e.f + '>' + e.to));
  const isMap = FLOWS.anatomy && FLOWS.anatomy[name];
  D.cases.forEach(c => {
    const r = D.path(JSON.parse(JSON.stringify(c.v)));
    if (r.err) { bad++; console.log('  ERROR', name, c.k, r.err); return; }
    r.steps.forEach((s, i) => {
      if (!boxes.has(s.n)) { bad++; console.log('  missing box', name, c.k, s.n); }
      [s.e].concat(s.e2 || []).filter(Boolean).forEach(e => { if (!edges.has(s.n + '>' + e)) { bad++; console.log('  missing arrow', name, c.k, s.n + '>' + e); } });
    });
    const verdict = (r.dx && r.dx.length ? r.dx.join(' → ') : r.steps[r.steps.length - 1].n);
    let ok = '';
    if (c.expect) { ok = strip(verdict).toLowerCase().includes(String(c.expect).toLowerCase()) ? '  ✓ ' + c.expect : '  ✗ expected ' + c.expect; if (ok.includes('✗')) bad++; }
    console.log((isMap ? 'MAP ' : 'FLOW') + ' ' + (name + '/' + c.k).padEnd(20), r.steps.map(s => s.n + (s.val ? '[' + strip(s.val) + ']' : '')).join(' > '), '=>', strip(verdict) + ok);
  });
  Object.keys(D.txt || {}).forEach(k => { if (!boxes.has(k)) { bad++; console.log('  text for missing box', name, k); } });
  D.def.N.forEach(n => { if (!(D.txt || {})[n.id]) console.log('  (no click text)', name, n.id); });
});
if (bad) { console.log(bad + ' problems'); process.exitCode = 1; } else console.log('all paths check out');
