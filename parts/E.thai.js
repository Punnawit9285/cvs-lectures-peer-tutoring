/* ---------- E · Physical & electrical properties ---------- */
window.THAI_SEC.E = {
  big: "หัวใจทำงานเป็น<b>ไฟฟ้า → กล้ามเนื้อ</b>: จำ <b>fast AP 5 phase</b> กับ <b>pacemaker AP 3 phase</b> ว่าแต่ละ phase ใช้ไอออนอะไร แล้วต่อยอดไปที่ <b>K⁺/Ca²⁺ ผิดปกติ</b>, <b>Ca²⁺ กับแรงบีบ</b> และ <b>preload/afterload/contractility</b>",
  traps: [
    "Phase 0 ของ <b>fast AP</b> = fast Na⁺ · phase 0 ของ <b>pacemaker</b> = L-type Ca²⁺ · <b>SA/AV node ไม่มี fast Na⁺</b> ที่ทำงาน",
    "SA node เป็น pacemaker เพราะ<b>ยิงเร็วที่สุด</b> ไม่ใช่เพราะอยู่สูงสุด",
    "<b>AV node ช้าที่สุด</b> · <b>Purkinje เร็วที่สุด</b> · ความเร็วขึ้นกับ <b>slope ของ phase 0</b>",
    "<b>HyperK⁺</b> → RMP less negative → excitability ↑ แต่ conduction ↓ · <b>hypoCa²⁺</b> → plateau ยาว (QT ยาว) excitability ↑",
    "<b>Preload</b> = EDV · <b>contractility</b> = EF · afterload ของ LV = aortic pressure/SVR, ของ RV = PA pressure/PVR"
  ]
};

Object.assign(window.THAI_CONCEPT, {
  "E-C1": [
    "Phase 4 K⁺ ออกผ่าน I<sub>K1</sub> (−90) → phase 0 fast Na⁺ เข้า → phase 1 I<sub>to</sub> → <b>phase 2 L-type Ca²⁺ เข้า = K⁺ ออก</b> → phase 3 K⁺ ออก",
    "ศัพท์: chrono = rate · <b>dromo = conduction</b> · bathmo = excitability · ino = แรงบีบ · lusi = คลายตัว"
  ],
  "E-C2": [
    "Pacemaker: phase 4 <b>funny current (Na⁺)</b> ไต่ขึ้นช้า ๆ → phase 0 Ca²⁺ ที่ −40 mV → phase 3 K⁺",
    "β1 → I<sub>f</sub> ↑ → phase 4 ชันขึ้น → HR ↑ · SA node ยิงเร็วสุด จึงคุมจังหวะ"
  ],
  "E-C3": [
    "Purkinje เร็วสุด (2–4 m/s) · <b>AV node ช้าสุด</b> (0.01–0.05) → ให้ ventricle มีเวลาเติมเลือด",
    "ARP ยาวเกือบเท่าการบีบตัว → หัวใจไม่เกิด tetanus"
  ],
  "E-C4": [
    "RMP ขึ้นกับ <b>extracellular K⁺</b> · hyperK → RMP less negative, excitability ↑, conduction ↓ · hypoK → hyperpolarized",
    "HypoCa → plateau ยาว (QT ยาว), contractility ↓, excitability ↑ · hyperCa → กลับกัน"
  ],
  "E-C5": [
    "Ca²⁺ เข้า (L-type) → <b>RyR</b> ปล่อย Ca²⁺ จาก SR (CICR) → บีบ · SERCA2 เก็บ Ca²⁺ กลับ → คลาย",
    "<b>Digoxin</b> ยับยั้ง Na⁺/K⁺-ATPase → Na⁺ ในเซลล์ ↑ → NCX ขับ Ca²⁺ ออกน้อยลง → Ca²⁺ ↑ → บีบแรงขึ้น"
  ],
  "E-C6": [
    "Preload = EDV/EDP (ดีสุดคือ LVEDP > LAP > PCWP > CVP) · afterload = แรงต้านตอนบีบ",
    "SV = EDV − ESV · EF = SV/EDV · CO = SV × HR"
  ]
});

