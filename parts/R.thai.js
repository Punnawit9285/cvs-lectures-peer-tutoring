/* ---------- R · Regulation ---------- */
window.THAI_SEC.R = {
  big: "การคุมระบบไหลเวียนแบ่งตาม<b>เวลา</b>: วินาที (<b>baroreflex, chemoreflex, CNS ischemic</b>) → นาที–ชั่วโมง (<b>RAAS vasoconstriction, stress relaxation, capillary fluid shift</b>) → วัน (<b>ไต, aldosterone, ADH</b>) และ<b>ระดับอวัยวะ</b>: autoregulation, metabolite, endothelium",
  traps: [
    "BP ตก → carotid sinus ยิง<b>น้อยลง</b> → afferent CN IX ลดลง (ไม่ใช่เพิ่ม) → sympathetic ↑ vagus ↓",
    "<b>Carotid sinus</b> = baroreceptor · <b>carotid body</b> = chemoreceptor (เส้นประสาทเดียวกัน CN IX)",
    "ACE inhibitor → angiotensin II ↓ → <b>aldosterone ↓</b> · ADH: V1 หลอดเลือดหด V2 ดูดน้ำ",
    "<b>Autoregulation</b> = flow คงที่แม้ความดันเปลี่ยน · ออกกำลังกาย = <b>metabolic control</b> (active hyperemia)",
    "Endothelium: <b>NO</b> (shear stress) และ PGI₂ ขยาย · <b>endothelin</b> หด · histamine ขยาย arteriole หด venule → บวม"
  ]
};

Object.assign(window.THAI_CONCEPT, {
  "R-C1": [
    "Sympathetic → I<sub>f</sub> ↑, I<sub>Ca</sub> ↑ → HR, conduction, contractility ↑ · vagus → I<sub>K-ACh</sub> ↑ → HR ↓",
    "Vagus ขวา → SA node · ซ้าย → AV node · intrinsic: Frank–Starling และ Anrep"
  ],
  "R-C2": [
    "Carotid sinus (CN IX) + aortic arch (CN X) → NTS → BP ↑: vagus ↑ sympathetic ↓ · BP ↓: กลับกัน",
    "เร็วที่สุด แต่ reset ได้ถ้าความดันเปลี่ยนนานหลายวัน"
  ],
  "R-C3": [
    "Chemoreceptor (O₂ ↓ CO₂ ↑ H⁺ ↑) → vasoconstriction + หายใจ ↑ · <b>CNS ischemic</b> → BP สูงมาก",
    "Cushing triad: BP สูง PP กว้าง + bradycardia + หายใจผิดจังหวะ"
  ],
  "R-C4": [
    "RAAS: renin → Ang I → <b>ACE</b> → Ang II → หลอดเลือดหด + aldosterone + ADH + กระหายน้ำ",
    "ระยะยาว: ไตขับเกลือ/น้ำตามความดัน (pressure natriuresis) · CKD → GFR ↓ → BP สูง"
  ],
  "R-C5": [
    "<b>Autoregulation</b> (myogenic) · <b>metabolic</b> (CO₂, H⁺, K⁺, lactate, adenosine) · <b>endothelium</b> (NO, PGI₂ vs endothelin)",
    "Histamine ขยาย (บาดเจ็บ) · serotonin หด · อุดตันนาน → collateral"
  ]
});

