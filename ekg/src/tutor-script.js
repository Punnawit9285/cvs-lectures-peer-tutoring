/* Tutor recording script: 5-video plan, per-section 80% summaries, and SAY lines for every concept card and core question. */
window.TUTOR_SCRIPT = {
  plan: [
    ['Video 1', ['C'], 'Dipoles, waves by ion current, concordant T wave & AP phases', '~18 min'],
    ['Video 2', ['W'], 'Waves/segments/intervals, normal cut-offs, cardiac cycle & ANS', '~25 min'],
    ['Video 3', ['L'], 'Bipolar & augmented limb leads, hexaxial wheel & lead swaps', '~20 min'],
    ['Video 4', ['R'], 'Paper standardization, 1500 rule, speed traps & AFib counting', '~20 min'],
    ['Video 5', ['A', 'E'], 'QRS axis flowcharts, V1–V6, sinus rhythm, AV blocks & 12-lead review', '~35 min']
  ],
  sec: {
    C: {
      part: 'Video 1', time: '~18 min',
      open: 'Before memorizing ECG rules, let’s understand what the skin electrode actually sees — four short concepts explain every wave.',
      u: [
        'The ECG measures skin potential differences created by a moving dipole, not a single cell’s transmembrane voltage.',
        'Outside resting myocytes is positive; outside depolarized myocytes is negative. Depolarization moving toward a (+) pole draws an upward wave.',
        'Atrial depolarization makes P, ventricular fast Na⁺ influx makes QRS, ventricular K⁺ efflux makes T, and atrial repolarization is hidden inside QRS.',
        'Endocardium depolarizes first but has a longer AP duration, so epicardium repolarizes first (epi → endo), making the T wave concordant with QRS.',
        'Map the ventricular AP onto the tracing: phase 0 = QRS, phase 2 plateau = ST segment (inside ARP), phase 3 = T wave, phase 4 = TP segment.'
      ],
      say: {
        'C-C1': 'Remember the golden rule: outside a depolarized cell is negative, so a depolarization wave heading toward the positive electrode draws an upward deflection.',
        'C1': 'Let’s test that dipole sign directly on i-RAT Q1 — check which area is relatively negative on the outside.',
        'C-C2': 'Now match each wave to its cells and ion current, and notice what is too small or too hidden to see.',
        'C2': 'Classic TBL question: why don’t we see an atrial repolarization wave? Because the huge QRS overlaps and hides it.',
        'C-C3': 'Here is why the T wave normally points the same way as the QRS: two reversals — direction and sign — cancel out.',
        'C5': 'On i-RAT Q2, look for the exact reason repolarization runs outside-in: endocardial action potential duration is longer.',
        'C-C4': 'Finally, line up ventricular AP phases 0, 2, 3 and 4 with QRS, ST, T and TP — and know where the absolute refractory period sits.',
        'C6': 'Phase 4 is resting potential between beats, which is the flat TP segment — not the T wave and not the ST plateau.'
      }
    },
    W: {
      part: 'Video 2', time: '~25 min',
      open: 'Now let’s name every wave, segment and interval, memorize the exact normal cut-offs the exam checks, and tie the ECG to the cardiac cycle.',
      u: [
        'Wave = deflection, segment = flat line between waves (PR, ST, TP), interval = wave + segment (PR, QT).',
        'PR segment reflects AV nodal delay; normal PR interval is 120–200 ms (<120 pre-excitation, >200 1st-degree AV block).',
        'Normal QRS ≤ 100–110 ms, QTc 330–440 ms (♀ ≤ 450 ms), ST within ±1 mm, Q < 40 ms, and P/T are normally inverted in aVR.',
        'Always convert RR to rate using HR = 60,000 ÷ RR (ms): 800 ms is 75 bpm (normal), while 500 ms is 120 bpm (abnormal).',
        'Electrical waves precede mechanics: P → atrial kick, QRS → S1 and aortic opening, end of T → S2 and IVR, early TP → rapid mitral filling.',
        'Sympathetic tone or atropine shortens RR and QT (and PR) while leaving QRS width and ST segment unchanged.'
      ],
      say: {
        'W-C1': 'Don’t mix up segment and interval: PR segment is pure AV nodal delay, while PR interval includes the P wave too.',
        'W1': 'Look closely at arrows A and B on this 12-lead: A is right before QRS (P wave) and B is the flat stretch right after QRS (ST segment).',
        'W2': 'Notice bracket X sits strictly between the end of P and the start of QRS — that is the PR segment, measuring AV nodal conduction.',
        'W-C2': 'Memorize these three numbers cold: PR 120–200 ms, QRS ≤ 110 ms, and QTc 330–440 ms.',
        'W4': 'If the AV node conducts abnormally, which ECG component changes? The PR interval every time.',
        'W5': 'Check every option against our normal table: PR 100 ms is too short, whereas QRS 100 ms and negative T in aVR are completely normal.',
        'W-C3': 'Here is your instant normal-vs-abnormal cheat sheet — especially watch out for aVR polarity and RR-to-HR conversion.',
        'W6': 'Remember aVR looks from the right shoulder, so a negative P wave in aVR is the only normal finding here.',
        'W9': 'A broad, deep Q wave signals an old MI; the other four items are textbook normal findings.',
        'W-C4': 'Walk down the cardiac cycle in order — and pay special attention to where mitral valve flow peaks: right after the T wave in early diastole.',
        'W12': 'P wave triggers atrial depolarization, so atrial contraction follows immediately after.',
        'W15': 'Don’t get fooled by point B (atrial kick): the largest blood flow across the mitral valve happens during rapid passive filling at point D.',
        'W-C5': 'Atropine blocks vagal M2 receptors just like sympathetic drive: RR and QT shorten, while QRS width and ST stay put.',
        'W17': 'A muscarinic antagonist speeds up the heart and shortens RR and QT, but it never causes ST elevation — that means injury.'
      }
    },
    L: {
      part: 'Video 3', time: '~20 min',
      open: 'In this video we build the six-lead hexaxial wheel from scratch, lock in the three perpendicular pairs, and master every limb-lead swap trick.',
      u: [
        'Bipolar limb leads: I (LA+, RA−, 0°), II (LL+, RA−, +60°), III (LL+, LA−, +120°); RL is ground; II = I + III.',
        'Augmented unipolar leads: aVL (−30°), aVF (+90°), aVR (−150°); together with I, II, III they space every 30°.',
        'Perpendicular (90°) pairs always match one bipolar and one augmented lead: I–aVF, II–aVL, III–aVR.',
        'Electrode-swap rule: whichever limb did NOT move keeps its augmented lead completely unchanged.',
        'RA↔LA leaves aVF normal (inverts I); RA↔LL leaves aVL normal; LA↔LL leaves aVR normal; LL↔RL causes almost no change.'
      ],
      say: {
        'L-C1': 'Three bipolar leads, three angles — and remember the right leg is only the ground.',
        'L3': 'Which bipolar lead connects the left arm and left foot? That is Lead III at +120°.',
        'L5': 'Think about the poles on this smartwatch: left wrist is positive, right finger is negative — that’s Lead I.',
        'L-C2': 'Stack the three augmented leads onto the bipolar triangle to get the hexaxial wheel, and memorize the three 90° pairs: I–aVF, II–aVL, III–aVR.',
        'L6': 'Perpendicular to aVR (−150°) is +120°, which is Lead III.',
        'L-C3': 'Here is the 5-second lead-swap shortcut: whichever active limb was NOT moved keeps its augmented lead normal.',
        'L8': 'aVF is unchanged, meaning the left leg stayed put — so the right and left arms were swapped.',
        'L9': 'Now only aVL is normal, so the left arm stayed put — right arm and left leg were swapped.',
        'L10': 'Careful with the wording: swapping the arms leaves the left leg untouched, so aVF still shows up in aVF.',
        'L12': 'Swap left arm and left leg — the right arm wasn’t touched, so aVR is unaffected.'
      }
    },
    R: {
      part: 'Video 4', time: '~20 min',
      open: 'Heart rate is free points if you check two things before calculating: is the rhythm regular, and is the paper really running at 25 mm/s?',
      u: [
        'Standard paper is 25 mm/s and 10 mm/mV: 1 small box = 0.04 s, 1 big box = 0.2 s.',
        'Regular rhythm at 25 mm/s: HR = 1500 ÷ small boxes = 300 ÷ big boxes (normal 60–100 bpm).',
        'For any other paper speed, scale by speed ÷ 25: HR = (60 × speed) ÷ small boxes (750 at 12.5, 1800 at 30, 3000 at 50 mm/s).',
        'Fast paper (50 mm/s) stretches complexes so a fast heart looks deceptively slow; slow paper (12.5 mm/s) squeezes them.',
        'For irregular rhythms like AFib, never divide one RR: count QRS complexes across the 10-second strip and multiply by 6.'
      ],
      say: {
        'R-C1': 'Lock in 25 mm/s and 1500 divided by small boxes — or 300, 150, 100, 75, 60 for big boxes.',
        'R1': 'Standard speed 25 mm/s with 15 mm RR: 1500 divided by 15 gives 100 bpm cleanly.',
        'R-C2': 'Never blindly use 1500 without reading the speed! Let’s walk through the interactive rate flowchart for 12.5, 15, 30, and 50 mm/s.',
        'R4': '12.5 mm/s is half standard speed, so 1500 ÷ 15 = 100 gets halved to 50 bpm.',
        'R6': 'Classic trap on i-RAT Q14: 18 small boxes gives ~83 at 25 mm/s, but at 50 mm/s you must double it to 168 bpm.',
        'R8': 'AC81 Q2 at 50 mm/s: 15 small boxes → 50 × 60 ÷ 15 = 200 bpm.',
        'R10': 'The stem says 30 mm/s even though the footer prints 25: use the stem. 25 small boxes would be 60 bpm at standard speed, scaled by 30/25 gives 72 bpm.',
        'R-C3': 'When RR intervals jump around in atrial fibrillation, dividing one RR fails — count QRS complexes across the 10-second strip and multiply by 6.',
        'R11': 'This bottom strip is irregularly irregular with no P waves — count about 22 QRS complexes times 6 to get 132 bpm.'
      }
    },
    A: {
      part: 'Video 5 (Part 1)', time: '~20 min',
      open: 'QRS axis is the highest-yield skill in CVS I ECG. Let’s walk through the interactive quadrant flowchart, vector projection, and the 10-second biphasic shortcut.',
      u: [
        'Normal axis is −30° to +90°; LAD −30° to −90°; RAD +90° to +180°; extreme axis −90° to ±180°.',
        'Quadrant check: I+/aVF+ normal, I−/aVF+ RAD, I−/aVF− extreme, and I+/aVF− requires checking Lead II (− proves LAD).',
        'Deflection follows cos θ: 0° tallest R, <90° net positive, 90° biphasic, >90° net negative, 180° deepest S.',
        'Biphasic shortcut (limb leads only): find the flattest limb lead, jump ±90°, then check the perpendicular partner lead.',
        'On combined rate + axis + QRS width questions, check paper speed, axis, and QRS width (<3 small boxes) one by one.'
      ],
      say: {
        'A-C1': 'Start every axis question with Lead I and aVF, and never forget Lead II when I is positive and aVF is negative — let’s step through the flowchart.',
        'A3': 'Right axis deviation points down-right: away from Lead I (negative) and toward aVF (positive).',
        'A5': 'Left axis deviation points up-left: Lead I is positive while Leads II, III and aVF are negative.',
        'A-C2': 'Think of projection onto each lead: perpendicular (90°) gives a biphasic complex, and opposite (180°) gives the deepest negative wave.',
        'A6': 'Axis +30° plus 90° equals +120° — that is Lead III.',
        'A8': 'Axis +60° minus 90° equals −30° — that is Lead aVL.',
        'A9': 'Traveling at −60° points directly opposite Lead III (+120°), producing a large negative deflection there.',
        'A11': 'Notice AC81 Q3: −60° is 180° opposite Lead III (largest magnitude negative deflection) and 30° from aVL (tallest positive R); both are highlighted in the key.',
        'A-C3': 'To pinpoint an exact angle on a 12-lead, use the 3-step biphasic shortcut on limb leads only, then sanity-check with Lead I and aVF.',
        'A15': 'Look at aVL on t-RAT Q11 — it’s flat/biphasic! Jump 90° to Lead II, which is tall and positive, so the axis is +60°.',
        'A19': 'Lead I and aVL are up, while II, III and aVF are deeply down — clear left axis deviation, −30° to −90°.',
        'A20': 'Same pattern on i-RAT Q16: I and aVL positive, II/III/aVF negative → −30° to −90°.',
        'A-C4': 'For multi-parameter items, don’t rush: check paper speed for rate, check I/aVF/II for axis, and check whether QRS is under 3 small boxes.',
        'A22': 'Count the complexes in the 10-second strip: about 19, so roughly 115 bpm, which is tachycardia; I and aVL up with II, III and aVF down gives left axis deviation.',
        'A24': 'Watch the 15 mm/s speed trap! 20 small boxes × 15/25 gives 45 bpm bradycardia, combined with I+/II−/aVF− left axis deviation.'
      }
    },
    E: {
      part: 'Video 5 (Part 2)', time: '~15 min',
      open: 'Let’s finish strong with chest lead placement V1–V6, the five sinus rhythm criteria, AV blocks vs AFib, and full 12-lead reading.',
      u: [
        '10 electrodes produce 12 leads: 6 frontal limb leads and 6 horizontal precordial leads (V1–V6).',
        'V1–V2 sit in the 4th ICS beside the sternum; V4–V6 sit along the 5th ICS (midclavicular, anterior axillary, midaxillary).',
        'Normal sinus rhythm requires 60–100 bpm, SA origin, 1:1 P→QRS, monomorphic P within each lead, and +P in II / −P in aVR.',
        'Distinguish AV blocks cleanly: 1st° (PR >200 ms, all conducted), 2nd° (dropped QRS), 3rd° (complete AV dissociation).',
        'When the SA node fails, the AV node escapes at ~40–60 bpm with a narrow QRS; AFib has no P waves, irregular RR, and narrow QRS.',
        'Read every 12-lead in the same order (standardization → rate → rhythm → axis → intervals → ST/T); in an MCQ, rule out the easy options first (ST, wave polarity, intervals, then rate and axis).'
      ],
      say: {
        'E-C1': 'Remember the landmark split: V1 and V2 are in the 4th intercostal space, while V4, V5 and V6 march laterally across the 5th space.',
        'E3': 'V4 is the anchor of the 5th intercostal space: midclavicular line.',
        'E5': 'Move one step lateral from V4 at the same 5th ICS level: V5 is on the anterior axillary line.',
        'E-C2': 'Check all five sinus criteria — and watch out for the two classic traps: P is NOT positive in all leads, and NOT identical across different leads.',
        'E7': 'Only option C holds up: QRS complexes preceded by P waves. P is inverted in aVR, and normal rate starts at 60, not 50.',
        'E9': 'P waves look different in different leads, so uniform P morphology in every lead is NOT required.',
        'E10': 'On AC81 Q4, check every choice: 13 QRS in 10 s is ~78 bpm, PR and ST are normal, Lead I is negative (RAD), and sinus P waves drive every QRS → sinus rhythm.',
        'E-C3': 'Walk through our rhythm flowchart to separate sinus rhythm, atrial fibrillation, junctional escape, and all three degrees of AV block.',
        'E11': 'Atria at 70 bpm and ventricles at 40 bpm with no P–QRS association is textbook 3rd-degree (complete) AV block.',
        'E-C4': 'Read every 12-lead in the same order: standardization, rate, rhythm, axis, intervals, then ST and T. In an MCQ, knock out the easy options first.',
        'E14': 'On AC80 Q1, Lead I is negative and aVF is positive → right axis deviation, while rate, PR, ST, and sinus P waves are all normal.',
        'E15': 'Check every row of the student’s table on t-RAT Q14: the tracing actually has a normal axis and narrow QRS, so those two rows are wrong.'
      }
    }
  }
};