Object.assign(window.THAI_Q, {
  "E1": ["L-type Ca²⁺ ทำให้เกิด <b>plateau (phase 2)</b> ใน fast AP", "Fast Na⁺ เป็นตัวเริ่ม phase 0 ของ fast AP"],
  "E2": ["Phase 4 ของ fast AP: <b>inward rectifier K⁺ (I<sub>K1</sub>)</b> เปิดอยู่ ตรึง RMP ไว้ที่ −90 mV"],
  "E3": ["Phase 3: <b>K⁺ efflux</b> ผ่าน outward K⁺ channels ขณะที่ Ca²⁺ channel ปิด"],
  "E4": ["β1 → cAMP → HCN (funny) channel เปิดมากขึ้น → <b>Na⁺ เข้าผ่าน funny channel มากขึ้น</b> → phase 4 ชัน → HR ↑", "Pacemaker ไม่ใช้ voltage-gated fast Na⁺"],
  "E5": ["ทุกจุด pacemaker depolarize เองได้ แต่ <b>SA node ยิงเร็วที่สุด</b> จึงรีเซ็ตจุดอื่นก่อน", "ตำแหน่งที่อยู่สูง ไม่ใช่เหตุผล"],
  "E6": ["Nodal AP ไม่มี <b>fast Na⁺ channel</b> ทำงาน (RMP −55 ทำให้ inactivate) · มี funny, L-type Ca²⁺, delayed rectifier K⁺, Na⁺/K⁺ pump"],
  "E7": ["เสียน้ำ → BP ↓ → baroreceptor ยิงน้อย → sympathetic ↑ → I<sub>f</sub> ↑ → <b>slope ของ diastolic depolarization ↑</b> → HR 120", "SA node ไม่ใช้ fast Na⁺"],
  "E8": ["SA → atria → <b>AV node</b> → His → bundle branches → <b>Purkinje</b> → ventricle"],
  "E9": ["<b>Purkinje (His–Purkinje) 2–4 m/s</b> เร็วสุด · atria 1 · ventricle 0.3–0.5 · AV node 0.01–0.05"],
  "E10": ["<b>AV node</b> ช้าสุด → AV delay ให้ ventricle เติมเลือดเต็มก่อนบีบ"],
  "E11": ["Conduction velocity ขึ้นกับ <b>slope ของ phase 0 (depolarization)</b>", "Na⁺ upstroke ชัน → เร็ว · Ca²⁺ upstroke ช้า → ช้า"],
  "E12": ["ถูก: h gate ของ Na⁺ channel ปิดตลอด plateau → ARP ยาวเกือบเท่าการบีบ → ไม่เกิด tetanus"],
  "E13": ["K⁺ 6.7 → RMP <b>less negative</b> ใกล้ threshold → <b>excitability ↑</b>", "แต่ phase 0 ไม่ชัน (conduction ↓) และ phase 2 สั้นลง → ไม่ใช่ prolonged plateau"],
  "E14": ["ขณะพัก K⁺ channel เปิดเป็นหลัก → RMP ≈ E<sub>K</sub> → <b>extracellular K⁺</b> มีผลมากสุด (เปลี่ยนได้ในโรค)", "Key AC80 เขียน B แต่คำอธิบายสนับสนุน extracellular K⁺"],
  "E15": ["Ca²⁺ 6.5 ต่ำ = hypocalcemia → Ca²⁺-activated K⁺ current ↓ → <b>plateau ยาว</b> → QT ยาว", "Ca²⁺ ไม่ค่อยเปลี่ยน RMP"],
  "E16": ["HypoK → E<sub>K</sub> ลบมากขึ้น → <b>RMP hyperpolarized</b> → excitability ↓ และ repolarization ช้าลง"],
  "E17": ["<b>Cardiac glycoside</b> ยับยั้ง Na⁺/K⁺-ATPase → Ca²⁺ ในเซลล์ ↑ → บีบแรงขึ้นโดยตรง", "Carotid massage, β-blocker ลดแรง · ลุกยืนลด preload"],
  "E18": ["<b>Adrenaline</b> → β1 → cAMP → Ca²⁺ ↑ → inotropy ↑", "IV fluid เพิ่ม preload ไม่ใช่ contractility"],
  "E19": ["Sympathetic + HR เร็ว → <b>Ca²⁺ conductance ↑</b> และ Ca²⁺ สะสม → แรงบีบ ↑"],
  "E20": ["EDV = ESV + SV = 120, 120, 100 → preload ต่ำสุด = <b>คนที่ 3</b>", "EF = 50%, 67%, 60% → contractility ต่ำสุด = <b>คนที่ 1</b>"],
  "E21": ["Preload ของ LV = LVEDP → ตัวที่ใกล้ LV ที่สุดคือ <b>LA pressure</b>", "CVP/RAP สะท้อนฝั่งขวา · LVESP ไม่ใช่ preload"],
  "E22": ["<b>α1 agonist</b> → หลอดเลือดหด → SVR ↑ → afterload ↑ โดยไม่เพิ่ม contractility", "Adrenaline ขนาดสูงกระตุ้น β1 ด้วย"],
  "E23": ["Afterload ของ RV = <b>PA pressure + PVR</b> (ของ LV = aortic pressure + SVR)"],
  "E24": ["CO = SV × HR = 50 × 60 = <b>3 L/min</b> · EDV = 100 · EF = 50%"],
  "E25": ["SV = 120 − 40 = 80 → EF = 80/120 = <b>67%</b> · CO = 4.8 L/min"]
});
