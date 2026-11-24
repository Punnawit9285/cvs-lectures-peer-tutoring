/* ---------- M · Microcirculation ---------- */
window.THAI_SEC.M = {
  big: "Microcirculation คือ<b>การแลกเปลี่ยนที่ capillary</b>: ชนิดของ capillary บอกว่ารั่วแค่ไหน, สารแต่ละชนิดผ่านผนังทางไหน, และ <b>Starling forces</b> ตัดสินว่าน้ำออกหรือเข้า → ถ้าออกมากกว่าที่ lymph เก็บคืน = <b>edema</b>",
  traps: [
    "<b>NFP = (Pc − Pi) − (πc − πi)</b> → บวก = filtration · ลบ = absorption",
    "แรงดันออก: <b>Pc</b> และ <b>πi</b> · แรงดึงเข้า: <b>πc</b> และ Pi (ถ้าเป็นบวก)",
    "Venule หด/venous pressure ↑ → Pc ↑ มากกว่า arterial pressure ↑ → filtration ↑",
    "Lymph อุดตัน → protein ค้าง → <b>πi ↑</b> → non-pitting edema · albumin ต่ำ → <b>πc ↓</b> → pitting edema ทั้งสองข้าง",
    "Gas (O₂, CO₂, NO) ผ่านแบบ <b>transcellular simple diffusion</b> · brain capillary รั่วน้อยสุด · liver รั่วมากสุด"
  ]
};

Object.assign(window.THAI_CONCEPT, {
  "M-C1": [
    "Arteriole + sphincter หน้า capillary คุมปริมาณเลือดเข้า bed (sympathetic) → sphincter ปิด → Pc ↓ → filtration ↓",
    "Continuous (กล้ามเนื้อ ผิวหนัง ปอด) รั่วน้อย · fenestrated (gut, choroid plexus, glomerulus) · discontinuous (ม้าม ไขกระดูก) รั่วมากสุด โปรตีนผ่านได้"
  ],
  "M-C2": [
    "ก๊าซและสารละลายในไขมัน (O₂, CO₂, NO, ยาสลบ) ผ่านเนื้อเซลล์ได้ทั้งเซลล์ · น้ำ กลูโคส ไอออน ผ่านช่องระหว่างเซลล์และ fenestra",
    "Protein ใช้การขนส่งข้ามเซลล์ · ผ่านรู: โมเลกุลใหญ่ขึ้น → ซึมผ่านได้น้อยลง (น้ำ > NaCl > glucose > โปรตีน)",
    "Fick: diffusion ↑ ตามพื้นที่ผิว · ↓ เมื่อผนังหนา"
  ],
  "M-C3": [
    "NFP = (Pc − Pi) − (πc − πi) → ที่ปลาย arteriole แรงดันออกชนะ (+9) · ที่ปลาย venule แรงดูดกลับชนะ (−8)",
    "ของเหลวที่กรองออกส่วนใหญ่ (~90%) ถูกดูดกลับที่ปลาย venule",
    "Venous pressure ↑ ทำให้ Pc ↑ มากกว่าการเพิ่ม arterial pressure"
  ],
  "M-C4": [
    "Edema 4 กลไก: <b>Pc ↑</b> (HF) · <b>πc ↓</b> (albumin ต่ำ) · <b>permeability ↑</b> (อักเสบ, ผึ้งต่อย) · <b>lymph อุดตัน</b> (mastectomy → πi ↑)",
    "Safety factors: Pi เป็นลบ · lymph flow เพิ่มได้มาก · protein washout"
  ]
});

Object.assign(window.THAI_Q, {
  "M1": ["<b>Brain</b>: continuous + tight junction (BBB) → permeability ต่ำสุด", "Glomerulus/ลำไส้เป็น fenestrated"],
  "M2": ["Fenestrated: <b>endocrine gland (pituitary)</b>, ลำไส้, choroid plexus, glomerulus", "Liver = discontinuous · brain = continuous"],
  "M3": ["<b>Liver sinusoid</b> ช่องกว้าง BM ไม่ครบ → protein ผ่านได้ → permeability สูงสุด"],
  "M4": ["Precapillary sphincter ปิด → เลือดเข้า capillary น้อย → Pc ↓ → filtration ↓ → <b>interstitial fluid ↓</b>"],
  "M5": ["NO เป็นก๊าซละลายในไขมัน → <b>transcellular simple diffusion</b> ผ่าน BBB ได้"],
  "M6": ["O₂ ละลายในไขมัน → <b>diffusion ผ่านเยื่อหุ้มเซลล์ตาม partial pressure gradient</b> ไม่ต้องใช้ carrier"],
  "M7": ["ปกติ NFP = (30 − 0) − (25 − 5) = +10 · ผู้ป่วย = (30 − 2) − (20 − 15) = <b>+23</b> → <b>filtration ↑</b>"],
  "M8": ["NFP = (33 − 3) − (20 − 2) = 30 − 18 = <b>+12 mmHg</b>"],
  "M9": ["ปลาย arteriole แรงที่ดันน้ำออกหลักคือ <b>capillary hydrostatic pressure</b> (~35 mmHg)"],
  "M10": ["ปลาย venule Pc ลดเหลือ ~15 แต่ <b>πc</b> ยัง ~28 → ดึงน้ำกลับเข้า"],
  "M11": ["<b>Post-capillary vein หด</b> → เลือดคั่งย้อน → Pc ↑ → filtration ↑", "Arteriole resistance ↑ ทำให้ Pc ↓"],
  "M12": ["<b>ออกกำลังขา</b> → muscle pump ลด venous pressure → Pc ↓ → filtration ↓ (+ lymph flow ↑)"],
  "M13": ["ตัด axillary node → protein ไม่ถูกเก็บกลับ → <b>πi ↑</b> → ดึงน้ำค้างใน interstitium → non-pitting edema"],
  "M14": ["ผึ้งต่อย → histamine → venule รั่ว → <b>capillary permeability ↑</b> → protein + น้ำออก → บวมแดงเฉพาะที่"],
  "M15": ["ขาดอาหาร → albumin ต่ำ → <b>πc ↓</b> → น้ำออกนอกหลอดเลือด → ascites"],
  "M16": ["บวมกดบุ๋ม 2 ข้าง vein/lymph ปกติ → <b>albumin รั่วหาย</b> → πc ↓ (เช่น nephrotic)", "Venous obstruction เฉพาะที่จะบวมข้างเดียว"],
  "M17": ["<b>πc ↓</b> → แรงดึงเข้าน้อยลง · <b>Pi ↓</b> (ลบมากขึ้น) → ดึงน้ำออกมากขึ้น → ทั้ง A และ B ทำให้บวม"]
});
