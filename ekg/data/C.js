/* Section C: Cardiophysiology, how the EKG is made.
   Sources: Peer - Physiology of the Heart (p.1-2), t-RAT 2569 / 2568, i-RAT 266-66, AC77, AC80. */
CVS.add({
  id: 'C', short: 'Cardiophysiology', title: 'Cardiophysiology: how the EKG is made', kind: 'Lecture',
  blurb: 'Dipoles and skin electrodes, which cells make which wave, why the T wave is concordant, and where each action-potential phase sits on the tracing.',
  items: [
    { t: 'c', id: 'C-C1', title: 'What a skin electrode sees: the moving dipole', src: 'Peer notes p.1–2 · i-RAT 266-66',
      html: CVS.fig('peer-electrode', 'Tutor sketch: skin electrodes across a strip of muscle — left side depolarized (− outside), right side resting (+ outside).', 'ekg', 1) },
    { t: 'q', id: 'C1', src: 'i-RAT 266-66', core: true,
      q: 'Which of the following statements is true regarding the electrical vector of the ventricular action potential recorded by the potential difference between two electrodes?',
      o: [
        'During depolarization, the depolarization wave is a positive wave because the electrode placed in the depolarized area is relatively positive compared to the recording electrode in the polarized area.',
        'During depolarization, the depolarization wave is a positive wave because the electrode placed in the depolarized area is relatively negative compared to the recording electrode in the polarized area.',
        'During repolarization, the repolarization wave is a positive wave because the electrode placed in the repolarized area is relatively positive compared to the recording electrode in the depolarized area.',
        'During repolarization, the repolarization wave is a negative wave because the electrode placed in the repolarized area is relatively negative compared to the recording electrode in the depolarized area.'
      ],
      a: 1,
      ex: 'Depolarized myocardium is negative on the outside while resting (polarized) myocardium is positive outside. Thus the electrode over the depolarized area is relatively negative compared to the recording (+) electrode in resting tissue, producing a positive wave as depolarization approaches the (+) electrode.' },

    { t: 'c', id: 'C-C2', title: 'Which wave comes from which cells', src: 'Peer notes p.1–2 · t-RAT 2569 · t-RAT 2568 · AC77', html: '' },
    { t: 'q', id: 'C2', src: 't-RAT 2569', core: true,
      q: 'Why is the atrial repolarization wave not visible on the ECG?',
      o: ['Because it occurs too gradually to be detectable', 'Because it occurs too rapidly to be detectable', 'Because it overlaps with the ventricular depolarization wave', 'Because it overlaps with the ventricular repolarization wave'],
      a: 2,
      ex: 'Atrial repolarization happens at the same time as ventricular depolarization, so the large QRS complex completely masks it.' },
    { t: 'q', id: 'C3', src: 't-RAT 2568',
      q: 'Which of the following ion movements is primarily responsible for the T wave observed on the ECG?',
      o: ['Na⁺ influx into ventricular myocytes', 'Na⁺ influx into atrial myocytes', 'K⁺ efflux from ventricular myocytes', 'K⁺ efflux from atrial myocytes'],
      a: 2,
      ex: 'The T wave represents ventricular repolarization (phase 3), driven by K⁺ efflux from ventricular myocytes.' },
    { t: 'q', id: 'C4', src: 'AC77',
      q: 'Inhibiting fast Na Channel at ventricle, what is absent from EKG?',
      o: ['P wave', 'PR segment', 'QRS wave', 'ST segment', 'T wave'],
      a: 2,
      ex: 'Ventricular phase 0 upstroke depends on fast voltage-gated Na⁺ channels, which generate the QRS complex.',
      flag: 'Recall phrasing says "absent". Physiologically, blocking ventricular fast Na⁺ channels slows conduction and widens the QRS; the question tests ventricular phase 0 = QRS.' },

    { t: 'c', id: 'C-C3', title: 'Why the T wave points the same way as the QRS', src: 'Peer notes p.1–2 · i-RAT 266-66',
      html: CVS.fig('peer-endoepi', 'Tutor sketch: inner layer depolarizes first but keeps a longer action potential than the outer wall.', 'ekg', 1) },
    { t: 'q', id: 'C5', src: 'i-RAT 266-66', core: true,
      q: 'Normally, the ventricular repolarization wave is concordant with the ventricular depolarization wave because of which of the following cardiac properties?',
      o: [
        'The action potential duration of the endocardial cells is longer than that of the epicardial cells.',
        'The action potential duration of the epicardial cells is longer than that of the endocardial cells.',
        'The action potential duration is similar in both the endocardial and the epicardial cells.',
        'The repolarization wave is normally discordant with the depolarization wave because depolarization and repolarization occur in the same direction towards or away from the electrode.'
      ],
      a: 0,
      ex: 'Endocardial myocytes depolarize first but have a longer action potential duration, so epicardial cells finish repolarizing first. Repolarization therefore travels epicardium → endocardium (opposite to depolarization), cancelling the sign reversal and making the T wave concordant with the QRS.' },

    { t: 'c', id: 'C-C4', title: 'Action-potential phases and refractory periods', src: 'Peer notes p.2 · t-RAT 2569 · i-RAT 266-66 · AC80', html: '' },
    { t: 'q', id: 'C6', src: 't-RAT 2569', core: true,
      q: 'Which component of the ECG most likely corresponds to phase 4 of the action potential in ventricular muscle cells?',
      o: ['QRS complex', 'ST segment', 'T wave', 'TP segment'],
      a: 3,
      ex: 'Phase 4 is the resting membrane potential between beats, seen as the flat TP segment. QRS = phase 0, ST = phase 2 plateau, T = phase 3.' },
    { t: 'q', id: 'C7', src: 'i-RAT 266-66',
      q: 'Which of the following segments in the EKG most likely contains Phase 3 of the action potential in atrial muscles?',
      o: ['P wave', 'QRS complex', 'T wave', 'ST segment'],
      a: 1,
      ex: 'Atrial phase 3 (atrial repolarization) occurs simultaneously with ventricular depolarization and is hidden inside the QRS complex.' },
    { t: 'q', id: 'C8', src: 'AC80',
      q: 'Which part of ECG wave is the absolute refractory period in a cardiac cycle?',
      o: ['P wave', 'PR interval', 'ST segment', 'T wave', 'RR interval'],
      a: 2,
      ex: 'Official AC80 key: C (ST segment). Ventricular absolute refractory period spans phase 0 through the phase 2 plateau (ST segment) into early phase 3; among the choices, the ST segment lies wholly within the ARP.',
      flag: 'ARP spans QRS + ST segment up to roughly the peak of T; the T wave itself is mostly relative refractory. AC80 key picks ST segment as the cleanest match.' }
  ]
});
