/* Tutor-only Thai notes beyond the slides + plain-text ASCII diagrams (English only to preserve monospace alignment). */
window.TUTOR_NOTES = {
  'C-C1': {
    b: [
      'เน้นให้น้องแยก “ประจุข้างในเซลล์” กับ “ประจุข้างนอกเซลล์”: ตอน depolarize ข้างในเป็น + แต่ข้างนอกเสียบวกเลยกลายเป็น − ซึ่งผิวหนังเห็นแต่ข้างนอก',
      'อุปมาเหมือน “คนถือกล้อง (+)” ถ้าไฟ depolarize วิ่งเข้าหากล้อง = ภาพสว่างขึ้น (+ deflection) ถ้าวิ่งหนี = มืดลง (− deflection)',
      'ย้ำว่า ECG วัดเฉพาะตอน “กำลังเปลี่ยน” (มีขอบ dipole) — ตอนพักหมดหรือตื่นหมดไม่มีความต่างศักย์ เส้นจึงราบ (isoelectric)'
    ],
    d: [
      '  Depol wave  --->   (+) electrode',
      '  [ - - - | + + + ]  outside charges',
      '  depol     resting  => (+) sees positive => UPWARD wave',
      '',
      '  Repol wave  --->   (+) electrode',
      '  [ + + + | - - - ]  outside charges',
      '  repol     depol    => (+) sees negative => DOWNWARD wave'
    ]
  },
  'C-C2': {
    b: [
      'อธิบายเรื่องมวลกล้ามเนื้อ: ผนัง atrium บางแค่ ~2 mm ส่วน LV หนา ~10–12 mm ดังนั้นแรงไฟฟ้า (dipole moment) ของ QRS จึงกลบ atrial repolarization (Ta wave) มิด',
      'เล่าเสริม: ใน acute pericarditis อาจเห็น PR depression ซึ่งสะท้อนการบาดเจ็บของผนัง atrium (atrial current of injury) ช่วงที่ atrium กำลัง repolarize'
    ],
    d: [
      '  SA/AV nodes  -> too small (no wave; AV delay = PR segment)',
      '  Atria depol  -> P wave       | Atria repol -> hidden in QRS',
      '  Vent depol   -> QRS (Na+ in) | Vent repol  -> T wave (K+ out)'
    ]
  },
  'C-C3': {
    b: [
      'ทำไม endocardium มี AP ยาวกว่า? เพราะชั้น epicardium มี I_to (transient outward K⁺ current) เด่นกว่า ทำให้ phase 1 notch ชัดและ repolarize เร็วกว่า',
      'ในภาวะขาดเลือด (subendocardial ischemia) การ repolarize อาจกลับทิศ ทำให้เห็น T wave inversion (discordant T) ในคลินิก'
    ],
    d: [
      '  Depol:  Endo ---------> Epi   (+ toward epicardial lead)',
      '  AP dur: Endo = LONGER,  Epi = SHORTER (recovers first)',
      '  Repol:  Endo <--------- Epi   (reverse dir x reverse sign = +)'
    ]
  },
  'C-C4': {
    b: [
      'เชื่อมโยงกับกลไก arrhythmia: ถ้ามีกระตุ้นแทรกช่วง relative refractory (ขาลงของ T wave, “R-on-T phenomenon”) อาจกระตุ้นเกิด VT/VF ได้',
      'ยาหรือเกลือแร่ที่ยืด phase 2 เช่น hypocalcemia จะยืด ST segment และ QT interval'
    ],
    d: [
      '  Ventricular AP:  0 (up)   2 (plateau)   3 (down)   4 (rest)',
      '  ECG tracing:     QRS  ->  ST segment ->  T wave -> TP seg',
      '  Refractory:     [====== ARP ======][=== RRP ===]'
    ]
  },
  'W-C1': {
    b: [
      'ให้น้องจำคำศัพท์ภาษาอังกฤษ: Segment = เส้นตรง (ไม่มีคลื่นปน) · Interval = รวมคลื่นอย่างน้อย 1 คลื่นเสมอ',
      'PR segment และ TP segment ต่างเป็นเส้นราบ แต่เวลาวัด ST elevation ทางคลินิกยึด TP segment (หรือ PR ถ้า HR เร็วมากจน TP หาย)'
    ],
    d: [
      '  |-- PR interval --|',
      '  [ P ]__PR seg__[ QRS ]__ST seg__[ T ]___TP seg___',
      '                 |------- QT interval ------|'
    ]
  },
  'W-C2': {
    b: [
      'Pre-excitation เช่น WPW syndrome มีทางลัด accessory pathway (Bundle of Kent) ข้าม AV node → PR < 120 ms และมี delta wave',
      'สูตร Bazett (QTc = QT / √RR โดยหน่วยเป็นวินาที) ใช้ได้แม่นสุดที่ HR 60–100 bpm · ย้ำว่าหน่วย RR ในรูทต้องเป็น “วินาที” ไม่ใช่มิลลิวินาที'
    ],
    d: [
      '  PR  < 120 ms : pre-excitation (bypasses AV node)',
      '  PR 120-200ms : normal (3 - 5 small boxes)',
      '  PR  > 200 ms : 1st-degree AV block (AV delay)'
    ]
  },
  'W-C3': {
    b: [
      'ให้น้องฝึกคิดเลขในใจเร็ว: RR 1000 ms = 60 bpm · 800 ms = 75 bpm · 600 ms = 100 bpm · 500 ms = 120 bpm (ออกซ้ำเกือบทุกปี!)',
      'Q เล็กๆ (< 40 ms) ใน I, aVL, V5–V6 คือ septal q wave ปกติ (เกิดจาก septum depolarize ซ้าย→ขวา) ไม่ใช่ MI'
    ],
    d: [
      '  RR (ms):  1000    800     600     500',
      '  HR (bpm):   60     75     100     120 (tachy!)'
    ]
  },
  'W-C4': {
    b: [
      'เชื่อมกับ Wiggers diagram: คลื่นไฟฟ้าจะนำหน้าเหตุการณ์กลไก ~20–50 ms เสมอ (excitation-contraction coupling)',
      'เน้นข้อ W15: 80% ของเลือดเติมเข้า ventricle เกิดช่วง rapid passive filling (ต้น TP หลัง T wave) ส่วน P wave (atrial kick) เติมแค่ ~20% สุดท้าย'
    ],
    d: [
      '  P -> Atrial kick | QRS -> S1, IVC -> AV opens',
      '  ST-T -> Ejection | end T -> S2, IVR -> MV opens -> Rapid fill (TP)'
    ]
  },
  'W-C5': {
    b: [
      'Atropine บล็อก M₂ receptor ที่ SA node และ AV node เหมือน “ยกเท้าออกจากเบรก” → HR ขึ้นเร็วเหมือนเปิด sympathetic',
      'ทำไม QRS ไม่แคบลงเมื่อ sympathetic เพิ่ม? เพราะ Purkinje fibers แทบไม่มี vagal innervation และนำไฟฟ้าเร็วมากอยู่แล้ว (~2–4 m/s)'
    ],
    d: [
      '  Symp / Atropine -> SA faster (RR down) + AV faster (PR down) + QT down',
      '                     QRS width = UNCHANGED | ST = UNCHANGED'
    ]
  },
  'L-C1': {
    b: [
      'กฎช่วยจำ Einthoven: ลองวาดลูกศรจากขวาไปซ้าย (I) และจากบนลงล่าง (II, III) จะเห็นว่าหัวลูกศร (+) ชี้ไปที่ซ้ายและล่างเสมอ (LA หรือ LL)',
      'Lead II มักใช้เป็น rhythm strip เพราะมุม +60° ขนานกับแกนไฟฟ้าปกติของหัวใจ จึงเห็น P wave ชัดที่สุด'
    ],
    d: [
      '       RA (-) ---- Lead I (0 deg) ----> LA (+)',
      '          \\                            /',
      '    Lead II (+60)                Lead III (+120)',
      '            \\                        /',
      '             +------> LL (+) <------+'
    ]
  },
  'L-C2': {
    b: [
      'สังเกตชื่อตัวอักษร: R = Right arm (−150°), L = Left arm (−30°), F = Foot (+90°) — เหมือนเข็มนาฬิกาชี้ไปที่รยางค์นั้นๆ',
      'จำคู่ตั้งฉากแบบจังหวะ: “I คู่ F · II คู่ L · III คู่ R” (1-F, 2-L, 3-R) แป๊บเดียวจำติดหัวตลอดชีวิต'
    ],
    d: [
      '  Perpendicular pairs (90 deg apart):',
      '    Lead I   (  0 deg)  _|_  aVF (+90 deg)',
      '    Lead II  (+60 deg)  _|_  aVL (-30 deg)',
      '    Lead III (+120 deg) _|_  aVR (-150 deg)'
    ]
  },
  'L-C3': {
    b: [
      'อธิบายสูตร augmented lead สั้นๆ: aVF = LL − (RA+LA)/2 → สลับ RA กับ LA ค่าเฉลี่ยยังเท่าเดิม aVF จึงเหมือนเดิมเป๊ะ!',
      'ในคลินิกถ้าเห็น Lead I กลับหัวทั้ง P, QRS, T พร้อมกัน (global negativity in I) และ V1–V6 ปกติ → นึกถึง RA↔LA reversal ก่อน dextrocardia'
    ],
    d: [
      '  Swap RA <-> LA : aVF unchanged | I -> -I, II <-> III, aVR <-> aVL',
      '  Swap RA <-> LL : aVL unchanged | II -> -II, aVR <-> aVF',
      '  Swap LA <-> LL : aVR unchanged | III -> -III, I <-> II, aVL <-> aVF',
      '  Swap LL <-> RL : NO change (RL is ground)'
    ]
  },
  'R-C1': {
    b: [
      'ที่มาของเลข 1500: 25 mm/s × 60 s/min = 1500 mm/min และ 1 ช่องเล็ก = 1 mm พอดี',
      'เวลาดูกราฟจริงให้หา R wave ที่ตกลงบนเส้นหนาก่อน จะนับช่องใหญ่ 300-150-100-75-60-50 ได้ทันทีใน 2 วินาที'
    ],
    d: [
      '  Big boxes:  1     2     3     4     5     6',
      '  HR (bpm):  300   150   100    75    60    50'
    ]
  },
  'R-C2': {
    b: [
      'ทริกจาก PS82: ท่องสูตรเดียว HR = (60 × speed) ÷ RR_small_boxes — แทนค่าได้ทุกความเร็ว (12.5, 15, 25, 30, 50) ไม่ต้องกลัวคูณสลับหาร',
      'อ่านความเร็วกระดาษจาก stem (และ footer) ทุกครั้งก่อนคำนวณ — ข้อสอบ AC และ TBL ใช้ 12.5, 15, 30, 50 mm/s เป็นกับดัก · ถ้า stem กับ footer ไม่ตรงกัน ให้ใช้ค่าใน stem'
    ],
    d: [
      '  HR = (60 * speed_mm_per_s) / RR_small_boxes',
      '    12.5 mm/s ->  750 / boxes    |  30 mm/s -> 1800 / boxes',
      '    25.0 mm/s -> 1500 / boxes    |  50 mm/s -> 3000 / boxes'
    ]
  },
  'R-C3': {
    b: [
      'ใน 12-lead มาตรฐาน แถบยาวด้านล่าง (มักเป็น Lead II) บันทึกยาว 10 วินาทีพอดี (= 50 ช่องใหญ่ ที่ 25 mm/s)',
      'ถ้าน้องเจอแถบสั้นกว่า 10 วิ (เช่น 6 วินาที = 30 ช่องใหญ่) ก็คูณ 10 แทน — เช็กจำนวนช่องใหญ่เสมอถ้าไม่ใช่ 12-lead เต็มแผ่น'
    ],
    d: [
      '  10-sec strip (250 mm = 50 big boxes at 25 mm/s):',
      '  Ventricular rate = (number of QRS complexes) x 6'
    ]
  },
  'A-C1': {
    b: [
      'เหตุผลทางกายวิภาค: LV หนากว่า RV มาก เวกเตอร์รวมจึงชี้ลงล่างและไปทางซ้าย (+30° ถึง +60°)',
      'สาเหตุทางคลินิกสั้นๆ: LVH / LBBB → เอียงซ้าย (LAD) · RVH / pulmonary hypertension (เช่นเคส t-RAT Q10) → เอียงขวา (RAD)'
    ],
    d: [
      '             -90 deg',
      '     Extreme    |    LAD (-30..-90)',
      '     (I-,aVF-)  |    (I+,aVF-,II-)',
      '  180 ----------+---------- 0 deg (Lead I)',
      '     RAD        |    Normal (-30..+90)',
      '     (I-,aVF+)  |    (I+,aVF+ or II+)',
      '             +90 deg (aVF)'
    ]
  },
  'A-C2': {
    b: [
      'เชื่อมโยงกับฟิสิกส์ ม.ปลาย: ขนาดคลื่น = |V| cos θ → θ = 0° (cos = +1), θ = 90° (cos = 0, biphasic), θ = 180° (cos = −1)',
      'ย้ำข้อ A11 (AC81 Q3): ใช้เวกเตอร์ cos θ อธิบายว่ามุม −60° ห่าง Lead III 180° (|cos|=1.0) และห่าง aVL 30° (cos=+0.866) จึงเข้าใจได้ทั้ง 2 คำตอบ'
    ],
    d: [
      '  Projection = |QRS| * cos(theta)',
      '  theta:  0 deg (+max) | <90 (+) | 90 (biphasic) | >90 (-) | 180 (-max)'
    ]
  },
  'A-C3': {
    b: [
      'วิธีลัด biphasic เร็วมากในห้องสอบ แต่ต้องเตือนน้องเสมอว่า “ห้ามดู V1–V6” เพราะ V leads อยู่ในแนวขวาง (horizontal plane) ไม่ใช่ frontal plane',
      'ถ้าไม่มี lead ไหน biphasic เป๊ะๆ ให้เลือก lead ที่ขนาดเล็กที่สุด/ใกล้เคียง 0 ที่สุด แล้วปรับเอียงเล็กน้อยตามทิศบวกหรือลบของมัน'
    ],
    d: [
      '  Step 1: Find most biphasic limb lead (I, II, III, aVR, aVL, aVF)',
      '  Step 2: Axis = +/- 90 deg from that lead (two choices)',
      '  Step 3: Check perpendicular partner lead (+ -> toward it, - -> opposite)'
    ]
  },
  'A-C4': {
    b: [
      'ข้อสอบสไตล์ TBL ยุคใหม่ชอบผูก 2–3 ทักษะไว้ในกราฟเดียว (เช่น speed แปลก + axis + QRS width) — สอนให้น้องเช็กตัวที่ตัดช้อยส์ได้ครึ่งหนึ่งก่อน',
      'ปกติการเช็ก Axis (I, aVF, II) ใช้เวลาไม่ถึง 5 วินาที มักตัดช้อยส์ได้ทันที 2 ข้อ ก่อนค่อยลงมือวัดช่องนับ HR'
    ],
    d: [
      '  Fast triage on combined ECG items:',
      '  [1] Paper speed & HR  ->  [2] Axis (I, aVF, II)  ->  [3] QRS < 3 boxes?'
    ]
  },
  'E-C1': {
    b: [
      'เทคนิคหา 4th ICS บนคนไข้จริง: คลำ Sternal angle (Angle of Louis) = ซี่โครงที่ 2 → ร่องใต้ซี่โครง 2 คือ 2nd ICS → นับลง 3rd, 4th ICS',
      'จำความก้าวหน้าของคลื่นปกติ (R-wave progression): V1 เป็น rS (ลบเป็นหลัก) → ค่อยๆ เปลี่ยนเป็น biphasic แถว V3–V4 → V5–V6 เป็น qR (บวกสูง)'
    ],
    d: [
      '  4th ICS:  V1 (R sternal)   V2 (L sternal)',
      '  Between:  V3 (midway V2-V4)',
      '  5th ICS:  V4 (MCL) -> V5 (AAL) -> V6 (MAL)'
    ]
  },
  'E-C2': {
    b: [
      'ให้น้องเช็กเกณฑ์ 5 ข้อแบบ checklist — ในข้อสอบ MDCU ช้อยส์หลอกที่ออกบ่อยสุดคือ “positive P in all leads” และ “monomorphic P in all leads”',
      'ถ้า HR > 100 แต่ครบเกณฑ์ SA origin เรียก sinus tachycardia · ถ้า HR < 60 เรียก sinus bradycardia'
    ],
    d: [
      '  Sinus checklist:',
      '  [x] 60-100 bpm  [x] SA origin  [x] 1:1 P->QRS',
      '  [x] Monomorphic within same lead  [x] +P in II, -P in aVR'
    ]
  },
  'E-C3': {
    b: [
      'ลำดับ pacemaker สำรองของหัวใจ (Overdrive suppression): SA node (60–100) > AV node/junction (40–60, narrow QRS) > Purkinje/ventricle (20–40, wide QRS)',
      'แยก 2° vs 3° AV block ง่ายๆ: ใน 3° AVB ระยะ P–P สม่ำเสมอ, R–R สม่ำเสมอ, แต่ PR เปลี่ยนมั่วไปเรื่อย (P เดินทะลุ QRS)'
    ],
    d: [
      '  Pacemaker hierarchy:',
      '    SA node (60-100) -> AV junction (40-60, narrow) -> Purkinje (20-40, wide)'
    ]
  },
  'E-C4': {
    b: [
      'วิธีสอนข้อ E14 (AC80) และ E15 (t-RAT Q14): ให้น้องไล่ทีละช้อยส์จากง่ายไปยากตามทริก PS82 — จะเห็นคำตอบชัดโดยไม่เสียเวลาวัดทุกอย่าง',
      'ฝึกให้น้องอ่านกราฟ 12-lead ที่ไม่คุ้นตาอย่างน้อย 2–3 แผ่นตอนท้ายคลิป จะช่วยให้ทำข้อสอบจริงได้มั่นใจขึ้นมาก'
    ],
    d: [
      '  Systematic 12-lead order:',
      '  Standardization -> Rate -> Rhythm -> Axis -> Intervals (PR/QRS/QT) -> ST/T'
    ]
  }
};
