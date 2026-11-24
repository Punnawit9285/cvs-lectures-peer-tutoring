/* ---------- C · Cardiac cycle ---------- */
window.THAI_SEC.C = {
  big: "Cardiac cycle คือ<b>เรื่องของความดัน</b>: ลิ้นเปิด/ปิดเมื่อความดัน 2 ฝั่งสลับกัน → จับคู่ phase กับ <b>S1/S2</b>, ใช้<b>จังหวะ + ตำแหน่ง</b>บอก murmur และอ่าน <b>PV loop</b> ว่าขอบไหนขยับเมื่อ preload/afterload/contractility เปลี่ยน",
  traps: [
    "<b>Volume สูงสุด</b> ใน ventricle คือช่วง <b>isovolumic contraction</b> (ยังไม่มีเลือดออก)",
    "<b>หลัง S1</b> = isovolumic contraction · <b>หลัง S2</b> = isovolumic relaxation · <b>ก่อน S2</b> = ejection",
    "Semilunar valve ได้ยินตอน systole = <b>stenosis</b> · ตอน diastole = <b>regurgitation</b> · AV valve กลับกัน",
    "<b>Left 2nd ICS</b> = pulmonary · <b>right 2nd ICS</b> = aortic · <b>apex</b> = mitral · <b>left 5th ICS</b> = tricuspid",
    "PV loop: contractility ↑ → <b>ESV ขยับซ้าย</b> · preload ↓ (SVC อุด) → <b>EDV ขยับซ้าย</b> · AR → EDV ขยับขวา"
  ]
};

Object.assign(window.THAI_CONCEPT, {
  "C-C1": [
    "Systole: <b>isovolumic contraction</b> → ejection · diastole: isovolumic relaxation → rapid filling → diastasis → atrial systole",
    "HR เร็ว → <b>diastole สั้นลงมากกว่า systole</b> → เวลาเติมเลือดลดลง"
  ],
  "C-C2": [
    "S1 = mitral + tricuspid ปิด · S2 = aortic + pulmonary ปิด (+ dicrotic notch บนกราฟ aorta)",
    "หายใจเข้า → venous return ขวา ↑ → P2 มาช้า → S2 split · ASD → split กว้างตลอด"
  ],
  "C-C3": [
    "Semilunar: ตีบ → <b>systolic ejection</b> · รั่ว → <b>diastolic blowing</b> · AV: ตีบ → <b>diastolic rumble</b> · รั่ว → <b>pansystolic</b>",
    "ตำแหน่ง: aortic R2 · pulmonary L2 · mitral apex · tricuspid L5"
  ],
  "C-C4": [
    "PV loop ทวนเข็ม: mitral ปิด → aortic เปิด → aortic ปิด → mitral เปิด · ความกว้าง = SV",
    "Preload ↑ → EDV ออกขวา · afterload ↑ → loop สูงแคบ · inotropy ↑ → ESV เข้าซ้าย"
  ]
});

Object.assign(window.THAI_Q, {
  "C1": ["หลังเติมเลือดเต็ม (EDV) ventricle บีบโดยลิ้นปิดหมด = <b>isovolumic contraction</b> → volume สูงสุด", "Ejection ทำให้ volume ลดลง"],
  "C2": ["S1 = AV valves ปิด → ต่อด้วย <b>isovolumic contraction</b> ทันที"],
  "C3": ["S2 = semilunar valves ปิด → ต่อด้วย <b>isovolumetric relaxation</b>"],
  "C4": ["S2 คือจุดจบของ <b>ventricular ejection</b>"],
  "C5": ["S1 เกิดตอน ventricle เริ่มบีบหลัง atrial systole → อยู่ระหว่าง <b>atrial systole กับ isovolumetric contraction</b>"],
  "C6": ["ถูก: S1 = <b>mitral + tricuspid ปิด</b> · S2 = aortic + pulmonary ปิด"],
  "C7": ["หายใจเข้า → venous return เข้า RA ↑ → RA pressure ↑ → ความต่างความดัน LA–RA ลดลง → <b>shunt LA→RA ลดลง</b>"],
  "C8": ["L2 = pulmonary area + diastolic → semilunar valve รั่ว = <b>pulmonary regurgitation</b>", "AR ได้ยินที่ R2 · MS rumble ที่ apex"],
  "C9": ["PMI = apex = mitral · diastolic rumble = AV valve ตีบ → <b>mitral stenosis</b>"],
  "C10": ["Systolic ejection = semilunar ตีบ · L2 = pulmonary → <b>pulmonary stenosis</b>", "AS เป็น murmur แบบเดียวกันแต่ที่ R2"],
  "C11": ["Pansystolic = AV valve รั่ว · PMI = mitral → <b>mitral regurgitation</b>"],
  "C12": ["I = ESV · J = EDV → contractility ↑ → บีบได้หมดขึ้น → <b>ESV (I) ขยับซ้าย</b> SV กว้างขึ้น"],
  "C13": ["AR → เลือดไหลย้อนเข้า LV ตลอด diastole → <b>EDV (I) ขยับขวา</b> และไม่มี isovolumic relaxation จริง"],
  "C14": ["EDV ขยับซ้าย = preload ลดลง → <b>SVC occlusion</b> (venous return ↓)", "IV fluid เพิ่ม preload · AS เพิ่ม afterload · digoxin เพิ่ม contractility"]
});
