/* ---------- C · Cardiac cycle ---------- */
S_('C-C1', [
  '> Systole: {{isovolumic contraction}} (all valves shut, volume = EDV) → rapid ejection → reduced ejection',
  '> Then: {{isovolumic relaxation}} → rapid filling → diastasis → atrial systole (last top-up)',
  '- A valve opens or closes when the {{pressure}} on its two sides crosses',
  '- S1 = AV valves close · S2 = {{semilunar}} valves close',
  '> HR ↑ → {{diastole}} shortens most (0.66 → 0.13 s) → less filling time'
]);
S_('C-C2', [
  '> LV pressure rises just above {{atrial}} pressure → mitral closes → S1',
  '> LV falls just below aortic pressure → aortic valve closes → S2 + {{dicrotic notch}}',
  '- S1 = {{mitral + tricuspid}} closing · S2 = aortic + pulmonary closing',
  '> Inspiration → more venous return to the right → RV ejects longer → {{P2}} later → split S2',
  '! ASD: inspiration ↑ RA pressure → LA→RA shunt {{↓}} → S2 widely split in both phases'
]);
S_('C-C3', [
  '> Semilunar valve (aortic, pulmonary): narrow → {{systolic ejection}} murmur · leaky → {{diastolic blowing}}',
  '> AV valve (mitral, tricuspid): narrow → {{diastolic rumbling}} · leaky → {{pansystolic}}',
  '| Valve | Loudest at |',
  '| Aortic | {{right 2nd ICS}} |',
  '| Pulmonary | left 2nd ICS |',
  '| Mitral | {{apex}} (PMI) |',
  '| Tricuspid | left 5th ICS |',
  '---',
  '@flow:murmur'
]);
S_('C-C4', [
  '> Corner by corner: mitral closes → {{aortic opens}} → aortic closes → mitral opens',
  '- Width of the loop = {{stroke volume}} · EF = SV ÷ EDV',
  '| Change | Loop |',
  '| Preload ↑ | wider: EDV moves {{outward}} |',
  '| Afterload ↑ | taller and {{narrower}}: ESV ↑ |',
  '| Inotropy ↑ | ESPVR steeper → ESV moves {{inward}} |',
  '! AR → no true isovolumic relaxation, EDV far out · SVC occlusion → EDV moves in'
]);
