/* ---------- D · Circulatory dynamics I ---------- */
S_('D-C1', [
  '- Blood: systemic 84% · pulmonary 9% · heart 7% → most sits in {{veins and venules}} (~65%)',
  '| Segment | Job |',
  '| Arteries | carry blood at high pressure (~100 mmHg) |',
  '| {{Arterioles}} | biggest pressure drop → main resistance + flow control |',
  '| Capillaries | {{exchange}} of water, solutes, gases |',
  '| Veins, venules | low-pressure return + blood {{reservoir}} |',
  '> Pressure falls along the circuit → lowest in the {{large veins}} near the heart'
]);
S_('D-C2', [
  '= Q = ΔP ÷ R (Ohm’s law)',
  '= R = 8ηL ÷ πr⁴ (Poiseuille)',
  '> Vessel width halves → resistance × {{16}} → flow ÷ 16',
  '- Resistance ↑ with {{viscosity}} (hematocrit) and vessel length, but mostly with ↓ {{radius}}',
  '- Organs in {{parallel}} → each controls its own flow; vessels in series add their resistances',
  '- Gravity: {{0.77}} mmHg per cm above or below the heart'
]);
S_('D-C3', [
  '= Flow = velocity × total cross-sectional area',
  '> Same flow through every segment → biggest total area = {{capillaries}} → {{slowest}} blood → time for exchange',
  '= Reynolds N<sub>R</sub> = 2rρv ÷ η · under 2000 laminar, over {{3000}} turbulent',
  '> Turbulence ↑ with high velocity, large radius, high density, {{low viscosity}} (anemia)',
  '- Laminar flow is silent · turbulence → {{murmurs}} and bruits (stenosis, shunts, valve lesions)'
]);
S_('D-C4', [
  '= Distensibility = ΔV ÷ (ΔP × original volume) · compliance = ΔV ÷ ΔP',
  '> Veins: {{8×}} as distensible × 3× the volume → {{24×}} as compliant as arteries',
  '> High compliance → large volume at low pressure → veins are {{capacitance}} vessels (the reservoir)',
  '- Sympathetic venoconstriction → shifts that volume back to the heart',
  '- {{Stress relaxation}}: a vessel filled suddenly lets its pressure drift back down (delayed compliance)'
]);
