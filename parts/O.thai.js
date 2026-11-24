/* ---------- O · Regional circulation ---------- */
window.THAI_SEC.O = {
  big: "แต่ละอวัยวะมี<b>ตัวคุมหลัก</b>ของตัวเอง: ปอด → <b>hypoxia ทำให้หด</b> · หัวใจ → <b>metabolic</b> (เลือดไหลช่วง diastole) · สมอง → <b>CO₂</b> + autoregulation · ผิวหนัง → <b>sympathetic</b> (อุณหภูมิ) · ไต → <b>autoregulation</b> ดีที่สุด",
  traps: [
    "<b>Hypoxia</b>: ปอดหด · อวัยวะอื่นขยาย",
    "Left coronary flow <b>ต่ำสุด early systole</b> (isovolumic contraction) · <b>สูงสุด early diastole</b>",
    "Hyperventilation → PaCO₂ ↓ → <b>cerebral vasoconstriction</b> → ICP ↓",
    "<b>ผิวหนัง</b>: neural control ชนะ local · AV shunt ขึ้นกับอุณหภูมิ",
    "<b>ไต</b> autoregulation ดีสุด (75–170 mmHg, myogenic + tubuloglomerular feedback)"
  ]
};

Object.assign(window.THAI_CONCEPT, {
  "O-C1": [
    "Pulmonary: ความดันต่ำ (25/10, mean ~15) resistance ต่ำ แต่รับ CO ทั้งหมด",
    "O₂ ในถุงลมต่ำ → arteriole ปอดหด → ส่งเลือดไปถุงลมที่ระบายอากาศดี (ตรงข้ามกับ systemic)",
    "ความดันต่ำ → ในท่ายืนเลือดไปฐานปอดมากกว่ายอดปอด · bronchial a. (จาก aorta) เลี้ยงหลอดลม"
  ],
  "O-C2": [
    "60–80 mL/min/100 g · ขึ้นกับ aortic pressure",
    "Systole: ผนัง LV บีบหลอดเลือดตัวเอง → flow ช่วงต้น systole น้อย · ช่วงที่กล้ามเนื้อคลายและ aortic pressure ยังสูง → flow มากสุด",
    "งาน ↑ → ใช้ O₂ ↑ → สารขยายหลอดเลือด (NO, H⁺) · sympathetic หดโดยตรงแต่ผลรวมขยาย · β1 blocker → งาน ↓ → flow ↓"
  ],
  "O-C3": [
    "CBF ~700 mL/min คงที่ด้วย autoregulation · PaCO₂ เป็นตัวคุมที่สำคัญสุด: hyperventilation → PaCO₂ ↓ → หด → ICP ↓",
    "ปัจจัยเฉพาะที่: CO₂ ก่อน แล้ว O₂, H⁺ ใน CSF, K⁺ · สมองส่วนที่ทำงานได้เลือดเพิ่ม · เส้นประสาทมีผลน้อย"
  ],
  "O-C4": [
    "ผิวหนังคุมด้วยระบบประสาทจาก hypothalamus เพื่ออุณหภูมิ ไม่ใช่ metabolism · หนาว → arteriole และทางลัดหด → เก็บความร้อน",
    "หนาวนาน (0–15 °C) → หลอดเลือดกลับขยายเป็นพัก ๆ ปกป้องนิ้ว · กล้ามเนื้อ: ขณะพักคุมด้วยเส้นประสาท ออกกำลัง flow ↑ 15–20 เท่า"
  ],
  "O-C5": [
    "ลำไส้: sympathetic เป็นหลัก คุมความดันได้น้อย · หลังกินอาหาร flow ↑ (adenosine)",
    "ตับ: 25% ของ CO ส่วนใหญ่ (¾) มาจากหลอดเลือดดำความดันต่ำ (~10 mmHg)",
    "ไต: 20–25% ของ CO เพื่อกรอง ไม่ใช่เพื่อ metabolism · คุม flow ให้คงที่ได้ดีที่ 75–170 mmHg (myogenic + macula densa) · shock → sympathetic ชนะ"
  ]
});

Object.assign(window.THAI_Q, {
  "O1": ["<b>ปอด</b>: hypoxic pulmonary vasoconstriction → ส่งเลือดไปถุงลมที่มีอากาศดี", "อวัยวะ systemic hypoxia ทำให้ขยาย"],
  "O2": ["Pulmonary: <b>ไวต่อ gravity</b>, <b>resistance ต่ำ</b>, รับเลือด <b>CO ทั้งหมด</b> · hypoxia ทำให้หด (ไม่ใช่ขยาย) · ความดันต่ำกว่า"],
  "O3": ["ช่วง isovolumic contraction กล้ามเนื้อ LV บีบหลอดเลือดแรงสุด → <b>flow ต่ำสุด early systole</b>", "สูงสุดคือ early diastole ไม่ใช่ late diastole"],
  "O4": ["ถูกทั้ง <b>A (สูงสุด early diastole)</b> และ <b>C (ต่ำสุด early systole)</b>"],
  "O5": ["หัวใจดึง O₂ เกือบหมดตั้งแต่พัก → ต้องเพิ่ม flow ตามงาน → <b>metabolic regulation</b>"],
  "O6": ["β1 blocker → HR, แรงบีบ ↓ → หัวใจใช้ O₂ น้อยลง → metabolite ↓ → <b>coronary flow ↓</b>"],
  "O7": ["Hyperventilation → PaCO₂ ↓ → <b>cerebral vasoconstriction</b> → ICP ↓"],
  "O8": ["สมองคุมด้วย local factor (<b>CO₂</b> เป็นหลัก) แทบไม่ใช้เส้นประสาท"],
  "O9": ["Key ตอบ <b>vasodilation จาก metabolite</b> (CO₂, H⁺, adenosine) ตามที่สไลด์เน้น", "ในความหมายแคบ autoregulation = myogenic (B) → รู้ไว้ทั้งสองแบบ"],
  "O10": ["<b>ผิวหนัง</b> เลือดใช้คุมอุณหภูมิ → sympathetic ชนะ local control"],
  "O11": ["<b>หนาว → ผิวหนังหด</b> ผ่าน hypothalamus/sympathetic = neural control", "ข้ออื่นเป็น local control"],
  "O12": ["AV shunt เปิด-ปิดตาม<b>อุณหภูมิ</b> (sympathetic) · ไม่เกี่ยวกับ precapillary sphincter"],
  "O13": ["<b>ไต</b> autoregulation ดีสุด: RBF/GFR คงที่ที่ 75–170 mmHg"],
  "O14": ["ไตคุมเองด้วย <b>autoregulation</b> (myogenic + tubuloglomerular feedback)"]
});
