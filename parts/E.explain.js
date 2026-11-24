/* ---------- E · Physical & electrical properties ---------- */
Object.assign(window.THAI_EXPLAIN, {
  "E-C1": [
    "<b>Phase 4</b>: I<sub>K1</sub> เปิด K⁺ ออก → RMP −90 mV ใกล้ E<sub>K</sub>",
    "<b>Phase 0</b>: เซลล์ข้างเคียงดันถึง threshold −70 → fast Na⁺ เปิด → Na⁺ พุ่งเข้า → upstroke ชัน",
    "<b>Phase 1–2</b>: I<sub>to</sub> K⁺ ออกสั้น ๆ (notch) → L-type Ca²⁺ เข้า เท่ากับ K⁺ ออก → plateau ยาวหลายร้อย ms",
    "<b>Phase 3</b>: Ca²⁺ channel ปิดตามเวลา + K⁺ channels เปิดเต็ม → K⁺ ออก → กลับ −90 · pump 3Na⁺/2K⁺ คืนสมดุล"
  ],
  "E-C2": [
    "<b>Phase 4</b>: funny channel (HCN) ให้ Na⁺ ไหลเข้า → RMP ไต่ขึ้นเองจาก −55 = automaticity",
    "<b>Phase 0</b>: ถึง −40 → L-type Ca²⁺ เปิด → upstroke ช้า (fast Na⁺ inactivate อยู่)",
    "<b>Phase 3</b>: delayed rectifier K⁺ ออก → กลับ −55 → funny channel เปิดอีก",
    "<b>คุมจังหวะ</b>: SA 70–80 > AV 40–60 > Purkinje 20–40 → SA เร็วสุดจึงนำ · β1 ทำ phase 4 ชัน → HR ↑"
  ],
  "E-C3": [
    "<b>ความเร็ว</b> ขึ้นกับ slope ของ phase 0 → Purkinje 2–4 m/s เร็วสุด · AV node 0.01–0.05 ช้าสุด",
    "<b>AV delay</b> → atria บีบเสร็จก่อน → ventricle เติมเต็มก่อนบีบ",
    "<b>ARP</b> → Na⁺ h gate ยังปิด → กระตุ้นแรงแค่ไหนก็ไม่เกิด AP · <b>RRP</b> → ต้องกระตุ้นแรงกว่าปกติ",
    "<b>ARP ยาว</b> ครอบเกือบทั้งการบีบ → บีบซ้อนไม่ได้ → ไม่เกิด tetanus → หัวใจได้คลายตัวเติมเลือด"
  ],
  "E-C4": [
    "<b>RMP</b> ≈ E<sub>K</sub> → extracellular K⁺ ↑ → RMP less negative · K⁺ ↓ → hyperpolarized",
    "<b>HyperK</b>: ใกล้ threshold → excitability ↑ แต่ Na⁺ channel ฟื้นไม่หมด → phase 0 แบน → conduction ↓ → รุนแรงจนหยุดเต้น (depolarization block)",
    "<b>HypoK</b>: ห่าง threshold → excitability ↓ + K⁺ conductance ↓ → repolarization ช้า AP ยาว",
    "<b>Ca²⁺</b>: hypoCa → phase 2 ยาว (QT ยาว), บีบอ่อน, threshold ต่ำลง → ชักเกร็ง · hyperCa → กลับกัน"
  ],
  "E-C5": [
    "<b>EC coupling</b>: AP วิ่งตาม T-tubule → L-type Ca²⁺ เข้าเล็กน้อย → กระตุ้น RyR → SR ปล่อย Ca²⁺ มาก (CICR) → บีบ",
    "<b>คลายตัว</b>: SERCA2 ดึง Ca²⁺ กลับ SR + NCX ขับออกนอกเซลล์",
    "<b>Contractility ↑</b>: sympathetic/β1, catecholamine, HR เร็ว, thyroxine, digoxin → Ca²⁺ ในเซลล์ ↑",
    "<b>Contractility ↓</b>: vagus, β-blocker, CCB, hyperK, acidosis, hypoxia, ยาสลบ"
  ],
  "E-C6": [
    "<b>Preload</b>: ความยืดก่อนบีบ = EDV/EDP → ยืดมาก → บีบแรง (Frank–Starling) → SV ↑",
    "<b>วัด preload</b>: LVEDP ดีสุด → LAP → PCWP → CVP/RAP (ไกลขึ้นเรื่อย ๆ)",
    "<b>Afterload</b>: LV → aortic pressure/SVR · RV → PA pressure/PVR",
    "<b>สูตร</b>: SV = EDV − ESV · EF = SV/EDV · CO = SV × HR · CI = CO/BSA"
  ]
});
