/* ---------- B · Biochemistry of CVS ---------- */
window.THAI_SEC.B = {
  big: "กล้ามเนื้อหัวใจทำงานเป็น <b>functional syncytium</b> ผ่าน intercalated disc → หดตัวด้วย <b>CICR</b> (DHPR2 → RyR2) และคลายด้วย <b>SERCA/NCX</b> → β₁–cAMP–PKA เพิ่มทั้งแรงและคลายเร็ว · digoxin กด Na⁺/K⁺ pump → เลือกใช้เชื้อเพลิงตามภาวะ (Randle effect) และใช้ <b>CK-MB</b> ที่ Km ต่อ ADP ต่ำ",
  traps: [
    "Intercalated disc ทำให้เกิด <b>functional syncytium</b> (ไม่ใช่ structural syncytium)",
    "กล้ามเนื้อหัวใจต้องพึ่ง <b>extracellular Ca²⁺</b> ผ่าน DHPR2 เพื่อจุด CICR (ต่างจาก skeletal ที่เชื่อมเชิงกล)",
    "<b>Catecholamine</b> เพิ่มทั้ง +inotropy (DHPR2, RyR2) และ +lusitropy (PLB, TnI) · ส่วน <b>digoxin</b> เพิ่มแค่ +inotropy + ลด HR (vagal)",
    "<b>IP₃R</b> มาจากทาง α₁–Gq–PLC ไม่ใช่ cAMP–PKA (AC81 Q1)",
    "ในหัวใจ <b>CK-MM มากที่สุด</b> (~70–85%) ไม่ใช่ CK-MB · แต่ CK-MB เด่นเพราะ <b>Km ต่อ ADP ต่ำกว่า</b>"
  ]
};

Object.assign(window.THAI_CONCEPT, {
  "B-C1": [
    "แยกจุดเด่นของ cardiomyocyte ออกจาก skeletal muscle: เซลล์แตกแขนง นิวเคลียสกลางเซลล์ ไมโทคอนเดรียสูงมาก และจับคู่ T-tubule แบบ 1:1",
    "จำหน้าที่ของรอยต่อทั้ง 3 ชนิดใน intercalated disc: ยึดต้านแรงดึง, ส่งต่อแรงหดตัว, และส่งกระแสไฟฟ้าเชื่อมเซลล์"
  ],
  "B-C2": [
    "ไล่วงจร Ca²⁺ สองขา: ขาเข้าจุดระเบิดเพียง ~10% จากนอกเซลล์ เพื่อปลดปล่อย ~90% จากแหล่งเก็บภายใน",
    "ขาคลายตัวต้องลด Ca²⁺ ในไซโทซอลกลับสู่ระดับพัก โดยแยกสัดส่วนตัวหลักที่ปั๊มกลับเข้า SR กับตัวแลกเปลี่ยนที่ขับออกนอกเซลล์"
  ],
  "B-C3": [
    "ตัวกระตุ้น sympathetic ผ่าน Gs–cAMP เร่งเอนไซม์เดียวแต่ไปเติมหมู่ฟอสเฟตถึง 4 จุดพร้อมกัน → ทั้งบีบแรงขึ้นและคลายเร็วขึ้น",
    "แยกเส้นทาง α₁ (Gq) และ M₂ (Gi) ออกจากเส้นทาง β₁ (Gs) ให้ชัด"
  ],
  "B-C4": [
    "ไล่ห่วงโซ่ผลของยาที่ยับยั้งปั๊มโซเดียม-โพแทสเซียม: ไอออนใดคั่ง → ตัวแลกเปลี่ยนใดทำงานลดลง → แคลเซียมสะสมอย่างไร",
    "จำผลคู่ที่ต่างจาก catecholamine: บีบแรงขึ้นแต่หัวใจเต้นช้าลงจากฤทธิ์ต่อ vagus และจำพืชมีพิษกลุ่มเดียวกัน"
  ],
  "B-C5": [
    "หัวใจสำรอง ATP ได้ไม่กี่สิบจังหวะ จึงต้องใช้ออกซิเจนตลอดและสลับเชื้อเพลิงตามสิ่งที่สูงในเลือดแต่ละช่วง",
    "เมื่อเผาผลาญไขมัน/คีโตนสูง สารตั้งต้นและอัตราส่วนพลังงานที่พุ่งขึ้นจะย้อนกลับไปเบรกเอนไซม์ glycolysis"
  ],
  "B-C6": [
    "ระบบกระสวยฟอสเฟตช่วยส่งพลังงานจากไมโทคอนเดรียมายังจุดหดตัวทันที โดยแยกชนิด isozyme ที่มากที่สุดกับชนิดที่มีความจำเพาะต่อหัวใจ",
    "เหตุผลเชิงจลนพลศาสตร์ (Km) อธิบายได้ว่าทำไม isozyme ของหัวใจถึงเหมาะกับระดับ ADP ที่คงที่และต่ำ"
  ]
});

