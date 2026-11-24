/* Short concept cards: arrow chains, crisp bullets, compact tables, and interactive flowcharts.
   Loaded last (data/sections.json) to build every concept card around its figures. */
(function () {
  var C = window.CVS, byId = {};
  C.sections.forEach(function (s) { s.items.forEach(function (it) { byId[it.id] = it; }); });
  function inl(t) { return C.cloze(String(t)).replace(/(→|↔|⇄)/g, '<span class="lt-ar">$1</span>'); }
  function render(blocks, F, X) {
    var out = [], main = out, below = null, ul = null, tb = null, used = {};
    function flush() {
      if (ul) { out.push('<ul class="lt-pts">' + ul.join('') + '</ul>'); ul = null; }
      if (tb) {
        out.push('<div class="tblwrap"><table class="lt-tbl"><thead><tr>' + tb[0].map(function (c) { return '<th>' + c + '</th>'; }).join('') + '</tr></thead><tbody>' +
          tb.slice(1).map(function (r) { return '<tr>' + r.map(function (c) { return '<td>' + inl(c) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div>');
        tb = null;
      }
    }
    blocks.forEach(function (b) {
      b = b.replace(/<(?![A-Za-z\/!])/g, '&lt;');
      var k = b.slice(0, 2), t = b.slice(2);
      if (k === '- ') { if (tb) flush(); (ul = ul || []).push('<li>' + inl(t) + '</li>'); return; }
      if (b[0] === '|') { if (ul) flush(); (tb = tb || []).push(b.replace(/^\|\s*|\s*\|\s*$/g, '').split(/\s*\|\s*/)); return; }
      flush();
      if (b === '---') { below = []; out = below; return; }
      if (k === '> ') out.push('<p class="lt-chain">' + inl(t) + '</p>');
      else if (b.slice(0, 3) === '## ') out.push('<h4 class="lt-h">' + b.slice(3) + '</h4>');
      else if (k === '! ') out.push('<p class="lt-trap">' + inl(t) + '</p>');
      else if (k === '= ') out.push('<div class="eqn">' + inl(t) + '</div>');
      else if (/^@F\d+$/.test(b)) { var i = +b.slice(2) - 1; if (!F[i]) throw new Error('no figure ' + b); used[i] = 1; out.push(F[i]); }
      else if (/^@flow:\w+$/.test(b)) out.push('<div class="flowx" data-flow="' + b.slice(6) + '"></div>');
      else if (/^@X\d+$/.test(b)) { var j = +b.slice(2) - 1; if (!X[j]) throw new Error('no flow ' + b); out.push(X[j]); }
      else out.push('<p class="lt-p">' + inl(b) + '</p>');
    });
    flush();
    var rest = F.filter(function (f, i) { return !used[i]; });
    var text = '<div class="lt">' + main.join('') + '</div>';
    var top = rest.length ? '<div class="two lt-two">' + text + '<div class="lt-figs">' + rest.join('') + '</div></div>' : text;
    return below ? '<div class="lt">' + top + below.join('') + '</div>' : top;
  }
  C.short = function (id, blocks, opt) {
    var it = byId[id];
    if (!it || it.t !== 'c') throw new Error('short(): no concept ' + id);
    var F = [], X = [];
    String(it.html).replace(/<details\b[\s\S]*?<\/details>|<figure\b[\s\S]*?<\/figure>/g, function (m) { if (/^<figure/.test(m) || /<figure\b/.test(m)) F.push(m); return m; });
    String(it.html).replace(/<div class="flowx"[^>]*><\/div>/g, function (m) { X.push(m); return m; });
    if (opt && opt.drop) F = F.filter(function (f, i) { return opt.drop.indexOf(i + 1) < 0; });
    it.html = render(blocks, F, X);
  };
})();
var S_ = CVS.short;

/* ---------- C · Cardiophysiology ---------- */
S_('C-C1', [
  '> ECG records {{potential difference}} on the skin, never one cell’s voltage',
  '- Resting surface = + · depolarized surface = {{negative}}',
  '> Depolarization moving toward the + pole → {{upward}} deflection',
  '| Wave moving | Depolarization | Repolarization |',
  '| toward + | ↑ | ↓ |',
  '| away from + | ↓ | ↑ |',
  '| at 90° | {{biphasic}} | same |',
  '> All at rest or all excited → no dipole → {{flat}} line'
]);
S_('C-C2', [
  '| Event | Main current | ECG |',
  '| Atrial depolarization | phase 0 inward current | {{P wave}} |',
  '| Ventricular depolarization | {{fast Na<sup>+</sup>}} in | QRS complex |',
  '| Ventricular repolarization | {{K<sup>+</sup> efflux}} | T wave |',
  '| Atrial repolarization | K<sup>+</sup> out | {{hidden}} under the QRS |',
  '> Wave height ∝ muscle mass → small P, tall QRS',
  '! SA and AV nodes make {{no visible wave}} · PR segment = nodal delay'
]);
S_('C-C3', [
  '> Depolarization spreads {{endocardium → epicardium}} (inside out)',
  '> Inner wall has a {{longer AP}} → outer wall recovers first → repolarization runs epi → endo',
  '> Opposite direction × opposite sign → T wave is {{concordant}} with QRS',
  '- Normal T: upright in {{II, V3–V6}} · inverted in {{aVR}}',
  '! T opposite its QRS → think myocardial disease'
]);
S_('C-C4', [
  '| Ventricular AP | Current | ECG |',
  '| Phase 0 upstroke | Na<sup>+</sup> in | QRS complex |',
  '| Phase 2 plateau | Ca<sup>2+</sup> ≈ K<sup>+</sup> | {{ST segment}} (isoelectric) |',
  '| Phase 3 repolarization | K<sup>+</sup> out | {{T wave}} |',
  '| Phase 4 rest | K<sup>+</sup> leak | {{TP segment}} |',
  '- Atrial phase 3 lies {{inside the QRS}}',
  '- {{Absolute refractory}} ≈ QRS → ST → peak of T'
]);

/* ---------- W · Waves ---------- */
S_('W-C1', [
  '- Wave = deflection · segment = {{flat stretch}} between waves · interval = wave + segment',
  '> PR segment → impulse slowed in the {{AV node}}',
  '- PR = start of P → start of QRS (atria + {{nodal delay}})',
  '- QT = start of QRS → {{end of T}}',
  '- Baseline is best judged on the {{TP segment}} (whole heart at rest)'
]);
S_('W-C2', [
  '| Measure | Normal | Abnormal |',
  '| PR | {{120–200 ms}} | < 120 {{pre-excitation}} · > 200 1st-degree block |',
  '| QRS | ≤ {{100–110 ms}} | wider = slow ventricular spread |',
  '| QTc | {{330–440 ms}} (♀ ≤ 450) | 500 = prolonged |',
  '> HR ↑ → QT {{shortens}} (QT ∝ RR · QTc = QT ÷ √RR)',
  '- 1 small box = 40 ms → normal PR = 3–5 boxes · AV defect alters {{PR interval}}'
]);
S_('W-C3', [
  '| Finding | Normal | Abnormal example |',
  '| P wave | upright in II, {{negative in aVR}} | inverted in II |',
  '| T wave | upright in {{V3–V6}} | inverted in left chest leads |',
  '| ST segment | within {{±1 mm}} | elevation 4 mm · depression 2 mm |',
  '| Q wave | narrow, < {{40 ms}} | broad, deep → old MI |',
  '| RR interval | {{600–1000 ms}} | 500 ms = 120 bpm |',
  '> Convert RR first: HR = 60 000 ÷ RR (ms) · 800 ms = 75 bpm'
]);
S_('W-C4', [
  '> Electrical wave always comes {{before}} its mechanical event',
  '> P → {{atrial contraction}} (atrial kick)',
  '> QRS → S1, isovolumic contraction → {{aortic valve}} opens right after QRS',
  '> ST · T → ventricular ejection (rapid, then reduced)',
  '> End of T → S2 → {{isovolumic relaxation}}',
  '> Early TP → mitral opens → {{rapid filling}} (largest mitral flow)'
]);
S_('W-C5', [
  '## Sympathetic ↑ or atropine (vagus blocked)',
  '> SA faster → {{RR shortens}} · AV faster → PR shorter · {{QT shortens}}',
  '- QRS width stays {{unchanged}} (His–Purkinje is not autonomic)',
  '## Vagus ↑ (ACh on M<sub>2</sub>)',
  '> SA slower → RR longer · AV slower → PR longer → block or pause',
  '! Drug acting on SA node → check RR · {{ST elevation}} = injury, not autonomic'
]);

/* ---------- L · Leads ---------- */
S_('L-C1', [
  '| Lead | + pole | − pole | Angle |',
  '| I | LA | RA | 0° |',
  '| II | {{left leg}} | RA | +60° |',
  '| III | LL | {{left arm}} | +120° |',
  '- Right leg = {{ground}}, in no lead · Einthoven: {{II = I + III}}',
  '> Watch on left wrist (+) + right finger on crown (−) → {{Lead I}}'
]);
S_('L-C2', [
  '- Unipolar limb poles (+): aVR right arm · aVL left arm · aVF left foot',
  '- Angles: aVL {{−30°}} · aVF {{+90°}} · aVR {{−150°}}',
  '> Six frontal leads spaced every 30° = {{hexaxial}} wheel',
  '> Perpendicular (90°) pairs: I–aVF · {{II–aVL}} · {{III–aVR}}'
]);
S_('L-C3', [
  '| Swap | Tracing effect | Unchanged |',
  '| RA ↔ LA | Lead I {{flips}} (−I) · II ↔ III · aVR ↔ aVL | {{aVF}} |',
  '| RA ↔ LL | II inverted · aVR ↔ aVF | {{aVL}} |',
  '| LA ↔ LL | III inverted · I ↔ II · aVL ↔ aVF | {{aVR}} |',
  '| LL ↔ RL | {{almost no change}} (RL = ground) | all |',
  '> Shortcut: the unchanged augmented lead is the {{limb not moved}}'
]);

/* ---------- R · Rate ---------- */
S_('R-C1', [
  '- Standard: 25 mm/s · 10 mm/mV · 1 small box = {{0.04 s}} · 1 big box = 0.2 s',
  '= HR = {{1500}} ÷ small boxes = {{300}} ÷ big boxes',
  '| Big boxes | 1 | 2 | 3 | 4 | 5 |',
  '| HR (bpm) | 300 | 150 | {{100}} | 75 | 60 |',
  '- Normal resting sinus rate: {{60–100}} bpm'
]);
S_('R-C2', [
  '> Standard rule assumes 25 mm/s → other speeds: {{scale by speed ÷ 25}}',
  '= HR = (1500 ÷ small boxes) × (speed ÷ 25)',
  '| Speed | Rule | Visual trap |',
  '| 12.5 mm/s | {{750}} ÷ boxes | squeezed → looks too fast |',
  '| 30 mm/s | {{1800}} ÷ boxes | slightly stretched |',
  '| 50 mm/s | {{3000}} ÷ boxes | stretched → looks {{too slow}} |',
  '---',
  '@flow:rate'
]);
S_('R-C3', [
  '> When RR varies, dividing one interval fails → {{count complexes}} instead',
  '> Standard bottom rhythm strip = {{10 s}} (250 mm) → QRS count × {{6}}',
  '- AFib: no P waves, wavy baseline, {{irregularly irregular}} RR, narrow QRS',
  '- In AFib always report the {{ventricular}} rate (QRS)'
]);

/* ---------- A · Axis ---------- */
S_('A-C1', [
  '| Zone | Range |',
  '| Normal | {{−30° to +90°}} |',
  '| Left axis deviation | {{−30° to −90°}} |',
  '| Right axis deviation | {{+90° to +180°}} |',
  '| Extreme (northwest) | −90° to ±180° |',
  '> Quadrant: I + / aVF + normal · I − / aVF + {{RAD}} · I − / aVF − extreme',
  '! I + / aVF − is NOT automatically LAD → check {{Lead II}} (− proves LAD)',
  '---',
  '@flow:axis'
]);
S_('A-C2', [
  '> Each lead records the QRS vector {{projected}} onto its own axis',
  '| Angle to lead | Deflection |',
  '| 0° | tallest positive |',
  '| acute (< 90°) | {{more positive}} than negative |',
  '| 90° | {{biphasic}} (R ≈ S) |',
  '| obtuse (> 90°) | {{more negative}} than positive |',
  '| 180° | deepest negative |',
  '! Flat (R ≈ S) lead for +30° → III · −30° → II · +60° → {{aVL}}'
]);
S_('A-C3', [
  '## Shortcut (flattest lead)',
  '> Six {{limb leads}} only → find the most {{biphasic}} → axis is {{±90°}} away → check that partner lead (upright → that way)',
  '## Direct (farthest pair)',
  '> Mark each limb lead + or − → axis ≈ {{midpoint}} of the two farthest + leads (±15°)',
  '- Example: aVL (−30°) flat → two perpendicular candidates → Lead II upright → {{+60°}}'
]);
S_('A-C4', [
  '> 1 · Rate: check {{paper speed}} first → 1500 ÷ boxes × (speed ÷ 25)',
  '> 2 · Axis: Lead I + aVF → then {{Lead II}} if I + / aVF −',
  '> 3 · QRS width: narrow is under {{3 small boxes}} (≤ 100–110 ms)',
  '- Match all three before picking the option (e.g. {{tachycardia}} + LAD, {{bradycardia}} + LAD)'
]);

/* ---------- E · Rhythm & 12-Lead ---------- */
S_('E-C1', [
  '- 10 electrodes → 12 leads · limb = frontal plane · chest = {{horizontal plane}}',
  '| Lead | Landmark |',
  '| V1 | 4th ICS, {{right}} sternal border |',
  '| V2 | 4th ICS, {{left}} sternal border |',
  '| V3 | midway V2–V4 |',
  '| V4 | 5th ICS, {{midclavicular}} line |',
  '| V5 | 5th ICS, {{anterior axillary}} line |',
  '| V6 | 5th ICS, {{midaxillary}} line |'
]);
S_('E-C2', [
  '| Criterion | Normal sinus check |',
  '| Rate | {{60–100}} bpm |',
  '| Origin | {{SA node}} |',
  '| Conduction | every P followed by QRS ({{1 : 1}}) |',
  '| P shape | {{monomorphic}} within the same lead |',
  '| P polarity | upright in II, inverted in {{aVR}} |',
  '! Traps: NOT “positive in all leads” · NOT “uniform P across every lead”'
]);
S_('E-C3', [
  '| Rhythm | Tracing pattern |',
  '| 1st-degree AV block | PR > {{200 ms}}, every P conducted |',
  '| 2nd-degree AV block | some P waves {{not followed}} by QRS |',
  '| 3rd-degree AV block | P and QRS {{dissociated}} (e.g. atria 70, vent 40) |',
  '| SA node failure | {{AV node}} escape (~40–60 bpm, QRS ≤ 110 ms) |',
  '| Atrial fibrillation | no P, irregularly irregular, {{narrow QRS}} |',
  '! AC77 keys pulse deficit (apical rate > radial pulse) as the AF finding: a bedside sign, not a wave on the tracing',
  '---',
  '@flow:rhythm'
]);
S_('E-C4', [
  '> Read every 12-lead in one order: standardization → rate → rhythm → {{QRS axis}} → intervals → ST/T',
  '- Ruling out MCQ options fast (PS82 trick): easiest first: segment → wave (+/−) → interval → {{heart rate}} → axis',
  '- Normal: HR 60–100 · sinus P (+II, −aVR) · PR {{120–200 ms}} · QRS ≤ 110 ms',
  '- ST on {{isoelectric}} line (±1 mm) · axis {{−30° to +90°}}',
  '! “Which interpretation is wrong?” → verify every row against the tracing (t-RAT 2569 Q14: {{two}} rows fail)'
]);
