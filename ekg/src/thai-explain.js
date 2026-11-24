/* Thai explanations for every concept card (collapsible in student deck, open in tutor deck, back of PDF). */
window.THAI_EXPLAIN = {
  'C-C1': [
    '<b>ความต่างศักย์บนผิวหนัง</b> EKG ไม่ได้จิ้มเข็มเข้าในเซลล์ แต่วัดความต่างศักย์ระหว่างขั้วบวกกับขั้วอ้างอิงบนผิวหนังเมื่อมีขอบเขต dipole เคลื่อนที่',
    '<b>ประจุผิวนอก</b> เซลล์พัก (polarized) ผิวนอกเป็น (+) → เซลล์ที่ถูกกระตุ้น (depolarized) ผิวนอกพลิกเป็น (−) → ขั้วฝั่ง depolarized จึงลบกว่าขั้วฝั่งพัก',
    '<b>ทิศทางคลื่น</b> Depolarization วิ่งเข้าหาขั้ว (+) → คลื่นขึ้น · วิ่งหนี → คลื่นลง · ตั้งฉาก 90° → biphasic (ขึ้นลงเท่ากัน)',
    '<b>ภาพสะท้อน</b> Repolarization มีทิศทางเดียวกันแต่เครื่องหมายตรงข้ามเสมอ และเมื่อทุกเซลล์พักหมดหรือ depolarize หมดแล้ว เส้นจะราบ (isoelectric)'
  ],
  'C-C2': [
    '<b>P และ QRS</b> Atrial phase 0 → P wave เล็ก · Ventricular phase 0 (fast Na⁺ influx) → QRS complex ใหญ่เพราะกล้ามเนื้อ ventricle หนากว่ามาก',
    '<b>T wave</b> Ventricular phase 3 (K⁺ efflux) → T wave · ถ้าบล็อก fast Na⁺ ที่ ventricle ตัวที่หาย/ผิดปกติคือ QRS',
    '<b>คลื่นที่ซ่อนอยู่</b> Atrial repolarization เกิดพร้อม ventricular depolarization จึงถูก QRS บดบังสนิท ไม่เห็นคลื่นแยก',
    '<b>โหนดไม่เห็นคลื่น</b> SA node และ AV node มีมวลเซลล์เล็กมาก กระแสไม่พอสร้างคลื่นบนผิวหนัง แต่เวลาหน่วงใน AV node แสดงออกเป็น PR segment'
  ],
  'C-C3': [
    '<b>ลำดับการกระตุ้น</b> กระแสผ่าน Purkinje เข้าชั้นในก่อน → depolarization วิ่งจาก endocardium → epicardium',
    '<b>ความยาว AP ต่างกัน</b> เซลล์ endocardium มี action potential ยาวกว่า epicardium → epicardium ที่กระตุ้นทีหลังจึงกลับพักเสร็จก่อน',
    '<b>ลำดับการคลาย</b> Repolarization จึงวิ่งย้อนทางจาก epicardium → endocardium (ตรงข้ามกับ depolarization)',
    '<b>Concordant T wave</b> กลับทิศ × กลับเครื่องหมาย = บวกเจอหักล้างเป็นบวก → T wave ชี้ทิศเดียวกับ QRS (บวกใน II, V3–V6 และลบใน aVR)'
  ],
  'C-C4': [
    '<b>เทียบเฟสของ Ventricle</b> Phase 0 (Na⁺ เข้า) = QRS → Phase 2 plateau (Ca²⁺ เข้า ≈ K⁺ ออก, ทุกเซลล์ depolarize เหมือนกัน) = ST segment ราบ',
    '<b>คลายตัวและพัก</b> Phase 3 (K⁺ ออก) = T wave → Phase 4 (resting membrane potential) = TP segment',
    '<b>Atrial Phase 3</b> เกิดเร็วกว่า ventricle จึงตกลงตรงช่วง QRS complex พอดี',
    '<b>Refractory period</b> Absolute refractory period คลุม QRS → ST segment → ราวกลาง/ยอด T · ครึ่งหลังของ T เป็น relative refractory period'
  ],
  'W-C1': [
    '<b>นิยามพื้นฐาน</b> Wave คือส่วนที่เบี่ยงจากเส้นราบ · Segment คือเส้นราบระหว่างคลื่น (PR, ST, TP) · Interval คือคลื่นรวมกับเส้นราบ (PR, QT)',
    '<b>PR segment vs PR interval</b> PR segment (ปลาย P ถึงต้น QRS) = AV nodal delay ล้วนๆ · PR interval (ต้น P ถึงต้น QRS) = atrial depol + AV delay',
    '<b>QT interval</b> วัดตั้งแต่ต้น QRS ถึงปลาย T wave ครอบคลุมทั้ง ventricular depolarization และ repolarization',
    '<b>เส้นอ้างอิง</b> ใช้ TP segment เป็น isoelectric baseline เพราะเป็นช่วงที่ทั้ง atrium และ ventricle พักพร้อมกัน'
  ],
  'W-C2': [
    '<b>PR interval</b> ปกติ 120–200 ms (3–5 ช่องเล็ก) → สั้นกว่า 120 ms = pre-excitation (ข้าม AV node) · ยาวกว่า 200 ms = 1st-degree AV block',
    '<b>QRS duration</b> ปกติ ≤ 100–110 ms (ไม่ถึง 3 ช่องเล็ก) → กว้างขึ้นเมื่อการนำไฟฟ้าใน ventricle ช้าลง',
    '<b>QT และ QTc</b> QT แปรผันตรงกับ RR (HR เร็ว → QT สั้นลง) จึงแก้ด้วยสูตร Bazett QTc = QT / √RR (ปกติ 330–440 ms, หญิง ≤ 450 ms)',
    '<b>จำเชื่อมโรค</b> ถ้าโจทย์บอกว่า AV node นำไฟฟ้าเสีย → ตัวที่เปลี่ยนทันทีคือ PR interval'
  ],
  'W-C3': [
    '<b>ทิศ P และ T</b> ปกติ P บวกใน II และลบใน aVR · T บวกใน II, V3–V6 และลบใน aVR (aVR มองย้อนทิศหัวใจเสมอ)',
    '<b>ST segment</b> ปกติอยู่แนวราบเบี่ยงไม่เกิน ±1 mm → ยก 4 mm หรือกด 2 mm ถือว่าผิดปกติชัดเจน',
    '<b>Q wave</b> ปกติแคบ < 40 ms → ถ้ากว้าง (> 40 ms) และลึก บ่งชี้กล้ามเนื้อหัวใจตาย (old MI)',
    '<b>แปลง RR เป็นอัตรา</b> RR ปกติ 600–1000 ms (= 60–100 bpm) → RR 800 ms = 75 bpm (ปกติ) · RR 500 ms = 120 bpm (tachycardia)'
  ],
  'W-C4': [
    '<b>ไฟฟ้ามาก่อนกลไก</b> ทุกคลื่นไฟฟ้ากระตุ้นให้เกิดการบีบตัวตามหลังเล็กน้อยเสมอ: P wave → atrial contraction (atrial kick)',
    '<b>ช่วง Systole</b> QRS → ลิ้น AV ปิด (S1) → isovolumic contraction → ลิ้น aortic เปิดทันทีหลัง QRS → ST และ T อยู่ในช่วง ejection',
    '<b>เริ่ม Diastole</b> ปลาย T wave → ลิ้น aortic ปิด (S2) → isovolumic relaxation (ทุกลิ้นปิด)',
    '<b>Rapid filling</b> ต้น TP segment ลิ้น mitral เปิด → เลือดไหลผ่าน mitral valve เร็วและมากที่สุด (ไม่ใช่ตอน P wave)'
  ],
  'W-C5': [
    '<b>Sympathetic / Atropine</b> เพิ่มความชัน pacemaker ที่ SA node และเร่ง AV node → HR เพิ่ม → RR สั้นลง, PR สั้นลง, QT สั้นลงตาม RR',
    '<b>QRS ไม่เปลี่ยน</b> ระบบ His–Purkinje แทบไม่ได้รับผลจาก vagus → การให้ atropine จึงไม่เปลี่ยนความกว้าง QRS',
    '<b>Vagus (ACh บน M₂)</b> ชะลอ SA node และ AV node → RR ยาวขึ้นและ PR ยาวขึ้น (อาจเกิด AV block)',
    '<b>จุดหลอก</b> ดูผลยาที่ SA node ให้ดู RR interval · ส่วน ST elevation เกิดจาก myocardial injury ไม่ใช่ผลของ ANS'
  ],
  'L-C1': [
    '<b>Bipolar limb leads</b> วัดความต่างศักย์ระหว่างแขนขา 2 ข้าง: Lead I (RA− → LA+, 0°), Lead II (RA− → LL+, +60°), Lead III (LA− → LL+, +120°)',
    '<b>กฎของ Einthoven</b> ทั้งสาม lead ประกอบเป็นสามเหลี่ยมและมีความสัมพันธ์ Lead II = Lead I + Lead III',
    '<b>สายดิน</b> ขั้วขาขวา (RL) ใช้ตัดสัญญาณรบกวน (ground) ไม่ได้รวมอยู่ใน lead ใดๆ',
    '<b>Smartwatch ECG</b> ตัวเรือนขั้วบวกแตะข้อมือซ้าย (LA+) + นิ้วมือขวาแตะเม็ดมะยมขั้วลบ (RA−) → จำลอง Lead I (0°)'
  ],
  'L-C2': [
    '<b>Augmented unipolar leads</b> ตั้ง 1 รยางค์เป็นขั้วบวกเทียบค่าเฉลี่ยอีก 2 ข้าง: aVL (แขนซ้าย −30°), aVF (ขาซ้าย +90°), aVR (แขนขวา −150°)',
    '<b>Hexaxial wheel</b> เมื่อซ้อน Bipolar 3 เส้นกับ Augmented 3 เส้นในระนาบ frontal จะแบ่งวงกลมทุกๆ 30°',
    '<b>คู่ตั้งฉาก 90°</b> จำ 3 คู่แม่นๆ: I (0°) ↔ aVF (+90°) · II (+60°) ↔ aVL (−30°) · III (+120°) ↔ aVR (−150°)',
    '<b>การใช้งาน</b> คู่ตั้งฉากใช้ทั้งตอบข้อสอบถามมุม 90° และใช้หา biphasic lead เพื่ออ่าน QRS axis'
  ],
  'L-C3': [
    '<b>กฎทองการสลับสาย</b> สลับ 2 รยางค์ใด → Augmented lead ของรยางค์ที่ “ไม่ได้ขยับ” จะปกติเสมอเพราะขั้วบวกและค่าเฉลี่ยอีก 2 ข้างไม่เปลี่ยน',
    '<b>RA ↔ LA (พบบ่อยสุด)</b> ขาซ้ายอยู่นิ่ง → aVF ปกติ · Lead I กลับหัว (−I) · II สลับ III · aVR สลับ aVL',
    '<b>RA ↔ LL และ LA ↔ LL</b> สลับ RA↔LL เหลือ aVL ปกติ (II กลับหัว) · สลับ LA↔LL เหลือ aVR ปกติ (III กลับหัว)',
    '<b>LL ↔ RL</b> ขาขวาเป็นสายดินที่มีศักย์ใกล้ขาซ้ายมาก → สลับสองขาแทบไม่เห็นความเปลี่ยนแปลงบนกราฟ'
  ],
  'R-C1': [
    '<b>มาตรฐานกระดาษ</b> ความเร็ว 25 mm/s และความสูง 10 mm/mV (ดูจากสี่เหลี่ยม calibration ด้านซ้ายของกราฟ)',
    '<b>เวลาต่อช่อง</b> 1 ช่องเล็ก (1 mm) = 0.04 s (40 ms) → 1 ช่องใหญ่ (5 ช่องเล็ก = 5 mm) = 0.20 s',
    '<b>สูตร 1500 และ 300</b> ใน 1 นาทีกระดาษวิ่ง 1500 mm → HR = 1500 ÷ จำนวนช่องเล็กของ RR (หรือ 300 ÷ ช่องใหญ่)',
    '<b>เลขคุ้นตา</b> 1–2–3–4–5 ช่องใหญ่ = 300–150–100–75–60 bpm · อัตราพักปกติคือ 60–100 bpm'
  ],
  'R-C2': [
    '<b>ทำไมต้องแก้ความเร็ว</b> สูตร 1500 ÷ ช่องเล็ก ใช้ได้เฉพาะ 25 mm/s → ถ้าความเร็วเปลี่ยนเป็น v mm/s ต้องคูณด้วย (v ÷ 25)',
    '<b>สูตรเดียวจบ</b> HR = (60 × speed) ÷ RR (ช่องเล็ก): 12.5 mm/s = 750/ช่อง · 30 mm/s = 1800/ช่อง · 50 mm/s = 3000/ช่อง',
    '<b>กับดักสายตา</b> กระดาษวิ่งเร็ว (50 mm/s) ยืดระยะ RR ออก 2 เท่าทำให้ดูเหมือนเต้นช้า · กระดาษช้า (12.5 mm/s) บีบให้ดูเหมือนเร็ว',
    '<b>ลองกด Flowchart</b> เลือกเคสจากข้อสอบจริงด้านบน (12.5, 15, 30, 50 mm/s) หรือลองกรอกเลขเองทีละขั้นได้ทันที'
  ],
  'R-C3': [
    '<b>ปัญหาของจังหวะไม่สม่ำเสมอ</b> ถ้าแต่ละช่วง RR กว้างไม่เท่ากัน การเอา 1500 หารช่องเดียวจะได้อัตราไม่ซ้ำกันในแต่ละ beat',
    '<b>วิธีนับ 10 วินาที</b> แถบ rhythm strip ล่างสุดของ 12-lead ยาว 250 mm = 10 วินาที (ที่ 25 mm/s) → นับจำนวน QRS ทั้งแถบแล้วคูณ 6',
    '<b>Atrial fibrillation</b> ลักษณะเด่นคือไม่มี P wave, เส้น baseline หยัก (fibrillation waves), RR irregularly irregular และ QRS แคบ',
    '<b>รายงานค่าไหน</b> ใน AFib นับเฉพาะ QRS เพื่อรายงาน ventricular rate (atrium สั่นรัวกว่า 300 ครั้ง/นาทีจนนับไม่ได้)'
  ],
  'A-C1': [
    '<b>4 ช่วงองศา</b> Normal −30° ถึง +90° · LAD −30° ถึง −90° · RAD +90° ถึง +180° · Extreme −90° ถึง ±180°',
    '<b>Quadrant check</b> ดู Lead I (0°) แบ่งซ้าย/ขวา และ aVF (+90°) แบ่งล่าง/บน → I+/aVF+ ปกติ · I−/aVF+ = RAD · I−/aVF− = Extreme',
    '<b>กับดัก I+ / aVF−</b> ควอดแรนต์ซ้ายบนครอบคลุม 0° ถึง −90° ซึ่ง 0° ถึง −30° ยังปกติ → ต้องดู Lead II (+60°): II บวก = ปกติ, II ลบ = LAD แท้',
    '<b>ลองกด Flowchart</b> เลือกเคสข้อสอบหรือใส่ค่า net QRS (R − S) ของ Lead I, aVF, II เพื่อเดินตามแผนผังทีละขั้น'
  ],
  'A-C2': [
    '<b>หลักการแตกเวกเตอร์</b> แต่ละ lead แสดงขนาดเงาของเวกเตอร์ QRS ที่ฉายลงบนแกนของ lead นั้น (∝ cos θ)',
    '<b>5 กรณีของมุม θ</b> 0° = บวกสูงสุด · มุมแหลม (< 90°) = บวกมากกว่าลบ · 90° = biphasic (R ≈ S) · มุมป้าน (> 90°) = ลบมากกว่าบวก · 180° = ลบลึกสุด',
    '<b>คู่ biphasic ยอดฮิต</b> แกน +30° → III biphasic · แกน −30° → II biphasic · แกน +60° → aVL biphasic',
    '<b>จุดหลอก AC81</b> “Highest amplitude” คิดตามขนาดไม่สนเครื่องหมาย (แกน −60° ตรงข้าม III 180° จึงใหญ่สุดเชิงขนาด ส่วน tallest R คือ aVL)'
  ],
  'A-C3': [
    '<b>วิธีลัด 3 ขั้น</b> 1) ดูเฉพาะ 6 limb leads หาตัวที่ biphasic ที่สุด → 2) แกนจะตั้งฉาก ±90° จาก lead นั้น → 3) เช็ก lead คู่ตั้งฉากว่าบวกหรือลบเพื่อเลือกฝั่ง',
    '<b>ตัวอย่าง t-RAT Q11</b> aVL (−30°) biphasic → เหลือ +60° หรือ −120° → Lead II (+60°) สูงบวกชัดเจน → ตอบ +60°',
    '<b>วิธีตรง (farthest pair)</b> จดเครื่องหมาย + / − ของ 6 limb leads → หาคู่บวกที่อยู่ห่างกันที่สุด → แกนอยู่ตรงกึ่งกลาง (±15°)',
    '<b>ตรวจซ้ำเสมอ</b> เอาองศาที่ได้ไปเทียบกับ Lead I และ aVF ว่าอยู่ควอดแรนต์เดียวกันเพื่อกันหลงทิศ 180°'
  ],
  'A-C4': [
    '<b>แยกคิด 3 อย่างทีละขั้น</b> ข้อสอบที่ถามรวมหลายพารามิเตอร์อย่าดูพร้อมกัน ให้ไล่ 1) Rate → 2) Axis → 3) QRS width',
    '<b>ขั้นที่ 1 Rate</b> อ่าน paper speed ก่อนทุกครั้ง (ระวัง 15, 30, 50 mm/s) แล้วค่อยใช้สูตร (1500 ÷ ช่องเล็ก) × (speed ÷ 25)',
    '<b>ขั้นที่ 2 Axis</b> เช็ก Lead I และ aVF ก่อน (และ Lead II ถ้า I+/aVF−) แยก Normal / LAD / RAD ได้ภายใน 5 วินาที',
    '<b>ขั้นที่ 3 QRS width</b> ปกติแคบกว่า 3 ช่องเล็ก (≤ 100–110 ms) → ถ้ากว้างตั้งแต่ 3 ช่องเล็กขึ้นไปคือ wide QRS'
  ],
  'E-C1': [
    '<b>10 สาย → 12 ลีด</b> สายแขนขา 4 เส้น (รวม RL สายดิน) สร้าง 6 frontal leads · สายหน้าอก 6 เส้นสร้าง 6 horizontal precordial leads (V1–V6)',
    '<b>ตำแหน่ง V1–V3</b> V1 ที่ 4th ICS ขอบ sternum ขวา · V2 ที่ 4th ICS ขอบ sternum ซ้าย · V3 กึ่งกลางระหว่าง V2 กับ V4',
    '<b>ตำแหน่ง V4–V6</b> อยู่ในระดับ 5th ICS ทั้งหมด ไล่จากซ้ายไปรักแร้: V4 midclavicular → V5 anterior axillary → V6 midaxillary',
    '<b>เหตุผลที่คลื่นแรง</b> Precordial leads วางชิดผนังอกใกล้หัวใจที่สุด จึงรับสัญญาณแนวนอนหน้า-หลังและซ้าย-ขวาได้ชัดเจน'
  ],
  'E-C2': [
    '<b>5 เกณฑ์ครบถ้วน</b> 1) Rate 60–100 bpm · 2) เริ่มจาก SA node · 3) ทุก P ตามด้วย QRS 1:1 · 4) P รูปทรงเดียวใน lead เดียวกัน · 5) P บวกใน II และลบใน aVR',
    '<b>ทำไมต้อง +II / −aVR</b> SA node อยู่บนขวาของ RA → คลื่น atrial depol วิ่งลงซ้ายขนาน Lead II (+60°) และวิ่งหนี aVR (−150°)',
    '<b>จุดหลอกยอดฮิต</b> “Positive P in all leads” ผิดเพราะ aVR ต้องลบ · “Uniform P in every lead” ผิดเพราะต่าง lead รูปคลื่นต่างกันได้'
  ],
  'E-C3': [
    '<b>AV block 3 ระดับ</b> 1° = PR > 200 ms แต่นำผ่านทุกตัว · 2° = บาง P หลุดไม่มี QRS · 3° = P และ QRS แยกกันเต้นสนิท (atria 70, ventricle 40)',
    '<b>SA node ล้มเหลว</b> AV node ซึ่งเป็น pacemaker สำรองลำดับถัดไปจะรับช่วงเต้นแทนที่ ~40–60 bpm โดยยังใช้ His–Purkinje จึงได้ narrow QRS',
    '<b>Atrial fibrillation</b> ไม่มี P wave, RR irregularly irregular, แต่ QRS ยังแคบเพราะการนำไฟฟ้าลง ventricle ยังปกติ',
    '<b>ลองกด Flowchart</b> ทดลองไล่ 4 คำถามด้านบนกับเคส AC81 Q4, AC75 Q8/Q17 และ AFib เพื่อฝึกแยกจังหวะ'
  ],
  'E-C4': [
    '<b>ลำดับตัดช้อยส์ไว (ทริก PS82)</b> เริ่มจากสิ่งที่เห็นเร็วสุด: Segment (ST ยก/กดไหม) → Wave (P/T +/−) → Interval (PR, QRS) → คำนวณ HR → ดู QRS axis',
    '<b>เช็กค่ามาตรฐาน</b> HR 60–100 · PR 120–200 ms (3–5 ช่องเล็ก) · QRS ≤ 110 ms (< 3 ช่องเล็ก) · ST ราบ (±1 mm) · Axis −30° ถึง +90°',
    '<b>โจทย์ตารางแปลผล</b> ตรวจทีละแถวเทียบกับกราฟจริง (เช่น t-RAT Q14 ผิดคู่ที่ QRS axis และ QRS complex) จะไม่พลาดเพราะรีบเลือก'
  ]
};
