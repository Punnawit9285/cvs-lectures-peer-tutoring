# CVS I · Dedicated EKG Deck · Peer support 82

Question-first peer-tutoring deck for **CVS I: Basic EKG, Leads, Rate, QRS Axis, Sinus Rhythm & 12-Lead Interpretation**, built from *Peer – Physiology Of The Heart* (tutor EKG notes, ECG TBL t-RAT 2569 / 2568, i-RAT 266-66) and the EKG items of **AC75–AC81** (with official AC75–79, AC80, and PS82/AC81 answer keys).

Lives in `ekg/` so it deploys cleanly alongside the main CVS lectures deck in `Punnawit9285/cvs-lectures-peer-tutoring` without interfering with root files.

## Open it

| | Link |
|---|---|
| **Student deck** (shown in the video) | https://punnawit9285.github.io/cvs-lectures-peer-tutoring/ekg/student.html |
| **Tutor deck** (second screen: answers, Thai notes, SAY script) | https://punnawit9285.github.io/cvs-lectures-peer-tutoring/ekg/tutor.html |
| **Student handout PDF** (A4 portrait, numbered blanks + back key) | https://punnawit9285.github.io/cvs-lectures-peer-tutoring/ekg/student.pdf?v=05361181 |

Open the student and tutor decks in the same browser and tick *Follow student* in the tutor deck: it jumps to whatever card the student deck shows (isolated storage/BroadcastChannel prefix `ekgdeck:` / `cvs-ekg-peer-82`).

## Sections (23 concepts · 89 questions · 45 core · 119 cloze blanks · 3 interactive flowcharts)

- **C · Cardiophysiology** (Lecture): dipoles & skin electrodes, waves by cell & ion current, concordant T wave (endo vs epi AP), action-potential phases & refractory periods
- **W · Waves** (Lecture): waves/segments/intervals, normal cut-offs (PR, QRS, QTc, ST, Q, RR), ECG on the cardiac cycle, autonomic & drug effects
- **L · Leads** (Lecture): bipolar limb leads (Einthoven, smartwatch Lead I), augmented leads & hexaxial wheel (90° pairs), swapped limb electrodes
- **R · Rate** (Lecture): paper standardization & 1500/300 rule, non-standard paper speeds (12.5, 15, 30, 50 mm/s) with interactive `rate` flowchart, irregular rhythms & AFib 10 s strip counting
- **A · Axis** (Lecture): axis zones & Lead I / aVF / Lead II quadrant check with interactive `axis` flowchart, vector projection & biphasic/tallest lead, two 12-lead reading methods, combined rate + axis + QRS items
- **E · Rhythm & 12-Lead** (Lab): precordial electrode positions V1–V6, normal sinus rhythm criteria, AV blocks (1°/2°/3°), SA failure & AFib with interactive `rhythm` flowchart, systematic 12-lead interpretation

## Pages

- **`student.html`** (also `index.html`, `dist/deck.html`): Present and Browse modes, *Core only* filter, click-to-reveal cloze blanks (`Space` next blank, `Enter` all, `R` hide), click an option to reveal immediately, collapsible Thai *Explanation* (`L`), interactive SVG flowcharts (`axis`, `rate`, `rhythm`), click-to-zoom figures, swipe on phones.
- **`tutor.html`** (also `dist/notes.html`): identical card order with every answer and blank revealed, Thai key points, Thai tutor notes beyond the slides + ASCII diagrams, 5-video recording plan, 80% summaries, SAY lines, and *Follow student*.
- **`student.pdf`**: A4 portrait handout with QR codes on the cover, one page per concept card (empty numbered blanks), two-column quizzes without answers, and back sections for the full answer key, blank answers, and Thai concept explanations.

## Building

```bash
cd ekg
node check.js           # validate IDs, answer keys, cloze blanks, images, Thai/tutor layers
node tools/flowtest.js  # verify every preset path in all 3 interactive flowcharts
node build.js all       # bundle student.html, index.html, tutor.html, dist/deck.html, dist/notes.html
python tools/build-pdf.py  # build student.pdf with headless Chrome & verify page refs + embedded fonts
```

Course material belongs to the Faculty of Medicine, Chulalongkorn University; past-paper recalls to the MDCU peer-support teams. For educational peer study only.
