  /* ---------- C-C3 · Localising a murmur (lecture table, Physiology p.88) ---------- */
  (function () {
    var SITE = ['', 'right 2nd ICS', 'left 2nd ICS', 'apex (PMI)', 'left 5th ICS'];
    var VALVE = ['', 'aortic', 'pulmonary', 'mitral', 'tricuspid'];
    var LEAF = { 1: { sls: 'as', slr: 'ar' }, 2: { sls: 'ps', slr: 'pr' }, 3: { avr: 'mr', avs: 'ms' }, 4: { avr: 'tr', avs: 'ts' } };
    var NAME = { as: 'Aortic stenosis', ar: 'Aortic regurgitation', ps: 'Pulmonary stenosis', pr: 'Pulmonary regurgitation', mr: 'Mitral regurgitation', ms: 'Mitral stenosis', tr: 'Tricuspid regurgitation', ts: 'Tricuspid stenosis' };
    function path(v) {
      if (!(v.t === 1 || v.t === 2) || !(v.s >= 1 && v.s <= 4 && v.s === Math.round(v.s))) return { steps: [], err: 'Enter timing (1 = systolic, 2 = diastolic) and where it is loudest (1–4).' };
      var sys = v.t === 1, semi = v.s <= 2, tn = sys ? 'sys' : 'dia';
      var mech = sys ? (semi ? 'sls' : 'avr') : (semi ? 'slr' : 'avs'), leaf = LEAF[v.s][mech];
      var lesion = (sys === semi) ? 'too narrow (stenosis)' : 'leaking (regurgitation)';
      return { steps: [
        { n: 'q1', e: tn, val: sys ? 'systolic' : 'diastolic', why: 'The murmur is heard in <b>' + (sys ? 'systole (between S1 and S2)' : 'diastole (after S2)') + '</b>.' },
        { n: tn, e: mech, val: SITE[v.s], why: 'Loudest at the <b>' + SITE[v.s] + '</b> = the ' + VALVE[v.s] + ' area → a <b>' + (semi ? 'semilunar' : 'AV') + ' valve</b>. A ' + (semi ? 'semilunar' : 'AV') + ' valve heard in ' + (sys ? 'systole' : 'diastole') + ' is <b>' + lesion + '</b>.' },
        { n: mech, e: leaf, why: { sls: 'Blood forced out through a narrow semilunar valve → crescendo–decrescendo <b>ejection</b> murmur.', avr: 'Blood leaks back through the AV valve for all of systole → <b>pansystolic</b> murmur.', slr: 'Blood falls back through a leaky semilunar valve as soon as it should close → early <b>diastolic blowing</b> murmur.', avs: 'Blood squeezes through a narrow AV valve while the ventricle fills → low <b>diastolic rumble</b>.' }[mech] },
        { n: leaf, why: '<b>' + NAME[leaf] + '</b>.' }
      ], dx: [NAME[leaf]] };
    }
    var L = function (id, x, t1, t2, s) { return { id: id, k: 'leaf', x: x, y: 352, w: 122, h: 86, t: [t1, t2], s: [s] }; };
    F.add('murmur', {
      title: 'Localise the murmur', hint: 'Click a box for why that step exists. Load a case, or type timing and site, then press Next step.',
      idle: 'Two questions settle it: when is the murmur (systole or diastole), and where is it loudest (which valve area)? A semilunar valve heard in systole is narrow; an AV valve heard in systole leaks.',
      dxLabel: 'Diagnosis',
      def: { name: 'murmur', W: 1040, H: 448, label: 'Murmur localisation flowchart (lecture p.88)',
        N: [
          { id: 'q1', k: 'q', x: 370, y: 8, w: 300, h: 60, t: ['① When is it heard?'], s: ['systole or diastole'] },
          { id: 'sys', k: 'q', x: 120, y: 112, w: 300, h: 60, t: ['Systolic'], s: ['② loudest where?'] },
          { id: 'dia', k: 'q', x: 620, y: 112, w: 300, h: 60, t: ['Diastolic'], s: ['② loudest where?'] },
          { id: 'sls', k: 'st', x: 8, y: 220, w: 250, h: 74, t: ['Ejection murmur'], s: ['semilunar valve narrow'] },
          { id: 'avr', k: 'st', x: 266, y: 220, w: 250, h: 74, t: ['Pansystolic'], s: ['AV valve leaks'] },
          { id: 'slr', k: 'st', x: 524, y: 220, w: 250, h: 74, t: ['Diastolic blowing'], s: ['semilunar valve leaks'] },
          { id: 'avs', k: 'st', x: 782, y: 220, w: 250, h: 74, t: ['Diastolic rumble'], s: ['AV valve narrow'] },
          L('as', 8, 'Aortic', 'stenosis', 'R 2nd ICS'), L('ps', 137, 'Pulmonary', 'stenosis', 'L 2nd ICS'),
          L('mr', 266, 'Mitral', 'regurgitation', 'apex'), L('tr', 395, 'Tricuspid', 'regurgitation', 'L 5th ICS'),
          L('ar', 524, 'Aortic', 'regurgitation', 'R 2nd ICS'), L('pr', 653, 'Pulmonary', 'regurgitation', 'L 2nd ICS'),
          L('ms', 782, 'Mitral', 'stenosis', 'apex'), L('ts', 911, 'Tricuspid', 'stenosis', 'L 5th ICS')
        ],
        E: [
          { f: 'q1', to: 'sys', dir: 'v' }, { f: 'q1', to: 'dia', dir: 'v' },
          { f: 'sys', to: 'sls', dir: 'v' }, { f: 'sys', to: 'avr', dir: 'v' }, { f: 'dia', to: 'slr', dir: 'v' }, { f: 'dia', to: 'avs', dir: 'v' },
          { f: 'sls', to: 'as', dir: 'v' }, { f: 'sls', to: 'ps', dir: 'v' }, { f: 'avr', to: 'mr', dir: 'v' }, { f: 'avr', to: 'tr', dir: 'v' },
          { f: 'slr', to: 'ar', dir: 'v' }, { f: 'slr', to: 'pr', dir: 'v' }, { f: 'avs', to: 'ms', dir: 'v' }, { f: 'avs', to: 'ts', dir: 'v' }
        ] },
      fields: [['t', 'Timing (1 = systolic, 2 = diastolic)'], ['s', 'Loudest (1 = R 2nd ICS, 2 = L 2nd ICS, 3 = apex, 4 = L 5th ICS)']],
      cases: [
        { k: 'a81', b: 'AC81 · diastolic, L 2nd ICS', src: 'C8 · AC75 · AC81', v: { t: 2, s: 2 }, expect: 'Pulmonary regurgitation' },
        { k: 'a76', b: 'AC76 · rumble at PMI', src: 'C9 · AC76', v: { t: 2, s: 3 }, expect: 'Mitral stenosis' },
        { k: 'a77', b: 'AC77 · ejection, L 2nd ICS', src: 'C10 · AC77', v: { t: 1, s: 2 }, expect: 'Pulmonary stenosis' },
        { k: 'a78', b: 'AC78 · pansystolic at PMI', src: 'C11 · AC78', v: { t: 1, s: 3 }, expect: 'Mitral regurgitation' },
        { k: 'as', b: 'Systolic, R 2nd ICS', src: 'Lecture table, Physiology p.88', v: { t: 1, s: 1 }, expect: 'Aortic stenosis' },
        { k: 'ar', b: 'Diastolic, R 2nd ICS', src: 'Lecture table, Physiology p.88', v: { t: 2, s: 1 }, expect: 'Aortic regurgitation' }
      ],
      path: path,
      txt: {
        q1: { h: 'Timing first', b: ['Systolic = between S1 and S2 · diastolic = after S2.', 'Timing alone halves the list.'] },
        sys: { h: 'Systolic murmur', b: ['In systole the semilunar valves should be open and the AV valves shut.', 'So a semilunar valve makes noise if it is <b>narrow</b>; an AV valve makes noise if it <b>leaks</b>.'] },
        dia: { h: 'Diastolic murmur', b: ['In diastole the AV valves should be open and the semilunar valves shut.', 'So an AV valve makes noise if it is <b>narrow</b>; a semilunar valve if it <b>leaks</b>.'] },
        sls: { h: 'Systolic ejection murmur', b: ['Crescendo–decrescendo: follows the ejection flow through a stenotic aortic or pulmonary valve.'] },
        avr: { h: 'Pansystolic murmur', b: ['Flat, all through systole: blood leaks back into the atrium through a regurgitant mitral or tricuspid valve.'] },
        slr: { h: 'Diastolic blowing murmur', b: ['Starts right after S2: blood falls back through a regurgitant aortic or pulmonary valve.'] },
        avs: { h: 'Diastolic rumbling murmur', b: ['Low-pitched, during filling: blood squeezes through a stenotic mitral or tricuspid valve.'] },
        as: { h: 'Aortic stenosis', b: ['Systolic ejection murmur, loudest at the right 2nd ICS.'] },
        ps: { h: 'Pulmonary stenosis', b: ['Systolic ejection murmur at the left 2nd ICS (AC77).'] },
        mr: { h: 'Mitral regurgitation', b: ['Pansystolic murmur at the apex / PMI (AC78).'] },
        tr: { h: 'Tricuspid regurgitation', b: ['Pansystolic murmur at the left 5th ICS (lower left sternal edge).'] },
        ar: { h: 'Aortic regurgitation', b: ['Diastolic blowing murmur at the right 2nd ICS.'] },
        pr: { h: 'Pulmonary regurgitation', b: ['Diastolic blowing murmur at the left 2nd ICS (AC75, AC81).'] },
        ms: { h: 'Mitral stenosis', b: ['Diastolic rumble at the apex / PMI (AC76).'] },
        ts: { h: 'Tricuspid stenosis', b: ['Diastolic rumble at the left 5th ICS.'] }
      }
    });
  })();
