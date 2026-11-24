/* Section I: Radiologic Anatomy / Imaging of Cardiovascular System (11 Imaging of Cardiovascular System.pdf, 79p). */
CVS.add({
  id: 'I',
  short: 'Imaging',
  title: 'Imaging of the Cardiovascular System',
  kind: 'Lecture',
  blurb: 'PA vs lateral vs AP chest radiographs, cardiothoracic ratio, cardiac borders and chamber enlargement, PAMT valve projections, PAH vs PVH vascular patterns, axial MDCT levels T3–T9, cardiac planes/modalities, and angiography/DSA.',
  items: [
    /* ---------- I-C1 ---------- */
    {
      t: 'c', id: 'I-C1',
      title: 'Chest radiography projections &amp; CTR',
      src: 'Imaging of CVS p.5–10',
      html: CVS.fig('i-cxr-views', 'Standard two-view upright chest radiographs.', 'imaging', 8) +
            CVS.ans(CVS.fig('i-ctr', 'Measurement method and normal upper limits of heart-to-chest width.', 'imaging', 10), 'CTR measurement & cut-offs (shows answers)')
    },

    /* ---------- I-C2 ---------- */
    {
      t: 'c', id: 'I-C2',
      title: 'Cardiac contours &amp; chamber enlargement (PA vs lateral)',
      src: 'Imaging of CVS p.11–20',
      html: CVS.ans(CVS.fig('i-pa-contours', 'Right and left mediastinal/cardiac borders on frontal radiograph.', 'imaging', 13), 'PA border labels (shows answers)') +
            CVS.ans(CVS.fig('i-lat-contours', 'Anterior and posterior silhouettes on left lateral view.', 'imaging', 15), 'Lateral border labels (shows answers)') +
            CVS.fig('i-chambers', 'Radiographic signs of isolated chamber enlargement.', 'imaging', 20)
    },
    {
      t: 'q', id: 'I1', core: true, keep: true, src: 'AC81',
      q: 'Which of the following structures can be seen in plain film with the PA upright view?',
      o: [
        'Tricuspid valve',
        'Right ventricle',
        'Left atrium',
        'Right atrium',
        'Mitral valve'
      ],
      a: 3,
      ex: 'The right atrium forms the right lower cardiac border on a PA upright CXR. RV (most anterior) and LA (most posterior) form borders on the lateral view, not normally on PA. Normal valves are radiolucent unless calcified or prosthetic.'
    },
    {
      t: 'q', id: 'I2', core: true, keep: true, src: 'AC81',
      q: 'A patient has an enlarged structure A when looked at on plain film. In a normal PA upright X-ray, what is the affected structure?',
      fig: CVS.fig('ac81-i-q5', 'PA upright chest radiograph with right upper mediastinal border marked A.', 'ac81', 9),
      o: [
        'Left subclavian artery',
        'Aortic arch',
        'Superior vena cava',
        'Right atrium',
        'Left atrial appendage'
      ],
      a: 2,
      ex: 'Structure A (straight upper right mediastinal border) is the superior vena cava (SVC). Below it on the right are RA (red) and IVC (green); on the left from top down are left subclavian a., aortic knob, pulmonary trunk, LAA, and LV.'
    },
    {
      t: 'q', id: 'I3', core: true, keep: true, src: 'AC80',
      q: 'A 50-year-old woman presents with shortness of breath. The doctor suspects pulmonary trunk enlargement. Which structure in the following picture (normal x-ray film) is affected?',
      fig: CVS.fig('ac80-i-q1', 'Normal PA chest radiograph with mediastinal borders labeled A–E.', 'ac80', 4),
      o: ['A', 'B', 'C', 'D', 'E'],
      a: 4,
      ex: 'On the left border from top to bottom: C = left subclavian artery, D = aortic arch (knob), E = pulmonary trunk (main PA). On the right: A = SVC, B = right atrium.'
    },

    /* ---------- I-C3 ---------- */
    {
      t: 'c', id: 'I-C3',
      title: 'Cardiac valve projections &amp; pulmonary vascular patterns',
      src: 'Imaging of CVS p.21–31',
      html: CVS.fig('i-valves', 'Anatomic projection of the four heart valves on PA and lateral views.', 'imaging', 22) +
            CVS.fig('i-pah', 'Central arterial dilation with peripheral vessel tapering.', 'imaging', 26) +
            CVS.fig('i-pvh', 'Prominent upper-lobe pulmonary veins.', 'imaging', 27)
    },
    {
      t: 'q', id: 'I4', core: true, keep: true, src: 'AC80',
      q: 'What is the valve located in the 4th intercostal space, behind the sternum?',
      o: [
        'Mitral valve',
        'Tricuspid valve',
        'Aortic valve',
        'Pulmonary valve',
        'Thebesian valve'
      ],
      a: 1,
      ex: 'Remember P-A-M-T at T6-T7-T8-T9 alternating SCJ / ICS: Pulmonic = 3rd SCJ (T6), Aortic = 3rd ICS (T7), Mitral = 4th SCJ (T8), Tricuspid = 4th ICS behind sternum (T9).'
    },

    /* ---------- I-C4 ---------- */
    {
      t: 'c', id: 'I-C4',
      title: 'Axial cross-sectional thoracic anatomy (T3–T9)',
      src: 'Imaging of CVS p.33–43',
      html: CVS.fig('i-ct-t3', 'Axial post-contrast MDCT at the five-vessel level.', 'imaging', 36) +
            CVS.fig('i-ct-t5', 'Axial post-contrast MDCT at the main pulmonary artery level.', 'imaging', 39) +
            CVS.fig('i-ct-t8', 'Axial post-contrast MDCT at the low cardiac levels.', 'imaging', 43)
    },
    {
      t: 'q', id: 'I5', core: true, keep: true, src: 'AC81',
      q: 'A lesion is discovered at the left subclavian artery. In a normal CT scan, which of the following is the affected structure?',
      fig: CVS.fig('ac81-i-q4', 'Axial CT at the five-vessel (T3) level with vessels labeled A–E.', 'ac81', 9),
      o: ['A', 'B', 'C', 'D', 'E'],
      a: 4,
      ex: 'At the T3 five-vessel level: A = right brachiocephalic vein, B = brachiocephalic trunk, C = left brachiocephalic vein, D = left common carotid artery, E = left subclavian artery (most posterior and leftmost arch branch).'
    },
    {
      t: 'q', id: 'I6', core: true, keep: true, src: 'AC80',
      q: '(Given patient history) Identify the ascending aorta.',
      fig: CVS.fig('ac80-i-q2', 'Axial cadaveric section at T5 with great vessels labeled A–E.', 'ac80', 5),
      o: ['A', 'B', 'C', 'D', 'E'],
      a: 1,
      ex: 'At T5, draw a midline from sternum to spine: B = ascending aorta (large central vessel just anterior to carina/bronchi), A = SVC (to its right), C = pulmonary trunk (anterior-left), D = descending aorta (left of T5), E = esophagus/azygos region.'
    },
    {
      t: 'q', id: 'I7', keep: true, src: 'AC80',
      q: 'According to patient history, identify the superior vena cava.',
      fig: CVS.fig('ac80-i-q3', 'Axial post-contrast CT at T5 with structures labeled A–E.', 'ac80', 5),
      o: ['A', 'B', 'C', 'D', 'E'],
      a: 3,
      ex: 'On this T5 CT: D = SVC (bright contrast bolus on the right side of the ascending aorta), C = ascending aorta (center), A = pulmonary trunk bifurcating into LPA/RPA, B = descending aorta (left paravertebral), E = right hilar/azygos vessel.'
    },
    {
      t: 'q', id: 'I8', core: true, keep: true, src: 'AC81',
      q: 'A patient is found to have a lesion at the right atrium. Where in the cross section (T8 level) is this affected structure located?',
      fig: CVS.fig('ac81-i-q3', 'Axial cadaveric section at T8 with structures labeled A–E.', 'ac81', 8),
      o: ['A', 'B', 'C', 'D', 'E'],
      a: 0,
      ex: 'At T8 (standard radiological orientation — viewer’s left = patient’s right): A = right atrium (rightmost chamber), B = right ventricle (most anterior behind sternum), C = left ventricle (thick-walled left), D = left atrium (most posterior chamber), E = esophagus anterior to T8.'
    },

    /* ---------- I-C5 ---------- */
    {
      t: 'c', id: 'I-C5',
      title: 'Cardiac imaging planes &amp; modality choice (CT, Echo, MRI)',
      src: 'Imaging of CVS p.44–60',
      html: CVS.fig('i-planes', 'Ventricular cross-sectional plane used for volume and ejection fraction.', 'imaging', 49) +
            CVS.fig('i-ct3d', 'Three-dimensional coronary artery reconstruction on multidetector CT.', 'imaging', 55) +
            CVS.fig('i-echo', 'Ultrasound imaging of cardiac chambers, valves, and flow.', 'imaging', 57)
    },
    {
      t: 'q', id: 'I9', core: true, keep: true, src: 'AC81',
      q: 'A 55-year-old male patient presents with chest pain. Which of the following techniques should be used to acquire bedside, real-time imaging?',
      o: [
        'Cardiac MRI',
        'Plain film',
        'Echocardiography',
        'CT scan'
      ],
      a: 2,
      ex: 'Echocardiography is the only modality that is both bedside (portable) and real-time (live wall motion, valve opening/closing, pericardial effusion) with zero ionizing radiation.'
    },
    {
      t: 'q', id: 'I10', keep: true, src: 'AC80',
      q: 'What is the advantage of echocardiography?',
      o: [
        '3D view',
        'Superior spatial resolution',
        'Real time',
        'Blood perfusion'
      ],
      a: 2,
      ex: 'Echocardiography uniquely provides real-time dynamic imaging of myocardial contraction and heart valve motion at the bedside.'
    },

    /* ---------- I-C6 ---------- */
    {
      t: 'c', id: 'I-C6',
      title: 'Angiography, digital subtraction (DSA) &amp; coronary/aortic trees',
      src: 'Imaging of CVS p.61–77',
      html: CVS.fig('i-dsa', 'Pre-subtraction angiogram versus subtracted vascular image.', 'imaging', 65) +
            CVS.fig('i-coronary', 'Left and right coronary arterial trees on fluoroscopy.', 'imaging', 68) +
            CVS.fig('i-aortogram', 'Thoracic aortogram displaying the great-vessel branches.', 'imaging', 69)
    }
  ]
});
