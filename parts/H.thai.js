/* ---------- H · Histology ---------- */
window.THAI_SEC.H = {
  big: "จำผนังหลอดเลือด <b>3 ชั้น (intima, media, adventitia)</b> แล้วดูว่าชั้นไหน<b>เด่น</b>: artery → media หนา · vein → adventitia หนา · capillary → มีแค่ endothelium + BM + pericyte · lymphatic capillary → ไม่มีอะไรเลยนอกจาก endothelium",
  traps: [
    "<b>Epicardium</b> ผิวนอกเป็น <b>mesothelium</b> (สร้าง pericardial fluid) · ข้างในหัวใจทั้งหมด (endocardium, papillary, chordae, valves) บุด้วย <b>endothelium</b>",
    "<b>Purkinje fibers</b> อยู่ใน <b>subendocardial layer</b> ไม่ใช่ endocardium หรือ myocardium",
    "<b>Elastic artery</b>: aorta, brachiocephalic, <b>subclavian</b>, common carotid, common iliac, pulmonary · <b>muscular</b>: femoral, axillary, radial, popliteal",
    "<b>Pericyte</b> พบที่ capillary + <b>postcapillary venule</b> · arteriole มี smooth muscle · lymphatic capillary ไม่มี pericyte",
    "<b>Large vein</b> (IVC) = adventitia หนาสุด + longitudinal SMC · <b>dural sinus/coronary sinus</b> ไม่มี SMC เลย"
  ]
};

Object.assign(window.THAI_CONCEPT, {
  "H-C1": [
    "ผนังหัวใจ 3 ชั้น: <b>endocardium</b> (endothelium + ชั้นใต้ที่มีใยนำไฟฟ้า) → <b>myocardium</b> (เซลล์บีบตัว, เซลล์สร้าง ANP, nodal) → <b>epicardium</b> (เซลล์แบนบุผิว + ไขมัน + coronary vessels)",
    "<b>Cardiac skeleton</b> = dense CT → เป็นฐานยึดลิ้นหัวใจ และแยก atria ออกจาก ventricles · ลิ้นและ chordae เป็น dense fibrous CT ส่วน papillary m. เป็นกล้ามเนื้อหัวใจ"
  ],
  "H-C2": [
    "<b>Elastic artery</b> (aorta, pulmonary) → media มีแผ่น elastin ซ้อนกันหลายชั้น (VVG ติดดำ) → ยืดรับแรงดันแล้วดีดกลับ",
    "<b>Muscular artery</b> (femoral, axillary) → คุมการกระจายเลือดไปแต่ละอวัยวะ · ใน media ไม่มี fibroblast · adventitia มี vasa vasorum + nervi vasorum"
  ],
  "H-C3": [
    "<b>Arteriole</b>: SMC วงกลม 1–2 ชั้น ไม่มี EEL ไม่มี vasa vasorum → ความดันตกมากที่สุด → ยาขยายหลอดเลือดลดความดันออกฤทธิ์ที่นี่เป็นหลัก",
    "ทางลัดจาก arteriole ไป venule ที่ปลายนิ้ว จมูก ริมฝีปาก → เลี่ยง capillary ผิว → ใช้คุมอุณหภูมิ",
    "<b>Portal system</b> = capillary bed 2 ชุดต่อกัน: แบบ venous เช่นที่ตับ · แบบ arterial ที่ไต"
  ],
  "H-C4": [
    "3 ชนิด: <b>continuous</b> (tight junction, vesicles มาก) · <b>fenestrated</b> (มีรู ± diaphragm) · <b>sinusoidal</b> (ช่องกว้าง) → ดูผนังแล้วเดาอวัยวะ",
    "มีเซลล์หุ้มรอบ capillary ที่ใช้ BM ร่วมกับ endothelium → ช่วยพยุงและคุม flow"
  ],
  "H-C5": [
    "หลักแยกในสไลด์: artery → media หนา · vein → adventitia หนา",
    "Venule → vein ขนาดกลาง → vein ใหญ่ (venae cavae): media บาง adventitia หนากว่า · coronary sinus ไม่มี SMC เลย"
  ],
  "H-C6": [
    "Lymphatic capillary ผนังบางรั่ว ไม่มี BM, SMC, pericyte → น้ำและโปรตีนเข้าได้ง่าย",
    "ดูในสไลด์: ขอบไม่เรียบ ผนังบางมาก น้ำเหลืองสีชมพูจาง · collecting vessel → ท่อใหญ่ → มุมรวม left IJV กับ subclavian v."
  ]
});

