/* ---------- E · Physical & electrical properties ---------- */
S_('E-C1', [
  '- Cells: pacemaker (SA, AV node) · conducting (His, branches, Purkinje) · contractile (atria, ventricles)',
  '| Phase | Event | Current |',
  '| 4 | rest at −90 mV | K⁺ out via {{inward rectifier}} (I<sub>K1</sub>) |',
  '| 0 | threshold −70 → upstroke | {{fast Na⁺}} in |',
  '| 1 | notch | transient outward K⁺ (I<sub>to</sub>) |',
  '| 2 | {{plateau}} | {{L-type Ca²⁺}} in = K⁺ out |',
  '| 3 | repolarization | {{delayed rectifier}} K⁺ out, Ca²⁺ channels close |',
  '- Na⁺/K⁺ pump: 3 Na⁺ out, 2 K⁺ in → keeps the ion levels',
  '- Words: chronotropy = rate · {{dromotropy}} = conduction · bathmotropy = excitability · inotropy = force · lusitropy = relaxation'
]);
S_('E-C2', [
  '> Phase 4: {{funny current}} (HCN, Na⁺ in) → slow diastolic depolarization from −55 mV',
  '> Phase 0: threshold {{−40 mV}} → {{L-type Ca²⁺}} in (fast Na⁺ channels inactivated at this RMP)',
  '> Phase 3: delayed rectifier K⁺ out → funny channel reopens',
  '| Site | Own rate (/min) |',
  '| SA node | 70–80 |',
  '| AV node | 40–60 |',
  '| Purkinje | 20–40 |',
  '> SA node fires {{fastest}} → resets the others → it paces the heart',
  '> β1 → cAMP → I<sub>f</sub> ↑ → {{steeper phase 4}} → HR ↑ · vagus → flatter → HR ↓'
]);
S_('E-C3', [
  '| Tissue | Speed (m/s) |',
  '| Atrial muscle | 1 |',
  '| {{AV node}} | 0.01–0.05 (slowest) |',
  '| His–Purkinje | {{2–4}} (fastest) |',
  '| Ventricular muscle | 0.3–0.5 |',
  '> Speed set by the slope of {{phase 0}}: Na⁺ upstroke fast · Ca²⁺ upstroke slow',
  '> AV delay → atria finish emptying → ventricles {{fill}} before they contract',
  '- ARP: no AP however strong the stimulus (Na⁺ h gates shut) · RRP: AP only with a {{stronger}} stimulus',
  '> ARP covers almost the whole twitch → no {{tetanus}}'
]);
S_('E-C4', [
  '> At rest mainly K⁺ channels are open → RMP ≈ E<sub>K</sub> → set by {{extracellular K⁺}}',
  '| | Hyperkalemia | Hypokalemia |',
  '| RMP | {{less negative}} → excitability ↑ | more negative → excitability ↓ |',
  '| Phase 0 | flatter → conduction ↓ | — |',
  '| AP | phase 2 shorter | repolarization {{slower}} |',
  '> Severe hyperK → RMP at threshold → Na⁺ channels can’t reset → {{depolarization block}} (standstill)',
  '| | Hypercalcemia | Hypocalcemia |',
  '| Phase 2 | shorter | {{longer}} (long QT) |',
  '| Threshold | raised → excitability ↓ | lowered → excitability ↑ |',
  '| Contractility | ↑ | {{↓}} |'
]);
S_('E-C5', [
  '> AP → L-type Ca²⁺ in (T-tubules) → {{ryanodine receptor}} → SR releases Ca²⁺ ({{Ca²⁺-induced Ca²⁺ release}}) → contraction',
  '> Relaxation: {{SERCA2}} pumps Ca²⁺ back into the SR + NCX out of the cell',
  '- Contractility = force at a given length → set by {{intracellular calcium}}',
  '- Positive inotropes: sympathetic/β1, catecholamines, faster HR, thyroxine, {{digoxin}}',
  '> Cardiac glycoside → Na⁺/K⁺-ATPase blocked → Na⁺ in cell ↑ → {{less Ca²⁺ leaves}} via NCX → force ↑',
  '- Negative: vagus, β-blockers, Ca²⁺-channel blockers, hyperK, acidosis, hypoxia'
]);
S_('E-C6', [
  '- Preload = stretch before contraction = end-diastolic {{volume / pressure}}',
  '> Preload ↑ → sarcomere length ↑ → force ↑ → SV ↑ ({{Frank–Starling}})',
  '- Best LV preload estimate: LVEDP > {{LA pressure}} > PCWP > CVP/RAP',
  '- Afterload = what the ventricle pushes against: LV → aortic pressure, {{SVR}} · RV → PA pressure, PVR',
  '= SV = EDV − ESV · EF = SV ÷ EDV · CO = SV × HR · CI = CO ÷ BSA',
  '! Comparing patients: EDV ranks preload, EF ranks {{contractility}}'
]);
