/* ---------- P · Physical Examination of the Cardiovascular System ---------- */
window.THAI_SEC.P = {
  big: "แยก <b>JVP vs Carotid</b> ที่คอให้ขาด (ใช้ <b>RIJV</b> ท่า 30–45° วัดเหนือ sternal angle + 5 = CVP) → อ่านคลื่น <b>a-c-x-v-y</b> คู่รอบหัวใจ → คลำชีพจรแดง 6 ลักษณะ + ฟัง carotid bruit ด้วย bell และฟังลิ้นหัวใจตามตำแหน่ง + จังหวะเทียบ carotid pulse",
  traps: [
    "วัด JVP ต้องใช้ <b>Right IJV</b> เพราะวิ่งตรงเข้า RA ไม่มีลิ้น (ซ้ายอาจถูก arch กด · EJV มีลิ้นและหดตัวง่าย)",
    "<b>JVP คลำไม่ได้</b>, มี <b>2 ยอด</b>, ลดลงตอนหายใจเข้า (ถ้าสูงขึ้น = Kussmaul sign) · <b>Carotid คลำได้</b>, ยอดเดียว, ไม่เปลี่ยนตามท่า/หายใจ",
    "<b>CVP = JVP + 5 cmH₂O</b> · &gt; 8–10 = hypervolemia/RHF · &lt; 5 = hypovolemia",
    "<b>a wave = atrial systole</b> (หายไปใน AF) · เสียงก่อน carotid pulse = <b>S1 (AV valve ปิด)</b>",
    "<b>Diaphragm</b> ฟังเสียงสูง (S1, S2) · <b>Bell</b> ฟังเสียงต่ำ (S3, S4, carotid bruit) · PMI ปกติ = 5th ICS <b>MCL</b> (ไม่ใช่ mid-axillary)"
  ]
};

Object.assign(window.THAI_CONCEPT, {
  "P-C1": [
    "เข้าใจเหตุผลเชิงกายวิภาคว่าทำไมหลอดเลือดดำข้างขวาชั้นลึกจึงสะท้อนความดันห้องบนขวาได้ตรงที่สุด",
    "แยกชีพจรหลอดเลือดดำกับหลอดเลือดแดงที่คอด้วย 4 เกณฑ์ข้างเตียง: การคลำ, จำนวนยอด, การหายใจ, และท่าทาง/การกดท้อง"
  ],
  "P-C2": [
    "จัดมุมเตียงให้เหมาะสม หาจุดอ้างอิงที่หน้าอก และบวกระยะคงที่เพื่อแปลงความสูงที่วัดได้เป็นความดันห้องบนขวา",
    "ใช้เกณฑ์ค่าสูง-ต่ำแยกภาวะน้ำเกิน/ความดันห้องขวาสูงออกจากภาวะขาดสารน้ำ"
  ],
  "P-C3": [
    "ผูกคลื่นบวก 3 ยอดและคลื่นลบ 2 ช่วงของ JVP เข้ากับการบีบ-คลายของหัวใจและการเปิด-ปิดของลิ้น tricuspid",
    "จับจังหวะของชีพจร carotid เทียบกับเสียงหัวใจ S1 และ S2 เพื่อระบุ systolic vs diastolic"
  ],
  "P-C4": [
    "ตรวจชีพจรหลอดเลือดแดงให้ครบ 6 ลักษณะ พร้อมข้อควรระวังเฉพาะที่คอและรูปคลื่นชีพจรที่บ่งชี้โรคลิ้นเอออร์ติก",
    "เชื่อมโยงการเลือกด้านหูฟัง ตำแหน่ง PMI และตำแหน่งฟัง murmur คู่กับจังหวะชีพจรเพื่อระบุโรคลิ้นหัวใจ"
  ]
});

