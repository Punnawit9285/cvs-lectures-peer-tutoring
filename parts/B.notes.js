/* ---------- B · Biochemistry of CVS (Tutor notes beyond the slide) ---------- */
Object.assign(window.TUTOR_NOTES, {
  "B-C1": {
    b: [
      "Connexin-43 ทำงานผิดปกติหรือลดลงในหัวใจขาดเลือด → นำไฟฟ้าช้าเป็นหย่อม → เสี่ยง re-entry arrhythmia",
      "Desmosome กลายพันธุ์ (เช่น plakophilin-2, desmoplakin) → arrhythmogenic right ventricular cardiomyopathy (ARVC) เซลล์หัวใจตายแล้วถูกแทนที่ด้วยไขมันและพังผืด",
      "Troponin I และ T ชนิดหัวใจ (cTnI, cTnT) จำเพาะต่อกล้ามเนื้อหัวใจสูงมาก จึงเป็น gold-standard biomarker วินิจฉัย acute MI (ต่างจาก TnC ที่หน้าตาเหมือนใน skeletal muscle)"
    ]
  },
  "B-C2": {
    b: [
      "จำความต่างหลักระหว่างกล้ามเนื้อ 2 ชนิด: skeletal ใช้ <b>mechanical coupling</b> (DHPR1 ดันเปิด RyR1 โดยตรง ไม่ต้องมี Ca²⁺ นอกเซลล์) · cardiac ใช้ <b>CICR</b> (Ca²⁺ นอกเซลล์ 10% จุดระเบิด RyR2 ปล่อยอีก 90%)",
      "Ryanodine receptor mutation (RYR2) ทำให้ Ca²⁺ รั่วตอนเครียด/ออกกำลัง → catecholaminergic polymorphic VT (CPVT)",
      "Dihydropyridine (amlodipine, nifedipine) เด่นที่หลอดเลือดส่วนปลาย (อาจเกิด reflex tachycardia) · Non-DHP (verapamil, diltiazem) ออกฤทธิ์เด่นที่ SA/AV node และกล้ามเนื้อหัวใจ"
    ],
    d: [
      "Systole (CICR):  AP (Phase 2) -> DHPR2 (+10% Ca2+) -> RyR2 (+90% SR Ca2+) -> TnC -> contraction",
      "Diastole:        SERCA (~80-90% -> SR)  +  NCX (~10-20%, 3 Na+ in : 1 Ca2+ out)  +  PMCA (minor)"
    ]
  },
  "B-C3": {
    b: [
      "ทำไม sympathetic ต้องเพิ่มทั้งแรง (+inotropy) และความเร็วคลายตัว (+lusitropy) พร้อมกัน? เพราะเมื่อ HR สูงขึ้น เวลา diastole สั้นลงมาก ถ้าคลายตัวไม่เร็วขึ้น เลือดจะเติมห้องหัวใจไม่ทัน",
      "Milrinone (PDE-3 inhibitor) ยับยั้งการสลาย cAMP → เลียนแบบปลายทางของ β₁–cAMP–PKA → เพิ่มทั้ง inotropy และ lusitropy (inodilator)",
      "หัวใจที่ปลูกถ่าย (denervated heart) ไม่มี vagal tone → resting HR สูง (~90–100 bpm) และไม่ตอบต่อ atropine แต่ยังมี β₁ receptor ตอบต่อ epinephrine/isoproterenol เต็มที่"
    ],
    d: [
      "Beta1-Gs -> AC -> cAMP -> PKA --+--> DHPR2 & RyR2  => +Inotropy",
      "                                +--> PLB (off SERCA) & TnI => +Lusitropy (+ SR load)"
    ]
  },
  "B-C4": {
    b: [
      "Digoxin therapeutic window แคบมาก · ภาวะ <b>hypokalemia</b> ทำให้พิษ digoxin แรงขึ้น เพราะ K⁺ แย่งจับตำแหน่งเดียวกับ digoxin บน Na⁺/K⁺-ATPase",
      "อาการพิษ digoxin คลาสสิก: คลื่นไส้ อาเจียน เห็นภาพสีเหลือง-เขียว (xanthopsia) และหัวใจเต้นผิดจังหวะ (เช่น atrial tachycardia with AV block, bidirectional VT) · ยาต้านพิษ = digoxin-specific Fab (Digibind)",
      "รำเพย (Yellow oleander / <i>Thevetia</i>), ยี่โถ (Oleander), ตีนเป็ดน้ำ (<i>Cerbera odollam</i> — suicide tree) และคางคกอ้อย (bufadienolide) ล้วนออกฤทธิ์ยับยั้ง Na⁺/K⁺-ATPase เหมือน digoxin"
    ],
    d: [
      "Digoxin --| Na+/K+-ATPase -> [Na+]i UP -> NCX slows -> [Ca2+]i & SR Ca2+ UP -> +Inotropy",
      "Central brainstem -> Vagal tone UP -> SA/AV slowing -> -Chronotropy (AF/flutter rate control)"
    ]
  },
  "B-C5": {
    b: [
      "ในทางคลินิก ยา trimetazidine และ ranolazine ช่วยยับยั้ง fatty acid β-oxidation เพื่อบังคับให้หัวใจขาดเลือดหันมาใช้ glucose แทน (เพราะ glucose ให้ ATP ต่อ O₂ 1 โมลสูงกว่า fatty acid ~10–12%)",
      "เมื่อเกิด myocardial infarction เอนไซม์ LD-1 (H₄) จะรั่วจากหัวใจเข้ากระแสเลือด ทำให้สัดส่วน LD-1 > LD-2 (flipped LDH pattern — ปกติในเลือด LD-2 > LD-1)",
      "ช่วยจำ Randle effect: ไขมันเผาจนได้ <b>Acetyl-CoA, NADH, ATP, Citrate</b> ล้น → ส่งสัญญาณบอกเซลล์ว่าพลังงานพอแล้ว เบรก glycolysis (PDH, PFK-1, PFK-2) เก็บ glucose ไว้ให้สมอง"
    ],
    d: [
      "High FA / Ketone oxidation -> Acetyl-CoA UP, NADH UP, ATP UP, Citrate UP",
      "   |-- inhibits PDH (Acetyl-CoA, NADH, ATP)",
      "   |-- inhibits PFK-1 (Citrate, ATP) & PFK-2 / Citrate synthase (Citrate)",
      "   +-> Glucose spared (Randle cycle)"
    ]
  },
  "B-C6": {
    b: [
      "ความเข้าใจผิดที่เจอบ่อยมาก: นักศึกษามักคิดว่าหัวใจมี CK-MB มากที่สุด แต่ความจริงหัวใจมี <b>CK-MM 70–85%</b> และ <b>CK-MB 15–30%</b> (LV สูงถึง 41%) — ที่ใช้ CK-MB ตรวจหัวใจเพราะกล้ามเนื้อลายมี CK-MB น้อยมาก (< 1–3%)",
      "CK-MB ใน acute MI ขึ้นภายใน 4–6 ชม., พีคที่ ~24 ชม., กลับปกติใน 48–72 ชม. → จึงมีประโยชน์ตรวจหา <b>re-infarction</b> (เพราะ troponin ค้างสูงได้นาน 7–14 วัน)",
      "Adenylate kinase (2 ADP → ATP + AMP) นอกจากกู้ ATP ฉุกเฉินแล้ว AMP ที่เกิดขึ้นยังเป็นสัญญาณพลังงานต่ำไปกระตุ้น AMPK, PFK-1 และ glycogen phosphorylase b โดยตรง"
    ]
  }
});
