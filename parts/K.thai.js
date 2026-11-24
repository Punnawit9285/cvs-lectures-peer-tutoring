/* ---------- K · Basic ECG ---------- */
window.THAI_SEC.K = {
  big: "อ่าน ECG ตามลำดับของสไลด์: <b>standardization → rate → rhythm → wave/interval → axis → Q/ST</b> · ข้อสอบชอบถาม<b>คำนวณ HR</b>, <b>หา axis จาก lead I + aVF</b>, <b>ตำแหน่ง V-leads</b> และ <b>lead ไหนไม่เปลี่ยนเมื่อสลับสาย</b>",
  traps: [
    "HR = <b>ความเร็วกระดาษ × 60 ÷ จำนวนช่องเล็ก</b> · 25 mm/s → 1500 ÷ ช่องเล็ก · 12.5 mm/s → ได้ครึ่งหนึ่ง",
    "Lead I − / aVF + = <b>RAD</b> · I + / aVF − = ต้องดู <b>lead II</b> (normal ถึง −30°)",
    "Axis ใกล้ lead ไหน → R สูงสุดใน lead นั้น · lead ที่อยู่ตรงข้าม 180° → negative ใหญ่สุด",
    "V2 = 4th ICS <b>ซ้าย</b> ขอบ sternum · V4 = 5th ICS MCL · V5 = anterior axillary",
    "สลับ RA↔LA → <b>aVF</b> ปกติ · RA↔LL → <b>aVL</b> ปกติ · LA↔LL → <b>aVR</b> ปกติ"
  ]
};

Object.assign(window.THAI_CONCEPT, {
  "K-C1": [
    "P = atrial depol · QRS = ventricular depol · ST = plateau (อยู่ใน ARP) · T = repolarization",
    "PR 120–200 ms (< 120 WPW, > 200 first-degree block) · QT สั้นลงเมื่อ HR เร็ว"
  ],
  "K-C2": [
    "I = RA→LA · II = RA→LL · <b>III = LA→LL</b> · มุม: I 0°, II 60°, III 120°, aVF 90°, aVL −30°, aVR −150°",
    "V1 4th ICS ขวา · V2 4th ICS ซ้าย · V4 5th ICS MCL · V5 AAL · V6 MAL"
  ],
  "K-C3": [
    "HR = speed × 60 ÷ ช่องเล็ก · 25 mm/s → 1500 ÷ ช่องเล็ก",
    "Sinus: P บวกใน II ลบใน aVR ทุก P ตามด้วย QRS อัตรา 60–100"
  ],
  "K-C4": [
    "Normal −30° ถึง +90° · I+ aVF+ normal · I− aVF+ <b>RAD</b> · I− aVF− extreme · I+ aVF− ดู II",
    "Lead ขนานกับ axis → R สูงสุด · ตั้งฉาก → biphasic · มุม > 90° → ลบมากกว่าบวก"
  ],
  "K-C5": [
    "Q ปกติแคบ (< 40 ms) · Q กว้างลึก = infarction เก่า",
    "ST ปกติ isoelectric (≤ 1 mm) · ยกมาก → MI · inferior (II, III, aVF) → RCA"
  ],
  "K-C6": [
    "Lead ที่ไม่เปลี่ยน = augmented lead ของแขน/ขาที่<b>ไม่ได้</b>ถูกสลับ: RA↔LA → aVF · RA↔LL → aVL · LA↔LL → aVR"
  ]
});

Object.assign(window.THAI_Q, {
  "K1": ["ARP ของ ventricle ครอบคลุม QRS → <b>ST segment</b> (plateau) → กลาง T wave"],
  "K2": ["Fast Na⁺ ของ ventricle สร้าง phase 0 → <b>QRS</b> หาย"],
  "K3": ["Atropine ตัด vagus ที่ SA node → HR ↑ → ดู <b>RR interval</b> สั้นลง"],
  "K4": ["T wave = repolarization ปลาย ejection → ถัดไปคือ <b>isovolumetric relaxation</b>"],
  "K5": ["<b>V2 = 4th ICS ซ้าย ขอบ sternum</b> · V1 = 4th ICS ขวา"],
  "K6": ["<b>V5 = anterior axillary line</b> ระดับเดียวกับ V4 (5th ICS) · 5th ICS MCL = V4"],
  "K7": ["<b>Lead III = LA (−) → LL (+)</b> · I = RA→LA · II = RA→LL"],
  "K8": ["aVL (−30°) กับ <b>lead II (+60°)</b> ห่างกัน 90°"],
  "K9": ["25 mm/s → HR = 1500 ÷ 15 = <b>100 bpm</b>"],
  "K10": ["HR = 12.5 × 60 ÷ 15 = <b>50 bpm</b>"],
  "K11": ["13 QRS × 6 ≈ 78 bpm · P บวกใน II ลบใน aVR ทุก P มี QRS → <b>sinus rhythm</b>", "Lead I ลบ aVF บวก → right axis ไม่ใช่ normal axis"],
  "K12": ["Sinus P: <b>ลบใน aVR</b> บวกใน II", "PR 240 = 1st-degree block · RR 500 = HR 120"],
  "K13": ["Lead I ลบ + aVF บวก → ชี้ลงขวา (+90° ถึง 180°) = <b>RAD</b>"],
  "K14": ["Axis +120° ตรงกับ <b>lead III</b> → R สูงสุด"],
  "K15": ["−60° ใกล้ <b>aVL</b> (−30°) → R สูงสุด · <b>lead III</b> (+120°) อยู่ตรงข้าม → negative ใหญ่สุด → key ให้ทั้ง A และ D"],
  "K16": ["Lead I biphasic → axis ตั้งฉาก (±90°) · aVF บวก → +90° = <b>normal</b> (ขอบบน)"],
  "K17": ["มุมป้าน (> 90°) ระหว่าง axis กับ lead → QRS <b>ลบมากกว่าบวก</b>"],
  "K18": ["ST ยก <b>4 mm</b> ผิดปกติ (ปกติ ≤ 1 mm) → สงสัย MI · ค่าอื่นปกติ"],
  "K19": ["<b>Q กว้างและลึก</b> = กล้ามเนื้อตาย (old MI) · ข้ออื่นเป็นค่าปกติ"],
  "K20": ["aVL ปกติ → สลับ 2 ขาที่ aVL ไม่ได้ดู = <b>RA กับ LL</b>"],
  "K21": ["aVF ปกติ → สลับ <b>RA กับ LA</b> (aVF ดูจากขาซ้ายเทียบเฉลี่ยของแขนทั้งสอง)"]
});
