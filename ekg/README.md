# CVS I · Dedicated EKG Deck · Peer support 82

Question-first peer-tutoring deck for **CVS I: Basic EKG, Leads, Rate, QRS Axis, Sinus Rhythm & 12-Lead Interpretation**, built from *Peer – Physiology Of The Heart* (tutor EKG notes, ECG TBL t-RAT 2569 / 2568, i-RAT 266-66) and the EKG items of **AC75–AC81** (with official AC75–79, AC80, and PS82/AC81 answer keys).

Lives in `ekg/` so it deploys cleanly alongside the main CVS lectures deck in `KAOPUNnawit/cvs-lectures-peer-tutoring` without interfering with root files.

## Open it

| | Link |
|---|---|
| **Student deck** (shown in the video) | https://kaopunnawit.github.io/cvs-lectures-peer-tutoring/ekg/student.html |
| **Tutor deck** (second screen: answers, Thai notes, SAY script) | https://kaopunnawit.github.io/cvs-lectures-peer-tutoring/ekg/tutor.html |
| **Student handout PDF** (A4 portrait, numbered blanks + back key) | https://kaopunnawit.github.io/cvs-lectures-peer-tutoring/ekg/student.pdf?v=2399b70e |

Open the student and tutor decks in the same browser and tick *Follow student* in the tutor deck: it jumps to whatever card the student deck shows (isolated storage/BroadcastChannel prefix `ekgdeck:` / `cvs-ekg-peer-82`).

## Sections (23 concepts · 88 questions · 45 core · 119 cloze blanks · 3 interactive flowcharts)

- **C · Cardiophysiology** (Lecture): dipoles & skin electrodes, waves by cell & ion current, concordant T wave (endo vs epi AP), action-potential phases & refractory periods
- **W · Waves** (Lecture): waves/segments/intervals, normal cut-offs (PR, QRS, QTc, ST, Q, RR), ECG on the cardiac cycle, autonomic & drug effects
- **L · Leads** (Lecture): bipolar limb leads (Einthoven, smartwatch Lead I), augmented leads & hexaxial wheel (90° pairs), swapped limb electrodes
- **R · Rate** (Lecture): paper standardization & 1500/300 rule, non-standard paper speeds (12.5, 15, 30, 50 mm/s) with interactive `rate` flowchart, irregular rhythms & AFib 10 s strip counting
- **A · Axis** (Lecture): axis zones & Lead I / aVF / Lead II quadrant check with interactive `axis` flowchart, vector projection & biphasic/tallest lead, two 12-lead reading methods, combined rate + axis + QRS items
- **E · Rhythm & 12-Lead** (Lab): precordial electrode positions V1–V6, normal sinus rhythm criteria, AV blocks (1°/2°/3°), SA failure & AFib with interactive `rhythm` flowchart, a fixed 12-lead reading order plus the PS82 option-elimination trick

## Pages

- **`student.html`** (also `index.html`, `dist/deck.html`): Present and Browse modes, *Core only* filter, click-to-reveal cloze blanks (`Space` next blank, `Enter` all, `R` hide), click an option to reveal immediately, collapsible Thai *Explanation* (`L`), interactive SVG flowcharts (`axis`, `rate`, `rhythm`), click-to-zoom figures, swipe on phones.
- **`tutor.html`** (also `dist/notes.html`): identical card order with every answer and blank revealed, Thai key points, Thai tutor notes beyond the slides + ASCII diagrams, 5-video recording plan, 80% summaries, SAY lines, and *Follow student*.
- **`student.pdf`** (55 pages): A4 portrait handout with QR codes on the cover, one page per concept card (empty numbered blanks), two-column quizzes without answers (12-lead tracings span both columns), and back sections for the full answer key, blank answers, and Thai concept explanations.

## Building

```bash
cd ekg
node check.js            # IDs, answer keys, cloze blanks (also against the Thai key points), images, Thai/tutor layers
node tools/flowtest.js   # every preset in the 3 flowcharts must reach the answer its exam item keys
node build.js all        # student.html, index.html, tutor.html, dist/deck.html, dist/notes.html
python3 tools/build-pdf.py  # student.pdf via headless Chrome (Windows/macOS/Linux): page refs, table fit, embedded fonts, ?v= stamp
```

Course material belongs to the Faculty of Medicine, Chulalongkorn University; past-paper recalls to the MDCU peer-support teams. Some tracings reproduced from the exams carry third-party watermarks (LearnTheHeart.com, ECG Wave-Maven / Beth Israel Deaconess Medical Center); they remain their owners’ property. For educational peer study only.
