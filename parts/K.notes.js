/* ---------- K · Basic ECG ---------- */
Object.assign(window.TUTOR_NOTES, {
  "K-C1": { b: [
    "WPW: accessory pathway ข้าม AV node → PR สั้น + delta wave + QRS กว้าง",
    "QTc ยาว (ยา, hypoK, hypoCa, พันธุกรรม) → เสี่ยง torsades · Bazett: QTc = QT/√RR",
    "ช่วงปลาย T wave = relative refractory/vulnerable period → R-on-T → VF",
    "T wave ปกติไปทางเดียวกับ QRS เพราะ repolarization วิ่งจาก epicardium กลับมา endocardium"
  ] },
  "K-C2": { b: [
    "จำ V1/V2 จาก sternal angle (ซี่โครงที่ 2) แล้วนับลง 4th ICS",
    "V1–V2 มอง septum · V3–V4 anterior · V5–V6 lateral",
    "aVR มองหัวใจจากขวาบน → คลื่นปกติเป็นลบทั้งหมด (P, QRS, T)",
    "วาง V-leads ผิดช่อง (สูงไป) ทำให้ R wave progression ผิดปกติได้"
  ] },
  "K-C3": { b: [
    "จำเร็ว (25 mm/s): 1 ช่องใหญ่ 300 · 2 → 150 · 3 → 100 · 4 → 75 · 5 → 60 · 6 → 50",
    "Sinus tachycardia พบในไข้ ขาดน้ำ ปวด hyperthyroid · sinus bradycardia พบในนักกีฬา, β-blocker",
    "AF: totally irregular ไม่มี P wave · atrial flutter: sawtooth",
    "Standardization: 10 mm = 1 mV ต้องตรวจก่อนแปลผลความสูงของคลื่น"
  ] },
  "K-C4": { b: [
    "LAD พบใน LVH, left anterior fascicular block, inferior MI · RAD พบใน RVH, คนผอมสูง, lateral MI, เด็ก",
    "Dextrocardia หรือสายแขนสลับ → lead I กลับหัว ดูเหมือน RAD",
    "วิธี isoelectric lead: หา lead ที่ biphasic สุด แล้ว axis ตั้งฉากกับ lead นั้น",
    "Axis ใช้แค่ frontal plane (limb leads) ไม่ใช้ V-leads"
  ] },
  "K-C5": { b: [
    "STEMI ต้องเปิดหลอดเลือดเร็ว (PCI) · reciprocal ST depression ช่วยยืนยัน",
    "Inferior MI + bradycardia/AV block → RCA (เลี้ยง SA/AV node)",
    "Q wave ใน V1–V3 อาจเป็น poor R wave progression หรือ old anterior MI",
    "ST elevation แบบเว้า ทั่วทุก lead + PR depression → pericarditis ไม่ใช่ MI"
  ] },
  "K-C6": { b: [
    "RA↔LA บ่อยที่สุด: lead I ลบทั้ง P, QRS, T แต่ V6 บวกปกติ → ไม่ใช่ dextrocardia",
    "สาย RL เป็น ground: สลับกับ LL ทำให้ lead III แทบเป็นเส้นตรง (flat line)",
    "ตรวจสาย: RA ขาว/แดง, LA ดำ/เหลือง, LL แดง/เขียว ตามมาตรฐาน (AHA/IEC ต่างกัน)",
    "หลักจำ: lead ที่ปกติคือ augmented lead ของแขนขา<b>ที่ไม่ได้ถูกสลับ</b>"
  ] }
});
