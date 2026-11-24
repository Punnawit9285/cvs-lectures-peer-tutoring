/* ---------- D · Circulatory dynamics I ---------- */
window.THAI_SEC.D = {
  big: "ทุกข้อในบทนี้ใช้ 3 สูตร: <b>Q = ΔP/R</b>, <b>R = 8ηL/πr⁴</b> (รัศมียกกำลัง 4) และ <b>velocity = flow/พื้นที่หน้าตัดรวม</b> บวกกับ<b>Reynolds number</b> และ<b>compliance ของ vein</b>",
  traps: [
    "<b>Arteriole</b> = resistance สูงสุด · <b>capillary</b> = พื้นที่หน้าตัดรวมมากสุด ความเร็วต่ำสุด · <b>vein</b> = compliance สูงสุด เก็บเลือดมากสุด",
    "รัศมีลดครึ่ง → resistance เพิ่ม <b>16 เท่า</b> (ไม่ใช่ 8)",
    "Turbulence เพิ่มเมื่อ velocity/รัศมี/density สูง หรือ <b>viscosity ต่ำ (Hct ต่ำ)</b>",
    "Vein <b>distensible 8 เท่า</b> แต่ <b>compliant 24 เท่า</b> ของ artery",
    "ความดันเฉลี่ยต่ำสุดอยู่ที่ <b>large vein</b> ใกล้หัวใจ"
  ]
};

Object.assign(window.THAI_CONCEPT, {
  "D-C1": [
    "เลือดส่วนใหญ่อยู่ใน <b>vein (~65%)</b> · arteriole = จุดที่ความดันตกมากสุด (resistance) · capillary = แลกเปลี่ยน",
    "ความดันลดลงเรื่อย ๆ จาก aorta → ต่ำสุดที่ large vein ใกล้ RA"
  ],
  "D-C2": [
    "Q = ΔP ÷ R และ R = 8ηL ÷ πr⁴ → ตัวแปรที่ยกกำลัง 4 มีผลต่อ resistance มากที่สุด",
    "Hematocrit และความยาวหลอดเลือดเพิ่ม R ได้ แต่น้อยกว่าการเปลี่ยนขนาดหลอดเลือด · หลอดเลือดที่ต่อแบบอนุกรม → R รวมกัน"
  ],
  "D-C3": [
    "Flow = ความเร็ว × พื้นที่หน้าตัดรวม → flow เท่ากันทุกช่วง แต่พื้นที่รวมต่างกัน → ส่วนที่พื้นที่รวมมากที่สุดมีเวลาแลกเปลี่ยนสาร",
    "Reynolds number สูง (ความเร็วสูง รัศมีใหญ่ ความหนาแน่นสูง เลือดจาง) → turbulent flow → ได้ยินเสียงผิดปกติ ส่วน laminar flow เงียบ"
  ],
  "D-C4": [
    "Compliance = ΔV ÷ ΔP → vein ยืดได้มากกว่าและจุมากกว่า artery หลายเท่า → เก็บเลือดปริมาณมากที่ความดันต่ำ",
    "Sympathetic ทำให้ vein หด → ดันเลือดที่เก็บไว้กลับเข้าหัวใจ"
  ]
});

Object.assign(window.THAI_Q, {
  "D1": ["<b>Arteriole</b> รัศมีเล็ก + มี SMC → ความดันตกมากสุด = resistance สูงสุด"],
  "D2": ["ความดันลดตลอดทาง → ต่ำสุดที่ <b>large vein</b> ใกล้หัวใจ (≈ 0 mmHg)"],
  "D3": ["R ∝ 1/r⁴ → รัศมีลดครึ่ง → R เพิ่ม 2⁴ = <b>16 เท่า</b>"],
  "D4": ["<b>Vascular diameter</b> มีผลยกกำลัง 4 · viscosity และความยาวมีผลแค่เชิงเส้น"],
  "D5": ["R = ΔP/Q = (120 − 5)/240 ≈ 0.48 → ใกล้สุด <b>0.50</b> · HR เป็นตัวหลอก"],
  "D6": ["Flow เท่ากันทุกช่วง → velocity = flow/พื้นที่ → capillary มี<b>พื้นที่หน้าตัดรวมมากสุด</b> → ช้าสุด"],
  "D7": ["N<sub>R</sub> = 2rρv/η → <b>Hct ต่ำ</b> → viscosity ต่ำ → N<sub>R</sub> สูง → turbulent", "velocity/density ต่ำลดโอกาส · อุดตันสนิทไม่มี flow"],
  "D8": ["<b>Velocity สูง</b> → N<sub>R</sub> สูง → turbulent · viscosity สูงกลับทำให้ laminar"],
  "D9": ["<b>Diameter ใหญ่</b> → r ใน N<sub>R</sub> เพิ่ม → turbulent ง่าย"],
  "D10": ["<b>Vein</b> compliance สูงสุด (24 เท่าของ artery)"],
  "D11": ["<b>High compliance</b> → รับ volume มากได้โดยความดันขึ้นน้อย → เก็บเลือด ~65%"]
});