Object.assign(window.THAI_Q, {
  "B1": [
    "เฉลย AC79 ตอบ <b>A</b> (มี sarcolemmal Ca²⁺-ATPase ช่วยขับ Ca²⁺ ออกส่วนน้อยตอนคลายตัว แม้ตัวหลักจะเป็น SERCA เข้า SR และ NCX)",
    "ตัดช้อยส์ผิดชัดเจน: C ผิด (AP ไม่ได้เปิด SR โดยตรง ต้องผ่าน CICR) · D ผิด (เป็น <b>functional</b> ไม่ใช่ structural syncytium) · E ผิด (Ca²⁺ นอกเซลล์เข้าทาง DHPR2 ไม่ใช่ RyR)"
  ],
  "B2": [
    "Dihydropyridine จับที่ <b>L-type (slow) Ca²⁺ channel (DHPR2)</b> → ลด Ca²⁺ influx ใน <b>Phase 2 (plateau)</b>",
    "หมายเหตุคลินิก: amlodipine ออกฤทธิ์เด่นที่หลอดเลือด (อาจทำ reflex ↑HR) ส่วน CCB ที่ลด HR จริงคือ non-DHP (verapamil/diltiazem) แต่ข้อนี้โจทย์ชี้ตรงมาที่ Phase 2 L-type Ca²⁺ channel"
  ],
  "B3": [
    "<b>Troponin C (TnC)</b> เป็นโปรตีนหลักที่จับ Ca²⁺ → ดึง TnI และ tropomyosin หลบ → เปิดตำแหน่งให้หัว myosin จับ F-actin",
    "Calmodulin แค่ช่วยเสริมผ่าน MLCK ส่วน SERCA ปั๊ม Ca²⁺ กลับตอนคลาย และ calsequestrin เก็บ Ca²⁺ ใน SR"
  ],
  "B4": [
    "กล้ามเนื้อหัวใจต้องอาศัย <b>Ca²⁺ influx จากนอกเซลล์ผ่าน Ca²⁺ channel (DHPR2)</b> เพื่อเกิด CICR → เพิ่ม Ca²⁺ channel จึงเพิ่มแรงบีบ",
    "CCB ลดการหดตัว · Na⁺/K⁺-ATPase ไม่ได้เพิ่ม trigger Ca²⁺ โดยตรง"
  ],
  "B5": [
    "cAMP–PKA เติม P ที่ 4 ตัวคือ <b>DHPR2, RyR2, Phospholamban (PLB), Troponin I (TnI)</b>",
    "เฉลย AC81 ตอบ <b>C. Calcium release channel</b> โดยตีความว่าเป็น <b>IP₃R</b> ที่ถูกกระตุ้นผ่านทาง α₁–Gq–PLC ไม่ใช่ cAMP–PKA (เพราะ D กับ E ระบุ DHPR2 และ RyR2 ไปแล้ว)"
  ],
  "B6": [
    "<b>Catecholamine</b> (epinephrine/NE) กระตุ้น β₁–cAMP–PKA → เพิ่มทั้ง <b>+inotropy</b> (DHPR2, RyR2) และ <b>+lusitropy</b> (PLB, TnI)",
    "Cardiac glycoside เพิ่มแค่ +inotropy (ไม่เพิ่ม lusitropy) · ACh ต้าน +inotropy · DHP/ryanodine ลดการหดตัว"
  ],
  "B7": [
    "PLB ตอนยังไม่เติม P จะเกาะกด SERCA → เมื่อ PKA เติม P ให้ PLB จะ<b>หลุดออกจาก SERCA</b> → SERCA ทำงานเร็วขึ้น ปั๊ม Ca²⁺ กลับ SR มากขึ้น",
    "ผลที่ได้: คลายตัวเร็วขึ้น (+lusitropy) และมี Ca²⁺ สะสมใน SR มากขึ้นสำหรับจังหวะถัดไป"
  ],
  "B8": [
    "Phosphorylated PLB หลุดจาก SERCA → SERCA เก็บ Ca²⁺ กลับ SR เร็วขึ้น → กล้ามเนื้อหัวใจคลายตัวเร็วขึ้น = <b>increase lusitropic effect</b>"
  ],
  "B9": [
    "PLB-P หลุดจาก SERCA → <b>เพิ่ม activity ของ SERCA</b> (ลด Km / เพิ่มความไวต่อ Ca²⁺) → คลายตัวสั้นลง จึงรองรับ HR ที่สูงขึ้นได้",
    "ช้อยส์ C หลอกคำว่า binds (ความจริงคือ <b>dissociates</b>) · ช้อยส์ E หลอกว่า increased Km (ความจริงคือ <b>decreased Km</b>)"
  ],
  "B10": [
    "หัวใจที่ปลูกถ่ายไม่มีเส้นประสาทมาเลี้ยง (ไม่มี vagal tone → atropine ไม่ได้ผล) แต่ยังมี <b>β-adrenergic receptor</b> บนเซลล์หัวใจอยู่",
    "ให้ <b>β-adrenergic agonist</b> เข้ากระแสเลือดจึงกระตุ้น SA node เพิ่ม HR ได้โดยตรง"
  ],
  "B11": [
    "Phase 0 ของ AV node เกิดจาก <b>L-type Ca²⁺ channel</b> → sympathetic กระตุ้น β₁–cAMP–PKA เพิ่ม Ca²⁺ influx → นำไฟฟ้าผ่าน AV node เร็วขึ้น (+dromotropy)"
  ],
  "B12": [
    "Digoxin ยับยั้ง Na⁺/K⁺-ATPase → ขับ Na⁺ ออกไม่ได้ → <b>เพิ่ม intracellular Na⁺</b> → NCX ทำงานลดลง → Ca²⁺ ค้างและเข้าเก็บใน SR มากขึ้น → บีบแรงขึ้น"
  ],
  "B13": [
    "ลำดับตรงเป๊ะ: ยับยั้ง Na⁺/K⁺-ATPase → <b>↑intracellular Na⁺ → ลดการทำงานของ Na⁺-Ca²⁺ exchanger (NCX)</b> → ลดการขับ Ca²⁺ ออก → ↑[Ca²⁺]ᵢ"
  ],
  "B14": [
    "<b>Lily of the Valley</b> (<i>Convallaria majalis</i>) มีสาร convallarin กลุ่ม cardiac glycoside → ยับยั้ง <b>Na⁺/K⁺-ATPase pump</b> โดยตรง เช่นเดียวกับ Foxglove, ตีนเป็ดน้ำ และยี่โถ"
  ],
  "B15": [
    "<b>Digoxin</b> มีสองฤทธิ์คู่กัน: <b>+inotropy</b> (ยับยั้ง Na⁺/K⁺ pump → ↑SR Ca²⁺) และ <b>−chronotropy</b> (กระตุ้น vagal tone ที่ brainstem → ลด HR)",
    "Epinephrine เพิ่มทั้งแรงและ HR (+chronotropy) · ACh ลดแรงและลด HR"
  ],
  "B16": [
    "อดอาหาร 14 ชม. → หัวใจเผาผลาญ fatty acid เป็นหลัก (62% OER) → <b>↑[Acetyl-CoA]/[CoA]</b>, ↑[NADH]/[NAD⁺], ↑[ATP]/[ADP], ↑[Citrate]",
    "ตัวเหล่านี้ยับยั้ง PDH, PFK-1, PFK-2 และ citrate synthase → เกิด <b>glucose-sparing (Randle) effect</b> · ช้อยส์ A, B กลับเศษส่วนผิดทิศ"
  ],
  "B17": [
    "หัวใจขาดเลือด (ischemia) = ขาด O₂ → ETC และ β-oxidation หยุด → บังคับใช้ anaerobic glycolysis → สะสม <b>lactic acid</b>"
  ],
  "B18": [
    "เฉลย AC79 ตอบ <b>D. Lactic acid</b> เพราะขณะออกกำลังกายกล้ามเนื้อลายปล่อย lactate สูงขึ้นในเลือด และหัวใจมี <b>LD-1</b> (Km ต่อ lactate ต่ำ) เปลี่ยนเป็น pyruvate เข้า TCA ได้ดีมาก (61% OER ตอนออกกำลังกายหนัก)",
    "ข้อควรระวัง: ถ้าอดอาหารเฉยๆ โดยไม่ออกกำลังกาย จะใช้ fatty acid เด่น (62% OER)"
  ],
  "B19": [
    "<b>CK-MB (CK-2) มี Km ต่อ ADP ต่ำกว่า CK-MM</b> → จับ ADP ได้ไวและสร้าง ATP จาก CrP ได้ดีแม้ขณะ [ADP] ต่ำและคงที่ในหัวใจ",
    "ช้อยส์ A เป็นกับดักคลาสสิก: ในหัวใจ <b>CK-MM มีสัดส่วนมากที่สุด</b> (~70–85%) ไม่ใช่ CK-MB (~15–30%, สูงสุดใน LV 41%)"
  ]
});