Object.assign(window.THAI_Q, {
  "R1": ["Sympathomimetic เลียนแบบ NE/Epi → จับ <b>β1</b> (และ α1) → HR, แรงบีบ ↑"],
  "R2": ["β1 → cAMP → PKA → L-type Ca²⁺ + phospholamban → <b>Ca²⁺ ในเซลล์ ↑</b> → บีบแรง → ESV ↓ EF ↑", "Funny channel อธิบาย HR ไม่ใช่ EF"],
  "R3": ["BP ตก → baroreceptor ยิงน้อยลง → vagus ↓ sympathetic ↑ → <b>HR ↑</b>", "ตัวเลือกอื่นสลับฮอร์โมน: Ang II (ไม่ใช่ angiotensinogen) หดหลอดเลือด, aldosterone เก็บ Na⁺, ADH เก็บน้ำ"],
  "R4": ["BP ตก → carotid sinus ยิง<b>น้อยลง</b> → afferent ทาง CN IX ไป NTS <b>ลดลง</b> → ข้อ A ไม่เกิด", "ข้ออื่นเป็นการชดเชยที่ถูกต้อง"],
  "R5": ["Aortic arch ยืดมาก (BP สูง) → NTS ยับยั้ง vasomotor centre → <b>sympathetic vasoconstrictor tone ↓</b>"],
  "R6": ["ลุกยืน → เลือดไปกองที่<b>ขา</b> → venous return ↓ → BP ↓ → baroreceptor ยิงน้อยลง → HR ↑"],
  "R7": ["BP ตก → <b>sympathetic ↑</b> → HR, แรงบีบ, TPR ↑"],
  "R8": ["สมองขาดเลือด → CO₂ คั่งที่ vasomotor centre → sympathetic แรงสุด → <b>systemic hypertension</b>"],
  "R9": ["Chemoreflex: carotid/aortic bodies → Hering/aortic n. → NTS → ANS (+ adrenal <b>medulla</b>) · <b>adrenal cortex</b> ไม่เกี่ยว"],
  "R10": ["ACE inhibitor → Ang II ↓ → <b>aldosterone ↓</b> + vasoconstriction ↓ → BP ↓"],
  "R11": ["5 วัน → baroreflex reset, RAAS ทำงานเต็ม → key ตอบ <b>Ang II vasoconstriction</b>", "การดูดเกลือ/น้ำที่ไตก็สำคัญในระยะวัน → จำ timeline ให้ได้"],
  "R12": ["<b>ADH</b> → V1 หดหลอดเลือด + V2 ดูดน้ำ → BP ↑", "ANP, NO, PGE₂, histamine ขยายหลอดเลือด"],
  "R13": ["CO ต่ำ → ไตรับเลือดน้อย → <b>renin ↑ → Ang II, aldosterone ↑</b> → เก็บ Na⁺/น้ำ", "ANP ใน HF สูง ไม่ใช่ต่ำ"],
  "R14": ["CKD → <b>GFR ↓</b> → ขับเกลือ/น้ำไม่ได้ → volume ↑ → BP ↑"],
  "R15": ["<b>Stress relaxation</b> เกิดเมื่อความดันสูง (หลอดเลือดค่อย ๆ ยืด) ไม่ใช่ตอน hypotension"],
  "R16": ["<b>Autoregulation</b> = flow คงที่แม้ perfusion pressure เปลี่ยน (myogenic)"],
  "R17": ["<b>PaCO₂ ↑</b> → arteriole ขยาย → tissue flow ↑ (metabolic vasodilator)"],
  "R18": ["กล้ามเนื้อทำงาน → metabolite ↑ → <b>metabolic control</b> (active hyperemia)"],
  "R19": ["<b>NO</b> จาก endothelium (shear stress) → cGMP → คลาย + ยับยั้ง platelet", "Adenosine, CO₂, K⁺ ไม่ผ่าน endothelium · endothelin หดหลอดเลือด"],
  "R20": ["<b>Endothelin-1</b> = vasoconstrictor จาก endothelium · ข้ออื่นขยายหลอดเลือด"],
  "R21": ["<b>Histamine</b> จาก mast cell เมื่อบาดเจ็บ → arteriole ขยาย venule หด → แดง บวม", "Serotonin หดหลอดเลือด"],
  "R22": ["อุดตันเรื้อรัง → angiogenesis → <b>collateral circulation</b>", "Reactive hyperemia คือหลังอุดตันสั้น ๆ"]
});
