/* Shared Thai layers loaded by student.html, tutor.html and print.js. */
window.THAI_SEC = {
  C: {
    big: 'EKG วัดความต่างศักย์บนผิวหนังจาก dipole ที่เคลื่อนที่: เข้าหาขั้วบวกเป็นบวก (depol) · T wave ตั้งขึ้นตาม QRS เพราะ endocardium มี AP ยาวกว่า epicardium',
    traps: [
      'เซลล์ที่ depolarize แล้ว ผิวนอกเป็นลบ (−) ไม่ใช่บวก (+) — ระวังสลับในกับนอกเซลล์',
      'Atrial repolarization ไม่ได้หายไปเพราะช้าหรือเร็วเกินไป แต่ถูก QRS ซ่อนทับไว้',
      'T wave ปกติเป็น concordant (ทิศเดียวกับ QRS) ไม่ใช่ discordant',
      'Phase 4 คือ TP segment (ระยะพัก) · ส่วน ST segment คือ Phase 2 (plateau) และอยู่ใน Absolute Refractory Period'
    ]
  },
  W: {
    big: 'จำค่าปกติและกลไกของ wave, segment, interval ให้แม่น: PR 120–200 ms · QRS ≤ 110 ms · QTc 330–440 ms · ST ±1 mm · และจับคู่ไฟฟ้ากับการบีบตัวของหัวใจ',
    traps: [
      'PR interval รวม P wave + AV delay · ส่วน PR segment คือช่วง AV nodal delay ล้วนๆ',
      'aVR มองจากไหล่ขวา → P และ T ปกติใน aVR ต้องเป็นลบ (−) เสมอ อย่าหลงคิดว่าผิดปกติ',
      'RR 500 ms = 60,000 / 500 = 120 bpm (tachycardia ผิดปกติ) · ส่วน RR 800 ms = 75 bpm (ปกติ)',
      'เลือดไหลผ่าน mitral valve มากสุดคือช่วงต้น TP (rapid filling หลัง T wave) ไม่ใช่ตอน P wave (atrial kick)'
    ]
  },
  L: {
    big: 'จำขั้วของ Bipolar (I, II, III) และ Augmented (aVR −150°, aVL −30°, aVF +90°) เป็นวง hexaxial ทุก 30° แล้วคู่ตั้งฉากกับการสลับสายจะทำได้ใน 5 วินาที',
    traps: [
      'คู่ตั้งฉาก 90° คือ I–aVF · II–aVL · III–aVR (Bipolar คู่ Augmented เสมอ)',
      'ขาขวา (RL) คือสายดิน (ground) ไม่ได้ใช้คำนวณ lead ใดๆ → สลับ LL กับ RL แทบไม่เปลี่ยนกราฟ',
      'สลับสายแขน/ขาคู่ไหน → Augmented lead ของรยางค์ที่ “ไม่ได้ขยับ” จะปกติเสมอ (สลับ RA↔LA เหลือ aVF ปกติ · สลับ RA↔LL เหลือ aVL ปกติ)'
    ]
  },
  R: {
    big: 'ความเร็วมาตรฐาน 25 mm/s ใช้สูตร 1500 ÷ กล่องเล็ก · ถ้าความเร็วเปลี่ยนให้คูณ (speed ÷ 25) ทันที · ถ้า RR ไม่สม่ำเสมอให้นับ QRS ใน 10 วินาที × 6',
    traps: [
      'กระดาษเร็วขึ้น (50 mm/s) คลื่นจะยืดออก ดูเหมือนเต้นช้า → ต้องคูณ 2 (= 3000 ÷ กล่องเล็ก)',
      'กระดาษช้าลง (12.5 mm/s) คลื่นจะบีบเข้า ดูเหมือนเต้นเร็ว → ต้องหาร 2 (= 750 ÷ กล่องเล็ก)',
      'AFib มี RR ไม่สม่ำเสมอ ห้ามเอา 1500 หารช่องเดียว ต้องนับจำนวน QRS ใน rhythm strip 10 วิแล้วคูณ 6'
    ]
  },
  A: {
    big: 'เช็กแกนหัวใจเร็วสุดด้วย Lead I + aVF (ถ้า I+, aVF− ต้องเช็ก Lead II แยก normal กับ LAD) แล้วใช้ทางลัดหา lead ที่ biphasic (±90°) เพื่อระบุองศาแม่นยำ',
    traps: [
      'Lead I (+) กับ aVF (−) ยังไม่สรุปว่าเป็น LAD ทันที! ช่วง 0° ถึง −30° ยังปกติ ต้องดู Lead II (− จึงเป็น LAD)',
      'สูตรทางลัดหา biphasic ใช้เฉพาะ 6 limb leads (frontal plane) ห้ามไปดู V1–V6',
      'มุม −60° อยู่ตรงข้าม Lead III (+120°) 180° พอดี (S ลึกสุด) และใกล้ aVL (−30°) ที่สุด (R สูงสุด) — ระวังคำว่า highest amplitude vs tallest R'
    ]
  },
  E: {
    big: 'จำตำแหน่ง V1–V6 ให้แม่น, เช็ก 5 เกณฑ์ Normal Sinus Rhythm, แยก AV block 1°/2°/3° กับ AFib ให้ขาด และอ่าน 12-lead เป็นระบบตามลำดับ',
    traps: [
      'Sinus rhythm ไม่จำเป็นต้องมี P เป็นบวกทุก lead (aVR เป็นลบ) และไม่ต้องหน้าตาเหมือนกันข้าม lead — แค่ monomorphic ภายใน lead เดียวกัน',
      'V1–V2 อยู่ 4th ICS · ส่วน V4–V6 อยู่แนวระดับ 5th ICS (MCL → AAL → MAL)',
      'AFib: เฉลย AC77 คือ pulse deficit (ชีพจรที่ข้อมือน้อยกว่าที่ฟังได้ที่ apex) แม้โจทย์ถาม “EKG finding” · บนกราฟเห็นไม่มี P, RR ไม่สม่ำเสมอ, QRS แคบ'
    ]
  }
};

