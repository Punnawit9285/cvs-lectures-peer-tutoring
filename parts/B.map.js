  /* ---------- B-C3 · Autonomic & drug targets on cardiac Ca2+ handling ---------- */
  add('b_pka', {
    title: 'Cardiac Ca²⁺ handling: autonomic & drug targets', src: 'Biochemistry p.37–44',
    hint: 'Click a box, or pick a clinical/exam pathway and press Next step.',
    idle: 'Compare β₁–cAMP–PKA (both +inotropy and +lusitropy) against cardiac glycosides (+inotropy & vagal −chronotropy), M₂–Gi, CCBs, and α₁–Gq–IP₃R.',
    def: { name: 'b_pka', W: 940, H: 360, label: 'Autonomic and drug targets on cardiomyocyte calcium handling',
      N: [
        { id: 'q1', k: 'st', x: 260, y: 10, w: 420, h: 56, t: ['Signal / Drug Target'], s: ['β₁–Gs vs Na⁺/K⁺ pump vs M₂–Gi vs DHPR2 vs α₁–Gq'] },
        { id: 'beta', k: 'q', x: 14, y: 112, w: 224, h: 60, t: ['β₁ / β₂ (Gs) → cAMP → PKA'], s: ['Epinephrine / NE'] },
        { id: 'dig', k: 'q', x: 260, y: 112, w: 214, h: 60, t: ['Inhibit Na⁺/K⁺-ATPase'], s: ['Digoxin / Foxglove / Lily'] },
        { id: 'm2', k: 'leaf', x: 496, y: 112, w: 190, h: 60, t: ['M₂ (Gi) → ↓cAMP'], s: ['ACh / Adenosine → ↓force'] },
        { id: 'ccb', k: 'leaf', x: 708, y: 112, w: 216, h: 60, t: ['Block DHPR2 (L-type)'], s: ['Phase 2 ↓Ca²⁺ influx (DHP)'] },
        { id: 'ino', k: 'leaf', x: 14, y: 236, w: 204, h: 74, t: ['DHPR2 & RyR2 -P'], s: ['↑Ca²⁺ influx & SR release', '→ +Inotropy'] },
        { id: 'lus', k: 'leaf', x: 234, y: 236, w: 218, h: 74, t: ['PLB & TnI -P'], s: ['SERCA freed + ↓TnC affinity', '→ +Lusitropy (+ ↑SR load)'] },
        { id: 'ncx', k: 'leaf', x: 470, y: 236, w: 218, h: 74, t: ['↑[Na⁺]ᵢ → ↓NCX efflux'], s: ['↑SR Ca²⁺ → +Inotropy', '(+ vagal −Chronotropy)'] },
        { id: 'a1', k: 'leaf', x: 708, y: 236, w: 216, h: 74, t: ['α₁ (Gq) → PLC → IP₃R'], s: ['NOT cAMP–PKA pathway', '(AC81 Q1 key)'] }
      ],
      E: [
        { f: 'q1', to: 'beta', dir: 'v' }, { f: 'q1', to: 'dig', dir: 'v' },
        { f: 'q1', to: 'm2', dir: 'v' }, { f: 'q1', to: 'ccb', dir: 'v' },
        { f: 'beta', to: 'ino', dir: 'v' }, { f: 'beta', to: 'lus', dir: 'v' },
        { f: 'dig', to: 'ncx', dir: 'v' }, { f: 'q1', to: 'a1', dir: 'v', dash: 1 }
      ] },
    txt: {
      q1: { h: 'Choose the receptor or transporter target', b: ['Separates β₁–cAMP–PKA (+inotropy AND +lusitropy) from cardiac glycosides (+inotropy & −chronotropy), M₂ (−inotropy), CCBs (phase 2), and α₁–IP₃R.'] },
      beta: { h: 'β₁ / β₂ (Gs) → Adenylyl cyclase → cAMP → PKA', b: ['The only pathway that boosts BOTH contraction force and relaxation speed together.'] },
      dig: { h: 'Na⁺/K⁺-ATPase inhibition', b: ['Selective target of digoxin, Foxglove (digitalis), Lily of the Valley (convallarin), Cerbera, and Oleander.'] },
      m2: { h: 'M₂ (Gi) → ↓cAMP', b: ['ACh and adenosine antagonize sympathetic β₁–cAMP signaling, reducing contractility.'] },
      ccb: { h: 'L-type Ca²⁺ channel (DHPR2) block', b: ['Decreases phase 2 Ca²⁺ influx → smaller CICR trigger (AC81 Q2).'] },
      ino: { h: 'Positive inotropy (DHPR2 & RyR2)', b: ['More trigger Ca²⁺ enters via DHPR2 and more SR Ca²⁺ releases via RyR2 → stronger contraction.'] },
      lus: { h: 'Positive lusitropy (PLB & TnI)', b: ['PLB-P dissociates from SERCA (faster SR reuptake + higher SR Ca²⁺ load); TnI-P lowers TnC affinity for Ca²⁺.'] },
      ncx: { h: '↑[Na⁺]ᵢ → ↓NCX → ↑SR Ca²⁺', b: ['Reduced Na⁺ gradient slows Ca²⁺ extrusion via NCX → higher SR Ca²⁺ (+inotropy); central vagal tone slows HR (−chronotropy).'] },
      a1: { h: 'α₁–Gq–PLC–IP₃R (NOT cAMP–PKA)', b: ['Releases Ca²⁺ via IP₃R independently of cAMP–PKA (AC81 Q1 recall).'] }
    },
    R: {
      epi: { b: 'Catecholamine (+ino & +lusi)', src: 'B6 · AC81 Q3 · AC78 Q9', dx: ['β₁–Gs', 'PKA', 'DHPR2/RyR2 (+ino) + PLB/TnI (+lusi)'], s: [
        ['q1', 'beta', 'Catecholamine binds β₁–Gs → activates adenylyl cyclase → ↑cAMP → PKA.'],
        ['beta', 'ino', 'PKA phosphorylates DHPR2 & RyR2 → ↑Ca²⁺ influx & SR release (+inotropy).', ['lus']],
        ['lus', '', 'PKA also phosphorylates PLB (frees SERCA) & TnI → faster relaxation = <b>both +inotropy and +lusitropy</b>.']] },
      dig: { b: 'Digoxin / Lily of the Valley', src: 'B12–B15 · AC77 · AC80 · AC81', dx: ['Na⁺/K⁺-ATPase ↓', '↑[Na⁺]ᵢ', '↓NCX', '+inotropy & −chronotropy'], s: [
        ['q1', 'dig', 'Cardiac glycoside (digoxin, convallarin in Lily of the Valley) selectively inhibits Na⁺/K⁺-ATPase.'],
        ['dig', 'ncx', 'Intracellular [Na⁺] rises → weakens the Na⁺ gradient driving NCX.'],
        ['ncx', '', 'Less Ca²⁺ extruded → ↑SR Ca²⁺ load = <b>+inotropy</b> (+ brainstem vagal tone = <b>−chronotropy</b>).']] },
      ccb: { b: 'Amlodipine (DHP CCB)', src: 'B2 · AC81 Q2', dx: ['DHPR2 block', 'Phase 2 ↓Ca²⁺ influx'], s: [
        ['q1', 'ccb', 'Dihydropyridine analog binds the slow L-type Ca²⁺ channel (DHPR2).'],
        ['ccb', '', '<b>Phase 2: decrease Ca²⁺ influx via slow calcium channel</b>.']] },
      ip3: { b: 'NOT affected by cAMP–PKA', src: 'B5 · AC81 Q1', dx: ['α₁–Gq–PLC', 'IP₃R (NOT PKA)'], s: [
        ['q1', 'a1', 'cAMP–PKA hits DHPR2, RyR2, PLB, and TnI — NOT the α₁–Gq–IP₃R calcium release channel.'],
        ['a1', '', 'AC81 Q1 keys <b>Calcium release channel (IP₃R)</b> as outside cAMP–PKA.']] }
    }
  });
