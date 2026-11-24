/* ---------- K · Basic ECG ---------- */
Object.assign(window.THAI_EXPLAIN, {
  "K-C1": [
    "<b>คลื่น</b>: P = atria depolarize · QRS = ventricles depolarize · T = ventricles repolarize (phase 3)",
    "<b>Segment</b>: PR = AV delay · ST = plateau (phase 2) → อยู่ใน ARP",
    "<b>Interval</b>: PR 120–200 ms (สั้น → WPW, ยาว → 1st-degree block) · QRS < 110 · QTc 330–440 (QT สั้นลงเมื่อ HR เร็ว)",
    "<b>Mechanical</b>: หลัง P → atria บีบ · หลัง QRS → ventricles บีบ · หลัง T → isovolumetric relaxation"
  ],
  "K-C2": [
    "<b>Bipolar</b>: I = RA→LA · II = RA→LL · III = LA→LL → Einthoven triangle",
    "<b>Augmented</b>: aVR, aVL, aVF มองจากแขนขาแต่ละข้างเทียบกับอีก 2 ข้าง",
    "<b>มุม</b>: I 0°, II 60°, III 120°, aVF 90°, aVL −30°, aVR −150° · ตั้งฉาก: I–aVF, II–aVL, III–aVR",
    "<b>Precordial</b>: V1 4th ICS ขวา · V2 4th ICS ซ้าย · V3 กลาง · V4 5th ICS MCL · V5 AAL · V6 MAL"
  ],
  "K-C3": [
    "<b>HR</b> = speed × 60 ÷ ช่องเล็กระหว่าง R–R · 25 mm/s → 1500 ÷ ช่องเล็ก = 300 ÷ ช่องใหญ่",
    "<b>จังหวะไม่สม่ำเสมอ</b> → นับ QRS ใน 10 วินาที × 6",
    "<b>ความเร็วกระดาษ</b>: 12.5 mm/s → ช่องเท่าเดิม HR ครึ่งหนึ่ง · 50 mm/s → สองเท่า",
    "<b>Sinus rhythm</b>: P หน้าตาเดียวกัน บวกใน II ลบใน aVR · ทุก P มี QRS · 60–100"
  ],
  "K-C4": [
    "<b>Axis</b>: ทิศเฉลี่ยของ ventricular depolarization ใน frontal plane · ปกติ −30° ถึง +90°",
    "<b>Quadrant</b>: I+ aVF+ normal · I− aVF+ RAD · I− aVF− extreme · I+ aVF− → ดู II (บวก = normal, ลบ = LAD)",
    "<b>Lead ขนาน</b> → R สูงสุด · <b>ตั้งฉาก</b> → biphasic · มุมแหลม → บวกเด่น · มุมป้าน → ลบเด่น",
    "<b>ตรงข้าม 180°</b> → negative ใหญ่สุด (เช่น axis −60° → aVL บวกสูง, III ลบลึก)"
  ],
  "K-C5": [
    "<b>Q ปกติ</b>: แคบ < 40 ms ต่ำ พบใน aVR และ septal q ใน V4–V6",
    "<b>Q ผิดปกติ</b>: กว้างลึก → กล้ามเนื้อตายไม่สร้างไฟฟ้าบวก → old MI",
    "<b>ST</b> ปกติ isoelectric (≤ 1 mm) · ยกหรือกดมาก → ต้องคิดถึง MI",
    "<b>ตำแหน่ง</b>: V1–V4 → LAD · I, aVL → LCx · II, III, aVF → RCA ส่วนใหญ่"
  ],
  "K-C6": [
    "<b>หลัก</b>: augmented lead ดูจากแขน/ขาหนึ่งข้างเทียบอีก 2 ข้าง → สลับ 2 ข้างนั้น lead นี้ไม่เปลี่ยน",
    "<b>RA↔LA</b>: aVF ปกติ · lead I กลับหัว · II↔III · aVR↔aVL",
    "<b>RA↔LL</b>: aVL ปกติ · <b>LA↔LL</b>: aVR ปกติ",
    "<b>สงสัยสายสลับ</b> เมื่อ lead I กลับหัวทั้ง P และ QRS โดยที่ V-leads ปกติ"
  ]
});