Object.assign(window.THAI_Q, {
  "P1": [
    "<b>Right internal jugular vein (RIJV)</b> วิ่งตรงลง right brachiocephalic v. → SVC → RA โดยไม่มีลิ้น จึงสะท้อน RA pressure ได้แม่นที่สุด",
    "Left IJV พาดผ่านหน้า aortic arch อาจถูกกด · EJV มีลิ้นและหดตัวตาม sympathetic · SVC อยู่ในอกมองไม่เห็น"
  ],
  "P2": [
    "RA pressure ที่สูงขึ้นส่งความดันย้อนขึ้น RIJV โดยตรง → ตรวจพบ <b>increased jugular distension (JVD)</b> ที่ท่า 30–45° (JVP &gt; 3–4 cm เหนือ sternal angle)"
  ],
  "P3": [
    "<b>Cyanosis และ edema</b> เกิดจากสาเหตุนอกหัวใจได้ (เช่น ปอด, ไต, ตับ, venous insufficiency) จึงตอบ A",
    "ตัดช้อยส์หลอก: JVD และ hepatojugular reflux เป็นอาการของ <b>right-sided HF</b> · orthopnea เป็นอาการของ <b>left-sided HF</b> · murmur ไม่ได้แปลว่ารุนแรงเสมอไป (มี innocent murmur)"
  ],
  "P4": [
    "<b>Pulsus paradoxus</b> (SBP ตก &gt; 10 mmHg ตอนหายใจเข้า) เป็นอาการคลาสสิกของ cardiac tamponade คู่กับ Beck’s triad (BP ต่ำ, JVP สูง, เสียงหัวใจเบา)"
  ],
  "P5": [
    "<b>a wave</b> ของ JVP เกิดจาก <b>atrial systole (การบีบตัวของ RA)</b> ดันเลือดย้อนขึ้นคอเล็กน้อย (หายไปใน atrial fibrillation)",
    "c = ลิ้น TV นูนตอน isovolumic contraction · x = atrial relaxation · v = atrial filling · y = TV เปิด"
  ],
  "P6": [
    "คลำ carotid pulse ได้ช่วง ventricular systole (ระหว่าง S1 กับ S2) → เสียงที่ได้ยิน<b>ก่อน carotid pulse</b> คือ <b>S1</b> ซึ่งเกิดจาก <b>AV valves close</b>"
  ],
  "P7": [
    "คิด 2 ขั้น: เกิดพร้อม carotid pulse = <b>systolic murmur</b> + ตำแหน่ง <b>left 2nd ICS</b> = pulmonic area → <b>Pulmonary stenosis</b>",
    "PR เป็น diastolic ที่เดียวกัน · AS เป็น systolic ที่ right 2nd ICS · MS/MR ฟังชัดที่ apex"
  ],
  "P8": [
    "<b>Left 5th ICS parasternal border</b> = tricuspid area + <b>diastolic murmur</b> → <b>Tricuspid stenosis</b>",
    "ระวังสับสน: ถ้าเป็น diastolic ที่ left 5th ICS <b>midclavicular line (apex)</b> จะเป็น mitral stenosis"
  ],
  "P9": [
    "PMI เลื่อนออกด้านข้าง (lateral ต่อ MCL) บอกว่ามี LV โต/หนา (LVH) → ใน essential hypertension เกิดจากแรงต้านหลอดเลือดสูง = <b>increased afterload</b> (pressure overload)"
  ],
  "P10": [
    "ด้าน <b>diaphragm</b> ใช้ฟังเสียงความถี่สูง (high pitch เช่น S1, S2, AR/MR) ส่วน bell ใช้ฟังเสียงความถี่ต่ำ (S3, S4, carotid bruit)",
    "ช้อยส์ E หลอกคำว่า mid-axillary (ที่ถูกคือ <b>midclavicular line</b>) · ช้อยส์ D cyanosis ไม่ได้เกิดจากหัวใจอย่างเดียว"
  ],
  "P11": [
    "<b>Pansystolic murmur ที่ PMI (apex / mitral area)</b> เป็นลักษณะจำเพาะของ <b>Mitral regurgitation</b> (มักร้าวไป axilla)"
  ]
});
