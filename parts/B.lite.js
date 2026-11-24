/* ---------- B · Biochemistry of CVS ---------- */
S_('B-C1', [
  '- Branched striated fibres · 1–2 central nuclei · {{mitochondria}} = 20–40% of cell volume (aerobic ATP)',
  '- T-tubule + 1 SR cisterna = {{dyad}} (vs triad in skeletal fibres)',
  '## Intercalated disc',
  '| Bridge | Mechanical or electrical role |',
  '| {{Desmosomes}} | anchor intermediate filaments → resist shear stress |',
  '| Fascia adherens | anchor actin → transmit contractile force |',
  '| {{Gap junctions}} | connexin-43 pores → fast ion spread = {{functional syncytium}} |',
  '> Thin filament: Ca²⁺ binds {{troponin C}} → shifts TnI &amp; tropomyosin → exposes myosin-binding sites on F-actin',
  '! Intercalated discs link cardiomyocytes into an electrical unit (not fused multinucleate cells) · ephaptic coupling adds local field spread'
]);

S_('B-C2', [
  '> Phase 2 plateau opens L-type Ca²⁺ channel ({{DHPR2}}) → ~10% trigger Ca²⁺ enters → opens {{RyR2}} on SR → releases ~90% Ca²⁺ = {{CICR}}',
  '- Free {{calsequestrin}} inside SR inhibits SR release channels when stores fall',
  '## Diastolic relaxation (lowering cytosolic Ca²⁺)',
  '| Transporter | Share &amp; destination |',
  '| {{SERCA}} | ~80–90% pumped back into SR |',
  '| {{NCX}} (3 Na⁺ in : 1 Ca²⁺ out) | ~10–20% extruded (driven by Na⁺/K⁺ pump) |',
  '| Sarcolemmal Ca²⁺-ATPase (PMCA) | minor extrusion out of cell |',
  '! Cardiac contraction requires extracellular Ca²⁺ influx (unlike skeletal mechanical DHPR1–RyR1 coupling) · DHP blockers cut phase 2 entry'
]);

S_('B-C3', [
  '> Sympathetic NE / E → β₁ (Gs) → ↑cAMP → activates {{PKA}} → phosphorylates 4 targets',
  '| Target phosphorylated | Effect | Mechanical result |',
  '| {{DHPR2}} &amp; {{RyR2}} | ↑Ca²⁺ influx &amp; ↑SR release | positive {{inotropy}} |',
  '| {{Phospholamban}} (PLB) | dissociates from SERCA → faster SR reuptake | positive {{lusitropy}} + ↑SR load |',
  '| {{Troponin I}} (TnI) | ↓TnC affinity for Ca²⁺ → faster unbinding | faster relaxation |',
  '> α₁ (Gq) → PLC → {{IP3}} → opens IP₃R (NOT via cAMP–PKA)',
  '> Parasympathetic ACh / adenosine → M₂ (Gi) → ↓cAMP → antagonizes contractile force',
  '! Catecholamines raise BOTH force and relaxation speed · denervated transplanted hearts still respond to circulating β-agonists',
  '---',
  '@flow:b_pka'
]);

S_('B-C4', [
  '> Cardiac glycosides ({{digoxin}}, digitoxin, ouabain) inhibit sarcolemmal {{Na⁺/K⁺-ATPase}} → ↑intracellular {{Na⁺}} → ↓NCX Ca²⁺ extrusion → ↑SR Ca²⁺ load → positive {{inotropy}}',
  '> Central brainstem action → ↑{{vagal}} tone → slows SA/AV firing = negative {{chronotropy}} (useful in AF / flutter)',
  '- Botanical / natural toxins: Foxglove (digitalis), {{Lily of the Valley}} (convallarin), Cerbera odollam (cerberin), Oleander (oleandrin), cane toad (bufadienolide)',
  '! These glycosides raise contraction force WITHOUT accelerating relaxation (no PLB/TnI phosphorylation)'
]);

S_('B-C5', [
  '- Stores ~10 mM ATP (~50 beats) → 60–70% myosin ATPase, 10–25% ion pumps → continuous aerobic fuel',
  '| State | Dominant substrate (%OER) |',
  '| Post-prandial (CHO) | {{glucose}} (68%) via GLUT4 |',
  '| Overnight fast | {{fatty acids}} (62% basal fuel) |',
  '| Prolonged starvation | {{ketone bodies}} |',
  '| Strenuous exercise | {{lactate}} (61%) |',
  '> {{Randle}} effect: ↑lipid/KB → ↑{{[Acetyl-CoA]/[CoA]}}, ↑NADH/NAD⁺, ↑ATP/ADP, ↑citrate → inhibits PDH, PFK-1/2 &amp; citrate synthase',
  '> Myocardial {{LD-1}} (H₄) has a low Km for the acid made by working muscle → turns it into pyruvate for the TCA cycle',
  '! In ischemia (no O₂), anaerobic glycolysis accumulates lactic acid'
]);

S_('B-C6', [
  '> CrP shuttle: mitochondrial CK makes CrP → cytosolic CK hands P to ADP at cross-bridges',
  '- 3 CK dimers: CK-1 (BB, brain) · CK-2 ({{CK-MB}}, 15–30%, up to 41% LV) · CK-3 ({{CK-MM}}, skeletal &amp; 70–85% heart)',
  '- Advantage: cardiac CK-2 has a {{lower Km for ADP}} than CK-3 → makes ATP even at low steady [ADP]',
  '= Emergency ({{adenylate}} enzyme): 2 ADP → ATP + {{AMP}}',
  '! Trap: CK-3 (not CK-2) is highest in heart · ↑AMP activates glycogen phosphorylase b'
]);
