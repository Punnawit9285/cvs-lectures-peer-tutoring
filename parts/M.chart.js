  /* ---------- M-C3 · Starling forces → net filtration (lecture p.23–24) ---------- */
  (function () {
    function r1(x) { return Math.round(x * 10) / 10; }
    function sg(x) { return (x > 0 ? '+' : '') + r1(x); }
    function path(v) {
      var ks = ['pc', 'pi', 'oc', 'oi'];
      for (var i = 0; i < ks.length; i++) if (typeof v[ks[i]] !== 'number' || isNaN(v[ks[i]])) return { steps: [], err: 'Enter all four forces: Pc, Pi, πc and πi (mmHg).' };
      var h = v.pc - v.pi, o = v.oc - v.oi, n = h - o, leaf = n > 0.5 ? 'filt' : n < -0.5 ? 'abs' : 'eq';
      var name = leaf === 'filt' ? 'Filtration' : leaf === 'abs' ? 'Absorption' : 'No net movement';
      return { steps: [
        { n: 'hyd', e: 'nfp', val: sg(h), why: 'Hydrostatic gradient Pc − Pi = ' + v.pc + ' − (' + v.pi + ') = <b>' + sg(h) + ' mmHg</b>, pushing fluid <b>out</b>.' },
        { n: 'onc', e: 'nfp', val: sg(o), why: 'Oncotic gradient πc − πi = ' + v.oc + ' − ' + v.oi + ' = <b>' + sg(o) + ' mmHg</b>, pulling fluid <b>in</b>.' },
        { n: 'nfp', e: leaf, val: sg(n), why: 'NFP = (Pc − Pi) − (πc − πi) = ' + sg(h) + ' − (' + sg(o) + ') = <b>' + sg(n) + ' mmHg</b>.' },
        { n: leaf, why: leaf === 'filt' ? 'Positive NFP → fluid leaves the capillary (<b>filtration</b>).' : leaf === 'abs' ? 'Negative NFP → fluid re-enters the capillary (<b>absorption</b>).' : 'NFP close to zero → little net movement.' }
      ], dx: [name + ': NFP ' + sg(n) + ' mmHg'] };
    }
    F.add('starling', {
      title: 'Starling forces: filtration or absorption?', hint: 'Load a case or type your own forces, then press Next step. Click a box for what it means.',
      idle: 'Two gradients: hydrostatic pushes fluid out (Pc − Pi), oncotic pulls it in (πc − πi). Their difference is the net filtration pressure.',
      dxLabel: 'Result',
      def: { name: 'starling', W: 960, H: 380, label: 'Starling forces flowchart (lecture p.23–24)',
        N: [
          { id: 'hyd', k: 'q', x: 40, y: 10, w: 380, h: 72, t: ['Hydrostatic gradient'], s: ['Pc − Pi · pushes fluid out'] },
          { id: 'onc', k: 'q', x: 540, y: 10, w: 380, h: 72, t: ['Oncotic gradient'], s: ['πc − πi · pulls fluid in'] },
          { id: 'nfp', k: 'q', x: 280, y: 146, w: 400, h: 72, t: ['Net filtration pressure'], s: ['NFP = (Pc − Pi) − (πc − πi)'] },
          { id: 'filt', k: 'leaf', x: 10, y: 290, w: 280, h: 76, t: ['Filtration'], s: ['NFP > 0 · arteriolar end'] },
          { id: 'eq', k: 'leaf', x: 340, y: 290, w: 280, h: 76, t: ['No net movement'], s: ['NFP ≈ 0'] },
          { id: 'abs', k: 'leaf', x: 670, y: 290, w: 280, h: 76, t: ['Absorption'], s: ['NFP < 0 · venular end'] }
        ],
        E: [
          { f: 'hyd', to: 'nfp', dir: 'v' }, { f: 'onc', to: 'nfp', dir: 'v' },
          { f: 'nfp', to: 'filt', dir: 'v' }, { f: 'nfp', to: 'eq', dir: 'v' }, { f: 'nfp', to: 'abs', dir: 'v' }
        ] },
      fields: [['pc', 'Pc (capillary hydrostatic)'], ['pi', 'Pi (interstitial hydrostatic)'], ['oc', 'πc (plasma oncotic)'], ['oi', 'πi (interstitial oncotic)']],
      cases: [
        { k: 'art', b: 'Arteriolar end', src: 'Lecture table, Microcirculation p.24', v: { pc: 35, pi: -2, oc: 28, oi: 0.1 }, expect: 'Filtration' },
        { k: 'ven', b: 'Venular end', src: 'Lecture table, Microcirculation p.24', v: { pc: 15, pi: -2, oc: 28, oi: 3 }, expect: 'Absorption' },
        { k: 'a81n', b: 'AC81 · normal', src: 'M7 · AC81 (healthy man)', v: { pc: 30, pi: 0, oc: 25, oi: 5 }, expect: '+10' },
        { k: 'a81p', b: 'AC81 · patient', src: 'M7 · AC81 (patient)', v: { pc: 30, pi: 2, oc: 20, oi: 15 }, expect: '+23' },
        { k: 'a78', b: 'AC78 · NFP', src: 'M8 · AC78', v: { pc: 33, pi: 3, oc: 20, oi: 2 }, expect: '+12' }
      ],
      path: path,
      txt: {
        hyd: { h: 'Hydrostatic gradient (Pc − Pi)', b: ['Pc pushes fluid out; it falls from ~35 mmHg at the arteriolar end to ~15 at the venular end.', 'Pc rises with venous pressure more than with arterial pressure.', 'Pi is normally slightly negative (a safety factor).'] },
        onc: { h: 'Oncotic gradient (πc − πi)', b: ['Plasma proteins (mostly albumin, ~28 mmHg) hold fluid in.', 'Low albumin (malnutrition, cirrhosis, nephrosis) or protein leaking out (inflammation, lymph block) shrinks this gradient.'] },
        nfp: { h: 'Net filtration pressure', b: ['NFP = (Pc − Pi) − (πc − πi); flow Jv = Kf × NFP (with σ for protein leak).', 'About 90% of filtered fluid is reabsorbed; lymph takes the other 10%.'] },
        filt: { h: 'Filtration', b: ['Fluid leaves the capillary into the interstitium (arteriolar end).', 'If filtration outruns lymph flow → edema.'] },
        eq: { h: 'No net movement', b: ['Outward and inward forces balance.'] },
        abs: { h: 'Absorption', b: ['Fluid returns to the capillary (venular end): the oncotic pull now beats the lower Pc.'] }
      }
    });
  })();
