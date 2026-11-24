/* Section B: Biochemistry of Cardiovascular System (08 Biochemistry of Cardiovascular Systen.pdf, 67p; Thai handout 30p). */
CVS.add({
  id: 'B',
  short: 'Biochemistry',
  title: 'Biochemistry of the Cardiovascular System',
  kind: 'Lecture',
  blurb: 'Cardiomyocyte syncytium and dyads, calcium-induced calcium release and SERCA/NCX relaxation, autonomic cAMP–PKA signaling (inotropy vs lusitropy), cardiac glycosides, Randle glucose-sparing metabolism, and CK-MB kinetics.',
  items: [
    /* ---------- B-C1 ---------- */
    {
      t: 'c', id: 'B-C1',
      title: 'Cardiomyocyte structure, intercalated disc &amp; sarcomere',
      src: 'Biochemistry of CVS p.4–14',
      html: CVS.fig('b-intercalated', 'Cell-to-cell bridges linking neighbouring heart muscle fibres.', 'bio', 5) +
            CVS.fig('b-sarcomere', 'Thin filament architecture with actin and regulatory proteins.', 'bio', 10)
    },
    {
      t: 'q', id: 'B1', keep: true, src: 'AC79',
      q: 'Which describes the mechanism of heart contraction?',
      o: [
        'During relaxation, Ca²⁺ is pumped out of the cell through a calcium-ATPase pump',
        'Plateau phase is necessary to initiate contraction',
        'Action potential directly activates release of calcium from SER',
        'Intercalated discs are essential for a structural syncytium',
        'Calcium ion influx from extracellular fluid occurs through RyR'
      ],
      a: 0,
      ex: 'Keyed A in AC79 (a minor sarcolemmal Ca²⁺-ATPase [PMCA] extrudes Ca²⁺ during relaxation, though SERCA into SR and NCX carry the bulk). Options C, D, and E are definitely false: AP does not directly open RyR2 (CICR does), intercalated discs form a functional (not structural) syncytium, and extracellular Ca²⁺ enters via DHPR2 (not RyR2).',
      flag: 'AC79 key = A: In cardiac relaxation, ~80–90% of cytosolic Ca²⁺ returns to SR via SERCA and ~10–20% exits via NCX, with PMCA playing a minor extrusion role. B is rejected because the plateau sustains Ca²⁺ entry rather than initiating excitation, while C/D/E contain direct factual errors.'
    },

    /* ---------- B-C2 ---------- */
    {
      t: 'c', id: 'B-C2',
      title: 'Excitation–contraction coupling &amp; diastolic relaxation',
      src: 'Biochemistry of CVS p.15–31',
      html: CVS.fig('b-cicr', 'Membrane ion transporters and calcium flux during systole.', 'bio', 23) +
            CVS.fig('b-relax', 'Routes lowering cytosolic calcium during diastole.', 'bio', 29)
    },
    {
      t: 'q', id: 'B2', core: true, keep: true, src: 'AC81',
      q: 'A 65-year-old man with hypertension is treated with amlodipine, a dihydropyridine analog, which decreases his heart rate by binding to a specific ion channel on cardiocytes. What phase is affected, and what is the electrophysiological change from amlodipine?',
      o: [
        'Phase 0: decrease Na influx via sodium voltage-gated channel',
        'Phase 1: decrease K efflux via delayed potassium outward channel',
        'Phase 2: decrease Ca influx via slow calcium channel',
        'Phase 3: increase K efflux via sodium-potassium ATPase',
        'Phase 4: increase Ca influx via L-type calcium channel'
      ],
      a: 2,
      ex: 'Dihydropyridines bind L-type (slow) Ca²⁺ channels (DHPR2), decreasing Ca²⁺ influx during the phase 2 plateau of the contractile cardiomyocyte action potential.',
      flag: 'PS82 note: Pharmacologically, dihydropyridines (amlodipine) act predominantly on vascular smooth muscle and may cause reflex tachycardia, whereas non-dihydropyridine CCBs (verapamil, diltiazem) directly slow SA/AV nodal firing. Follow the stem’s link to L-type Ca²⁺ channels in phase 2 (C).'
    },
    {
      t: 'q', id: 'B3', core: true, keep: true, src: 'AC80',
      q: 'Which substance binds with calcium and stimulates cardiac muscle contraction?',
      o: [
        'Troponin C',
        'SERCA',
        'Calmodulin',
        'L-type calcium channel',
        'Calsequestrin'
      ],
      a: 0,
      ex: 'Ca²⁺ binds troponin C (TnC) → conformational change releases troponin I (TnI) and shifts tropomyosin → exposes myosin-binding sites on F-actin. Calmodulin modulates MLCK, but TnC is the primary contractile trigger in cardiac muscle.'
    },
    {
      t: 'q', id: 'B4', keep: true, src: 'AC76, AC79',
      q: 'ใส่ skeletal muscle และ cardiac muscle ลงในสารละลายที่มี Ca²⁺ ถามว่าถ้าเติมสารที่มีสิ่งใดลงไปต่อ จะทำให้การ contraction มากขึ้น <span class="gloss">(Skeletal and cardiac muscle are placed in a Ca²⁺-containing solution; adding which of the following enhances contraction?)</span>',
      o: [
        'CCB (calcium channel blocker)',
        'Na-K ATPase',
        'Ca channel',
        'Na channel',
        'ATP'
      ],
      a: 2,
      ex: 'Unlike skeletal muscle (mechanical DHPR1–RyR1 coupling), cardiac muscle depends on extracellular Ca²⁺ influx through L-type Ca²⁺ channels (DHPR2) to trigger CICR; greater Ca²⁺ channel activity increases trigger Ca²⁺ and contraction force.'
    },

    /* ---------- B-C3 ---------- */
    {
      t: 'c', id: 'B-C3',
      title: 'Autonomic modulation via β₁–cAMP–PKA',
      src: 'Biochemistry of CVS p.32–41, 47',
      html: CVS.ans(CVS.fig('b-pka', 'Four phosphorylation targets of protein kinase A and their mechanical effects.', 'bio', 40), 'PKA target summary (shows answers)') +
            CVS.fig('b-plb', 'Dissociation of the SR regulatory subunit after phosphorylation.', 'bio', 38)
    },
    {
      t: 'q', id: 'B5', core: true, keep: true, src: 'AC81',
      q: 'Which protein is NOT affected by the cAMP-PKA pathway?',
      o: [
        'Phospholamban',
        'Troponin I',
        'Calcium release channel',
        'Dihydropyridine receptor 2',
        'Ryanodine receptor 2'
      ],
      a: 2,
      ex: 'cAMP–PKA phosphorylates DHPR2, RyR2, phospholamban (PLB), and troponin I (TnI). AC81 keys C ("Calcium release channel"), distinguishing the IP₃-gated Ca²⁺ release channel (IP₃R, activated via α₁–Gq–PLC) from RyR2.',
      flag: 'PS82 note: RyR2 itself is an SR Ca²⁺ release channel, so option C is ambiguous in English recall. Because D and E already name DHPR2 and RyR2 explicitly, C is interpreted as IP₃R (α₁–Gq pathway, not cAMP–PKA).'
    },
    {
      t: 'q', id: 'B6', core: true, keep: true, src: 'AC81, AC78',
      q: 'In an ex vivo experiment on cardiac muscles, in an environment with enough calcium, which substance increases both inotropy and lusitropy?',
      o: [
        'Catecholamine',
        'Cardiac glycoside',
        'Dihydropyridine',
        'Ryanodine',
        'Acetylcholine'
      ],
      a: 0,
      ex: 'Catecholamines (epinephrine/norepinephrine) activate β₁–Gs–cAMP–PKA → phosphorylate DHPR2 & RyR2 (+inotropy) AND phosphorylate PLB & TnI (+lusitropy). Cardiac glycosides raise inotropy only. (AC78 asked the same stem with key: Epinephrine.)'
    },
    {
      t: 'q', id: 'B7', core: true, keep: true, src: 'AC78, AC80',
      q: 'What is the effect of phosphorylating phospholamban on cardiac muscle function?',
      o: [
        'It inhibits the SERCA pump, reducing calcium reuptake into the sarcoplasmic reticulum',
        'It activates the SERCA pump, increasing calcium reuptake into the sarcoplasmic reticulum',
        'It increases the release of calcium from the sarcoplasmic reticulum',
        'It decreases the availability of calcium for muscle contraction',
        'It decreases heart rate by inhibiting calcium release'
      ],
      a: 1,
      ex: 'Unphosphorylated PLB inhibits SERCA. PKA phosphorylation causes PLB to dissociate from SERCA → higher Ca²⁺ affinity and faster SR reuptake → accelerated relaxation (+lusitropy) and larger SR Ca²⁺ load for the next beat.'
    },
    {
      t: 'q', id: 'B8', keep: true, src: 'AC75, AC77, AC79',
      q: 'Dissociation of phosphorylated phospholamban from its target leads to which effect?',
      o: [
        'Decrease SERCA',
        'Increase lusitropic effect',
        'Increase inotropic effect',
        'Increased intracellular calcium',
        'Decreased heart rate'
      ],
      a: 1,
      ex: 'Freeing SERCA from PLB speeds cytosolic Ca²⁺ clearance back into the SR, shortening relaxation time = positive lusitropic effect (also tested in AC77 Q5 & AC79 Q14).'
    },
    {
      t: 'q', id: 'B9', keep: true, src: 'AC80',
      q: 'What is the mechanism of calcium handling by phosphorylating phospholamban which increases heart rate in cardiomyocytes?',
      o: [
        'Slower relaxation of cardiomyocytes',
        'Reduced calcium affinity of SERCA',
        'It binds to SERCA, relieving inhibition',
        'Increased activity of SERCA',
        'Increased Km for calcium of SERCA'
      ],
      a: 3,
      ex: 'PLB-P dissociates from SERCA → lowers Km (raises Ca²⁺ affinity) and increases SERCA activity → faster relaxation permits a higher heart rate.'
    },
    {
      t: 'q', id: 'B10', keep: true, src: 'AC78',
      q: 'A 30-year-old man has undergone heart transplantation 4 years ago. Generally, the transplanted heart is not innervated by any neural system. Which of the following agents can practically be given to increase HR?',
      o: [
        'Beta-adrenergic agonist',
        'Beta-adrenergic antagonist',
        'Alpha-adrenergic agonist',
        'Muscarinic acetylcholine agonist',
        'Muscarinic acetylcholine antagonist'
      ],
      a: 0,
      ex: 'A denervated transplanted heart has no vagal tone (so muscarinic antagonists like atropine fail to raise HR), but its myocardial β₁-adrenergic receptors remain intact and directly respond to circulating β-adrenergic agonists.'
    },
    {
      t: 'q', id: 'B11', keep: true, src: 'AC79',
      q: 'Which of the following describes the mechanism of sympathetic stimulation in increasing conduction velocity at the atrioventricular node?',
      o: [
        'Decreased calcium influx via L-type calcium channels',
        'Increased sodium influx via slow sodium channels',
        'Decreased potassium efflux via potassium channels',
        'Increased calcium influx via L-type calcium channels',
        'Increased sodium influx via voltage-gated sodium channels'
      ],
      a: 3,
      ex: 'AV nodal upstroke (phase 0) depends on L-type Ca²⁺ channels. Sympathetic β₁–cAMP–PKA increases L-type Ca²⁺ influx → steeper phase 0 upstroke → faster AV nodal conduction (+dromotropy).'
    },

    /* ---------- B-C4 ---------- */
    {
      t: 'c', id: 'B-C4',
      title: 'Cardiac glycosides &amp; botanical toxins',
      src: 'Biochemistry of CVS p.42–46',
      html: CVS.fig('b-digoxin', 'Ion transport chain following pump inhibition in cardiomyocytes.', 'bio', 43) +
            CVS.fig('b-plants', 'Natural botanical sources of sarcolemmal pump inhibitors.', 'bio', 45)
    },
    {
      t: 'q', id: 'B12', core: true, keep: true, src: 'AC81',
      q: 'A patient is given digoxin, a cardiac glycoside. What is the effect?',
      o: [
        'Increase intracellular K level',
        'Increase relaxation time',
        'Increase intracellular Na level',
        'Decrease SR calcium load',
        'Decrease contractility'
      ],
      a: 2,
      ex: 'Digoxin inhibits the sarcolemmal Na⁺/K⁺-ATPase pump → Na⁺ accumulates inside the cell (↑[Na⁺]ᵢ) → weakens the Na⁺ gradient driving NCX → less Ca²⁺ extruded → ↑SR Ca²⁺ load → ↑contractility.'
    },
    {
      t: 'q', id: 'B13', core: true, keep: true, src: 'AC80',
      q: 'Digoxin inhibits Na-K ATPase pump. How does this affect intracellular Ca concentration?',
      o: [
        'Increase intracellular Na → reduce function of Na-Ca exchanger',
        'Increase Na efflux → reduce K influx',
        'Decrease Na influx via fast Na channel',
        'Increase Ca influx via L-type calcium channels',
        'Decrease intracellular Ca'
      ],
      a: 0,
      ex: 'Inhibiting Na⁺/K⁺-ATPase raises intracellular [Na⁺] → lowers the inward Na⁺ driving force for NCX → reduces Ca²⁺ efflux → raises intracellular and SR Ca²⁺ (also tested in AC80 Q5 & AC78 Q7).'
    },
    {
      t: 'q', id: 'B14', core: true, keep: true, src: 'AC77',
      q: 'A 56-year-old male presented with confusion and abdominal pain. On examination, he was found to have atrial fibrillation. He admitted eating a plant locally called “Lily of the Valley”. What protein does this toxic plant selectively inhibit?',
      o: [
        'Dihydropyridine receptor',
        'Na-K ATPase pump',
        'Na-Ca exchanger',
        'Ca-ATPase pump',
        'Ryanodine receptor'
      ],
      a: 1,
      ex: 'Lily of the Valley (Convallaria majalis) contains convallarin, a cardiac glycoside that selectively inhibits the Na⁺/K⁺-ATPase pump (same class as Foxglove/digitalis, Cerbera odollam/cerberin, and Oleander/oleandrin).'
    },
    {
      t: 'q', id: 'B15', keep: true, src: 'AC77, AC79',
      q: 'Which of the following has a positive inotropic effect but also yields a negative chronotropic effect?',
      o: [
        'Epinephrine',
        'Acetylcholine',
        'Digoxin',
        'Cardiolipin',
        'Sarcolipin'
      ],
      a: 2,
      ex: 'Digoxin increases contractility (+inotropy via Na⁺/K⁺ pump inhibition) while stimulating brainstem vagal tone to slow SA/AV node firing (−chronotropy), making it useful in HFrEF with AF (also tested in AC77 Q3 & AC79 Q12).'
    },

    /* ---------- B-C5 ---------- */
    {
      t: 'c', id: 'B-C5',
      title: 'Myocardial fuel shifts &amp; aerobic metabolism',
      src: 'Biochemistry of CVS p.48–50, 56–66',
      html: CVS.fig('b-randle', 'Suppression of glycolysis during fasting aerobic metabolism.', 'bio', 60) +
            CVS.ans(CVS.fig('b-fuels', 'Percentage of myocardial energy release (%OER) by metabolic state.', 'bio', 64), 'Fuel %OER table (shows answers)')
    },
    {
      t: 'q', id: 'B16', core: true, keep: true, src: 'AC81',
      q: 'An office worker has undergone fasting for 14 hours. Which of the following ratios increases and leads to glucose sparing effect?',
      o: [
        'ADP / ATP',
        'NAD+ / NADH',
        '[Acetyl CoA] / [CoA]',
        '[Pyruvate] / [Lactate]',
        '[Ketone bodies] / [Fatty acid]'
      ],
      a: 2,
      ex: 'During overnight fasting, the heart shifts to fatty acid β-oxidation (62% OER) → ↑[Acetyl-CoA]/[CoA], ↑[NADH]/[NAD⁺], ↑[ATP]/[ADP], and ↑[Citrate] → inhibits PDH, PFK-1, PFK-2, and citrate synthase (Randle effect).'
    },
    {
      t: 'q', id: 'B17', keep: true, src: 'AC80',
      q: 'A patient experiences chest pain due to cardiac ischemia. What happens in anaerobic respiration of cardiac muscle?',
      o: [
        'Lactic acid from glycolysis',
        'Fatty acid oxidation',
        'Pyruvate accumulation in mitochondria',
        'Use ketone body as main energy source'
      ],
      a: 0,
      ex: 'Without O₂, mitochondrial ETC and β-oxidation stall → cardiomyocytes switch to anaerobic glycolysis, reducing pyruvate to lactic acid to regenerate NAD⁺.'
    },
    {
      t: 'q', id: 'B18', keep: true, src: 'AC79',
      q: 'ออกกำลังกาย moderate intensity เป็นเวลา 1 ชม. ไม่ได้ทานข้าวเช้า หัวใจจะใช้พลังงานจากอะไรมากสุด <span class="gloss">(Exercising for 1 hour without breakfast: which energy substrate does the heart use most?)</span>',
      o: [
        'Fatty acid from lipolysis',
        'Hepatic glycogenolysis',
        'Glucose',
        'Lactic acid',
        'Ketone'
      ],
      a: 3,
      ex: 'Keyed D (Lactic acid) in AC79: working skeletal muscles release lactate into blood, and myocardial LD-1 (H₄) has low Km for lactate, converting it directly to pyruvate for aerobic oxidation (61% OER in intense exercise).',
      flag: 'AC79 key = D: Overnight fasting alone favors fatty acids (62% OER), whereas strenuous exercise shifts the heart strongly to blood lactate (61% OER). The recalled stem mixes "moderate intensity" with fasting; follow the course’s exercise → lactate (LD-1) rule.'
    },

    /* ---------- B-C6 ---------- */
    {
      t: 'c', id: 'B-C6',
      title: 'High-energy phosphate buffering &amp; creatine kinase',
      src: 'Biochemistry of CVS p.51–55',
      html: CVS.fig('b-ckmb', 'Creatine phosphate shuttle linking mitochondria to myofibrillar cross-bridges.', 'bio', 52)
    },
    {
      t: 'q', id: 'B19', core: true, keep: true, src: 'AC81',
      q: 'Which of the following is correct about CK-MB?',
      o: [
        'CK-MB is the highest type of CK in cardiac muscle',
        'CK-MB has lower Km for ADP than CK-MM',
        'CK-MB has lower Km for ATP than CK-MM',
        'CK-MB has lower Km for creatine phosphate than CK-MM'
      ],
      a: 1,
      ex: 'CK-MB (CK-2) has a lower Km for ADP than CK-MM (high affinity for ADP), allowing rapid ATP regeneration from CrP even at low steady-state [ADP]. Trap: CK-MM (~70–85%), not CK-MB (~15–30%, up to 41% in LV), is the most abundant cardiac isozyme.'
    }
  ]
});
