/* ---------- K · Basic ECG ---------- */
S_('K-C1', [
  '| Part | Means |',
  '| P wave | {{atrial depolarization}} |',
  '| QRS | ventricular depolarization (fast Na⁺) |',
  '| ST segment | plateau, phase 2 (inside the {{ARP}}) |',
  '| T wave | ventricular repolarization, phase 3 |',
  '- PR {{120–200}} ms: < 120 WPW pattern · > 200 first-degree AV block',
  '- QRS < 110 ms · QTc 330–440 ms; QT {{shortens}} as HR rises',
  '> After P → atrial contraction · after T → {{isovolumetric relaxation}} · RR → rate'
]);
S_('K-C2', [
  '- Bipolar: I = RA→LA · II = RA→LL · III = {{LA→LL}} (right leg = ground)',
  '- Hexaxial: I 0° · II +60° · III {{+120°}} · aVF {{+90°}} · aVL −30° · aVR −150°',
  '- Perpendicular pairs: I ⟂ aVF · II ⟂ aVL · III ⟂ aVR',
  '- V1: 4th ICS right sternal edge · V2: 4th ICS {{left sternal edge}}',
  '- V4: 5th ICS left {{midclavicular}} · V5: anterior axillary · V6: midaxillary (same level)'
]);
S_('K-C3', [
  '= HR = paper speed × 60 ÷ small boxes (R–R)',
  '- At 25 mm/s: 1500 ÷ small boxes = {{300}} ÷ large boxes · irregular: beats in 10 s × 6',
  '> Paper speed ÷ 2 → same boxes = {{half}} the rate',
  '## Sinus rhythm',
  '- P {{positive in II}}, negative in aVR, all the same shape',
  '- Every P followed by a {{QRS complex}} · rate 60–100',
  '---',
  '@flow:ecg'
]);
S_('K-C4', [
  '- Normal axis {{−30° to +90°}} (frontal plane only)',
  '| Lead I | aVF | Axis |',
  '| + | + | normal |',
  '| + | − | normal or left (check {{lead II}}) |',
  '| − | + | {{right}} axis deviation |',
  '| − | − | {{extreme}} |',
  '> Tallest R in the lead {{parallel}} to the axis · biphasic in the lead perpendicular to it',
  '> Angle < 90° → mostly positive · angle > 90° → mostly {{negative}}'
]);
S_('K-C5', [
  '- Normal q: narrow (< 40 ms), small · seen in aVR and V4–V6 (from the {{septum}})',
  '> Dead myocardium → no positive voltage → {{wide, deep Q}} (> 40 ms)',
  '- ST normally isoelectric, deviation ≤ {{1 mm}}',
  '> Marked ST elevation or depression → rule out {{myocardial infarction}}',
  '| ST ↑ in | Wall | Artery (usual) |',
  '| V1–V2 | septal | proximal anterior descending |',
  '| V3–V4 | anterior | {{LAD}} |',
  '| I, aVL | lateral | LCx |',
  '| II, III, aVF | {{inferior}} | RCA (90%) |'
]);
S_('K-C6', [
  '> Each augmented lead looks from one limb against the other two',
  '> Swap the two limbs it doesn’t look from → that lead stays {{normal}}',
  '| Swapped | Unchanged lead |',
  '| RA ↔ LA (arm reversal) | {{aVF}} |',
  '| RA ↔ LL | {{aVL}} |',
  '| LA ↔ LL | {{aVR}} |',
  '- Arm reversal also: lead I {{inverted}}, II ↔ III, the two arm leads swap'
]);
