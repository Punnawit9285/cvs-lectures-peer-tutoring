/* ---------- E · Physical & electrical properties ---------- */
Object.assign(window.TUTOR_NOTES, {
  "E-C1": { b: [
    "ยา class I antiarrhythmic (เช่น lidocaine) block fast Na⁺ → phase 0 ช้าลง · class III (amiodarone) block K⁺ → phase 3 ยาว · class IV (verapamil) block L-type Ca²⁺",
    "Long QT ทางพันธุกรรม (K⁺ channel ผิดปกติ) → repolarization ช้า → เสี่ยง torsades de pointes",
    "Plateau ทำให้ Ca²⁺ เข้าพอสำหรับ CICR และทำให้ ARP ยาว → ป้องกัน tetanus",
    "Na⁺/K⁺ pump แทบไม่ส่งผลต่อรูปร่าง AP แต่ละครั้ง แต่จำเป็นต่อการรักษา gradient ระยะยาว"
  ], d: [
    "  0 mV  -    ___________ phase 2 (Ca in = K out)",
    "        |  /1          \\",
    "        | /0            \\ phase 3 (K out)",
    "-90 mV -|/ phase 4 (IK1) \\__________"
  ] },
  "E-C2": { b: [
    "Ivabradine block funny channel (I<sub>f</sub>) → ลด HR โดยไม่ลดแรงบีบ ใช้ใน heart failure",
    "ACh (vagus) → เปิด K⁺ channel (I<sub>K-ACh</sub>) → hyperpolarize + ลด I<sub>f</sub> → phase 4 แบน → HR ↓",
    "ถ้า SA node เสีย → AV node รับหน้าที่ (junctional rhythm 40–60) · ถ้าทุกอย่างเหนือ ventricle เสีย → ventricular escape 20–40",
    "Overdrive suppression: pacemaker ที่ช้ากว่าถูกยิงก่อนถึง threshold ตลอด จึงไม่แสดงตัว"
  ] },
  "E-C3": { b: [
    "AV node ช้าเพราะ phase 0 ใช้ Ca²⁺ + เซลล์เล็ก gap junction น้อย → เป็น gatekeeper กัน AF ไม่ให้ ventricle เต้นเร็วเกิน",
    "Supranormal period ปลาย phase 3 → กระตุ้นเล็กน้อยก็เกิด AP ได้ → R-on-T phenomenon เสี่ยง VF",
    "ECG: PR interval ส่วนใหญ่สะท้อน AV delay · QRS แคบเพราะ Purkinje นำไฟเร็ว",
    "Bundle branch block → ไฟต้องวิ่งผ่าน ventricular muscle ช้า ๆ → QRS กว้าง"
  ] },
  "E-C4": { b: [
    "HyperK ใน ECG: T สูงแหลม → PR ยาว P หาย → QRS กว้าง → sine wave → VF/asystole",
    "รักษา hyperK ฉุกเฉิน: calcium gluconate (ปรับ threshold กันหัวใจ) → insulin + glucose / β2 agonist (ดัน K⁺ เข้าเซลล์) → ขับออก",
    "HypoK ใน ECG: T แบน มี U wave · เสริมพิษ digoxin (digoxin แย่งที่ K⁺ บน Na⁺/K⁺-ATPase)",
    "HypoCa: Chvostek, Trousseau sign + QT ยาว เพราะ threshold ของเส้นประสาทลดลง"
  ] },
  "E-C5": { b: [
    "Phospholamban: β1 → PKA phosphorylate phospholamban → SERCA ทำงานเร็ว → คลายเร็ว (lusitropy ↑) และ SR เก็บ Ca²⁺ มากขึ้น",
    "Treppe (Bowditch effect): HR เร็ว → Ca²⁺ สะสมในเซลล์ → แรงบีบเพิ่ม",
    "Digoxin therapeutic window แคบ: พิษ → arrhythmia, คลื่นไส้, เห็นสีเหลืองเขียว (xanthopsia)",
    "Cardiac muscle ต่างจาก skeletal: ต้องพึ่ง Ca²⁺ จากนอกเซลล์ด้วย → CCB ลดแรงบีบหัวใจได้"
  ] },
  "E-C6": { b: [
    "Frank–Starling ทำให้ RV และ LV ส่งเลือดเท่ากันในระยะยาว: ฝั่งไหนได้เลือดมากก็บีบแรงขึ้นเอง",
    "PCWP ใช้แทน LAP เพราะ catheter อุด pulmonary artery สาขาเล็ก ความดันปลายสายสะท้อน pulmonary vein/LA",
    "Afterload ↑ (เช่น hypertension, AS) → ESV ↑ SV ↓ ในระยะสั้น → ระยะยาว LV hypertrophy",
    "EF ปกติ ~55–70% · heart failure with reduced EF < 40%"
  ] }
});
