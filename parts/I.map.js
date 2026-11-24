  /* ---------- I-C5 · Cardiovascular imaging modality selection ---------- */
  add('i_modal', {
    title: 'Choosing the right cardiovascular imaging modality', src: 'Imaging p.5–68',
    hint: 'Click a box, or pick a clinical scenario and press Next step.',
    idle: 'Match the clinical keyword to the modality: bedside + real-time → Echo · 3D coronary → CT · MI scar / volumes → MRI · stenting / DSA → Angiography.',
    def: { name: 'i_modal', W: 940, H: 310, label: 'Cardiovascular imaging modality decision map',
      N: [
        { id: 'q1', k: 'st', x: 250, y: 10, w: 440, h: 54, t: ['Clinical Question / Keyword'], s: ['Initial screen · bedside live · 3D coronary · MI scar · intervention'] },
        { id: 'cxr', k: 'leaf', x: 10, y: 112, w: 172, h: 82, t: ['Plain CXR (PA)'], s: ['Initial screen', 'CTR <50%, borders', 'PAH vs PVH'] },
        { id: 'echo', k: 'leaf', x: 196, y: 112, w: 176, h: 82, t: ['Echocardiography'], s: ['Bedside & real-time', 'Wall/valve motion', 'No radiation'] },
        { id: 'ct', k: 'leaf', x: 386, y: 112, w: 170, h: 82, t: ['Cardiac CT'], s: ['3D coronary tree', 'Aorta & calcium', 'Radiation + contrast'] },
        { id: 'mri', k: 'leaf', x: 570, y: 112, w: 172, h: 82, t: ['Cardiac MRI'], s: ['Gold-std EF & scar', 'Function/structure', 'No radiation'] },
        { id: 'angio', k: 'leaf', x: 756, y: 112, w: 174, h: 82, t: ['Angiography / DSA'], s: ['Femoral/radial cath', 'DSA = B − A', 'Same-session stent'] },
        { id: 'norad', k: 'q', x: 160, y: 234, w: 620, h: 56, t: ['Zero-ionizing-radiation pair: Echocardiography + Cardiac MRI'], s: ['Short-axis plane measures ventricular mass, EDV, ESV, SV and EF'] }
      ],
      E: [
        { f: 'q1', to: 'cxr', dir: 'v' }, { f: 'q1', to: 'echo', dir: 'v' },
        { f: 'q1', to: 'ct', dir: 'v' }, { f: 'q1', to: 'mri', dir: 'v' },
        { f: 'q1', to: 'angio', dir: 'v' },
        { f: 'echo', to: 'norad', dir: 'v', dash: 1 }, { f: 'mri', to: 'norad', dir: 'v', dash: 1 }
      ] },
    txt: {
      q1: { h: 'Match clinical keywords to the right modality', b: ['Bedside + real-time → Echo; initial screen/CTR → PA CXR; 3D coronary → CT; MI scar/volumes → MRI; diagnosis + stent → Angiography.'] },
      cxr: { h: 'Plain chest radiograph (PA upright)', b: ['First-line cardiopulmonary screen; evaluates CTR (<50% adult), PA/lateral contours, valves (PAMT), and PAH vs PVH.'] },
      echo: { h: 'Echocardiography', b: ['Portable bedside, real-time contraction/valve motion, pericardial effusion, zero radiation (AC81 Q1, AC80 Q5).'] },
      ct: { h: 'Cardiac CT / MDCT', b: ['3 standard planes + 3D coronary artery reconstruction, calcium score, plaque/thrombus; uses X-ray + contrast.'] },
      mri: { h: 'Cardiac MRI', b: ['Zero ionizing radiation; gold standard for ventricular function/volumes and myocardial infarction scar; slow and non-portable.'] },
      angio: { h: 'Angiography & DSA', b: ['Femoral/radial catheter under fluoroscopy; DSA (B − A) removes bone; enables same-session angioplasty/stenting.'] },
      norad: { h: 'Zero radiation + short-axis rule', b: ['Echo and MRI avoid ionizing radiation; short-axis cross-section quantifies EDV, ESV, SV, EF, and ventricular mass.'] }
    },
    R: {
      bedside: { b: 'Chest pain: bedside, real-time', src: 'I9 · I10 · AC81 Q1 · AC80 Q5', dx: ['Bedside + real-time', 'Echocardiography (no radiation)'], s: [
        ['q1', 'echo', 'Stem requires BOTH bedside portability and real-time dynamic imaging.'],
        ['echo', 'norad', '<b>Echocardiography</b> evaluates wall motion, valves, and effusion live at the bedside.'],
        ['norad', '', 'Zero ionizing radiation — unlike CT or fluoroscopy.']] },
      coronary: { b: 'Non-invasive 3D coronary tree', src: 'Imaging p.54–55', dx: ['3D coronary CTA', 'Cardiac CT'], s: [
        ['q1', 'ct', 'Need 3D coronary artery reconstruction, calcium score, and aortic sizing.'],
        ['ct', '', '<b>Cardiac CT</b> gives crisp coronary anatomy (uses ionizing radiation + IV contrast).']] },
      scar: { b: 'Myocardial scar & gold-std EF', src: 'Imaging p.59', dx: ['MI scar + volumes', 'Cardiac MRI (no radiation)'], s: [
        ['q1', 'mri', 'Need to depict infarction scar and gold-standard ventricular volumes.'],
        ['mri', 'norad', '<b>Cardiac MRI</b> shows myocardial scar with zero ionizing radiation.'],
        ['norad', '', 'Short-axis cine slices give gold-standard EDV, ESV, SV, and EF.']] },
      stent: { b: 'Diagnosis + same-session stent', src: 'Imaging p.62–68', dx: ['Catheter access', 'Angiography / DSA + PCI'], s: [
        ['q1', 'angio', 'Femoral or radial catheterization under fluoroscopy with iodinated contrast.'],
        ['angio', '', '<b>Coronary angiography</b> performs angioplasty, stenting, or thrombectomy in the same session.']] }
    }
  });
