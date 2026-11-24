/* ---------- V · Circulatory dynamics II ---------- */
window.THAI_SEC.V = {
  big: "ฝั่ง <b>artery</b>: คำนวณ <b>PP และ MAP</b>, รู้ว่าอะไรทำให้ PP กว้าง และจำ<b>ชีพจรผิดปกติ</b> · ฝั่ง <b>vein</b>: อะไรเพิ่ม/ลด venous return และ CVP และอ่าน <b>JVP a c x v y</b>",
  traps: [
    "<b>MAP = DBP + PP/3</b> (ไม่ใช่ค่าเฉลี่ยตรงกลาง) · SBP = DBP + PP",
    "<b>หลอดเลือดแข็ง (สูงอายุ)</b> → SBP ↑ DBP ↓ → <b>PP กว้าง</b> + pulse wave velocity เร็วขึ้น",
    "Collapsing pulse = <b>AR</b>, PDA · plateau = <b>AS</b> · pulsus paradoxus = <b>tamponade</b>",
    "หายใจเข้า → ความดันในอก<b>ลดลง</b> → venous return ↑ (thoracic pump)",
    "<b>a wave</b> = atrial contraction → หายใน <b>AF</b> · TR → <b>v wave สูง</b>"
  ]
};

Object.assign(window.THAI_CONCEPT, {
  "V-C1": [
    "PP = SBP − DBP · MAP = DBP + PP ÷ 3 · PP ขึ้นกับปริมาณเลือดที่บีบออกแต่ละครั้งและความยืดหยุ่นของ aorta",
    "ค่าปกติ ≤ 120/80 · pulmonary artery ≈ 25/10"
  ],
  "V-C2": [
    "Arterial stiffness → SBP ↑ DBP ↓ → <b>PP กว้าง</b> และคลื่นชีพจรวิ่งเร็วขึ้น",
    "Collapsing = AR/PDA · plateau = AS · paradoxus = tamponade"
  ],
  "V-C3": [
    "Venous pressure ↑ จาก gravity, เสื้อผ้ารัดหรือนั่งนาน, ความดันในช่องท้อง, ความดัน RA สูง",
    "Venous return ↑ จากการหายใจเข้า, การบีบของกล้ามเนื้อน่อง + ลิ้นใน vein, venoconstriction · CVP ↓ เมื่อเสียเลือด"
  ],
  "V-C4": [
    "JVP สะท้อนความดัน RA: คลื่นบวก 3 ตัว (a, c, v) และร่องลง 2 ตัว (x, y)",
    "c = tricuspid โป่งกลับเข้า RA ตอน RV บีบ · y = RA เทเลือดลง RV",
    "AF → ไม่มีการบีบของ atrium ที่เป็นระเบียบ · TR → RV รั่วกลับเข้า RA ช่วง systole"
  ]
});

Object.assign(window.THAI_Q, {
  "V1": ["MAP = DBP + PP/3 → 80 = DBP + 20 → DBP 60 → SBP = 60 + 60 = <b>120</b>"],
  "V2": ["MAP = 72 + (126 − 72)/3 = 72 + 18 = <b>90</b>"],
  "V3": ["บ้าน 70 + 40/3 ≈ 83 · โรงพยาบาล 80 + 60/3 = 100 → ต่างกัน ≈ <b>17</b>"],
  "V4": ["คลื่นความดันถูกขยายเมื่อไกลหัวใจ → <b>femoral artery</b> systolic สูงกว่า aorta (แต่ mean ต่ำกว่าเล็กน้อย)"],
  "V5": ["ปล่อย cuff ลง → ได้ยิน Korotkoff <b>ครั้งแรก = systolic</b> · เสียงหาย = diastolic"],
  "V6": ["Aorta แข็งเก็บ SV ไม่ได้ → SBP ↑ DBP ↓ → <b>PP กว้าง</b> · pulse velocity เร็วขึ้น ไม่ใช่ช้าลง"],
  "V7": ["AR: SV ใหญ่แล้วไหลย้อนกลับเร็ว → ขึ้นเร็วตกเร็ว = <b>collapsing pulse</b>", "Plateau = AS · paradoxus = tamponade"],
  "V8": ["<b>AR</b> → SBP สูง (SV มาก) + DBP ต่ำ (ไหลย้อน) → PP กว้าง", "Atherosclerosis ก็ทำ PP กว้างได้ แต่ key ตอบ AR"],
  "V9": ["Tamponade → หายใจเข้า RV เติมดัน septum ไปซ้าย → LV เติมน้อย → <b>pulsus paradoxus</b>"],
  "V10": ["หายใจเข้า → <b>ความดันในอกลดลง</b> → vein ในอกและ RA ขยาย ดูดเลือดกลับ → venous return ↑"],
  "V11": ["<b>Intravascular volume ↑</b> → ความดันใน venous reservoir ↑ → ดันเลือดกลับหัวใจมากขึ้น", "CVP ↑, venous pooling, sympathetic ↓ ลด venous return"],
  "V12": ["<b>Venodilation</b> → เลือดไปค้างใน vein ที่ compliant → เลือดกลับ central vein น้อยลง → CVP ↓"],
  "V13": ["AF → atria สั่นพลิ้ว ไม่บีบ → <b>ไม่มี a wave</b>"],
  "V14": ["<b>a wave = atrial systole</b> · c = tricuspid โป่ง · x = atrial relaxation · v = filling · y = emptying"],
  "V15": ["Pansystolic ที่ lower left sternal border ดังขึ้นตอนหายใจเข้า = <b>TR</b> → เลือดย้อนเข้า RA ตอน systole → <b>v wave สูง</b>"]
});
