  /* ---------- R-C2 · Baroreceptor and chemoreceptor reflex arcs ---------- */
  add('baro', {
    title: 'Reflex arcs: sensor → medulla → effector', src: 'Regulation p.9–12, 23–25, 33',
    hint: 'Click a box, or pick a situation and press Next step.',
    idle: 'Left: what senses and which nerve carries it. Middle: the medulla. Right: what the heart and vessels do. The baroreflex runs both ways; the chemoreflex adds vasoconstriction and breathing.',
    def: { name: 'baro', W: 960, H: 300, label: 'Baroreceptor and chemoreceptor reflex map',
      N: [
        { id: 'cs', k: 'st', x: 10, y: 10, w: 220, h: 66, t: ['Carotid sinus'], s: ['stretch · Hering n. (CN IX)'] },
        { id: 'aa', k: 'st', x: 10, y: 100, w: 220, h: 66, t: ['Aortic arch'], s: ['stretch · aortic n. (CN X)'] },
        { id: 'cb', k: 'st', x: 10, y: 200, w: 220, h: 72, t: ['Carotid & aortic bodies'], s: ['O₂ ↓, CO₂ ↑, H⁺ ↑'] },
        { id: 'nts', k: 'q', x: 280, y: 100, w: 160, h: 66, t: ['NTS'], s: ['medulla'] },
        { id: 'ci', k: 'q', x: 500, y: 10, w: 210, h: 66, t: ['Cardio-inhibitory'], s: ['dorsal motor n. of X'] },
        { id: 'ca', k: 'q', x: 500, y: 100, w: 210, h: 66, t: ['Cardio-accelerator'], s: ['RVLM'] },
        { id: 'vmc', k: 'q', x: 500, y: 200, w: 210, h: 72, t: ['Vasomotor centre'], s: ['(+ respiratory centre)'] },
        { id: 'san', k: 'leaf', x: 760, y: 10, w: 190, h: 66, t: ['SA / AV node'], s: ['vagus → HR ↓'] },
        { id: 'heart', k: 'leaf', x: 760, y: 100, w: 190, h: 66, t: ['Heart'], s: ['sympathetic → HR, force ↑'] },
        { id: 'ves', k: 'leaf', x: 760, y: 200, w: 190, h: 72, t: ['Arterioles, veins'], s: ['sympathetic → constrict'] }
      ],
      E: [
        { f: 'cs', to: 'nts', dir: 'h', mx: 255 }, { f: 'aa', to: 'nts', dir: 'h', mx: 255 }, { f: 'cb', to: 'nts', dir: 'h', mx: 255 },
        { f: 'nts', to: 'ci', dir: 'h', mx: 470 }, { f: 'nts', to: 'ca', dir: 'h', mx: 470 }, { f: 'nts', to: 'vmc', dir: 'h', mx: 470 },
        { f: 'ci', to: 'san', dir: 'h' }, { f: 'ca', to: 'heart', dir: 'h' }, { f: 'vmc', to: 'ves', dir: 'h' }
      ] },
    txt: {
      cs: { h: 'Carotid sinus', b: ['High-pressure stretch receptor at the carotid bifurcation.', 'Afferent: Hering nerve → glossopharyngeal (CN IX).', 'BP ↓ → it fires LESS (AC79 trap).'] },
      aa: { h: 'Aortic arch baroreceptors', b: ['Afferent: aortic nerve → vagus (CN X).', 'More stretch → sympathetic vasoconstrictor tone ↓ (AC75).'] },
      cb: { h: 'Peripheral chemoreceptors', b: ['Carotid and aortic bodies: sense low O₂, high CO₂ and H⁺.', 'Same nerves as the baroreceptors (CN IX, X).', 'Not to be confused with the carotid sinus.'] },
      nts: { h: 'Nucleus tractus solitarius', b: ['Receives the afferents; excites the cardio-inhibitory centre and inhibits the sympathetic centres when pressure is high.'] },
      ci: { h: 'Cardio-inhibitory centre', b: ['Dorsal motor nucleus of the vagus (and nucleus ambiguus) → vagal output to the heart.'] },
      ca: { h: 'Cardio-accelerator centre', b: ['Rostral ventrolateral medulla → sympathetic chain T1–T4 → heart.'] },
      vmc: { h: 'Vasomotor centre', b: ['Upper medulla / lower pons → sympathetic tone to arterioles and veins.', 'Next to the respiratory centre: chemoreflex also raises breathing.'] },
      san: { h: 'SA and AV node', b: ['Vagus (ACh, I<sub>K-ACh</sub>) → HR ↓, AV conduction ↓.'] },
      heart: { h: 'Heart', b: ['Sympathetic β1 → HR, conduction and contractility ↑.'] },
      ves: { h: 'Arterioles and veins', b: ['Sympathetic α1 → arteriolar constriction (TPR ↑) and venoconstriction (venous return ↑).'] }
    },
    R: {
      fall: { b: 'BP falls (diarrhea, bleeding)', src: 'R3 · R4 · AC79 · AC81', dx: ['less stretch', 'NTS', 'vagus ↓, sympathetic ↑', 'HR ↑, force ↑, constriction'], s: [
        ['cs', 'nts', 'Pressure falls → the carotid sinus stretches less → <b>fewer</b> impulses up CN IX (and CN X from the arch).'],
        ['nts', 'ca', 'The NTS releases its brake on the sympathetic centres and drives the cardio-inhibitory centre less.', ['ci', 'vmc']],
        ['ci', 'san', 'Less vagal output …'],
        ['san', '', '… so the SA node speeds up: HR ↑.'],
        ['ca', 'heart', 'Cardio-accelerator → sympathetic nerves to the heart …'],
        ['heart', '', '… β1: HR and contractility ↑.'],
        ['vmc', 'ves', 'Vasomotor centre → sympathetic vasoconstrictor nerves …'],
        ['ves', '', '… arterioles and veins constrict: TPR and venous return ↑. MAP = CO × TPR rises back toward normal.']] },
      rise: { b: 'BP rises / carotid massage', src: 'R5 · AC75', dx: ['more stretch', 'NTS', 'vagus ↑, sympathetic ↓', 'HR ↓, vessels dilate'], s: [
        ['cs', 'nts', 'Pressure (or massage) stretches the sinus → <b>more</b> impulses to the NTS.'],
        ['nts', 'ci', 'NTS excites the cardio-inhibitory centre and inhibits the vasomotor centre.'],
        ['ci', 'san', 'Vagus slows the SA node and AV conduction → HR ↓.'],
        ['san', '', 'Sympathetic vasoconstrictor tone falls too → TPR ↓ → BP back down.']] },
      chemo: { b: 'Hypoxia / hypercapnia', src: 'R-C3 · R9', dx: ['bodies', 'NTS', 'vasomotor + respiratory centre', 'vasoconstriction, breathing ↑'], s: [
        ['cb', 'nts', 'Low O₂ (or high CO₂, H⁺) excites the carotid and aortic bodies → CN IX, X → NTS.'],
        ['nts', 'vmc', 'NTS drives the vasomotor and respiratory centres.'],
        ['vmc', 'ves', 'Sympathetic vasoconstriction → BP ↑; ventilation rises.'],
        ['ves', '', 'Mainly a respiratory reflex; its pressure effect matters when BP is very low.']] }
    }
  });