window.THAI_CONCEPT = {
  'C-C1': [
    "EKG วัดความต่างระหว่างขั้วบนผิวหนังที่เกิดจาก dipole เคลื่อนที่ ไม่ใช่ membrane potential ในเซลล์เดียว",
    "ผิวนอกเซลล์ที่พักเป็นบวก ส่วนเซลล์ที่ถูกกระตุ้นกลับขั้ว → ทิศของคลื่นขึ้นกับว่า depolarization วิ่งเข้าหาหรือหนีขั้ว (+)",
    "Repolarization ให้เครื่องหมายตรงข้ามกับ depolarization เมื่อวิ่งในทิศเดียวกัน"
  ],
  'C-C2': [
    'P = atrial depol · QRS = ventricular depol (fast Na⁺ influx) · T = ventricular repol (K⁺ efflux)',
    'Atrial repolarization ถูก QRS ที่ใหญ่กว่าบดบัง · SA/AV node เล็กเกินกว่าจะเห็นเป็นคลื่นบน EKG'
  ],
  'C-C3': [
    "ลำดับกระตุ้น: Purkinje อยู่ชั้นใน → ผนังชั้นในถูกกระตุ้นก่อน แต่ action potential ของชั้นในอยู่นานกว่าชั้นนอก",
    "ผลคือ repolarization วิ่งย้อนทิศกับ depolarization → กลับทิศ × กลับเครื่องหมาย → T ชี้ทางเดียวกับ QRS",
    "T ที่ชี้ตรงข้ามกับ QRS → นึกถึงโรคของกล้ามเนื้อหัวใจ"
  ],
  'C-C4': [
    "แต่ละ phase ของ ventricular AP มีช่วงคู่กันบน EKG: phase 0 = QRS (Na⁺ เข้า) · plateau ที่ Ca²⁺ เข้าสมดุล K⁺ ออกให้เส้นราบ · phase 3 (K⁺ ออก) ให้คลื่น · phase 4 คือช่วงพักระหว่าง beat",
    "Atrial repolarization เกิดพร้อม ventricular depolarization จึงไม่เห็นแยกเป็นคลื่น",
    "ช่วงที่กระตุ้นซ้ำไม่ได้เลยกินตั้งแต่ QRS ไปจนราวยอดของคลื่น repolarization"
  ],
  'W-C1': [
    "Wave = คลื่นที่เบี่ยงออกจากเส้นฐาน · interval = wave + segment",
    "PR interval = จุดเริ่ม P ถึงจุดเริ่ม QRS (atria + ช่วงหน่วง) · QT = จุดเริ่ม QRS ถึงจุดจบของคลื่น repolarization",
    "ประเมินเส้นฐานในช่วงที่ทั้งหัวใจพักพร้อมกัน"
  ],
  'W-C2': [
    "ค่าปกติที่ต้องจำ: PR, QRS, QTc (หญิงสูงกว่าชายเล็กน้อย) · 1 ช่องเล็ก = 40 ms",
    "PR ยาวเกิน 200 ms = 1st-degree AV block · PR สั้นเกินแปลว่ามีทางลัดข้าม AV node",
    "QT ขึ้นกับ HR จึงแก้เป็น QTc = QT ÷ √RR · ความผิดปกติที่ AV node เปลี่ยนช่วงเวลาตั้งแต่ P ถึง QRS"
  ],
  'W-C3': [
    "P และ T ปกติตั้งขึ้นใน lead II · aVR มองย้อนทิศหัวใจ คลื่นปกติจึงกลับหัวใน lead นี้",
    "ST elevation 4 mm หรือ depression 2 mm ผิดปกติ · Q กว้างและลึก → old MI",
    "แปลง RR เป็น HR ก่อนตัดสินเสมอ: HR = 60,000 ÷ RR (ms) · RR 800 ms = 75 bpm · 500 ms = 120 bpm"
  ],
  'W-C4': [
    "คลื่นไฟฟ้ามาก่อนเหตุการณ์กลไกเสมอ (excitation–contraction coupling)",
    "QRS → S1 + isovolumic contraction · ST–T อยู่ในช่วง ejection · ปลาย T → S2",
    "เลือดผ่าน mitral valve มากสุดช่วงต้น diastole หลัง T wave ไม่ใช่ช่วง P wave"
  ],
  'W-C5': [
    "Sympathetic หรือ atropine (บล็อก vagus) → SA และ AV node เร็วขึ้น → HR ↑, PR สั้นลง",
    "His–Purkinje แทบไม่รับผลจากระบบประสาทอัตโนมัติ → ความกว้าง QRS คงเดิม",
    "Vagus (ACh บน M₂) → SA, AV ช้าลง → RR และ PR ยาวขึ้น อาจเกิด block · ยาที่ออกฤทธิ์ที่ SA node ให้ดู RR"
  ],
  'L-C1': [
    "Bipolar lead วัดความต่างระหว่างแขนขา 2 ข้าง: ขั้วบวกอยู่ทางซ้ายหรือล่างเสมอ · มุม 0°, +60°, +120°",
    "ขาขวาไม่ได้เป็นขั้วของ lead ใด · สามเหลี่ยม Einthoven ให้ความสัมพันธ์ระหว่าง 3 lead",
    "Smartwatch: ขั้วบวกที่ข้อมือซ้าย + ขั้วลบที่นิ้วมือขวา → จำลอง bipolar lead แนวนอน"
  ],
  'L-C2': [
    "Augmented lead: ขั้วบวกที่แขนหรือขาข้างหนึ่ง เทียบกับค่าเฉลี่ยของอีก 2 ข้าง (aVR แขนขวา · aVL แขนซ้าย · aVF เท้าซ้าย)",
    "ซ้อน 3 bipolar กับ 3 augmented ในระนาบ frontal → แบ่งวงกลมห่างกันทุก 30°",
    "ทุก bipolar มี augmented ที่ตั้งฉากคู่กัน เช่น I ตั้งฉากกับ aVF"
  ],
  'L-C3': [
    "สลับสายแขนขาคู่ไหน → augmented lead ของรยางค์ที่ไม่ได้ถูกสลับยังเหมือนเดิม เพราะขั้วบวกและค่าเฉลี่ยของอีก 2 ข้างไม่เปลี่ยน",
    "สลับแขนซ้าย–ขวาพบบ่อยที่สุด: II สลับกับ III และ augmented lead ของแขนสองข้างสลับกัน",
    "ขาขวาเป็นสายอ้างอิงที่มีศักย์ใกล้ขาซ้าย"
  ],
  'R-C1': [
    "กระดาษมาตรฐาน 25 mm/s และ 10 mm/mV (ดูจากสี่เหลี่ยม calibration) · 1 ช่องใหญ่ = 5 ช่องเล็ก = 0.2 s",
    "Rhythm สม่ำเสมอ: นับช่องระหว่าง R กับ R แล้วหารจำนวน mm ที่กระดาษวิ่งใน 1 นาที (25 × 60)",
    "ช่องใหญ่ยิ่งมาก HR ยิ่งต่ำ: 2 ช่องใหญ่ = 150 · 4 = 75 · 5 = 60 bpm"
  ],
  'R-C2': [
    "สูตร 1500 ใช้ได้เฉพาะ 25 mm/s · ความเร็วอื่นใช้สูตรเดียวจบ: HR = (60 × speed) ÷ ช่องเล็ก",
    "กระดาษวิ่งช้า (12.5 mm/s) คลื่นถูกบีบ ดูเหมือนเต้นเร็ว · กระดาษวิ่งเร็วยืดระยะ RR ออก"
  ],
  'R-C3': [
    "RR แต่ละช่วงไม่เท่ากัน → หาร RR ช่องเดียวได้อัตราต่างกันทุก beat จึงใช้ไม่ได้",
    "AFib: ไม่มี P wave, baseline หยัก, QRS แคบ · atrium สั่นเร็วเกินกว่าจะนับได้"
  ],
  'A-C1': [
    "แบ่งแกนเป็น 4 โซน: normal, left, right และ extreme (northwest −90° ถึง ±180°)",
    "Quadrant check: Lead I บอกซ้าย/ขวา · aVF บอกบน/ล่าง → I+ aVF+ = normal · I− aVF− = extreme",
    "I+ กับ aVF− ยังสรุปว่าเบี่ยงซ้ายไม่ได้ทันที เพราะช่วง 0° ถึง −30° ยังปกติ → ต้องดูอีก lead"
  ],
  'A-C2': [
    "แต่ละ lead เห็นเงาของเวกเตอร์ QRS บนแกนของตัวเอง (∝ cos θ): มุม 0° บวกสูงสุด · 180° ลบลึกสุด",
    "มุมแหลมกับมุมป้านให้คลื่นที่เด่นคนละฝั่ง · มุม 90° ให้ R ≈ S",
    "Lead ที่ R ≈ S สำหรับแกน +30° คือ III · แกน −30° คือ II"
  ],
  'A-C3': [
    "วิธีลัด: หา lead ใน frontal plane ที่ R ≈ S มากที่สุด → แกนตั้งฉากกับ lead นั้น → ดู lead คู่ตั้งฉากว่าบวกหรือลบเพื่อเลือกฝั่ง",
    "วิธีตรง: จดเครื่องหมาย + / − ของทุก lead ใน frontal plane แล้วหาคู่ lead บวกที่ห่างกันที่สุด",
    "ตรวจซ้ำกับ Lead I และ aVF เสมอ กันหลงทิศ 180°"
  ],
  'A-C4': [
    "ข้อสอบที่ถามหลายค่าในกราฟเดียว ให้แยกคิดทีละขั้น: rate → axis → ความกว้าง QRS",
    "Rate: ดูการตั้งค่ากระดาษในโจทย์ก่อนใช้สูตร 1500 · axis: Lead I + aVF ก่อนแล้วค่อยดูเพิ่ม",
    "จับคู่ทั้งสามค่าให้ครบก่อนเลือกตัวเลือก"
  ],
  'E-C1': [
    "10 electrodes → 12 leads: limb leads ดูหัวใจในระนาบ frontal · chest leads ดูอีกระนาบหนึ่ง",
    "V1–V2 อยู่ 4th ICS ชิดขอบ sternum คนละข้าง · V3 อยู่กึ่งกลาง V2 กับ V4 · V4–V6 อยู่แนว 5th ICS เรียงจากหน้าอกไปรักแร้"
  ],
  'E-C2': [
    "Normal sinus rhythm ต้องผ่านครบ 5 ข้อ: rate, จุดกำเนิด, ทุก P ตามด้วย QRS, รูปทรง P ใน lead เดียวกัน, ทิศของ P ใน lead II และ lead ที่มองจากไหล่ขวา",
    "กับดัก: P ไม่ต้องบวกทุก lead และไม่ต้องหน้าตาเหมือนกันข้าม lead"
  ],
  'E-C3': [
    "1° AVB: PR ยาวแต่ทุก P ยังนำไป QRS · 2° AVB: บาง beat หลุด · 3° AVB: atria กับ ventricles เต้นอิสระจากกัน (เช่น atria 70, ventricles 40)",
    "SA node ล้มเหลว → pacemaker สำรองตัวถัดไป (~40–60 bpm) ยังนำไฟฟ้าผ่าน His–Purkinje",
    "AFib: ไม่มี P, RR ไม่สม่ำเสมอ · เฉลย AC77 ใช้ pulse deficit เป็นลักษณะของ AF"
  ],
  'E-C4': [
    "อ่านทุก 12-lead ตามลำดับเดิมเสมอ: standardization → rate → rhythm → axis → intervals → ST/T",
    "ทริก PS82 สำหรับตัดตัวเลือก: เริ่มจากสิ่งที่ดูง่ายสุด (ST, ทิศของคลื่น, intervals) แล้วค่อยคำนวณ",
    "โจทย์ตาราง “ข้อใดแปลผลผิด” ให้เช็กทีละแถวเทียบกับกราฟจริง"
  ]
};

