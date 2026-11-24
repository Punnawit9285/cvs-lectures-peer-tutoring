/* ---------- B · Biochemistry of CVS (Recording script) ---------- */
window.TUTOR_SCRIPT.sec.B = {
  part: 'Video 5', time: '16&#8211;20 min',
  open: 'Build cardiac biochemistry in three linked layers: how the cell handles calcium to beat and relax, how catecholamines and digoxin push that calcium machinery, and how the heart switches fuels and buffers ATP.',
  u: [
  '<b>Structure &amp; syncytium</b>: branched striated cells, central nucleus, ~80% mitochondria, dyads; intercalated disc has desmosomes, fascia adherens, and connexin-43 gap junctions making a functional (not structural) syncytium.',
  '<b>CICR &amp; relaxation</b>: phase 2 DHPR2 lets in ~10% trigger Ca²⁺ → opens RyR2 for ~90% SR Ca²⁺; Ca²⁺ binds TnC; relaxation uses ~80–90% SERCA, ~10–20% NCX, minor PMCA.',
  '<b>β₁–cAMP–PKA</b>: phosphorylates DHPR2 &amp; RyR2 (+inotropy) and PLB &amp; TnI (+lusitropy); α₁–Gq hits IP₃R (not PKA); M₂–Gi lowers cAMP.',
  '<b>Cardiac glycosides</b>: digoxin and toxic plants (Foxglove, Lily of the Valley, Oleander, Cerbera) inhibit Na⁺/K⁺-ATPase → ↑[Na⁺]ᵢ → ↓NCX → ↑SR Ca²⁺ (+inotropy) plus central vagal −chronotropy.',
  '<b>Fuels &amp; Randle cycle</b>: fed = glucose (68%), overnight fast = fatty acids (62%), intense exercise = lactate (61%) via LD-1; high FA oxidation raises [Acetyl-CoA]/[CoA], NADH, ATP, citrate to inhibit PDH &amp; PFK-1/2.',
  '<b>CK-MB kinetics</b>: CK-MM is the majority in heart (~70–85%), but CK-MB has a lower Km for ADP so it constantly regenerates ATP at low steady [ADP]; adenylate kinase rescues 2 ADP → ATP + AMP.'
],
  say: {
  'B-C1': 'Start with the five features of a cardiomyocyte, then zoom into the intercalated disc: remember it is a functional syncytium, not a structural one.',
  'B-C2': 'Follow the calcium wave in and out: 10% enters through DHPR2 in phase 2 to trigger 90% from RyR2, then SERCA takes 80 to 90% back while NCX clears the rest.',
  'B2': 'Tie pharmacology back to the action potential: dihydropyridines target the slow L-type calcium channel in phase 2, and flag the clinical note about vascular versus nodal CCBs.',
  'B3': 'Quick check on the thin filament: troponin C is the primary calcium sensor that triggers cross-bridge cycling.',
  'B-C3': 'One kinase, four targets: PKA hits DHPR2 and RyR2 for force, and PLB plus TnI for faster relaxation — walk through the interactive chart below to contrast it with digoxin and alpha-1.',
  'B5': 'Watch the AC81 recall nuance here: PKA phosphorylates all four classic targets, leaving the alpha-1 IP3 calcium release channel out.',
  'B6': 'Ask which agent does BOTH force and relaxation: only catecholamines raise both inotropy and lusitropy together.',
  'B7': 'Remember the double negative on phospholamban: unphosphorylated PLB brakes SERCA, so phosphorylating PLB takes the brake off.',
  'B-C4': 'Walk the digoxin chain one arrow at a time: block the Na/K pump, sodium builds up, NCX slows down, SR calcium climbs, and central vagal tone slows the heart rate.',
  'B12': 'The very first consequence of Na/K-ATPase inhibition is elevated intracellular sodium — everything else follows from that.',
  'B13': 'Trace the exact link from intracellular sodium straight to reduced Na-Ca exchanger extrusion.',
  'B14': 'Match the clinical vignette to the botanical slide: Lily of the Valley contains convallarin, a cardiac glycoside targeting Na/K-ATPase.',
  'B-C5': 'The heart only holds about 50 beats of ATP, so it switches fuels cleanly: glucose after a carb meal, fatty acids overnight driving the Randle cycle, and lactate during hard exercise via LD-1.',
  'B16': 'During a 14-hour fast, fatty acid oxidation spikes the Acetyl-CoA to CoA ratio, which shuts down PDH and spares glucose.',
  'B-C6': 'Close with the creatine phosphate shuttle and the classic CK-MB exam trap: CK-MM is more abundant, but CK-MB has the lower Km for ADP.',
  'B19': 'Do not fall for option A — CK-MM is highest in the heart, while CK-MB wins on its lower Km for ADP.'
}
};