Object.assign(window.THAI_Q, {
  "H1": ["Cardiac skeleton = <b>dense CT (collagen + elastic)</b>", "Modified cardiac muscle = conduction system ไม่ใช่ skeleton"],
  "H2": ["Simple squamous ที่ผิวนอก epicardium = <b>mesothelium</b> → สร้าง <b>pericardial fluid</b> ลดแรงเสียดทาน", "บุหลอดเลือด = endothelium · เริ่มจังหวะ = SA node · นำไฟฟ้า = Purkinje"],
  "H3": ["ข้างในหัวใจบุด้วย endothelium ทั้งหมด · <b>epicardium</b> บุด้วย mesothelium", "Mesocardium เป็นโครงสร้างตัวอ่อน (ช้อยส์หลอก)"],
  "H4": ["<b>Chordae tendineae</b> = เส้นเอ็น collagen + elastic fiber · papillary muscle = cardiac muscle"],
  "H5": ["เซลล์ใหญ่ สีซีด myofibril น้อย ใต้ endocardium = <b>Purkinje fiber</b>"],
  "H6": ["Purkinje อยู่ใน <b>subendocardial layer</b> (ระหว่าง subendothelial CT กับ myocardium)"],
  "H7": ["* = ฝั่งโพรงหัวใจ → A อยู่ผิวนอก เป็น simple squamous = <b>mesothelium</b> · endothelium อยู่ฝั่ง *"],
  "H8": ["Mesothelium + CT/ไขมัน/coronary vessels ใต้ลงไป = <b>epicardium</b> · fibrous pericardium เป็นถุงแยก ไม่ติดหัวใจ"],
  "H9": ["VVG ย้อม elastic เป็นสีดำ → media หนาเต็มไปด้วย fenestrated elastic lamellae = <b>elastic artery (aorta)</b>", "Brachial = muscular artery · SVC = large vein (adventitia หนาสุด)"],
  "H10": ["ใน media ของ artery <b>smooth muscle cell</b> เป็นคนสร้าง collagen/elastic/reticular fiber"],
  "H11": ["Media เป็นแผ่น elastic หลายชั้นวางขนานกัน = <b>elastic artery</b>"],
  "H12": ["Elastic artery: aorta, brachiocephalic, <b>subclavian</b>, CCA, common iliac, pulmonary", "Femoral, axillary, radial = muscular artery"],
  "H13": ["<b>Arteriole</b> = resistance vessel (รัศมีเล็ก R ∝ 1/r⁴ + มี SMC คุมด้วย ANS/ยา)"],
  "H14": ["<b>AV shunt</b> ที่ผิวหนัง (นิ้ว จมูก ริมฝีปาก) เลือดลัดจาก artery → vein ไม่ผ่าน capillary ผิว → ควบคุมการเสียความร้อน"],
  "H15": ["Venous portal system มีที่ <b>ตับ</b> และ <b>anterior pituitary</b> · ไตเป็น arterial portal system"],
  "H16": ["A arteriole · B lymphatic · <b>C nerve</b> (มัด axon ไม่มี lumen ไม่มี endothelium) · D venule"],
  "H17": ["ผนังหนาเทียบกับรูเล็ก กลม มี SMC 1–2 ชั้น = <b>arteriole (A)</b>"],
  "H18": ["<b>Pericyte</b> อยู่ที่ capillary และ <b>postcapillary venule</b> ใช้ BM ร่วมกับ endothelium", "Arteriole มี SMC แทน · lymphatic capillary ไม่มี pericyte"],
  "H19": ["Capillary แทรกระหว่าง muscle fiber กว้างพอให้ RBC ผ่านทีละเซลล์ = <b>continuous</b>"],
  "H20": ["ผนัง capillary = endothelium + BM + pericyte · <b>ไม่มี smooth muscle</b>"],
  "H21": ["ถูก: sinusoidal มีช่องกว้าง BM ไม่ต่อเนื่อง (liver, spleen, bone marrow)", "Fenestrated มีรู แต่ BM ต่อเนื่อง"],
  "H22": ["Adventitia หนา + longitudinal SMC = <b>large vein (IVC)</b> · coronary sinus ไม่มี SMC"],
  "H23": ["Venous valve = รอยพับของ intima แกนเป็น CT บุด้วย <b>endothelium</b> ทั้ง 2 ด้าน"],
  "H24": ["<b>Dural venous sinus</b> และ coronary sinus เป็น atypical vein ไม่มี SMC"],
  "H25": ["Vein ขนาดกลางที่ขา (<b>great saphenous</b>) มี valve มากที่สุด · capillary/lymphatic capillary/dural sinus ไม่มี valve"],
  "H26": ["ผนัง large vein: A intima · B media บาง · <b>C adventitia</b> หนาสุด"],
  "H27": ["<b>Circular SMC</b> อยู่ใน media · adventitia มี longitudinal SMC, vasa vasorum, nervi vasorum"],
  "H28": ["Lymphatic capillary = <b>blind-ended tube</b> ไม่มี BM, SMC, valve, tight junction น้อย"],
  "H29": ["ไม่มี pericyte + ไม่มี BM + รูไม่สม่ำเสมอ = <b>lymphatic capillary</b>", "Blood capillary ทุกแบบมี pericyte"],
  "H30": ["ผนังบางมากเทียบกับรูกว้าง มีน้ำเหลืองชมพูจาง ไม่มี RBC = <b>lymphatic vessel</b>"],
  "H31": ["B = valve → รอยพับ intima บุด้วย <b>endothelium</b>", "Mesothelium บุช่อง serous เท่านั้น"]
});