window.THAI_Q = {
  C1: [
    'ระหว่าง depolarization ผิวนอกบริเวณที่ depolarize แล้วเป็นลบ (−) เมื่อเทียบกับบริเวณที่ยังพัก (+) → ขั้วบันทึกที่บริเวณพักจึงวัดได้คลื่นบวก',
    'ตัวเลือก A สลับเครื่องหมายผิวนอกเป็นบวก · ตัวเลือก C–D ผิดเครื่องหมายช่วง repolarization (บริเวณที่ repolarize แล้วผิวนอกกลับมาเป็นบวก)'
  ],
  C2: [
    'Atrial repolarization เกิดพร้อมกับ ventricular depolarization พอดี จึงถูก QRS complex ที่ใหญ่กว่ามากบดบัง',
    'ไม่ได้เกิดช้าหรือเร็วเกินไป และจบก่อนช่วง T wave นานแล้ว'
  ],
  C3: [
    'T wave คือ ventricular repolarization (phase 3) ซึ่งเกิดจาก K⁺ ไหลออกจากเซลล์กล้ามเนื้อหัวใจห้องล่าง (K⁺ efflux)',
    'Na⁺ influx คือ phase 0 (P wave ใน atrium, QRS ใน ventricle) · ส่วน K⁺ efflux ใน atrium ถูกซ่อนใน QRS'
  ],
  C4: [
    'Fast voltage-gated Na⁺ channel สร้าง phase 0 ของกล้ามเนื้อ ventricle ซึ่งปรากฏเป็น QRS complex',
    'P wave เป็นของ atrium และ PR segment เป็น AV node (พึ่ง L-type Ca²⁺ เป็นหลัก)'
  ],
  C5: [
    'เซลล์ endocardium depolarize ก่อนแต่มี action potential ยาวกว่า ทำให้ epicardium repolarize เสร็จก่อน → ทิศ repol วิ่งจาก epi → endo (ย้อนทาง depol)',
    'กลับทิศการวิ่ง × กลับเครื่องหมายของ repolarization → T wave จึงมีทิศทางเดียวกับ QRS (concordant)'
  ],
  C6: [
    'Phase 4 ของ ventricular myocyte คือระยะพักระหว่างการเต้น ตรงกับเส้นราบ TP segment',
    'QRS = phase 0 · ST segment = phase 2 (plateau) · T wave = phase 3'
  ],
  C7: [
    'Phase 3 ของ atrial muscle คือ atrial repolarization ซึ่งเกิดพร้อม ventricular depolarization จึงซ่อนอยู่ใน QRS complex',
    'P wave คือ atrial phase 0 · ส่วน ST และ T เป็นของ ventricle'
  ],
  C8: [
    'เฉลย AC80 คือ C (ST segment): Absolute Refractory Period กินตั้งแต่ phase 0 ผ่าน plateau (ST segment) ถึงต้น phase 3',
    'ST segment อยู่ใน ARP ทั้งเส้น ส่วน T wave กินช่วง Relative Refractory Period เป็นส่วนใหญ่'
  ],
  W1: [
    'ลูกศร A ชี้คลื่นเล็กหน้า QRS ใน lead II คือ P wave · ลูกศร B ชี้เส้นราบหลัง QRS ทันทีใน V2 คือ ST segment',
    'ดูตำแหน่งเทียบกับ QRS จะแยก P (ก่อน QRS) กับ ST (หลัง QRS ทันที) ได้ชัดเจน'
  ],
  W2: [
    'ช่วง X คือ PR segment (ปลาย P ถึงต้น QRS) ซึ่งเป็นระยะที่กระแสไฟฟ้าชะลอตัวผ่าน AV node',
    'Atrial depolarization คือตัว P wave เอง · ส่วน ventricular depolarization คือ QRS complex'
  ],
  W3: [
    'PR interval วัดตั้งแต่เริ่ม P จนถึงเริ่ม QRS จึงรวมทั้ง atrial depolarization และ AV nodal delay',
    'P wave เกิดก่อน atrial systole (ไม่ใช่ ventricular systole) · QRS คือ depolarization · ST อยู่ในช่วง ejection'
  ],
  W4: [
    'ความผิดปกติของการนำไฟฟ้าที่ AV node จะเปลี่ยนเวลา AV delay ซึ่งอยู่ใน PR interval โดยตรง (เช่น ช้าลง → PR > 200 ms = 1° AV block)',
    'QT และ ST เป็นของ ventricle · RR สะท้อนอัตราการยิงของ SA node'
  ],
  W5: [
    'PR interval 100 ms สั้นกว่าค่าปกติ (120–200 ms) บ่งชี้ pre-excitation (ทางลัดข้าม AV node)',
    'QRS 100 ms (≤110), HR 100 bpm (60–100), และ T ลบใน aVR ล้วนเป็นค่าปกติ'
  ],
  W6: [
    'Lead aVR ชี้ไปทางไหล่ขวา (−150°) กระแสปกติของ atrium วิ่งหนี aVR ดังนั้น P wave เป็นลบใน aVR จึงปกติ',
    'QTc 500 ms ยาวเกิน (ปกติ 330–440) · RR 500 ms = 120 bpm (เร็วเกิน) · ST กดลง 2 mm เกิน ±1 mm'
  ],
  W7: [
    'Negative P wave ใน aVR เป็นลักษณะปกติของ sinus rhythm',
    'PR 240 ms = 1° AVB · QT 140 ms สั้นผิดปกติ · P ลบใน II ไม่ใช่ sinus · RR 500 ms = 120 bpm'
  ],
  W8: [
    'T wave ปกติเป็นบวกใน lead II และ V3–V6 (ดังนั้น positive T ใน V3 ปกติ)',
    'PR 240 ms (ยาว), QRS 140 ms (กว้าง), RR 500 ms (120 bpm), P ลบใน II ล้วนผิดปกติ'
  ],
  W9: [
    'Pathologic Q wave (กว้าง > 40 ms และลึก) บ่งชี้กล้ามเนื้อหัวใจตาย (MI) จึงผิดปกติ',
    'อีก 4 ข้อเป็นค่าปกติทั้งหมด: P บวกใน II, P ลบใน aVR, PR 120–200 ms, QRS 60–110 ms'
  ],
  W10: [
    'ST segment ปกติต้องเบี่ยงไม่เกิน ±1 mm → ST elevation 4 mm ผิดปกติชัดเจน (acute myocardial injury)',
    'PR 160 ms, QRS 100 ms, RR 800 ms (= 75 bpm) และ axis 30° ล้วนปกติ'
  ],
  W12: [
    'P wave คือ atrial depolarization → สิ่งที่เกิดตามมาทันทีคือ atrial contraction (atrial systole)',
    'Ventricular / isovolumic contraction เกิดหลัง QRS · isovolumic relaxation เกิดหลัง T wave'
  ],
  W13: [
    'หลังจบ T wave ลิ้น aortic ปิด (S2) และ ventricle คลายตัวโดยทุกลิ้นปิด = isovolumetric relaxation',
    'Reduced ejection เกิดระหว่าง T wave · mitral ปิดตอนเริ่ม QRS'
  ],
  W14: [
    'QRS เริ่มการบีบตัวของ ventricle (isovolumic contraction) จนความดัน LV ชนะ aorta แล้วลิ้น aortic เปิดทันทีหลัง QRS',
    'T wave อยู่ใกล้ช่วงลิ้น aortic ปิด (S2) ไม่ใช่เปิด'
  ],
  W15: [
    'จุด D อยู่ต้นช่วง TP หลัง T wave พอดี = rapid passive ventricular filling ซึ่งเป็นช่วงที่เลือดไหลผ่าน mitral valve มากที่สุด',
    'จุด B (P wave) เป็นแค่ atrial kick ส่วนน้อย (~20%) · จุด C อยู่ใน systole ซึ่ง mitral valve ปิดอยู่'
  ],
  W16: [
    'Sympathetic เพิ่มทำให้ HR สูงขึ้น (RR สั้นลง) และเนื่องจาก QT แปรผันตรงกับ RR → QT interval จึงสั้นลงด้วย',
    'Sympathetic ไม่ได้ทำให้ RR ยาวขึ้น ไม่ได้เพิ่มความสูง QRS และไม่ได้ทำให้ QRS แคบลง'
  ],
  W17: [
    'Muscarinic antagonist (เช่น atropine) ยับยั้ง vagus → HR เร็วขึ้น (RR สั้นลง, QT สั้นลง, QRS เท่าเดิม) แต่ไม่ทำให้เกิด ST elevation',
    'Elevated ST segment เป็นสัญญาณของโรค/กล้ามเนื้อบาดเจ็บ (เช่น MI, pericarditis)'
  ],
  W18: [
    'Atropine ออกฤทธิ์บล็อก M₂ ที่ SA node ทำให้ HR เพิ่มขึ้น → ตรวจผลได้ตรงที่สุดจาก RR interval ที่สั้นลง',
    'PR สะท้อน AV node · QT/ST/QRS เป็นของ ventricle'
  ],
  L1: [
    'Lead II มีขั้วบวก (+) ที่ขาซ้าย (Left leg) และขั้วลบ (−) ที่แขนขวา (Right arm) ชี้ลงซ้ายมุม +60°',
    'ขาขวา (Right leg) เป็นสายดิน (ground) ไม่ใช่ขั้ววัด'
  ],
  L2: [
    'โจทย์ถาม positive และ negative ตามลำดับ → Lead II คือ Left leg (+) และ Right arm (−)',
    'ระวังตัวเลือก B ที่สลับลำดับเป็น Right arm ก่อน Left leg'
  ],
  L3: [
    'Lead III วัดความต่างศักย์ระหว่างแขนซ้าย (LA −) กับขาซ้าย (LL +) ชี้มุม +120°',
    'Lead I = RA–LA · Lead II = RA–LL · aVL ใช้ LA เป็นขั้วบวกเทียบกับค่าเฉลี่ย RA+LL'
  ],
  L4: [
    'Lead III เชื่อมระหว่าง Left arm (−) และ Left leg (+)',
    'ตัดตัวเลือกที่มี Right leg ทิ้งได้ทันที เพราะ RL เป็นสายดิน'
  ],
  L5: [
    'ขั้วบวกสัมผัสข้อมือซ้าย (LA+) และขั้วลบแตะนิ้วชี้ขวา (RA−) → ทิศจากขวาไปซ้าย (0°) ตรงกับ Lead I พอดี',
    'เป็นหลักการจริงของ ECG บน smartwatch ทั่วไป'
  ],
  L6: [
    'Lead aVR ชี้มุม −150° → มุมที่ตั้งฉาก 90° คือ +120° (หรือ −60°) ซึ่งตรงกับ Lead III',
    'ท่อง 3 คู่ตั้งฉาก: I–aVF · II–aVL · III–aVR'
  ],
  L7: [
    'Lead aVL ชี้มุม −30° → หมุน 90° ได้ +60° ซึ่งตรงกับ Lead II',
    'ตรงกับคู่ตั้งฉาก II–aVL'
  ],
  L8: [
    'aVF ปกติเพียงตัวเดียวแปลว่าขาซ้าย (LL) ไม่ได้ถูกสลับ และค่าเฉลี่ย (RA+LA)/2 ไม่เปลี่ยน → คู่ที่สลับกันคือแขนขวาและแขนซ้าย (RA ↔ LA)',
    'ทริก: Augmented lead ไหนปกติ = แขน/ขาข้างนั้นไม่ได้ขยับ'
  ],
  L9: [
    'เฉลย PS82 / AC81 คือ B: มีเพียง aVL (แขนซ้าย) ที่ปกติ แสดงว่าสลับขั้วอีกสองรยางค์ที่ใช้งานจริงคือ Right arm กับ Left leg (RA ↔ LL)',
    'Right leg เป็นสายดินไม่นับ · สลับ RA↔LL ทำให้ aVL คงเดิมส่วน lead อื่นสลับ/กลับหัวหมด'
  ],
  L10: [
    'สลับแขนซ้ายกับแขนขวา (LA ↔ RA) ไม่กระทบขาซ้าย และค่าเฉลี่ยแขนสองข้างเท่าเดิม → กราฟของ aVF จึงยังแสดงที่ Lead aVF ตามเดิม',
    'สิ่งที่เปลี่ยนคือ I → −I, II ↔ III และ aVR ↔ aVL'
  ],
  L11: [
    'ขาขวา (RL) เป็นสายดิน (ground) และศักย์ไฟฟ้าสองขาใกล้เคียงกันมาก → สลับ LL กับ RL แทบไม่ทำให้กราฟเปลี่ยน (None of the above)',
    'Lead I ไม่ได้ใช้สายขาเลย จึงไม่มีทางกลับหัว'
  ],
  L12: [
    'สลับแขนซ้ายกับขาซ้าย (LA ↔ LL) แขนขวาไม่ถูกขยับ → Lead aVR จึงไม่เปลี่ยนแปลง',
    'ส่วน I ↔ II, aVL ↔ aVF และ III กลับหัว'
  ],
  R1: [
    'ที่ความเร็วมาตรฐาน 25 mm/s: 15 mm = 15 ช่องเล็ก (3 ช่องใหญ่) → HR = 1500 ÷ 15 = 100 bpm',
    'หรือใช้ 300 ÷ 3 ช่องใหญ่ = 100 bpm'
  ],
  R2: [
    'วัดระยะ RR ได้ 15 ช่องเล็ก (3 ช่องใหญ่) ที่ 25 mm/s → 1500 ÷ 15 = 100 bpm',
    'ตรงกับความจำ 1–2–3 ช่องใหญ่ = 300–150–100 bpm'
  ],
  R3: [
    'เฉลย AC75–79 คือ C (100 bpm): ระยะระหว่างยอด R ประมาณ 3 ช่องใหญ่ (15 ช่องเล็ก) ที่ 25 mm/s → 300 ÷ 3 = 100 bpm'
  ],
  R4: [
    'ความเร็ว 12.5 mm/s (ช้าลงครึ่งหนึ่ง) → HR = (1500 ÷ 15) × (12.5 ÷ 25) = 100 × 0.5 = 50 bpm',
    'หรือสูตรเดียวจบ: (60 × 12.5) ÷ 15 = 750 ÷ 15 = 50 bpm'
  ],
  R5: [
    'เฉลย AC80 คือ B (50 bpm): โจทย์เดียวกับ R4 — ถ้าลืมแก้ความเร็วจะตกหลุมตอบ 100 bpm'
  ],
  R6: [
    'วัด RR ได้ประมาณ 18 ช่องเล็ก · ถ้าใช้ 1500 ÷ 18 ≈ 83 จะเป็นช้อยส์หลอก (84 bpm)',
    'กระดาษวิ่ง 50 mm/s (เร็วขึ้น 2 เท่า) → ต้องคูณ 2 = 3000 ÷ 18 ≈ 167–168 bpm'
  ],
  R7: [
    'วัด RR ได้ประมาณ 15 ช่องเล็ก → ที่ 25 mm/s จะได้ 100 bpm แต่ความเร็ว 50 mm/s ต้องคูณ 2 = 200 bpm'
  ],
  R8: [
    'เฉลย PS82 / AC81 คือ E (200 bpm): RR = 15 ช่องเล็ก ที่ 50 mm/s → HR = 50 × 60 ÷ 15 = 200 bpm',
    'ทริก PS82: จำสูตร (60 × speed) ÷ ช่องเล็ก สูตรเดียวใช้ได้ทุกความเร็ว'
  ],
  R9: [
    'เฉลย AC75–79 คือ D (200 bpm): แถบมาตรฐานยาว 250 mm เมื่อวิ่ง 50 mm/s จะกินเวลาแค่ 5 วินาที → 18 × 12 = 216 bpm ใกล้ 200 ที่สุด',
    'ดู Recall note: ถ้าข้อสอบจริงให้ 18 ช่องเล็กต่อ RR จะได้ 3000 ÷ 18 ≈ 167 bpm — ให้เน้นเข้าใจสูตร'
  ],
  R10: [
    'วัด RR ได้ประมาณ 25 ช่องเล็ก (5 ช่องใหญ่) → ที่ 25 mm/s จะได้ 60 bpm (ช้อยส์หลอก 60–65)',
    'ความเร็ว 30 mm/s → 60 × (30 ÷ 25) = 72 bpm (อยู่ในช่วง 70–75 bpm)'
  ],
  R11: [
    'จังหวะไม่สม่ำเสมอและไม่มี P wave (atrial fibrillation) ห้ามหาร RR ช่องเดียว',
    'นับจำนวน QRS ในแถบ rhythm strip ล่างสุด (10 วินาที ที่ 25 mm/s) ได้ ~22 ตัว → 22 × 6 = 132 bpm'
  ],
  A1: [
    'เฉลย AC75–79 คือ D (Normal axis): Lead I biphasic = ±90° และ aVF บวก → แกนอยู่ที่ +90°',
    'ตามเกณฑ์ของคณะ Normal axis คือ −30° ถึง +90° รวม +90° ด้วย'
  ],
  A2: [
    'Lead I เป็นลบ (−) แปลว่าแกนหลุดไปฝั่งขวา · aVF เป็นบวก (+) แปลว่าชี้ลงล่าง → ช่วง +90° ถึง +180° = Right axis deviation'
  ],
  A3: [
    'Right axis deviation (+90° ถึง +180°) ชี้หนี Lead I (จึงเป็นลบ) และชี้เข้าหา aVF (จึงเป็นบวก)',
    'Lead I + กับ Lead II + คือ normal axis · Lead I − กับ aVF − คือ extreme axis'
  ],
  A4: [
    'Pulmonary hypertension ทำให้ RV โต → Right axis deviation → Lead I negative และ Lead aVF positive',
    'ตัวเลือก C (I −, aVF −) คือ extreme axis deviation'
  ],
  A5: [
    'Left axis deviation (−30° ถึง −90°) ชี้ขึ้นซ้าย → Lead I (และ aVL) บวก ส่วน Lead II, III, aVF ลบ',
    'ตัวเลือก A (I +, II +) คือ normal axis · ตัวเลือก C (I −, aVF −) คือ extreme axis'
  ],
  A6: [
    'Lead ที่ biphasic จะตั้งฉาก (±90°) กับแกนหัวใจ: +30° + 90° = +120° ซึ่งคือ Lead III'
  ],
  A7: [
    'แกน −30° บวกอีก 90° ได้ +60° คือ Lead II — นี่คือเหตุผลว่าทำไมเราใช้ Lead II ตัดสินเส้นแบ่ง LAD ที่ −30°'
  ],
  A8: [
    'แกน +60° ลบออก 90° ได้ −30° คือ Lead aVL (ส่วน Lead II ที่ +60° จะมี R สูงที่สุด)'
  ],
  A9: [
    'คลื่นวิ่งไปทาง −60° จะตรงข้าม 180° กับ Lead III (+120°) พอดี → เกิดคลื่นลบใหญ่ที่สุดใน Lead III',
    'aVR (−150°) ตั้งฉาก 90° จึงเป็น biphasic · aVL (−30°) ห่างแค่ 30° จึงเป็นบวก'
  ],
  A10: [
    'เฉลย AC80 คือ B (Lead III): Lead III ชี้มุม +120° ขนานกับแกน +120° พอดี (มุม 0°) จึงได้ R wave สูงสุด'
  ],
  A11: [
    'เฉลย PS82 / AC81 ไฮไลต์ทั้ง A (aVL) และ D (Lead III): แกน −60° ตรงข้าม Lead III (+120°) 180° (ขนาด amplitude ใหญ่สุดแต่เป็นลบ) และใกล้ aVL (−30°) ที่สุด (R สูงสุด)',
    'จำแยกคำศัพท์: tallest R wave = aVL · deepest S wave / largest magnitude = Lead III'
  ],
  A12: [
    'มุมแหลม (< 90°) แตกแรงลงบนแกนบวกของ lead → คลื่นบวกสูงกว่าคลื่นลบ',
    'จะเป็น tallest positive ได้ต้องทำมุม 0° (ขนานพอดี)'
  ],
  A13: [
    'มุมป้าน (90°–180°) แตกแรงลงบนฝั่งลบของ Lead II → QRS เป็นลบมากกว่าบวก',
    'Highest negative ต้องทำมุม 180° พอดี · biphasic คือ 90°'
  ],
  A14: [
    'Lead I, II, III, aVL, aVF ล้วนเป็นบวก และ aVR เป็นลบ → แกนอยู่ช่วง +30° ถึง +60° ซึ่งคือ Normal axis'
  ],
  A15: [
    'วิธีลัด: aVL (−30°) เป็น biphasic สุด → แกนคือ +60° หรือ −120° · ดู Lead II (+60°) พบว่าสูงเป็นบวก → ตอบ +60°'
  ],
  A16: [
    'เฉลย AC75–79 คือ A (Normal axis): Lead I, II, III, aVF เป็นบวก, aVR เป็นลบ และ aVL ใกล้ biphasic (~+60°)'
  ],
  A17: [
    'เฉลย AC75–79 คือ B (Right axis deviation): Lead I เป็นลบสุทธิ (S ลึกกว่า r) ขณะที่ aVF และ III เป็นบวก และ aVL เป็นลบ'
  ],
  A18: [
    'Lead I, II, III และ aVF ล้วนเป็นบวก (I+ และ aVF+) → แกนอยู่ในควอดแรนต์ 0° ถึง +90° (Normal axis)'
  ],
  A19: [
    'Lead I และ aVL เป็นบวก ขณะที่ II, III, aVF เป็นลบลึก → Left axis deviation (−30° ถึง −90°)'
  ],
  A20: [
    'Lead I และ aVL เป็นบวก ส่วน II, III, aVF เป็นลบ → แกนชี้ขึ้นซ้ายอยู่ในช่วง −30° ถึง −90° (LAD)'
  ],
  A21: [
    'Lead I, II, III, aVF เป็นบวก · aVL เล็กเกือบ biphasic · aVR ลบ → แกนประมาณ +60° (Normal axis)'
  ],
  A22: [
    'ภาพเล็ก ให้นับ QRS ในแถบ lead II ล่างสุด (10 วินาที) ได้ราว 19 ตัว → 19 × 6 ≈ 115 bpm → เกิน 100 = Tachycardia',
    'Lead I+, aVL+ แต่ II−, III−, aVF− → Left axis deviation → ตอบ Tachycardia with left axis deviation'
  ],
  A23: [
    'Lead I−, aVL− แต่ II+, III+, aVF+ → Right axis deviation',
    'ความกว้าง QRS ประมาณ 3 ช่องเล็กขึ้นไป (> 110–120 ms) → Wide QRS complex'
  ],
  A24: [
    'RR ≈ 20 ช่องเล็ก แต่ความเร็วกระดาษคือ 15 mm/s → (1500 ÷ 20) × (15 ÷ 25) = 45 bpm (Bradycardia)',
    'Lead I+, aVL+ แต่ II−, III−, aVF− → Left axis deviation → ตอบ Bradycardia and left axis deviation'
  ],
  E1: [
    'Lead V2 ติดที่ 4th intercostal space ขอบกระดูก sternum ด้านซ้าย (ด้านขวาคือ V1)'
  ],
  E2: [
    'เฉลย AC75–79 คือ C: V4 อยู่ที่ 5th intercostal space แนว mid-clavicular line (ฝั่งซ้าย — โจทย์ recall พิมพ์ right ผิดทุกช้อยส์ 5th ICS)'
  ],
  E3: [
    'V4 อยู่ที่ 5th intercostal space แนว midclavicular line (V5 = anterior axillary, V6 = midaxillary)'
  ],
  E4: [
    'V5 ติดที่ 5th intercostal space แนว anterior axillary line (ระดับเดียวกับ V4)'
  ],
  E5: [
    'V5 = 5th ICS, anterior axillary line · midaxillary คือ V6 · midclavicular คือ V4 · 4th ซ้ายขอบ sternum คือ V2'
  ],
  E6: [
    'เฉลย AC75–79 คือ C: ลักษณะบนกราฟ EKG ของ sinus rhythm คือทุก P wave ตามด้วย QRS complex (1:1)',
    'อัตราปกติคือ 60–100 (ไม่ใช่ 100–120) · และ P เป็นลบใน aVR (ไม่ใช่ aVL)'
  ],
  E7: [
    'QRS ทุกตัวมี P wave นำหน้า (1:1) คือข้อที่ถูกต้อง',
    'P ไม่เป็นบวกทุก lead (ลบใน aVR) · ไม่ต้องรูปเดียวทุก lead (แค่ใน lead เดียวกัน) · อัตราปกติ 60–100 ไม่ใช่ 50–100'
  ],
  E8: [
    'P wave ตามด้วย QRS ในอัตราส่วน 1:1 บ่งชี้การนำไฟฟ้าจาก atrium สู่ ventricle ปกติ',
    '40–60 bpm เป็น bradycardia/junctional · P ลบใน II หรือ P บวกใน aVR แปลว่าไม่ได้เริ่มจาก SA node'
  ],
  E9: [
    'ไม่จำเป็นต้องมี P wave หน้าตาเหมือนกันทุก lead (ต่าง lead มุมมองต่างกัน หน้าตาจึงต่างกันได้) — ขอแค่ monomorphic ใน lead เดียวกันก็พอ',
    'อีก 3 ข้อล้วนเป็นเกณฑ์จริงของ normal sinus rhythm'
  ],
  E10: [
    'เฉลย PS82 / AC81 คือ B (Sinus rhythm): มี P บวกใน II, ลบใน aVR, 1:1, HR ≈ 75–78 bpm (13 QRS ใน 10 วิ)',
    'ตัดช้อยส์อื่น: ไม่ใช่ bradycardia · PR 4–5 ช่องเล็กปกติ · ST ราบปกติ · และ Lead I เป็นลบ (RAD ไม่ใช่ normal axis)'
  ],
  E11: [
    'Atria เต้น 70 bpm และ Ventricle เต้น 40 bpm โดย P กับ QRS ไม่สัมพันธ์กันเลย (AV dissociation) = 3rd-degree (complete) AV block',
    '1° AVB แค่ PR ยาวแต่ยัง 1:1 · 2° AVB หลุดเป็นบางจังหวะไม่ได้แยกขาดถาวร'
  ],
  E12: [
    'เมื่อ SA node หยุดทำงาน ตัวคุมจังหวะลำดับถัดไปคือ AV node (อัตรา ~40–60 bpm)',
    'QRS แคบยืนยันว่าสัญญาณยังวิ่งลงผ่านระบบ His–Purkinje ปกติ (กำเนิดเหนือ ventricle)'
  ],
  E13: [
    'เฉลย AC75–79 คือ B (Pulse deficit): AF เต้นเร็วไม่สม่ำเสมอ บาง beat เติมเลือดไม่พอ → คลำชีพจรที่ข้อมือได้น้อยกว่าที่ฟังได้ที่ apex',
    'บนกราฟ EKG ของ AF: ไม่มี P, RR ไม่สม่ำเสมอ, QRS แคบ (ข้อ D) → ถ้าโจทย์ถามเฉพาะกราฟจริง ๆ ข้อ D ก็มีเหตุผล'
  ],
  E14: [
    'เฉลย AC80 คือ C (Right axis deviation): Lead I เป็นลบ (S ลึก) และ aVF เป็นบวก → RAD ชัดเจน',
    'HR ~75–80 bpm (ปกติ) · ST ราบ · PR 3–5 ช่องเล็ก · P บวกใน II และลบใน aVR (sinus rhythm)'
  ],
  E15: [
    'Lead I, II, III, aVF เป็นบวกหมด → Normal axis (ตารางเขียน Left axis deviation = ผิด) และ QRS แคบ < 3 ช่องเล็ก (ตารางเขียน Wide = ผิด)',
    'Rate 75 bpm (RR 4 ช่องใหญ่), Normal sinus rhythm, PR 160 ms, ST isoelectric ล้วนถูกต้อง'
  ],
  E16: [
    'เช็กมาตรฐาน (25 mm/s, 10 mm/mV) → Rate (60–100) → Rhythm (sinus 5 เกณฑ์) → Axis (−30° ถึง +90°) → Intervals (PR 120–200, QRS ≤110, QTc 330–440) → Segments/Waves (ST ±1 mm, Q <40 ms, T concordant)'
  ]
};
