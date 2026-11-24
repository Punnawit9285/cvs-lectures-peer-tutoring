  /* ---------- K-C3/K-C4 · Rate and QRS axis (lecture p.32, 39–40) ---------- */
  (function () {
    function sgn(x) { return x > 0 ? 'positive' : x < 0 ? 'negative' : 'biphasic'; }
    function path(v) {
      var P = [], dx = [], has = function (k) { return typeof v[k] === 'number' && !isNaN(v[k]); };
      var rate = has('boxes') && v.boxes > 0, axis = has('i') && has('avf');
      if (!rate && !axis) return { steps: [], err: 'Enter the R–R distance in small boxes (and paper speed), and/or the net QRS in lead I and aVF (1 = positive, 0 = biphasic, −1 = negative).' };
      if (rate) {
        var sp = has('speed') ? v.speed : 25, hr = Math.round(sp * 60 / v.boxes);
        var leaf = hr < 60 ? 'brady' : hr > 100 ? 'tachy' : 'nrm';
        P.push({ n: 'rate', e: leaf, val: hr + ' bpm', why: 'HR = speed × 60 ÷ small boxes = ' + sp + ' × 60 ÷ ' + v.boxes + ' = <b>' + hr + ' bpm</b>' + (sp === 25 ? ' (= 1500 ÷ ' + v.boxes + ')' : '') + '.' });
        P.push({ n: leaf, why: leaf === 'nrm' ? 'Within 60–100: a normal rate.' : leaf === 'brady' ? 'Below 60: bradycardia.' : 'Above 100: tachycardia.' });
        dx.push('HR ' + hr + ' bpm');
      }
      if (axis) {
        var I = v.i, F = v.avf;
        if (I >= 0) {
          P.push({ n: 'ax1', e: 'avf1', val: 'I ' + sgn(I), why: 'Lead I is <b>' + sgn(I) + '</b>' + (I === 0 ? ': the axis is perpendicular to lead I (±90°).' : ': the vector points to the left half (toward 0°).') });
          if (F > 0) { P.push({ n: 'avf1', e: 'nl', val: 'aVF ' + sgn(F), why: 'aVF <b>positive</b> → the vector also points down' + (I === 0 ? ': exactly +90°.' : ': 0° to +90°.') }); P.push({ n: 'nl', why: '<b>Normal axis</b> (−30° to +90°).' }); dx.push('Normal axis'); }
          else if (F === 0) { P.push({ n: 'avf1', e: 'nl', val: 'aVF biphasic', why: 'aVF biphasic → the axis is perpendicular to aVF: 0°.' }); P.push({ n: 'nl', why: '<b>Normal axis</b> (0°).' }); dx.push('Normal axis'); }
          else {
            P.push({ n: 'avf1', e: 'ii', val: 'aVF negative', why: 'aVF <b>negative</b> → the vector points up: between 0° and −90°. Lead II (+60°) decides which side of −30° it is.' });
            if (I === 0) { P.push({ n: 'ii', e: 'lad', val: '−90°', why: 'Lead I biphasic and aVF negative → −90°, beyond −30°.' }); P.push({ n: 'lad', why: '<b>Left axis deviation</b>.' }); dx.push('Left axis deviation'); }
            else if (!has('ii')) { P.push({ n: 'ii', val: 'enter II', why: 'Enter the net QRS in lead II to finish (positive or biphasic → normal, negative → left axis deviation).' }); }
            else if (v.ii >= 0) { P.push({ n: 'ii', e: 'nl', val: 'II ' + sgn(v.ii), why: 'Lead II ' + sgn(v.ii) + ' → the vector is no further than −30° from lead II’s perpendicular: 0° to −30°.' }); P.push({ n: 'nl', why: '<b>Normal axis</b> (0° to −30°).' }); dx.push('Normal axis'); }
            else { P.push({ n: 'ii', e: 'lad', val: 'II negative', why: 'Lead II negative → the vector is beyond −30°.' }); P.push({ n: 'lad', why: '<b>Left axis deviation</b> (−30° to −90°).' }); dx.push('Left axis deviation'); }
          }
        } else {
          P.push({ n: 'ax1', e: 'avf2', val: 'I negative', why: 'Lead I is <b>negative</b>: the vector points to the right half (toward 180°).' });
          if (F >= 0) { P.push({ n: 'avf2', e: 'rad', val: 'aVF ' + sgn(F), why: 'aVF ' + sgn(F) + (F === 0 ? ' → exactly 180°.' : ' → the vector points down and right: +90° to 180°.') }); P.push({ n: 'rad', why: '<b>Right axis deviation</b>.' }); dx.push('Right axis deviation'); }
          else { P.push({ n: 'avf2', e: 'ext', val: 'aVF negative', why: 'aVF negative → up and right: −90° to 180°.' }); P.push({ n: 'ext', why: '<b>Extreme axis deviation</b> (“north-west”).' }); dx.push('Extreme axis deviation'); }
        }
      }
      return { steps: P, dx: dx };
    }
    var Lf = function (id, x, t, s, w) { return { id: id, k: 'leaf', x: x, y: 340, w: w || 130, h: 66, t: [t], s: [s] }; };
    F.add('ecg', {
      title: 'Rate and QRS axis, step by step', hint: 'Load a case or type your own, then press Next step. Click a box for why that step exists.',
      idle: 'Left: rate from the R–R distance. Right: the axis from two leads, I and aVF (lecture table p.40), with lead II to settle the −30° border.',
      dxLabel: 'Reading',
      def: { name: 'ecg', W: 960, H: 420, label: 'ECG rate and QRS axis flowchart (lecture p.32, 39–40)',
        N: [
          { id: 'rate', k: 'q', x: 60, y: 10, w: 230, h: 66, t: ['① Heart rate'], s: ['speed × 60 ÷ small boxes'] },
          Lf('brady', 10, 'Bradycardia', '< 60', 100), Lf('nrm', 120, 'Normal', '60–100', 100), Lf('tachy', 230, 'Tachycardia', '> 100', 100),
          { id: 'ax1', k: 'q', x: 560, y: 10, w: 220, h: 62, t: ['② Lead I QRS'], s: ['positive or negative?'] },
          { id: 'avf1', k: 'q', x: 400, y: 120, w: 200, h: 62, t: ['aVF'], s: ['lead I positive'] },
          { id: 'avf2', k: 'q', x: 740, y: 120, w: 200, h: 62, t: ['aVF'], s: ['lead I negative'] },
          { id: 'ii', k: 'q', x: 520, y: 230, w: 160, h: 62, t: ['Lead II'], s: ['settles −30°'] },
          Lf('nl', 380, 'Normal axis', '−30° to +90°'), Lf('lad', 520, 'Left axis', '−30° to −90°'), Lf('rad', 660, 'Right axis', '+90° to 180°'), Lf('ext', 800, 'Extreme axis', '−90° to 180°', 150)
        ],
        E: [
          { f: 'rate', to: 'brady', dir: 'v', my: 210 }, { f: 'rate', to: 'nrm', dir: 'v', my: 210 }, { f: 'rate', to: 'tachy', dir: 'v', my: 210 },
          { f: 'ax1', to: 'avf1', dir: 'v' }, { f: 'ax1', to: 'avf2', dir: 'v' },
          { f: 'avf1', to: 'nl', dir: 'v', x1: 470, my: 206 }, { f: 'avf1', to: 'ii', dir: 'v', x1: 560, my: 206 },
          { f: 'ii', to: 'nl', dir: 'v', x1: 570, my: 316 }, { f: 'ii', to: 'lad', dir: 'v', x1: 600, my: 316 },
          { f: 'avf2', to: 'rad', dir: 'v', x1: 800, my: 300 }, { f: 'avf2', to: 'ext', dir: 'v', x1: 875, my: 300 }
        ] },
      fields: [['speed', 'Paper speed (mm/s, default 25)'], ['boxes', 'R–R (small boxes)'], ['i', 'Lead I (1 +, 0 biphasic, −1 −)'], ['avf', 'aVF (1 +, 0 biphasic, −1 −)'], ['ii', 'Lead II (1 +, 0, −1; only if needed)']],
      cases: [
        { k: 'a79r', b: 'AC79 · RR 15 mm', src: 'K9 · AC75 · AC78 · AC79', v: { speed: 25, boxes: 15 }, expect: 'HR 100' },
        { k: 'a80r', b: 'AC80 · 12.5 mm/s', src: 'K10 · AC76 · AC80', v: { speed: 12.5, boxes: 15 }, expect: 'HR 50' },
        { k: 'a79a', b: 'AC79 · I −, aVF +', src: 'K13 · AC79 · AC80', v: { i: -1, avf: 1 }, expect: 'Right axis deviation' },
        { k: 'a75a', b: 'AC75 · I biphasic', src: 'K16 · AC75', v: { i: 0, avf: 1 }, expect: 'Normal axis' },
        { k: 'a77a', b: 'AC77 · all positive', src: 'AC77 · lecture table p.40', v: { i: 1, avf: 1, ii: 1 }, expect: 'Normal axis' },
        { k: 'lad', b: 'I +, aVF −, II −', src: 'Lecture table p.40', v: { i: 1, avf: -1, ii: -1 }, expect: 'Left axis deviation' },
        { k: 'ext', b: 'I −, aVF −', src: 'Lecture table p.40', v: { i: -1, avf: -1 }, expect: 'Extreme axis deviation' }
      ],
      path: path,
      txt: {
        rate: { h: 'Heart rate', b: ['HR = paper speed × 60 ÷ small boxes between two R waves.', 'At 25 mm/s: 1500 ÷ small boxes = 300 ÷ large boxes.', 'Irregular rhythm: QRS in 10 s × 6.'] },
        brady: { h: 'Bradycardia', b: ['Below 60/min.'] },
        nrm: { h: 'Normal rate', b: ['60–100/min (sinus rate).'] },
        tachy: { h: 'Tachycardia', b: ['Above 100/min.'] },
        ax1: { h: 'Lead I (0°)', b: ['Net QRS positive → the vector points left of ±90°; negative → right of ±90°.', 'Biphasic → the axis is perpendicular to lead I (±90°).'] },
        avf1: { h: 'aVF (+90°) with lead I positive', b: ['aVF positive → 0° to +90° (normal).', 'aVF negative → 0° to −90°: check lead II.'] },
        avf2: { h: 'aVF with lead I negative', b: ['aVF positive → +90° to 180° (right axis deviation).', 'aVF negative → −90° to 180° (extreme).'] },
        ii: { h: 'Lead II (+60°)', b: ['Normal range reaches −30°, which is perpendicular to lead II.', 'II positive or biphasic → no further than −30° → normal; II negative → left axis deviation.'] },
        nl: { h: 'Normal axis', b: ['−30° to +90°.'] },
        lad: { h: 'Left axis deviation', b: ['−30° to −90°.'] },
        rad: { h: 'Right axis deviation', b: ['+90° to 180°.'] },
        ext: { h: 'Extreme axis deviation', b: ['−90° to 180° (“north-west”).'] }
      }
    });
  })();
