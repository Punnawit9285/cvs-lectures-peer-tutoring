/* Interactive flowcharts on concept cards:
   - "axis" (A-C1): QRS axis quadrant check (Lead I, aVF, Lead II)
   - "rate" (R-C2): Heart rate & paper-speed correction (regular vs irregular)
   - "rhythm" (E-C3): Sinus rhythm & conduction block decision tree
   print.js calls FLOWS.printHtml(name) for a static copy of each chart. */
(function () {
  var F = window.FLOWS = {};
  var ST = {};
  function ul(a) { return '<ul>' + a.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>'; }

  /* ---------- SVG drawing ---------- */
  function wrapText(x, y, lines, cls, lh) {
    return lines.map(function (t, i) { return '<text class="' + cls + '" x="' + x + '" y="' + (y + i * lh) + '" text-anchor="middle">' + t + '</text>'; }).join('');
  }
  function drawNode(n, st) {
    var cls = 'fx-node k-' + n.k + (st.on[n.id] ? ' on' : '') + (st.cur === n.id ? ' cur' : '') + (st.sel === n.id ? ' sel' : '') + (st.dim && !st.on[n.id] ? ' dim' : '');
    var cx = n.x + n.w / 2, t = n.t, s = n.s || [];
    var top = n.ty ? n.y + n.ty : n.y + n.h / 2 - ((t.length - 1) * 18 + (s.length ? 6 + s.length * 15 : 0)) / 2 + 6;
    var h = '<g class="' + cls + '" data-n="' + n.id + '" tabindex="0" role="button" aria-label="' + (t.join(' ') + ' ' + s.join(' ')).replace(/<[^>]+>/g, '') + '">';
    h += '<rect x="' + n.x + '" y="' + n.y + '" width="' + n.w + '" height="' + n.h + '" rx="' + (n.k === 'q' ? 6 : 12) + '"/>';
    h += wrapText(cx, top, t, 'fx-t', 18) + wrapText(cx, top + (t.length - 1) * 18 + 19, s, 'fx-s', 15);
    var v = st.val[n.id];
    if (v) {
      var w = Math.max(48, v.replace(/&[a-z]+;/g, 'x').length * 7.1 + 16), px = n.x + n.w - w - 6, py = n.y - 11;
      h += '<g class="fx-pill"><rect x="' + px + '" y="' + py + '" width="' + w + '" height="20" rx="10"/><text x="' + (px + w / 2) + '" y="' + (py + 14.5) + '" text-anchor="middle">' + v + '</text></g>';
    }
    return h + '</g>';
  }
  function drawEdge(e, st) {
    var key = e.f + '>' + e.to, on = st.onE[key];
    var d = 'M' + e.p.map(function (p) { return p[0] + ' ' + p[1]; }).join(' L');
    var h = '<g class="fx-edge' + (on ? ' on' : '') + (st.dim && !on ? ' dim' : '') + (e.dash ? ' dash' : '') + '"><path d="' + d + '" marker-end="url(#fxa-' + st.name + (on ? '-on' : '') + ')"/>';
    if (e.l) h += '<text x="' + e.l[0] + '" y="' + e.l[1] + '" text-anchor="middle">' + e.l[2] + '</text>';
    return h + '</g>';
  }
  function svg(def, st) {
    var h = '<svg class="fx-svg" viewBox="0 0 ' + def.W + ' ' + def.H + '" role="img" aria-label="' + def.label + '"><defs>' +
      ['', '-on'].map(function (sfx) { return '<marker id="fxa-' + st.name + sfx + '" class="fx-mk' + sfx + '" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z"/></marker>'; }).join('') + '</defs>';
    def.E.forEach(function (e) { h += drawEdge(e, st); });
    def.N.forEach(function (n) { h += drawNode(n, st); });
    return h + '</svg>';
  }

  /* ================= 1. QRS AXIS: Lead I, aVF, and Lead II (Peer - EKG p.1-2) ================= */
  var AXIS = { name: 'axis', W: 900, H: 440, label: 'QRS axis quadrant check using Lead I, aVF, and Lead II',
    N: [
      { id: 'q1', k: 'q', x: 250, y: 10, w: 400, h: 60, t: ['① Net QRS in Lead I (0°)?'], s: ['R taller than S = positive (+)'] },
      { id: 'q2', k: 'q', x: 30, y: 120, w: 360, h: 60, t: ['② Net QRS in aVF (+90°)?'], s: ['lower half (+) vs upper half (−)'] },
      { id: 'q3', k: 'q', x: 510, y: 120, w: 360, h: 60, t: ['② Net QRS in aVF (+90°)?'], s: ['lower-right (+) vs upper-right (−)'] },
      { id: 'norm1', k: 'leaf', x: 16, y: 240, w: 196, h: 74, t: ['Normal axis'], s: ['0° to +90°', '(I +, aVF +)'] },
      { id: 'q4', k: 'q', x: 230, y: 240, w: 230, h: 74, t: ['③ Lead II (+60°)?'], s: ['checks the −30° border'] },
      { id: 'rad', k: 'leaf', x: 494, y: 240, w: 184, h: 74, t: ['Right axis (RAD)'], s: ['+90° to +180°', '(I −, aVF +)'] },
      { id: 'ext', k: 'leaf', x: 696, y: 240, w: 188, h: 74, t: ['Extreme axis'], s: ['−90° to ±180°', '(I −, aVF −)'] },
      { id: 'norm2', k: 'leaf', x: 130, y: 356, w: 204, h: 70, t: ['Normal axis'], s: ['0° to −30° (physiologic left)'] },
      { id: 'lad', k: 'leaf', x: 356, y: 356, w: 224, h: 70, t: ['Left axis (LAD)'], s: ['−30° to −90° (II negative)'] }
    ],
    E: [
      { f: 'q1', to: 'q2', p: [[340, 70], [340, 94], [210, 94], [210, 120]], l: [264, 88, 'positive (+)'] },
      { f: 'q1', to: 'q3', p: [[560, 70], [560, 94], [690, 94], [690, 120]], l: [638, 88, 'negative (−)'] },
      { f: 'q2', to: 'norm1', p: [[140, 180], [140, 210], [114, 210], [114, 240]], l: [92, 206, 'positive (+)'] },
      { f: 'q2', to: 'q4', p: [[300, 180], [300, 210], [345, 210], [345, 240]], l: [358, 206, 'negative (−)'] },
      { f: 'q3', to: 'rad', p: [[620, 180], [620, 210], [586, 210], [586, 240]], l: [564, 206, 'positive (+)'] },
      { f: 'q3', to: 'ext', p: [[760, 180], [760, 210], [790, 210], [790, 240]], l: [818, 206, 'negative (−)'] },
      { f: 'q4', to: 'norm2', p: [[295, 314], [295, 336], [232, 336], [232, 356]], l: [222, 332, 'positive (+)'] },
      { f: 'q4', to: 'lad', p: [[395, 314], [395, 336], [468, 336], [468, 356]], l: [480, 332, 'negative (−)'] }
    ]
  };
  var AXIS_CASES = [
    { k: 't69q11', b: 't-RAT 2569 Q11 (+60°)', src: 't-RAT 2569 Q11 (aVL biphasic, II tall)', v: { i: 4, avf: 7, ii: 10 } },
    { k: 't68q12', b: 't-RAT 2568 Q12 (LAD)', src: 't-RAT 2568 Q12 (I +, II −, aVF −)', v: { i: 6, avf: -8, ii: -5 } },
    { k: 'ac80q1', b: 'AC80 Q1 (RAD)', src: 'AC80 Q1 / i-RAT Q19 (I −, aVF +)', v: { i: -5, avf: 6, ii: 1 } },
    { k: 'phys', b: 'Border (−15°)', src: 'Physiologic left axis (I +, aVF −, II +)', v: { i: 8, avf: -2, ii: 3 } },
    { k: 'ext', b: 'Extreme (−120°)', src: 'Extreme axis deviation (I −, aVF −)', v: { i: -5, avf: -7, ii: -10 } }
  ];
  var AXIS_FIELDS = [['i', 'Lead I net QRS (mm, + or −)'], ['avf', 'Lead aVF net QRS (mm, + or −)'], ['ii', 'Lead II net QRS (if I +, aVF −)']];
  var AXIS_TXT = {
    q1: { h: 'Check Lead I (0°) first', b: ['Positive (R > S) puts the axis in the left hemisphere (−90° to +90°).', 'Negative (S > R) puts it in the right hemisphere (+90° to ±180° to −90°).'], th: 'Lead I ชี้ไปทาง 0°: ถ้าบวก = อยู่ฝั่งซ้าย ถ้าลบ = หลุดไปฝั่งขวาแล้ว' },
    q2: { h: 'Check aVF (+90°) when Lead I is +', b: ['aVF positive → axis sits between 0° and +90° (always normal).', 'aVF negative → axis is between 0° and −90°; you MUST check Lead II.'], th: 'I + และ aVF + = Normal แน่นอน · แต่ถ้า I + และ aVF − อย่าเพิ่งตอบ LAD ต้องดู Lead II ก่อน' },
    q3: { h: 'Check aVF (+90°) when Lead I is −', b: ['aVF positive → lower-right quadrant (+90° to +180°) = RAD.', 'aVF negative → upper-right quadrant (−90° to ±180°) = Extreme axis.'], th: 'I −, aVF + = RAD · I −, aVF − = Extreme (northwest)' },
    q4: { h: 'Lead II (+60°) decides the −30° border', b: ['Lead II is perpendicular to −30°.', 'II positive → axis is between 0° and −30° (still normal).', 'II negative → axis is beyond −30° (−30° to −90°) = true LAD.'], th: 'Lead II ตั้งฉากกับ −30° พอดี ดังนั้น II บวก = ยังปกติ (0 ถึง −30°) · II ลบ = LAD แท้' },
    norm1: { h: 'Normal axis (0° to +90°)', b: ['Both Lead I and aVF are positive.', 'To refine the exact angle, find the most biphasic limb lead (±90°).'] },
    norm2: { h: 'Normal axis (0° to −30°)', b: ['Lead I +, aVF −, but Lead II is still positive → physiologic left shift, still within −30° to +90°.'] },
    lad: { h: 'Left axis deviation (−30° to −90°)', b: ['Lead I +, aVF −, and Lead II − (also III −, aVL +).'] },
    rad: { h: 'Right axis deviation (+90° to +180°)', b: ['Lead I − and aVF + (III + and aVL −).'] },
    ext: { h: 'Extreme axis deviation (−90° to ±180°)', b: ['Both Lead I and aVF are negative (aVR positive).'] }
  };
  function axisPath(v) {
    var P = [], has = function (k) { return typeof v[k] === 'number' && !isNaN(v[k]); };
    if (!has('i') || !has('avf')) return { steps: [], err: 'Enter net QRS values (positive or negative mm) for Lead I and aVF.' };
    if (v.i >= 0) {
      P.push({ n: 'q1', e: 'q2', val: 'I ' + (v.i >= 0 ? '+' : '') + v.i, why: 'Lead I net QRS = <b>' + v.i + '</b> (≥ 0) → left half (−90° to +90°).' });
      if (v.avf >= 0) {
        P.push({ n: 'q2', e: 'norm1', val: 'aVF +' + v.avf, why: 'aVF net QRS = <b>+' + v.avf + '</b> → lower-left quadrant (0° to +90°).' });
        P.push({ n: 'norm1', why: 'Both Lead I and aVF are positive → <b>Normal axis (0° to +90°)</b>.' });
        return { steps: P, dx: 'Normal axis (0° to +90°)' };
      }
      P.push({ n: 'q2', e: 'q4', val: 'aVF ' + v.avf, why: 'aVF net QRS = <b>' + v.avf + '</b> (negative) → between 0° and −90°; check Lead II to separate normal from LAD.' });
      if (!has('ii')) return { steps: P, err: 'When Lead I is + and aVF is −, also enter Lead II net QRS.' };
      if (v.ii >= 0) {
        P.push({ n: 'q4', e: 'norm2', val: 'II +' + v.ii, why: 'Lead II = <b>+' + v.ii + '</b> (positive) → axis has not crossed −30°.' });
        P.push({ n: 'norm2', why: 'Axis lies between 0° and −30° → still <b>Normal axis</b>.' });
        return { steps: P, dx: 'Normal axis (0° to −30°)' };
      }
      P.push({ n: 'q4', e: 'lad', val: 'II ' + v.ii, why: 'Lead II = <b>' + v.ii + '</b> (negative) → axis is past −30°.' });
      P.push({ n: 'lad', why: 'Lead I +, aVF −, Lead II − → <b>Left axis deviation (−30° to −90°)</b>.' });
      return { steps: P, dx: 'Left axis deviation (−30° to −90°)' };
    } else {
      P.push({ n: 'q1', e: 'q3', val: 'I ' + v.i, why: 'Lead I net QRS = <b>' + v.i + '</b> (negative) → right half (+90° to ±180° to −90°).' });
      if (v.avf >= 0) {
        P.push({ n: 'q3', e: 'rad', val: 'aVF +' + v.avf, why: 'aVF net QRS = <b>+' + v.avf + '</b> (positive) → lower-right quadrant.' });
        P.push({ n: 'rad', why: 'Lead I − and aVF + → <b>Right axis deviation (+90° to +180°)</b>.' });
        return { steps: P, dx: 'Right axis deviation (+90° to +180°)' };
      }
      P.push({ n: 'q3', e: 'ext', val: 'aVF ' + v.avf, why: 'aVF net QRS = <b>' + v.avf + '</b> (negative) → upper-right (northwest) quadrant.' });
      P.push({ n: 'ext', why: 'Both Lead I and aVF negative → <b>Extreme axis deviation (−90° to ±180°)</b>.' });
      return { steps: P, dx: 'Extreme axis deviation (−90° to ±180°)' };
    }
  }

  /* ================= 2. HEART RATE & PAPER SPEED (Peer - EKG p.1-2) ================= */
  var RATE = { name: 'rate', W: 900, H: 430, label: 'Calculating heart rate from regular or irregular ECG and correcting for paper speed',
    N: [
      { id: 'q1', k: 'q', x: 250, y: 10, w: 400, h: 58, t: ['① Is the RR interval regular?'], s: ['same number of boxes beat to beat'] },
      { id: 'q2', k: 'q', x: 40, y: 112, w: 380, h: 58, t: ['② Paper speed = 25 mm/s?'], s: ['check speed printed on the tracing'] },
      { id: 'irreg', k: 'note', x: 520, y: 112, w: 350, h: 72, t: ['Count QRS in 10 s strip'], s: ['HR ≈ QRS count × 6 (at 25 mm/s)', 'scale by speed ÷ 25 if non-standard'] },
      { id: 'std', k: 'note', x: 20, y: 222, w: 195, h: 68, t: ['Standard 1500 rule'], s: ['HR = 1500 ÷ RR boxes'] },
      { id: 'corr', k: 'note', x: 245, y: 222, w: 240, h: 68, t: ['Speed-corrected rule'], s: ['HR = 1500 ÷ boxes × (v ÷ 25)'] },
      { id: 'brady', k: 'leaf', x: 30, y: 344, w: 250, h: 70, t: ['Bradycardia'], s: ['< 60 bpm'] },
      { id: 'norm', k: 'leaf', x: 325, y: 344, w: 250, h: 70, t: ['Normal rate'], s: ['60–100 bpm'] },
      { id: 'tachy', k: 'leaf', x: 620, y: 344, w: 250, h: 70, t: ['Tachycardia'], s: ['> 100 bpm'] }
    ],
    E: [
      { f: 'q1', to: 'q2', p: [[340, 68], [340, 90], [230, 90], [230, 112]], l: [270, 84, 'regular'] },
      { f: 'q1', to: 'irreg', p: [[560, 68], [560, 90], [695, 90], [695, 112]], l: [642, 84, 'irregular'] },
      { f: 'q2', to: 'std', p: [[150, 170], [150, 196], [118, 196], [118, 222]], l: [110, 192, 'yes (25)'] },
      { f: 'q2', to: 'corr', p: [[320, 170], [320, 196], [365, 196], [365, 222]], l: [375, 192, 'other speed'] },
      { f: 'std', to: 'brady', p: [[80, 290], [80, 344]], dash: true },
      { f: 'std', to: 'norm', p: [[118, 290], [118, 318], [410, 318], [410, 344]], dash: true },
      { f: 'std', to: 'tachy', p: [[156, 290], [156, 308], [710, 308], [710, 344]], dash: true },
      { f: 'corr', to: 'brady', p: [[305, 290], [305, 326], [170, 326], [170, 344]], dash: true },
      { f: 'corr', to: 'norm', p: [[365, 290], [365, 318], [450, 318], [450, 344]], dash: true },
      { f: 'corr', to: 'tachy', p: [[425, 290], [425, 318], [745, 318], [745, 344]], dash: true },
      { f: 'irreg', to: 'brady', p: [[620, 184], [620, 326], [210, 326], [210, 344]], dash: true },
      { f: 'irreg', to: 'norm', p: [[695, 184], [695, 318], [500, 318], [500, 344]], dash: true },
      { f: 'irreg', to: 'tachy', p: [[770, 184], [770, 344]], dash: true }
    ]
  };
  var RATE_CASES = [
    { k: 'ac75', b: 'AC75 (25 mm/s, 15 mm)', src: 'AC75 Q5 / i-RAT Q15', v: { speed: 25, rr: 15 } },
    { k: 'ac76', b: 'AC76 / AC80 (12.5 mm/s)', src: 'AC76 Q7 / AC80 Q3 (RR 15 mm)', v: { speed: 12.5, rr: 15 } },
    { k: 't69q13', b: 't-RAT 2569 Q13 (15 mm/s)', src: 't-RAT 2569 Q13 (RR 20 mm)', v: { speed: 15, rr: 20 } },
    { k: 't68q13', b: 't-RAT 2568 Q13 (30 mm/s)', src: 't-RAT 2568 Q13 (RR 25 mm)', v: { speed: 30, rr: 25 } },
    { k: 'ir14', b: 'i-RAT Q14 (50 mm/s, 18 mm)', src: 'i-RAT Q14 (50 mm/s, RR 18 mm)', v: { speed: 50, rr: 18 } },
    { k: 'ac81q2', b: 'AC81 Q2 (50 mm/s, 15 mm)', src: 'AC81 Q2 / t-RAT 2569 Q12', v: { speed: 50, rr: 15 } },
    { k: 't68q14', b: 't-RAT 2568 Q14 (AFib)', src: 't-RAT 2568 Q14 (22 QRS in 10 s)', v: { speed: 25, count: 22 } }
  ];
  var RATE_FIELDS = [['speed', 'Paper speed (mm/s, e.g. 25, 50)'], ['rr', 'RR small boxes (if regular)'], ['count', '10 s QRS count (if irregular)']];
  var RATE_TXT = {
    q1: { h: 'Regular or irregular?', b: ['Measure 2–3 consecutive RR intervals.', 'If they vary (e.g. AFib), dividing by one RR gives a different rate every time → count instead.'], th: 'ถ้า RR ไม่สม่ำเสมอ ห้ามใช้สูตร 1500/กล่องเล็ก ให้ใช้วิธีนับจำนวน QRS ใน 10 วินาทีแล้วคูณ 6' },
    q2: { h: 'Always read the paper speed', b: ['Standard = 25 mm/s (1500 mm/min).', '50 mm/s stretches waves 2× (looks falsely slow); 12.5 mm/s squeezes waves 0.5× (looks falsely fast).'], th: 'ระวังกับดักความเร็วกระดาษ! 50 mm/s ต้องคูณ 2 (= 3000/ช่อง) · 12.5 mm/s ต้องหาร 2 (= 750/ช่อง)' },
    irreg: { h: 'Count QRS in a 10-second strip', b: ['Standard rhythm strip = 250 mm = 10 s at 25 mm/s.', 'HR ≈ QRS complexes × 6 (× speed/25 if non-standard).'] },
    std: { h: 'Standard 1500 rule', b: ['HR = 1500 ÷ small boxes (or 300 ÷ big boxes).', '1 big box = 300 · 2 = 150 · 3 = 100 · 4 = 75 · 5 = 60.'] },
    corr: { h: 'Speed-corrected formula', b: ['HR = (1500 ÷ small boxes) × (speed ÷ 25) = (60 × speed) ÷ small boxes.'] },
    brady: { h: 'Bradycardia (< 60 bpm)', b: ['Sinus rate below 60 bpm.'] },
    norm: { h: 'Normal rate (60–100 bpm)', b: ['Normal adult resting sinus range is 60–100 bpm.'] },
    tachy: { h: 'Tachycardia (> 100 bpm)', b: ['Rate above 100 bpm (RR < 600 ms / < 15 small boxes at 25 mm/s).'] }
  };
  function ratePath(v) {
    var P = [], has = function (k) { return typeof v[k] === 'number' && !isNaN(v[k]) && v[k] > 0; };
    var sp = has('speed') ? v.speed : 25;
    var hr, leaf;
    if (has('count') && !has('rr')) {
      hr = Math.round(v.count * 6 * (sp / 25));
      P.push({ n: 'q1', e: 'irreg', val: 'irregular', why: 'Rhythm is irregular → count QRS complexes across the 250 mm strip instead of dividing one RR.' });
      leaf = hr < 60 ? 'brady' : hr > 100 ? 'tachy' : 'norm';
      P.push({ n: 'irreg', e: leaf, val: hr + ' bpm', why: '<b>' + v.count + '</b> QRS × 6' + (sp !== 25 ? ' × (' + sp + '/25)' : '') + ' = <b>' + hr + ' bpm</b>.' });
      P.push({ n: leaf, why: 'Estimated ventricular rate <b>' + hr + ' bpm</b> → <b>' + RATE_TXT[leaf].h + '</b>.' });
      return { steps: P, dx: RATE_TXT[leaf].h + ' (~' + hr + ' bpm)' };
    }
    if (!has('rr')) return { steps: [], err: 'Enter RR small boxes (regular) OR 10 s QRS count (irregular).' };
    hr = Math.round((60 * sp) / v.rr);
    leaf = hr < 60 ? 'brady' : hr > 100 ? 'tachy' : 'norm';
    P.push({ n: 'q1', e: 'q2', val: 'regular', why: 'RR interval is regular at <b>' + v.rr + '</b> small boxes (mm).' });
    if (sp === 25) {
      P.push({ n: 'q2', e: 'std', val: '25 mm/s', why: 'Paper speed is standard <b>25 mm/s</b> → use 1500 ÷ small boxes.' });
      P.push({ n: 'std', e: leaf, val: hr + ' bpm', why: '1500 ÷ ' + v.rr + ' = <b>' + hr + ' bpm</b>.' });
    } else {
      var naive = Math.round(1500 / v.rr);
      P.push({ n: 'q2', e: 'corr', val: sp + ' mm/s', why: 'Paper speed is <b>' + sp + ' mm/s</b> (not 25!) → must multiply by ' + sp + ' / 25.' });
      P.push({ n: 'corr', e: leaf, val: hr + ' bpm', why: '1500 ÷ ' + v.rr + ' = ' + naive + ' (trap) → × (' + sp + '/25) = <b>' + hr + ' bpm</b>.' });
    }
    P.push({ n: leaf, why: 'Heart rate <b>' + hr + ' bpm</b> → <b>' + RATE_TXT[leaf].h + '</b>.' });
    return { steps: P, dx: RATE_TXT[leaf].h + ' (' + hr + ' bpm)' };
  }

  /* ================= 3. SINUS RHYTHM & CONDUCTION BLOCKS (Peer - EKG p.1-2, AC75-81) ================= */
  var RHY = { name: 'rhythm', W: 900, H: 460, label: 'Checking normal sinus rhythm versus atrial fibrillation, junctional escape, and AV blocks',
    N: [
      { id: 'q1', k: 'q', x: 24, y: 10, w: 380, h: 60, t: ['① Distinct P waves present?'], s: ['not a wavy fibrillating baseline'] },
      { id: 'q2', k: 'q', x: 24, y: 108, w: 380, h: 60, t: ['② Sinus P (+ in II, − in aVR)?'], s: ['monomorphic within each lead'] },
      { id: 'q3', k: 'q', x: 24, y: 206, w: 380, h: 60, t: ['③ Every P → QRS in 1 : 1 ratio?'], s: ['no dropped beats or dissociation'] },
      { id: 'q4', k: 'q', x: 24, y: 304, w: 380, h: 60, t: ['④ PR 120–200 ms & HR 60–100?'], s: ['normal AV delay & sinus rate'] },
      { id: 'nsr', k: 'leaf', x: 24, y: 396, w: 380, h: 54, t: ['Normal sinus rhythm (NSR)'], s: ['SA node · 60–100 bpm · 1:1 · PR 120–200 ms'] },
      { id: 'af', k: 'leaf', x: 490, y: 10, w: 386, h: 60, t: ['Atrial fibrillation (AF)'], s: ['no P · irregularly irregular · narrow QRS'] },
      { id: 'junc', k: 'leaf', x: 490, y: 108, w: 386, h: 60, t: ['Non-sinus / AV junctional escape'], s: ['SA failure → AV node (~40–60 bpm, narrow QRS)'] },
      { id: 'avb23', k: 'leaf', x: 490, y: 206, w: 386, h: 60, t: ['2nd- or 3rd-degree AV block'], s: ['some P dropped (2°) or P–QRS dissociated (3°)'] },
      { id: 'avb1', k: 'leaf', x: 490, y: 304, w: 386, h: 60, t: ['1st-degree AVB / Sinus brady or tachy'], s: ['PR > 200 ms (1° AVB) · or HR < 60 / > 100'] }
    ],
    E: [
      { f: 'q1', to: 'af', p: [[404, 40], [490, 40]], l: [447, 32, 'no'] },
      { f: 'q1', to: 'q2', p: [[214, 70], [214, 108]], l: [236, 94, 'yes'] },
      { f: 'q2', to: 'junc', p: [[404, 138], [490, 138]], l: [447, 130, 'no'] },
      { f: 'q2', to: 'q3', p: [[214, 168], [214, 206]], l: [236, 192, 'yes'] },
      { f: 'q3', to: 'avb23', p: [[404, 236], [490, 236]], l: [447, 228, 'no'] },
      { f: 'q3', to: 'q4', p: [[214, 266], [214, 304]], l: [236, 290, 'yes'] },
      { f: 'q4', to: 'avb1', p: [[404, 334], [490, 334]], l: [447, 326, 'no'] },
      { f: 'q4', to: 'nsr', p: [[214, 364], [214, 396]], l: [236, 384, 'yes'] }
    ]
  };
  var RHY_CASES = [
    { k: 'ac81', b: 'AC81 Q4 (NSR)', src: 'AC81 Q4 (13 QRS in 10 s, +P II, PR 4–5 boxes)', v: { stop: 0, why: 'P waves upright in II and inverted in aVR, 1:1 P–QRS, PR ~160–200 ms, HR ~75–78 bpm → <b>Normal sinus rhythm</b>.' } },
    { k: 'afib', b: 't-RAT 2568 Q14 (AFib)', src: 't-RAT 2568 Q14 / AC77 Q7', v: { stop: 1, dx: 'Atrial fibrillation (AF)', why: 'No P waves, wavy baseline, irregularly irregular RR intervals, narrow QRS → <b>Atrial fibrillation</b> (rate ≈ 22 × 6 = 132 bpm).' } },
    { k: 'junc', b: 'AC75 Q17 (SA failure)', src: 'AC75 Q17 (50 bpm, narrow QRS, abnormal P)', v: { stop: 2, dx: 'AV junctional escape (AV node pacemaker)', why: 'SA node fails → next fastest pacemaker is the <b>AV node</b> (~40–60 bpm) conducting down His–Purkinje → regular <b>narrow QRS</b>.' } },
    { k: 'avb3', b: 'AC75 Q8 (3rd° AV block)', src: 'AC75 Q8 (Atria 70, Vent 40, no P–QRS link)', v: { stop: 3, dx: '3rd-degree (complete) AV block', why: 'Atrial rate 70 bpm and ventricular rate 40 bpm with <b>complete AV dissociation</b> → <b>3rd-degree AV block</b>.' } },
    { k: 'avb1', b: 'PR 240 ms (1st° AVB)', src: 'AC77 / AC78 (PR interval 240 ms)', v: { stop: 4, dx: '1st-degree AV block', why: 'Every sinus P conducts 1:1 to a QRS, but PR = 240 ms (> 200 ms) → <b>1st-degree AV block</b>.' } }
  ];
  var RHY_TXT = {
    q1: { h: 'Look for P waves', b: ['Absent P waves + irregularly irregular RR + narrow QRS = atrial fibrillation.'], th: 'ไม่มี P wave + RR ไม่สม่ำเสมอ + QRS แคบ = AF' },
    q2: { h: 'Confirm sinus origin', b: ['SA node sits upper-right → atrial wave runs down-left: P upright in II, inverted in aVR, same shape within one lead.'], th: 'P ปกติต้องบวกใน II และลบใน aVR (ไม่ต้องบวกทุก lead!)' },
    q3: { h: 'Check 1:1 AV conduction', b: ['Dropped QRS after some P waves = 2nd-degree AV block.', 'No link between P and QRS (atria faster than ventricles) = 3rd-degree AV block.'] },
    q4: { h: 'Check PR and rate', b: ['PR 120–200 ms (3–5 small boxes); > 200 ms = 1st-degree AV block; < 120 ms = pre-excitation.', 'Sinus rate 60–100 bpm.'] },
    nsr: { h: 'Normal sinus rhythm', b: ['Meets all 5 criteria: 60–100 bpm, SA origin, 1:1 P→QRS, monomorphic P per lead, +P in II / −P in aVR.'] },
    af: { h: 'Atrial fibrillation', b: ['Count ventricular (QRS) complexes in a 10 s strip × 6. QRS stays narrow via His–Purkinje.'] },
    junc: { h: 'AV junctional escape', b: ['When the SA node fails, the AV node takes over at ~40–60 bpm with narrow QRS.'] },
    avb23: { h: '2nd- or 3rd-degree AV block', b: ['2nd-degree: some P waves not conducted. 3rd-degree: complete dissociation (e.g. atria 70, ventricles 40).'] },
    avb1: { h: '1st-degree AV block / rate abnormality', b: ['All P waves conducted 1:1, but PR > 200 ms (1st° AVB) or rate < 60 (bradycardia) / > 100 (tachycardia).'] }
  };
  var RHY_Q = ['q1', 'q2', 'q3', 'q4'];
  var RHY_LEAF = [null, 'af', 'junc', 'avb23', 'avb1'];
  function rhyPath(v) {
    var P = [];
    for (var i = 0; i < RHY_Q.length; i++) {
      var q = RHY_Q[i];
      if (v.stop === i + 1) {
        var lf = RHY_LEAF[v.stop];
        P.push({ n: q, e: lf, val: 'no', why: RHY_TXT[q].h + ' — criterion fails here.' });
        P.push({ n: lf, why: v.why });
        return { steps: P, dx: v.dx || RHY_TXT[lf].h };
      }
      P.push({ n: q, e: i < 3 ? RHY_Q[i + 1] : 'nsr', val: 'yes', why: RHY_TXT[q].h + ' — passed.' });
    }
    P.push({ n: 'nsr', why: v.why });
    return { steps: P, dx: 'Normal sinus rhythm' };
  }

  /* ================= widget ================= */
  var DEFS = {
    axis: { def: AXIS, cases: AXIS_CASES, fields: AXIS_FIELDS, path: axisPath, txt: AXIS_TXT, title: 'QRS axis: quadrant check', hint: 'Click any box to see why. Load an exam case or enter net QRS values, then press Next step.', idle: 'Lead I (0°) → aVF (+90°) → and Lead II (+60°) whenever Lead I is positive and aVF is negative.' },
    rate: { def: RATE, cases: RATE_CASES, fields: RATE_FIELDS, path: ratePath, txt: RATE_TXT, title: 'Heart rate & paper-speed calculator', hint: 'Click any box to see the rule. Load an exam tracing or type your own values, then press Next step.', idle: 'Regular? Check paper speed (25 mm/s vs other) → 1500 ÷ boxes × (speed ÷ 25). Irregular? Count QRS in 10 s × 6.' },
    rhythm: { def: RHY, cases: RHY_CASES, fields: [], path: rhyPath, txt: RHY_TXT, title: 'Sinus rhythm vs AV blocks & AFib', hint: 'Click any box to inspect the criterion. Load a case, then press Next step.', idle: 'Walk down the 4 checks: P waves present → sinus polarity (+II, −aVR) → 1:1 P–QRS → PR 120–200 ms & HR 60–100.' }
  };
  function state(name) {
    return ST[name] || (ST[name] = { name: name, caseK: null, v: null, res: null, step: 0, sel: null, form: false });
  }
  function view(name, st) {
    var D = DEFS[name], steps = st.res ? st.res.steps : [], shown = steps.slice(0, st.step);
    var vs = { name: name, on: {}, onE: {}, val: {}, cur: null, sel: st.sel, dim: !!st.res && steps.length > 0, grade: null };
    shown.forEach(function (s, i) {
      vs.on[s.n] = true; if (s.val) vs.val[s.n] = s.val;
      if (i < shown.length - 1 || st.step >= steps.length) { if (s.e) vs.onE[s.n + '>' + s.e] = true; }
    });
    if (shown.length) vs.cur = shown[shown.length - 1].n;
    return vs;
  }
  function render(el) {
    var name = el.getAttribute('data-flow'), D = DEFS[name]; if (!D) return;
    var st = state(name), vs = view(name, st), steps = st.res ? st.res.steps : [];
    var h = '<div class="fx-head"><b>' + D.title + '</b><span>' + D.hint + '</span></div>';
    h += '<div class="fx-cases" role="group" aria-label="Load a case">' + D.cases.map(function (c) { return '<button type="button" class="fx-btn' + (st.caseK === c.k ? ' on' : '') + '" data-a="case" data-k="' + c.k + '">' + c.b + '</button>'; }).join('') +
      (D.fields && D.fields.length ? '<button type="button" class="fx-btn ghost' + (st.form ? ' on' : '') + '" data-a="form">Your numbers</button>' : '') + '</div>';
    if (st.form) {
      var cur = st.v || {};
      h += '<div class="fx-form">' + D.fields.map(function (f) { return '<label><span>' + f[1] + '</span><input type="number" step="any" inputmode="decimal" data-f="' + f[0] + '" value="' + (typeof cur[f[0]] === 'number' ? cur[f[0]] : '') + '"></label>'; }).join('') +
        '<button type="button" class="fx-btn go" data-a="run">Walk it</button></div>';
    }
    if (st.res && D.fields.length) {
      var c = D.cases.filter(function (x) { return x.k === st.caseK; })[0];
      h += '<div class="fx-case"><span class="fx-src">' + (c ? c.src : 'Your numbers') + '</span>' + D.fields.filter(function (f) { return typeof st.v[f[0]] === 'number'; }).map(function (f) { return '<span class="fx-chip">' + f[1].replace(/ \(.*\)/, '') + ' <b>' + st.v[f[0]] + '</b></span>'; }).join('') + '</div>';
    }
    h += '<div class="fx-scroll">' + svg(D.def, vs) + '</div>';
    if (st.res && steps.length) {
      h += '<div class="fx-ctl"><button type="button" class="fx-btn" data-a="back"' + (st.step <= 1 ? ' disabled' : '') + '>◀ Back</button><span class="fx-pos">Step ' + st.step + ' of ' + steps.length + '</span>' +
        '<button type="button" class="fx-btn go" data-a="next"' + (st.step >= steps.length ? ' disabled' : '') + '>Next step ▶</button><button type="button" class="fx-btn ghost" data-a="all"' + (st.step >= steps.length ? ' disabled' : '') + '>Whole path</button><button type="button" class="fx-btn ghost" data-a="clear">Clear</button></div>';
    }
    if (st.res && st.res.err) h += '<p class="fx-err">' + st.res.err + '</p>';
    h += '<div class="fx-panel">' + panel(name, st, vs) + '</div>';
    el.innerHTML = h;
  }
  function panel(name, st, vs) {
    var D = DEFS[name], steps = st.res ? st.res.steps : [], h = '';
    if (st.res && steps.length && st.step) {
      h += '<ol class="fx-trail">' + steps.slice(0, st.step).map(function (s, i) { return '<li' + (i === st.step - 1 ? ' class="now"' : '') + '>' + s.why + '</li>'; }).join('') + '</ol>';
      if (st.step >= steps.length && st.res.dx) h += '<p class="fx-dx"><span>Answer</span>' + st.res.dx + '</p>';
    }
    var key = st.sel || vs.cur, t = key && D.txt[key];
    if (t) h += '<div class="fx-explain"><h4>' + t.h + '</h4>' + ul(t.b) + (t.th ? '<p class="fx-th">' + t.th + '</p>' : '') + '</div>';
    else if (!st.res) h += '<p class="fx-idle">' + D.idle + '</p>';
    return h;
  }
  function act(el, a, btn) {
    var name = el.getAttribute('data-flow'), D = DEFS[name], st = state(name);
    if (a === 'case') {
      var c = D.cases.filter(function (x) { return x.k === btn.getAttribute('data-k'); })[0];
      st.caseK = c.k; st.v = JSON.parse(JSON.stringify(c.v)); st.res = D.path(st.v); st.step = 1; st.sel = null;
    } else if (a === 'form') { st.form = !st.form; }
    else if (a === 'run') {
      var v = {}, ins = el.querySelectorAll('input[data-f]');
      for (var i = 0; i < ins.length; i++) { var x = parseFloat(ins[i].value); if (!isNaN(x)) v[ins[i].getAttribute('data-f')] = x; }
      st.caseK = null; st.v = v; st.res = D.path(v); st.step = st.res.steps.length ? 1 : 0; st.sel = null;
    }
    else if (a === 'next') { if (st.res) st.step = Math.min(st.res.steps.length, st.step + 1); st.sel = null; }
    else if (a === 'back') { st.step = Math.max(1, st.step - 1); st.sel = null; }
    else if (a === 'all') { if (st.res) st.step = st.res.steps.length; st.sel = null; }
    else if (a === 'clear') { st.caseK = null; st.v = null; st.res = null; st.step = 0; st.sel = null; }
    render(el);
    var again = el.querySelector('[data-a="' + a + '"]' + (a === 'case' ? '[data-k="' + st.caseK + '"]' : ''));
    if (again && !again.disabled) try { again.focus({ preventScroll: true }); } catch (e) { }
  }
  function pick(el, n) {
    var st = state(el.getAttribute('data-flow'));
    st.sel = st.sel === n ? null : n;
    render(el);
    var g = el.querySelector('.fx-node[data-n="' + n + '"]'); if (g) try { g.focus({ preventScroll: true }); } catch (e) { }
  }

  F.add = function (name, d) { DEFS[name] = d; };
  F.paths = DEFS;
  F.mount = function (root) {
    var els = (root || document).querySelectorAll('.flowx');
    for (var i = 0; i < els.length; i++) if (!els[i].getAttribute('data-on')) { els[i].setAttribute('data-on', '1'); render(els[i]); }
  };
  F.printHtml = function (name) {
    var D = DEFS[name], vs = { name: name + 'p', on: {}, onE: {}, val: {}, cur: null, sel: null, dim: false, grade: null };
    return '<div class="fx fx-print"><div class="fx-scroll">' + svg(D.def, vs) + '</div></div>';
  };

  if (typeof document !== 'undefined' && document.addEventListener) {
    document.addEventListener('click', function (e) {
      var t = e.target && e.target.closest ? e.target : null; if (!t) return;
      var el = t.closest('.flowx'); if (!el) return;
      var b = t.closest('[data-a]'); if (b && !b.disabled) { act(el, b.getAttribute('data-a'), b); return; }
      var g = t.closest('.fx-node'); if (g) pick(el, g.getAttribute('data-n'));
    });
    document.addEventListener('keydown', function (e) {
      var t = e.target; if (!t || !t.closest) return;
      var el = t.closest('.flowx'); if (!el) return;
      if ((e.key === 'Enter' || e.key === ' ') && t.classList && t.classList.contains('fx-node')) { e.preventDefault(); pick(el, t.getAttribute('data-n')); }
      if (e.key === 'Enter' && t.tagName === 'INPUT') { e.preventDefault(); act(el, 'run', null); }
    });
    var go = function () { F.mount(document); };
    if (document.body) { go(); try { new MutationObserver(go).observe(document.body, { childList: true, subtree: true }); } catch (e) { } }
    else document.addEventListener('DOMContentLoaded', function () { go(); try { new MutationObserver(go).observe(document.body, { childList: true, subtree: true }); } catch (e) { } });
  }
})();
