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
    "Medulla: NTS รับข้อมูล → cardio-inhibitory (dorsal motor n. ของ X), cardio-accelerator, vasomotor centre",
    "Sympathetic → I<sub>f</sub> ↑ I<sub>Ca</sub> ↑ → HR, การนำไฟฟ้า, แรงบีบ ↑ · vagus → K⁺ ออกมากขึ้น, I<sub>Ca</sub> ↓, I<sub>f</sub> ↓ → hyperpolarize → HR ↓",
    "Vagus ขวา → pacemaker หลัก · ซ้าย → AV node · กลไกในตัวหัวใจ: heterometric และ homeometric (Anrep)"
  ],
  "R-C2": [
    "Stretch receptor ที่ carotid sinus และ aortic arch → medulla → BP ↑: vagus ↑ sympathetic ↓ → HR, แรงบีบ, TPR ↓",
    "BP ตก (เสียเลือด ท้องเสีย ลุกยืน) → กลับด้าน → HR ↑ และหลอดเลือดหด",
    "ตอบสนองเร็วที่สุด (วินาที) แต่ปรับจุดตั้งใหม่ได้ถ้าความดันเปลี่ยนนานหลายวัน"
  ],
  "R-C3": [
    "Chemoreceptor (carotid/aortic bodies) รับรู้ O₂ ↓ CO₂ ↑ H⁺ ↑ → กระตุ้น sympathetic และการหายใจ",
    "เลือดไปสมองลด → CO₂ คั่งที่ vasomotor centre → sympathetic สูงมาก → BP ↑↑ · ICP สูง → triad: BP สูง PP กว้าง + HR ช้า + หายใจผิดจังหวะ",
    "Bainbridge: atrium ถูกยืด → HR เปลี่ยน · respiratory sinus arrhythmia: HR เปลี่ยนตามการหายใจ"
  ],
  "R-C4": [
    "วินาที: baroreceptor, chemoreceptor, CNS ischemic · นาที–ชั่วโมง: RAAS vasoconstriction, capillary fluid shift · วัน: ไตคุมปริมาตร (pressure natriuresis)",
    "Renin (JG cells) → Ang I → (เอนไซม์ที่ปอด) → Ang II → หลอดเลือดหด + hormone เก็บเกลือ + ADH + กระหายน้ำ",
    "ADH: V1 → หลอดเลือดหด · อีก receptor หนึ่ง → ดูดน้ำกลับ · ไตเสื่อม → เก็บเกลือ → BP ↑"
  ],
  "R-C5": [
    "ความดันเปลี่ยนแต่ flow คงที่ (myogenic: ยืด → หด) · metabolism ↑ → CO₂, H⁺, K⁺, lactate ↑ → arteriole ขยาย (active hyperemia)",
    "Shear stress → endothelium หลั่งสารขยาย (+ prostacyclin) และสารหด · reactive hyperemia หลังเลือดถูกกั้น",
    "ขาดเลือดเรื้อรังหลายสัปดาห์ → angiogenesis สร้างทางเลี่ยง"
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
