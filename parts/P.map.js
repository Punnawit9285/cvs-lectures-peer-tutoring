  /* ---------- P-C1 · Neck pulsation: JVP vs Carotid & CVP ---------- */
  add('p_neck', {
    title: 'Neck pulsation: JVP vs Carotid & volume status', src: 'Examination of Blood Vessels p.3–8',
    hint: 'Click a box, or pick a clinical finding and press Next step.',
    idle: 'First separate venous (JVP: non-palpable, collapsible, biphasic, falls on inspiration) from carotid pulse, then turn RIJV height above sternal angle + 5 cm into CVP.',
    def: { name: 'p_neck', W: 940, H: 330, label: 'Differentiating JVP from carotid pulse and estimating CVP',
      N: [
        { id: 'q1', k: 'st', x: 250, y: 10, w: 440, h: 54, t: ['Neck Pulsation: Palpable & Single Upstroke?'], s: ['Check light root-of-neck pressure · inspiration · posture · RUQ press'] },
        { id: 'cca', k: 'leaf', x: 20, y: 112, w: 300, h: 74, t: ['Common Carotid Artery'], s: ['Palpable · brisk · monophasic', 'Unchanged by breathing, posture, or RUQ'] },
        { id: 'jvp', k: 'q', x: 420, y: 112, w: 500, h: 74, t: ['Right Internal Jugular Vein (at 30–45°)'], s: ['Non-palpable · collapsible · biphasic · falls on inspiration', 'CVP (cmH₂O) = vertical height above sternal angle + 5 cm'] },
        { id: 'hypo', k: 'leaf', x: 310, y: 236, w: 190, h: 72, t: ['Hypovolemia'], s: ['CVP < 5 cmH₂O', '(flat veins supine)'] },
        { id: 'norm', k: 'leaf', x: 520, y: 236, w: 190, h: 72, t: ['Normal CVP'], s: ['5–8 cmH₂O', '(JVP ≤ 3–4 cm)'] },
        { id: 'hyper', k: 'leaf', x: 730, y: 236, w: 190, h: 72, t: ['↑RA Pressure / JVD'], s: ['CVP > 8–10 cmH₂O', '(RHF, tamponade)'] }
      ],
      E: [
        { f: 'q1', to: 'cca', dir: 'v' }, { f: 'q1', to: 'jvp', dir: 'v' },
        { f: 'jvp', to: 'hypo', dir: 'v' }, { f: 'jvp', to: 'norm', dir: 'v' }, { f: 'jvp', to: 'hyper', dir: 'v' }
      ] },
    txt: {
      q1: { h: 'Separate venous from arterial pulsation first', b: ['JVP is visible but NOT palpable, has 2 peaks/cycle (a, v), obliterates with light pressure at neck root, falls on inspiration, and rises supine or with RUQ compression.'] },
      cca: { h: 'Common carotid artery', b: ['Palpable, single brisk upstroke during systole (between S1 and S2); never palpate both sides at once or press the carotid sinus.'] },
      jvp: { h: 'Right internal jugular vein (RIJV) at 30–45°', b: ['Straight, valveless path via right brachiocephalic v. and SVC to RA (AC81 Q2).', 'CVP (cmH₂O) = JVP height above sternal angle + 5 cm.'] },
      hypo: { h: 'Hypovolemia (CVP < 5 cmH₂O)', b: ['Neck veins remain flat even when reclined low / supine.'] },
      norm: { h: 'Normal CVP (5–8 cmH₂O)', b: ['JVP ≤ 3–4 cm above sternal angle at 30–45°; drops normally on inspiration.'] },
      hyper: { h: 'Elevated RA pressure / JVD (CVP > 8–10 cmH₂O)', b: ['Seen in right heart failure, fluid overload, tricuspid disease, cardiac tamponade, and constrictive pericarditis (AC81 Q3).'] }
    },
    R: {
      rijv: { b: 'High RA pressure (RIJV → JVD)', src: 'P1 · P2 · AC81 Q2–Q3', dx: ['RIJV (valveless)', 'JVP + 5 > 8–10', 'Jugular distension'], s: [
        ['q1', 'jvp', 'Non-palpable, biphasic venous pulsation inspected in the <b>right internal jugular vein</b> at 30–45°.'],
        ['jvp', 'hyper', 'Vertical height > 3–4 cm above sternal angle → CVP = JVP + 5 > 8–10 cmH₂O.'],
        ['hyper', '', '<b>Increased jugular venous distension</b> directly reflects elevated RA pressure.']] },
      carotid: { b: 'Carotid pulse & S1 timing', src: 'P6 · P7 · AC80 Q3 · AC81 Q1', dx: ['Carotid (systolic)', 'Sound just before = S1'], s: [
        ['q1', 'cca', 'Palpable, brisk, single upstroke unaffected by inspiration or posture = carotid artery.'],
        ['cca', '', 'Carotid upstroke coincides with ventricular systole (between S1 and S2) → sound right before it is <b>S1 (AV valves close)</b>.']] },
      hypo: { b: 'Low volume status (hypovolemia)', src: 'PE p.7', dx: ['RIJV flat', 'CVP < 5 cmH₂O'], s: [
        ['q1', 'jvp', 'Inspect RIJV at 30–45° and lower the head of bed.'],
        ['jvp', 'hypo', 'JVP flat / CVP < 5 cmH₂O → <b>Hypovolemia</b>.']] }
    }
  });
