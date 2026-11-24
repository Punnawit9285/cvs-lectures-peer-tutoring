/* Section P: Physical Examination of the Vascular System & Heart PE Lab (Physical Examination of vascular system_Thana_2026.pdf, 10p + AC77-81 PE MCQs). */
CVS.add({
  id: 'P',
  short: 'Vascular PE',
  title: 'Physical Examination of the Cardiovascular System',
  kind: 'Lab',
  blurb: 'Neck vessel anatomy and differentiating JVP from the carotid pulse, measuring JVP to estimate CVP and volume status, JVP waveform correlation (a, c, x, v, y), arterial pulse sites and contours, and bedside cardiac auscultation.',
  items: [
    /* ---------- P-C1 ---------- */
    {
      t: 'c', id: 'P-C1',
      title: 'Neck vessels: differentiating JVP from the carotid pulse',
      src: 'Examination of Blood Vessels p.2–4',
      html: CVS.fig('p-neck-anat', 'Surface anatomy of jugular veins and carotid sheath in the neck.', 'pevasc', 3) +
            CVS.ans(CVS.fig('p-jvp-table', 'Bedside features separating venous from arterial neck pulsations.', 'pevasc', 4), 'Comparison table (shows answers)')
    },
    {
      t: 'q', id: 'P1', core: true, keep: true, src: 'AC81',
      q: 'In physical examination, what is the best vein to measure jugular venous pressure?',
      o: [
        'Right internal jugular vein',
        'Left internal jugular vein',
        'Right external jugular vein',
        'Left external jugular vein',
        'Superior vena cava'
      ],
      a: 0,
      ex: 'The right internal jugular vein (RIJV) runs in a straight, valveless line via the right brachiocephalic vein and SVC into the right atrium, acting as the most accurate direct manometer of RA pressure.'
    },
    {
      t: 'open', id: 'P2', core: true, src: 'AC81',
      q: 'In patients with increased RA pressure, which examination can be used to determine the said condition?',
      ans: 'Increased jugular venous distension (JVD: JVP > 3–4 cm above the sternal angle at 30–45°, CVP > 8–10 cmH₂O).',
      ex: 'Elevated right atrial pressure transmits directly upward into the right internal jugular vein, producing visible jugular venous distension.',
      flag: 'AC81 recall: Only the keyed choice A ("Increased jugular distension") was recalled in the AC81 MCQ sheet, so this item is presented as a recall question.'
    },
    {
      t: 'q', id: 'P3', keep: true, src: 'AC78',
      q: 'Which of the following is true regarding the physical examination of the heart?',
      o: [
        'Cyanosis and edema may not be the result of heart failure',
        'A heart murmur always indicates severe valvular disease',
        'Jugular venous distension is a sign of left-sided heart failure',
        'Hepatojugular reflux is a sign of decreased cardiac output',
        'Orthopnea is a sign of right-sided heart failure'
      ],
      a: 0,
      ex: 'Cyanosis (e.g., lung disease) and edema (e.g., renal/hepatic/venous insufficiency) have non-cardiac causes. Traps: JVD and hepatojugular reflux reflect right-sided HF / elevated RA pressure, while orthopnea reflects left-sided HF (pulmonary congestion).'
    },

    /* ---------- P-C2 ---------- */
    {
      t: 'c', id: 'P-C2',
      title: 'Venous exam: JVP measurement, CVP &amp; volume status',
      src: 'Examination of Blood Vessels p.7–8',
      html: CVS.ans(CVS.fig('p-jvp-measure', 'Patient angle and vertical reference above the manubriosternal joint.', 'pevasc', 7), 'JVP measurement & CVP equation (shows answers)')
    },
    {
      t: 'q', id: 'P4', keep: true, src: 'AC78',
      q: 'Which of the following is a classic sign of cardiac tamponade?',
      o: [
        'Pulsus paradoxus',
        'Increased stroke volume',
        'Left-sided heart failure',
        'Widened pulse pressure',
        'Bradycardia'
      ],
      a: 0,
      ex: 'Cardiac tamponade causes pulsus paradoxus (an inspiratory drop in systolic BP > 10 mmHg), along with Beck’s triad (hypotension, elevated JVP/distended neck veins, muffled heart sounds).'
    },

    /* ---------- P-C3 ---------- */
    {
      t: 'c', id: 'P-C3',
      title: 'Neck venous waveform &amp; cardiac cycle link',
      src: 'Examination of Blood Vessels p.8–9',
      html: CVS.ans(CVS.fig('p-jvp-wave', 'Positive waves and descents of the venous pulse across the cycle.', 'pevasc', 8), 'Labeled JVP waveform (shows answers)') +
            CVS.fig('p-wiggers', 'Simultaneous arterial, ventricular, atrial pressure, ECG, and heart sounds.', 'pevasc', 9)
    },
    {
      t: 'q', id: 'P5', core: true, keep: true, src: 'AC79',
      q: 'The “A” wave of venous pulsation in the neck correlates with which of the following events?',
      o: [
        'Ventricular systole',
        'Atrial systole',
        'Atrial relaxation',
        'Atrial filling',
        'Tricuspid valve closure'
      ],
      a: 1,
      ex: 'The a wave is produced by right atrial contraction (atrial systole) just before S1 (absent in atrial fibrillation). c = tricuspid bulging in isovolumic contraction; x = atrial relaxation; v = passive atrial filling against closed TV; y = TV opening.'
    },
    {
      t: 'q', id: 'P6', core: true, keep: true, src: 'AC80',
      q: 'An abnormal heart sound (unlikely a murmur) is heard just before the carotid pulse. What might be the cause of the sound?',
      o: [
        'Rapid ventricular filling',
        'Ventricular ejection',
        'Atrioventricular valves open',
        'Atrioventricular valves close',
        'Semilunar valves close'
      ],
      a: 3,
      ex: 'The carotid arterial pulse coincides with ventricular systole (between S1 and S2). A sound heard just before the carotid pulse is S1, caused by closure of the atrioventricular (mitral and tricuspid) valves.'
    },

    /* ---------- P-C4 ---------- */
    {
      t: 'c', id: 'P-C4',
      title: 'Arterial exam: pulse sites, contours &amp; heart auscultation',
      src: 'Examination of Blood Vessels p.5–6 &amp; Heart PE lab',
      html: CVS.fig('p-arterial', 'Palpation landmarks and neck auscultation technique.', 'pevasc', 5) +
            CVS.ans(CVS.fig('p-contours', 'Normal and pathological arterial pulse wave shapes.', 'pevasc', 6), 'Arterial contour waveforms (shows answers)')
    },
    {
      t: 'q', id: 'P7', core: true, keep: true, src: 'AC81, AC77',
      q: 'A patient presents with chest discomfort. Upon physical examination, a murmur is heard at left, second intercostal space, simultaneously with the carotid pulse. What is the most likely diagnosis?',
      o: [
        'Pulmonary stenosis',
        'Pulmonary regurgitation',
        'Mitral valve stenosis',
        'Mitral valve regurgitation',
        'Aortic stenosis'
      ],
      a: 0,
      ex: 'Simultaneous with the carotid pulse = systolic murmur; left 2nd ICS = pulmonic area → pulmonary stenosis (ejection systolic murmur; also tested in AC77 Q15 & Q18).'
    },
    {
      t: 'q', id: 'P8', core: true, keep: true, src: 'AC80',
      q: 'A patient presents with fatigue and chest discomfort. Physical examination reveals a diastolic murmur which can be best heard at the left 5th intercostal space, parasternal border. What is the most likely diagnosis?',
      o: [
        'Tricuspid stenosis',
        'Mitral regurgitation',
        'Pulmonic stenosis',
        'Aortic regurgitation',
        'Tricuspid regurgitation'
      ],
      a: 0,
      ex: 'Left 5th ICS parasternal border is the tricuspid area; a diastolic murmur here indicates tricuspid stenosis (contrast with mitral stenosis at the left 5th ICS midclavicular line / apex).'
    },
    {
      t: 'q', id: 'P9', keep: true, src: 'AC80',
      q: 'A medical student learned about physical examination of the heart. When she returns home, she tries to conduct a physical examination on her father who has essential hypertension. She found that his PMI is 1 cm lateral to the midclavicular line, 5th intercostal space. What is the pathophysiology of hypertension?',
      o: [
        'Atrial fibrillation',
        'Increased afterload',
        'Increased preload',
        'Increased cardiac output',
        'Increased stroke volume'
      ],
      a: 1,
      ex: 'Lateral displacement of the PMI indicates left ventricular enlargement/cardiomegaly. In essential hypertension, chronic pressure overload = increased afterload driving LV hypertrophy.'
    },
    {
      t: 'q', id: 'P10', keep: true, src: 'AC77, AC79',
      q: 'ข้อใดถูกต้องเกี่ยวกับการตรวจหัวใจ <span class="gloss">(Which statement is correct regarding physical examination of the heart?)</span>',
      o: [
        'Palpation สามารถบอก right ventricular hypertrophy ได้',
        'Percussion สามารถบอก constrictive pericarditis ได้',
        'การฟัง stethoscope ใช้ด้าน diaphragm ในการฟังเสียง high pitch',
        'การสังเกต cyanosis แสดงว่ามีความผิดปกติที่หัวใจ',
        'Point of maximal impulse อยู่ที่จุดตัดของ 5th intercostal space กับ mid axillary line'
      ],
      a: 2,
      ex: 'The diaphragm detects high-pitched sounds (S1, S2, AR/MR murmurs), whereas the bell detects low-pitched sounds (S3, S4, MS rumble, carotid bruit). Traps: normal PMI is at the midclavicular (not mid-axillary) line; cyanosis is not exclusively cardiac.'
    },
    {
      t: 'q', id: 'P11', keep: true, src: 'AC78',
      q: 'A patient presents with a pansystolic murmur heard at the point of maximal impulse (PMI). Which of the following is the most likely diagnosis?',
      o: [
        'Aortic stenosis',
        'Pulmonary regurgitation',
        'Tricuspid regurgitation',
        'Tricuspid stenosis',
        'Mitral regurgitation'
      ],
      a: 4,
      ex: 'The PMI (5th ICS, left midclavicular line) is the mitral auscultation area; a pansystolic (holosystolic) murmur radiating to the axilla is classic for mitral regurgitation.'
    }
  ]
});
