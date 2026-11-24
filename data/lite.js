/* Short concept cards: each card's body is written here as arrow chains and brief bullets.
   Loaded last (data/sections.json), so it rebuilds the html of every card listed below.
   The card's figures and flow widgets are taken from its original html in the section file;
   the text there is superseded. Block syntax (one string per block):
     '> A → B → C'      cause → effect chain          '- text'   bullet (consecutive bullets form one list)
     '## Heading'        small group label            '! text'   exam trap / past-paper note
     '| a | b |'         table row (first row = head)  '= text'   centered equation
     '@F1' '@F2'         place that figure here; figures not placed go to a column beside the text
     '@X1'               place that flow widget        {{...}}    cloze blank (keep 3–8 per card, key ideas only)
     '@flow:name'        an interactive chart from src/flows*.js
     '---'               what follows goes full width under the text and figure columns */
(function () {
  var C = window.CVS, byId = {};
  C.sections.forEach(function (s) { s.items.forEach(function (it) { byId[it.id] = it; }); });
  function inl(t) { return C.cloze(String(t)).replace(/(→|↔|⇄)/g, '<span class="lt-ar">$1</span>'); }
  function render(blocks, F, X) {
    var out = [], main = out, below = null, ul = null, tb = null, used = {};
    function flush() {
      if (ul) { out.push('<ul class="lt-pts">' + ul.join('') + '</ul>'); ul = null; }
      if (tb) {
        out.push('<div class="tblwrap"><table class="lt-tbl"><thead><tr>' + tb[0].map(function (c) { return '<th>' + c + '</th>'; }).join('') + '</tr></thead><tbody>' +
          tb.slice(1).map(function (r) { return '<tr>' + r.map(function (c) { return '<td>' + inl(c) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div>');
        tb = null;
      }
    }
    blocks.forEach(function (b) {
      b = b.replace(/<(?![A-Za-z\/!])/g, '&lt;');  /* a bare < (as in "< 80") is text, not a tag */
      var k = b.slice(0, 2), t = b.slice(2);
      if (k === '- ') { if (tb) flush(); (ul = ul || []).push('<li>' + inl(t) + '</li>'); return; }
      if (b[0] === '|') { if (ul) flush(); (tb = tb || []).push(b.replace(/^\|\s*|\s*\|\s*$/g, '').split(/\s*\|\s*/)); return; }
      flush();
      if (b === '---') { below = []; out = below; return; }
      if (k === '> ') out.push('<p class="lt-chain">' + inl(t) + '</p>');
      else if (b.slice(0, 3) === '## ') out.push('<h4 class="lt-h">' + b.slice(3) + '</h4>');
      else if (k === '! ') out.push('<p class="lt-trap">' + inl(t) + '</p>');
      else if (k === '= ') out.push('<div class="eqn">' + inl(t) + '</div>');
      else if (/^@F\d+$/.test(b)) { var i = +b.slice(2) - 1; if (!F[i]) throw new Error('no figure ' + b); used[i] = 1; out.push(F[i]); }
      else if (/^@flow:\w+$/.test(b)) out.push('<div class="flowx" data-flow="' + b.slice(6) + '"></div>');
      else if (/^@X\d+$/.test(b)) { var j = +b.slice(2) - 1; if (!X[j]) throw new Error('no flow ' + b); out.push(X[j]); }
      else out.push('<p class="lt-p">' + inl(b) + '</p>');
    });
    flush();
    var rest = F.filter(function (f, i) { return !used[i]; });
    var text = '<div class="lt">' + main.join('') + '</div>';
    var top = rest.length ? '<div class="two lt-two">' + text + '<div class="lt-figs">' + rest.join('') + '</div></div>' : text;
    return below ? '<div class="lt">' + top + below.join('') + '</div>' : top;
  }
  C.short = function (id, blocks, opt) {
    var it = byId[id];
    if (!it || it.t !== 'c') throw new Error('short(): no concept ' + id);
    var F = [], X = [];
    /* figures in document order; a collapsed <details> that holds a figure (answers, extra slides) is kept whole */
    String(it.html).replace(/<details\b[\s\S]*?<\/details>|<figure\b[\s\S]*?<\/figure>/g, function (m) { if (/^<figure/.test(m) || /<figure\b/.test(m)) F.push(m); return m; });
    String(it.html).replace(/<div class="flowx"[^>]*><\/div>/g, function (m) { X.push(m); return m; });
    if (opt && opt.drop) F = F.filter(function (f, i) { return opt.drop.indexOf(i + 1) < 0; });
    it.html = render(blocks, F, X);
  };
})();
var S_ = CVS.short;

/* ---------- A · Pericardium, heart & great vessels ---------- */
S_('A-C1', [
  '> Fibrous pericardium (tough outer sac) + serous pericardium: {{parietal}} layer lines the sac, visceral layer = {{epicardium}}',
  '- Between the serous layers: pericardial cavity (potential space, a little fluid)',
  '- Transverse sinus: behind the {{pulmonary trunk + ascending aorta}}',
  '- Oblique sinus: framed by the {{pulmonary veins}} + IVC',
  '- Nerve: {{phrenic}} (+ sympathetic) · blood: pericardiophrenic a.',
  '> Blood or fluid fills the cavity → heart can’t fill → {{cardiac tamponade}}'
]);
S_('A-C2', [
  '- Right border: SVC → {{right atrium}} → IVC · left border: {{left ventricle}} · inferior border: RV',
  '- Apex = tip of the LV → left {{5th ICS}}, midclavicular line',
  '- Front (sternocostal) = mostly RV · base (back) = {{left atrium}} → sits on the esophagus',
  '| Valve | Heard at |',
  '| Pulmonary | left 2nd ICS |',
  '| Aortic | {{right 2nd ICS}} |',
  '| Mitral | apex |',
  '| Tricuspid | {{xiphisternal junction}} |',
  '! Big LA (AF, mitral stenosis) → presses the esophagus → dysphagia'
]);
S_('A-C3', [
  '## Right atrium',
  '- {{Crista terminalis}} splits smooth sinus venarum (from sinus venosus) from rough atrium proper ({{pectinate}} muscles)',
  '- Openings: SVC, IVC (Eustachian valve), coronary sinus (Thebesian valve) · fossa ovalis on the septum',
  '> Koch triangle: tendon of Todaro + septal tricuspid leaflet + coronary sinus → apex = {{AV node}}',
  '## Right ventricle',
  '- Rough inflow: {{trabeculae carneae}}, papillary muscles · smooth outflow: infundibulum',
  '- {{Moderator band}}: septum → anterior papillary muscle, carries the right bundle branch',
  '! This band exists in the RV only → it names the chamber in a spot test'
]);
S_('A-C4', [
  '## Left atrium',
  '- Receives 4 pulmonary veins · wall thicker than the RA',
  '> {{Left atrial appendage}} → blood pools in atrial fibrillation → clots form here',
  '- Septum: valvula foraminis ovalis (the flap side of the fossa)',
  '## Left ventricle',
  '- Thickest wall · {{mitral}} valve = 2 cusps (anterior, posterior)',
  '- Aortic valve = 3 semilunar cusps (right, left, posterior), each with nodule + lunula',
  '> Above the cusps: {{sinuses of Valsalva}} → {{coronary arteries}} open here'
]);
S_('A-C5', [
  '## Right coronary artery',
  '> SA nodal br. → conal → {{right marginal}} (RV, inferior border) → AV nodal br. → PDA (posterior ⅓ septum)',
  '## Left coronary artery (short trunk)',
  '> LAD → diagonal + septal branches → front of both ventricles + {{anterior ⅔}} of the septum',
  '> Circumflex → left marginal → {{lateral}} + posterior LV wall',
  '- Dominance = which artery gives the {{posterior interventricular}} a. → right in most (88%)',
  '! SA node and {{AV node}} both usually fed by the {{RCA}}',
  '---',
  '@flow:coronary'
]);
S_('A-C6', [
  '> Great cardiac v. (with the {{LAD}}, anterior sulcus) → left around the coronary sulcus → {{coronary sinus}} → right atrium',
  '- Middle cardiac v. → with the {{posterior interventricular}} artery',
  '- {{Small cardiac}} v. → with the RCA + right marginal a. (right coronary sulcus)',
  '- Oblique v. of LA → the same sinus',
  '- {{Anterior cardiac}} veins → straight into the RA',
  '- Least cardiac veins → straight into each chamber',
  '! Spot a vein → name the artery it travels with',
  '---',
  '@flow:cveins'
]);
S_('A-C7', [
  '> Pacemaker between the {{crista terminalis}} and SVC → atria → AV node (Koch) → bundle of His → through the {{fibrous}} ring + membranous septum → bundle branches',
  '> Right branch rides the moderator band → anterior papillary muscle',
  '- Blood: SA + AV nodes mostly from the RCA · bundle branches from {{septal}} branches of the LAD',
  '## Nerves',
  '- {{Vagus}} → HR ↓ · sympathetic trunk → HR ↑ · both via the cardiac plexuses',
  '> Pain fibres → sympathetic cardiac branches → cord {{T1–T4}} → chest + inner arm (referred)'
]);
S_('A-C8', [
  '> {{Internal jugular}} + subclavian v. → brachiocephalic v. (×2) → {{SVC}}',
  '> Arch branches, right → left: {{brachiocephalic trunk}} (→ R common carotid + R subclavian) → L common carotid → L subclavian',
  '- Under the arch: ligamentum arteriosum (to the left pulmonary a.)',
  '> Left vagus crosses the arch → {{left recurrent laryngeal}} n. hooks under it → back up to the larynx',
  '- Thoracic aorta: posterior mediastinum, {{T4–T12}} · bronchial, esophageal, posterior intercostal branches',
  '! Arch aneurysm or huge LA → stretches the recurrent nerve → hoarse voice'
]);
S_('A-C9', [
  '> Placenta → umbilical vein → ductus venosus (skips the liver) → IVC → RA',
  '> RA → foramen ovale → LA → LV → aorta (best O₂ to the head)',
  '> RV → pulmonary trunk → ductus arteriosus → aorta (skips the lungs)',
  '> Birth: O₂ ↑ + {{PGE₂}} ↓ → ductus closes · LA pressure ↑ → flap shuts the foramen',
  '| Before birth | After birth |',
  '| umbilical vein | {{ligamentum teres hepatis}} |',
  '| ductus venosus | {{ligamentum venosum}} |',
  '| foramen ovale | {{fossa ovalis}} |',
  '| ductus arteriosus | {{ligamentum arteriosum}} |',
  '| umbilical arteries | medial umbilical ligaments |',
  '---',
  '@flow:fetal'
]);

/* ---------- H · Histology ---------- */
S_('H-C1', [
  '| Layer | Made of |',
  '| Endocardium | endothelium + subendothelial CT |',
  '| Subendocardial layer | {{Purkinje}} fibres (conduction) |',
  '| Myocardium | contractile, {{myoendocrine}} (→ ANP), nodal cardiocytes |',
  '| Epicardium | {{mesothelium}} + loose CT, fat, coronary vessels |',
  '> Surface cells of the epicardium → secrete {{pericardial fluid}} → less friction',
  '- Cardiac skeleton = dense CT ({{collagen + elastic}}) → anchors the valves + {{insulates}} atria from ventricles',
  '- Valves = dense fibrous CT · chordae = the same fibres as the skeleton · papillary m. = cardiac muscle'
]);
S_('H-C2', [
  '| | Elastic artery | Muscular artery |',
  '| Examples | aorta, {{subclavian}}, common carotid, pulmonary | femoral, axillary, {{radial}} |',
  '| Media | many {{fenestrated elastic}} lamellae | 6–40 layers of {{smooth muscle}} |',
  '| IEL / EEL | present, not obvious | {{prominent}} |',
  '- Verhoeff–van Gieson stain → elastic fibres black',
  '- Media SMCs make the {{ECM}} (collagen, elastic, reticular): no fibroblasts there',
  '- Adventitia: CT + vasa vasorum + nervi vasorum'
]);
S_('H-C3', [
  '> 1–2 layers of circular SMC, no EEL, no vasa vasorum → {{resistance}} vessels',
  '> Antihypertensive vasodilator → acts mainly on the arterioles',
  '> Terminal arteriole → {{metarteriole}} (precapillary sphincters) → capillary bed → postcapillary venule',
  '- {{AV anastomosis}} (skin: fingertips, nose, lips) → bypasses surface capillaries → heat kept → thermoregulation',
  '- Portal system = two capillary beds in series: venous → liver, {{anterior pituitary}} · arterial → kidney'
]);
S_('H-C4', [
  '| Type | Wall | Where |',
  '| Continuous | tight junctions, many pinocytotic vesicles, full BM | muscle, lung, {{CNS}} (blood–brain barrier) |',
  '| Fenestrated | pores ± diaphragm, full BM | endocrine glands, gut, {{kidney}} |',
  '| Sinusoidal | big gaps, {{incomplete}} BM | liver, spleen, bone marrow |',
  '> {{Pericytes}} wrap capillaries + {{postcapillary venules}}, share their BM → support + control flow',
  '- Capillary wall has no {{smooth muscle}}: only endothelium, BM and the wrapping cells'
]);
S_('H-C5', [
  '- Venules: postcapillary (pericytes, {{diapedesis}}) → collecting → muscular',
  '- Medium veins: thin media, thicker adventitia · {{valves}} most numerous in the legs (great saphenous)',
  '> Large veins (venae cavae): thin media, adventitia {{thickest}} + bundles of {{longitudinal}} SMC',
  '> Valve = fold of the tunica {{intima}}: elastic core, covered by {{endothelium}} on both faces',
  '- No SMC at all: {{dural sinuses}}, coronary sinus',
  '! Artery → thick media · vein → thick adventitia'
]);
S_('H-C6', [
  '> Lymphatic capillary: {{blind-ended}} tube, one leaky endothelial layer',
  '- No basement membrane, no SMC, no pericyte, no {{valves}}',
  '- {{Anchoring filaments}} hold the lumen open',
  '- Spot it: irregular outline, thin wall, pale lymph, no {{RBC}}',
  '> Collecting vessels (occasional flaps) → {{thoracic duct}} → junction of left IJV + subclavian v.',
  '- Gut villi: lacteals carry {{chylomicrons}}'
]);

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

/* ---------- V · Circulatory dynamics II ---------- */
S_('V-C1', [
  '= PP = SBP − DBP · MAP = DBP + PP ÷ 3',
  '> MAP = {{CO × TPR}} · pulse pressure set by {{stroke volume}} and arterial compliance',
  '> Away from the heart: systolic and PP {{rise}}, mean falls slightly',
  '- Normal ≤ 120/80 · pulmonary artery ≈ 25/10',
  '> Cuff deflating: first tapping (Korotkoff {{phase 1}}) = systolic · sounds {{disappear}} (phase 5) = diastolic'
]);
S_('V-C2', [
  '- Pulse wave outruns the blood itself, and travels {{faster}} still in stiff arteries',
  '> Stiff aorta (age, atherosclerosis) → SBP ↑, DBP ↓ → {{wide pulse pressure}}',
  '| Pulse | Cause |',
  '| Collapsing (water-hammer) | {{aortic regurgitation}}, PDA |',
  '| Plateau (slow rise) | {{aortic stenosis}} |',
  '| Pulsus paradoxus (weaker on inspiration) | {{cardiac tamponade}} |',
  '| Pulse deficit | AF, PVCs |'
]);
S_('V-C3', [
  '- Venous pressure ↑ with gravity, tight clothes or sitting, abdominal pressure, high RA pressure',
  '> {{Thoracic pump}}: inspiration → intrathoracic pressure ↓ → venous return ↑',
  '> {{Muscle pump}} + valves → calf veins squeezed → blood pushed up, backflow blocked',
  '- Also: venoconstriction, cardiac suction',
  '> CVP ↑: more blood volume, venous tone ↑, heart failing, tamponade · CVP ↓: {{venodilation}}, blood loss',
  '! {{Kussmaul}} sign: neck veins distend on inspiration (constriction, tamponade)'
]);
S_('V-C4', [
  '| Wave | Event |',
  '| a | right {{atrial contraction}} |',
  '| c | tricuspid bulges back as the RV contracts |',
  '| x | atrial {{relaxation}} |',
  '| v | {{venous filling}} of the atrium |',
  '| y | atrium empties into the RV |',
  '> AF → no organised atrial beat → {{a wave}} absent',
  '> Tricuspid regurgitation → RV leaks into RA in systole → giant {{v wave}}'
]);

/* ---------- M · Microcirculation ---------- */
S_('M-C1', [
  '- Arteriole + {{precapillary sphincter}} set how much blood enters the bed (sympathetic control)',
  '| Capillary | Wall | Where |',
  '| Continuous | clefts 10–15 nm | muscle, skin, lung, {{brain}} (tight junctions) |',
  '| Fenestrated | pores | gut mucosa, {{endocrine glands}}, choroid plexus, glomeruli |',
  '| Discontinuous | wide gaps, partial BM | {{liver}}, spleen, bone marrow |',
  '> Tightest = BBB · leakiest = {{sinusoids}} (proteins cross)',
  '> Sphincter shuts → capillary pressure ↓ → filtration ↓ → interstitial fluid ↓'
]);
S_('M-C2', [
  '- Gases and lipid-soluble molecules (O₂, CO₂, NO, anesthetics) → straight through the cell: {{transcellular}} diffusion',
  '- Water, glucose, ions → through clefts and fenestrae with water ({{convection}}, paracellular)',
  '- Proteins → {{vesicles}} (transcytosis); clefts too small except in the liver',
  '> Fick: diffusion ↑ with {{gradient}} and surface area · ↓ with wall thickness',
  '- Through the pores, bigger molecule → lower permeability (water > NaCl > glucose > {{albumin}})'
]);
S_('M-C3', [
  '= NFP = (Pc − Pi) − (πc − πi)',
  '> Out: {{capillary hydrostatic}} pressure (35 → 15 mmHg along the capillary) + interstitial oncotic pressure',
  '> In: {{plasma oncotic}} pressure (~28, mostly albumin) + interstitial hydrostatic pressure (normally slightly negative)',
  '> Arteriolar end NFP ≈ +9 → {{filtration}} · venular end ≈ −8 → absorption',
  '- About 90% of the filtered fluid comes back; {{lymph}} takes the remaining 10%',
  '! Venous pressure ↑ raises Pc more than arterial pressure ↑ → venous {{constriction}} = more fluid out',
  '---',
  '@flow:starling'
]);
S_('M-C4', [
  '- Safety factors: negative Pi · lymph flow can rise many-fold · lymph {{washes out protein}}',
  '| Mechanism | Example |',
  '| Pc ↑ | heart failure, venous obstruction, standing still |',
  '| πc ↓ | {{low albumin}}: malnutrition, cirrhosis, nephrosis |',
  '| Permeability ↑ | inflammation, burns, {{bee sting}} |',
  '| Lymph blocked | mastectomy, filariasis → {{non-pitting}} edema |',
  '> Lymph blocked → protein stays out → {{interstitial oncotic}} pressure ↑ → more fluid held in the tissue'
]);

/* ---------- R · Regulation ---------- */
S_('R-C1', [
  '- Medulla: NTS receives the input → cardio-inhibitory (dorsal motor n. of X), cardio-accelerator ({{RVLM}}), vasomotor centre',
  '> Sympathetic (T1–T4 + adrenal medulla) → I<sub>f</sub> ↑, I<sub>Ca</sub> ↑ → HR, conduction, {{contractility}} ↑',
  '> Vagus → {{I<sub>K-ACh</sub>}} ↑, I<sub>Ca</sub> ↓, I<sub>f</sub> ↓ → hyperpolarized, flatter prepotential → HR ↓',
  '- Right vagus → mostly {{SA node}} · left vagus → mostly AV node',
  '- Intrinsic: heterometric = {{Frank–Starling}} · homeometric = Anrep (force ↑ when afterload ↑)'
]);
S_('R-C2', [
  '> Stretch receptors: carotid sinus (Hering n., {{CN IX}}) + aortic arch (CN X) → {{NTS}}',
  '> BP ↑ → firing ↑ → vagus ↑ + sympathetic ↓ → HR, force, TPR ↓ → BP back down',
  '> BP ↓ (bleeding, diarrhea, standing) → firing {{↓}} → vagus ↓ + sympathetic ↑ → HR ↑, {{vasoconstriction}}',
  '- Fastest control (seconds) but {{resets}} if the change lasts days',
  '! Carotid sinus = pressure · carotid {{body}} = chemistry',
  '---',
  '@flow:baro'
]);
S_('R-C3', [
  '> Carotid + aortic bodies sense O₂ ↓, CO₂ ↑, H⁺ ↑ → NTS → {{vasoconstriction}} + breathing ↑',
  '> Brain flow ↓ → CO₂ builds at the vasomotor centre → {{CNS ischemic response}} → massive sympathetic → BP ↑↑',
  '> Intracranial pressure ↑ → {{Cushing}} triad: hypertension with wide PP + bradycardia + irregular breathing',
  '- Bainbridge: atria stretched → HR {{↑}}',
  '- Respiratory sinus arrhythmia: HR ↑ on {{inspiration}}, ↓ on expiration'
]);
S_('R-C4', [
  '| Speed | Mechanism |',
  '| Seconds | baroreceptor, chemoreceptor, CNS ischemic |',
  '| Minutes–hours | renin–angiotensin vasoconstriction, {{stress relaxation}}, capillary fluid shift |',
  '| Days | kidney volume control (pressure natriuresis), salt- and water-keeping hormones |',
  '> Renin (JG cells) → angiotensin I → {{ACE}} (lung) → angiotensin II → vasoconstriction + {{aldosterone}} + ADH + thirst',
  '- ADH: V1 → vasoconstriction · {{V2}} → water reabsorption',
  '- Low-pressure receptors (atria, veins) sense volume ↑ → ANP ↑, ADH ↓ · CKD → {{GFR}} ↓ → salt kept → BP ↑'
]);
S_('R-C5', [
  '- {{Autoregulation}}: pressure changes, flow stays constant (myogenic: stretch → constrict)',
  '> Metabolism ↑ → CO₂, H⁺, K⁺, lactate, {{adenosine}} ↑ → arterioles dilate → active hyperemia',
  '- Reactive hyperemia: flow surges after a period of blocked flow',
  '> Shear stress → endothelium → {{NO}} (+ prostacyclin) → relax · {{endothelin}} → constrict',
  '| Dilate | Constrict |',
  '| {{histamine}}, bradykinin, ANP, PGE, PGI₂ | serotonin, NE, angiotensin II, ADH, TXA₂ |',
  '- Weeks–months of low flow → angiogenesis → {{collateral}} vessels'
]);

/* ---------- B · Biochemistry of CVS ---------- */
S_('B-C1', [
  '- Branched striated fibres · single central nucleus · abundant {{mitochondria}} (~80% mass) for aerobic ATP',
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
  '> Myocardial {{LD-1}} (H₄) has low Km → converts exercise acid → pyruvate for TCA',
  '! In ischemia (no O₂), anaerobic glycolysis accumulates lactic acid'
]);

S_('B-C6', [
  '> CrP shuttle: mitochondrial CK makes CrP → cytosolic CK hands P to ADP at cross-bridges',
  '- 3 CK dimers: CK-1 (BB, brain) · CK-2 ({{CK-MB}}, 15–30%, up to 41% LV) · CK-3 ({{CK-MM}}, skeletal &amp; 70–85% heart)',
  '- Advantage: cardiac CK-2 has a {{lower Km for ADP}} than CK-3 → makes ATP even at low steady [ADP]',
  '= Emergency ({{adenylate}} enzyme): 2 ADP → ATP + {{AMP}}',
  '! Trap: CK-3 (not CK-2) is highest in heart · ↑AMP activates glycogen phosphorylase b'
]);

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

/* ---------- O · Regional circulation ---------- */
S_('O-C1', [
  '- Pulmonary artery 25/10 (mean ~15) · resistance {{1/10–1/7}} of systemic · flow = whole CO',
  '> Alveolar {{hypoxia}} → pulmonary arterioles constrict → blood sent to well-aired alveoli',
  '- Low pressure → {{gravity}} shapes flow: apex (zone 1) little, base (zone 3) most',
  '- Plasma oncotic > capillary pressure + strong {{lymph}} → lungs stay dry',
  '- Bronchial arteries (from the aorta, systemic pressure) feed the airways to the {{terminal bronchioles}}'
]);
S_('O-C2', [
  '- 60–80 mL/min/100 g · depends on aortic pressure',
  '> Systole → LV wall squeezes its arteries → left coronary flow {{lowest}} in early systole',
  '> Early {{diastole}} → wall relaxes, aortic pressure still high → flow highest',
  '> Work ↑ → O₂ use ↑ → {{adenosine}}, NO, H⁺ → dilation: {{metabolic}} control wins',
  '- Sympathetic constricts directly, but net effect is dilation (more work) · β1 blocker → work ↓ → flow ↓'
]);
S_('O-C3', [
  '- ~700 mL/min · autoregulated at perfusion pressure {{60–160}} mmHg',
  '> PaCO₂ ↑ → {{dilation}} · PaCO₂ ↓ (hyperventilation) → constriction → ICP ↓',
  '- Local factors rule: CO₂ first, then O₂, H⁺ in CSF, K⁺, {{adenosine}}',
  '- Active brain region → its flow rises ({{functional hyperemia}})',
  '- Nerves weak (cervical sympathetic, facial parasympathetic) · ICP ↑ → {{Cushing}} phenomenon'
]);
S_('O-C4', [
  '## Skin: temperature, not metabolism',
  '> Almost entirely {{sympathetic}} control from the hypothalamic thermostat',
  '> Cold → arterioles + {{AV anastomoses}} constrict → heat kept · heat → they open',
  '- Long cold (0–15 °C) → cold-induced {{vasodilation}} (protects fingers)',
  '## Skeletal muscle',
  '> Rest: nerve-set tone · exercise: {{local metabolites}} → flow up to 15–20×'
]);
S_('O-C5', [
  '- Gut: mostly sympathetic, weak pressure control · after meals {{functional hyperemia}} (adenosine)',
  '- Liver: 25% of CO, ¾ from the {{portal vein}} (~10 mmHg), ¼ hepatic artery',
  '> Kidney: 20–25% of CO → for filtration, not metabolism',
  '> {{Autoregulation}} 75–170 mmHg: myogenic + {{tubuloglomerular feedback}} (macula densa)',
  '- Shock → massive sympathetic overrides it · angiotensin II constricts {{both}} arterioles'
]);

/* ---------- I · Imaging of CVS ---------- */
S_('I-C1', [
  '- Standard upright {{PA}} view: anterior chest against detector (beam back → front) → minimizes heart magnification',
  '- Left {{lateral}} view: left chest wall against detector → shows anterior RV and posterior LA',
  '- Supine / portable {{AP}} view (bedridden, infants): heart farther from detector → artificially {{magnified}} cardiac silhouette',
  '= {{CTR}} = widest transverse cardiac diameter ÷ widest internal thoracic diameter',
  '| Age group | Normal upper limit |',
  '| Adult | {{&lt; 50%}} (50–55% borderline · &gt; 55% cardiomegaly) |',
  '| Infant &lt; 1 yr / 1–2 yr | &lt; 65% / &lt; 60% |'
]);

S_('I-C2', [
  '| View &amp; edge | Structures (top → bottom) |',
  '| PA right edge | {{SVC}} → {{right atrium}} → IVC |',
  '| PA left edge | left subclavian a. → {{aortic arch}} → {{pulmonary trunk}} → LAA → {{left ventricle}} |',
  '| Lateral anterior | {{right ventricle}} (most anterior) → main PA → ascending aorta |',
  '| Lateral posterior | {{left atrium}} (most posterior) → LV → IVC |',
  '! Exam trap: neither RV nor LA normally forms a PA border · LA enlargement gives double-density sign, widened carina, or bulging LAA'
]);

S_('I-C3', [
  '## Valve projections on CXR (P-A-M-T · T6–T9)',
  '| Valve | Thoracic level | Anterior landmark |',
  '| {{Pulmonic}} | T6 | 3rd sternochondral junction (SCJ) |',
  '| {{Aortic}} | T7 | 3rd ICS |',
  '| {{Mitral}} | T8 | 4th SCJ |',
  '| {{Tricuspid}} | T9 | {{4th ICS}} behind sternum |',
  '- Normal valves are invisible on plain film unless calcified or prosthetic',
  '> Pulmonary arterial hypertension (PAH) → enlarged central PA + peripheral {{pruning}}',
  '> Pulmonary venous hypertension (PVH) → upper-lobe venous dilation ({{cephalization}})'
]);

S_('I-C4', [
  '| Level | Key axial landmarks |',
  '| T3 (5 vessels) | R/L brachiocephalic v. + BCT → LCCA → {{left subclavian}} a. (postero-left) |',
  '| T4 (arch) | aortic arch + SVC + azygos arch |',
  '| T5 (main PA) | {{SVC}} (right) · {{ascending}} aorta (center) · main/L/R PA · descending aorta |',
  '| T7 (valve) | trileaflet aortic valve at center |',
  '| T8–T9 (chambers) | {{right atrium}} (viewer’s left) · RV (front) · LV (left) · {{left atrium}} (back, front of {{esophagus}}) |',
  '! Viewer’s left = patient’s right · sternum-to-spine midline at T5 hits the central aorta'
]);

S_('I-C5', [
  '- 4 Cardiac planes: horizontal long-axis (4-chamber ≈ axial) · vertical long-axis (≈ sagittal) · {{short-axis}} (RV/LV volumetric EDV, ESV, SV, {{EF}}, mass) · 3-chamber (LVOT)',
  '| Modality | Best clinical strength | Limitation |',
  '| {{Echocardiography}} | {{bedside}}, {{real-time}} wall/valve motion, no radiation | operator / window dependent |',
  '| {{CT}} (MDCT) | 3D coronary artery anatomy, calcium score, aorta | ionizing radiation + IV contrast |',
  '| {{MRI}} | gold-standard volumes &amp; myocardial {{scar}}, no radiation | slow, non-portable, metal/pacemaker |',
  '---',
  '@flow:i_modal'
]);

S_('I-C6', [
  '- Catheter angiography: arterial access via {{femoral}} or {{radial}} artery under X-ray fluoroscopy + iodinated contrast',
  '- Same-session endovascular therapy: {{angioplasty}}, stenting, clot removal, embolization',
  '= {{DSA}} = post-contrast frame (B) − pre-contrast {{mask}} frame (A) → erases bone &amp; soft tissue',
  '> Left coronary angiography: {{left main}} (LM) → LAD + LCx · Right coronary angiography: RCA (SA nodal, acute marginal, PDA)',
  '> Aortogram: ascending aorta → arch (brachiocephalic trunk, LCCA, left subclavian a.) → descending aorta'
]);

/* ---------- X · Exercise ---------- */
S_('X-C1', [
  '- Aerobic (O₂-dependent, sustained) vs anaerobic (sprint) · isotonic/dynamic vs {{isometric}}/static',
  '- Intensity by HRmax = {{220 − age}}: light < 50% · moderate 50–70% · vigorous > 70%',
  '> Dynamic: muscle vessels dilate → TPR {{↓}} → SBP ↑, DBP ≈ same',
  '> Static: contracting muscle squeezes its arteries → TPR ↑ → SBP and {{DBP}} ↑↑',
  '! Hypertension or weak heart → avoid {{heavy weight lifting}}'
]);
S_('X-C2', [
  '= VO₂ = CO × (a–v O₂ difference) (Fick)',
  '= VO₂max = CO<sub>max</sub> × (a–v O₂ difference)<sub>max</sub>',
  '> Intensity ↑ → {{O₂ uptake}} ↑ linearly, CO ↑, O₂ extraction ↑',
  '- VO₂max = {{gold standard}} of cardiorespiratory fitness',
  '- Low VO₂max predicts {{mortality}} better than weight or blood pressure'
]);
S_('X-C3', [
  '> Heart rate: first {{vagal withdrawal}}, then sympathetic → rises linearly with intensity',
  '> Stroke volume: rises early, {{plateaus}} by ~50% VO₂max',
  '- SV ↑ via preload (muscle + breathing pumps, venoconstriction), contractility, afterload ↓',
  '- Low intensity: SV + HR · high intensity: mostly {{HR}} (diastole too short to fill more)',
  '> Transplanted heart: no nerves → resting HR high, slow HR rise via {{circulating catecholamines}}, CO by {{Frank–Starling}}'
]);
S_('X-C4', [
  '= MAP = CO × TPR → dynamic exercise: CO ↑↑, TPR ↓ → MAP ↑ from {{CO}}',
  '> Sympathetic constricts {{splanchnic}} and renal beds → blood shifted to working muscle',
  '- Muscle ↑↑ (metabolites) · skin ↑ for heat · coronary ↑ · brain {{unchanged}}',
  '- Myocardial work ≈ rate–pressure product = HR × {{SBP}}',
  '! Stopping suddenly → muscle pump gone → {{venous return}} ↓ → faint'
]);
S_('X-C5', [
  '- Resting HR ↓ ({{sinus bradycardia}}) · SV ↑ at rest, submaximal and maximal',
  '> Athlete’s heart = {{eccentric}} hypertrophy: bigger LV cavity, wall-to-radius ratio kept',
  '- Pressure overload (hypertension) = concentric: thick wall, small cavity',
  '> COmax ↑ mainly via {{SVmax}} (HRmax barely changes)',
  '- Muscle: capillary density ↑, mitochondria ↑, a–v O₂ difference ↑ → {{VO₂max}} ↑',
  '- Resting and exercise BP ↓'
]);

/* ---------- P · Physical Examination of the Cardiovascular System ---------- */
S_('P-C1', [
  '> Best vein for JVP = {{right internal}} jugular vein (straight, valveless path via right brachiocephalic v. &amp; SVC → RA)',
  '| Feature | Venous pulsation (JVP) | Carotid artery pulse |',
  '| Touch feel | non-palpable, soft, {{collapsible}} | palpable, brisk |',
  '| Waveform peaks | {{biphasic}} (2 peaks/cycle) | monophasic (1 peak) |',
  '| Inspiration | {{falls}} (negative chest pressure) | unchanged |',
  '| Supine / Valsalva / {{RUQ}} press | rises (hepatojugular reflux) | unchanged |',
  '! Left IJV can be compressed across aortic arch · EJV has valves, pierces fascia, and constricts with sympathetic tone',
  '---',
  '@flow:p_neck'
]);

S_('P-C2', [
  '- Recline at {{30–45°}} (record angle), neck slightly left; measure vertical cm above {{sternal angle}}',
  '= CVP (cmH₂O) = JVP + {{5 cm}} (angle of Louis → mid-RA)',
  '| Volume state | CVP / JVP cut-off | Clues |',
  '| Normal | 5–8 cmH₂O (JVP ≤ 3–4 cm) | falls on inspiration |',
  '| Hypervolemia / ↑RA | {{&gt; 8–10 cmH₂O}} | JVD (RHF, tamponade, constrictive) |',
  '| Hypovolemia | {{&lt; 5 cmH₂O}} | flat veins even supine |',
  '! Tamponade classic sign = {{pulsus paradoxus}} (inspiratory SBP drop &gt; 10 mmHg) + high JVP'
]);

S_('P-C3', [
  '| JVP component | Mechanical event | Timing |',
  '| {{a}} wave | {{RA contraction}} | just before S1 (after P wave) |',
  '| {{c}} wave | TV bulging into RA | isovolumic phase (after S1) |',
  '| {{x}} descent | RA {{relaxation}} + downward valve pull | ventricular systole |',
  '| {{v}} wave | passive RA filling against closed TV | late systole (around S2) |',
  '| {{y}} descent | {{TV opens}} → passive RV filling | early diastole |',
  '! Absent a-peak = atrial fibrillation · carotid upstroke sits right after S1 (AV valve closure) and ends at S2'
]);

S_('P-C4', [
  '- 6 pulse checks: rate · rhythm · volume · contour · symmetry · radio-radial / radio-femoral delay',
  '- Neck safety: never both sides at once · avoid {{carotid sinus}} · use {{bell}} for bruit',
  '- Contours: {{collapsing}} (water-hammer) = AR · {{pulsus parvus et tardus}} = AS',
  '## Heart exam links',
  '| Finding | Meaning |',
  '| {{Diaphragm}} vs low-pitch side | high-pitch (S1, S2) vs low-pitch (S3, S4, turbulence) |',
  '| PMI lateral to L 5th MCL | LV enlargement (↑{{afterload}} in HTN) |',
  '| L 2nd ICS systolic (with neck pulse) | {{pulmonary}} stenosis |',
  '| L 5th parasternal diastolic | {{tricuspid}} stenosis (apex pansystolic = MR) |'
]);
