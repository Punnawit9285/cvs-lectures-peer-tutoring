# CVS I Lectures · Peer support 82 (MDCU 3050116)

Question-first peer-tutoring decks and an A4 student handout for **Cardiovascular System I (3050116)**, built from the 116-69 lecture handouts and the AC75–AC81 past papers (official keys: AC75–79 compilation, AC80 key, PS82 key for AC81).

## Open it

| | Main lectures deck | Dedicated EKG deck |
|---|---|---|
| **Student deck** (shown in the video) | https://punnawit9285.github.io/cvs-lectures-peer-tutoring/ | https://punnawit9285.github.io/cvs-lectures-peer-tutoring/ekg/ |
| **Tutor deck** (second screen: answers, Thai notes, SAY script) | https://punnawit9285.github.io/cvs-lectures-peer-tutoring/tutor.html | https://punnawit9285.github.io/cvs-lectures-peer-tutoring/ekg/tutor.html |
| **Student handout PDF** | [student.pdf](https://punnawit9285.github.io/cvs-lectures-peer-tutoring/student.pdf?v=61354116) (136 pages) | [ekg/student.pdf](https://punnawit9285.github.io/cvs-lectures-peer-tutoring/ekg/student.pdf?v=78cdfefd) (55 pages) |

Open the student and tutor decks in the same browser and tick **Follow student** in the tutor deck: it jumps to whatever card the student deck shows. The two decks use separate storage keys, so their progress never mixes.

## Sections (main deck: 74 concepts · 257 questions · 120 core · 404 blanks · 151 figures)

| | Section | Kind | Concepts · questions | Interactive |
|---|---|---|---|---|
| A | Pericardium, Heart & Great Vessels | Lecture | 9 · 34 | coronary, cardiac-vein and fetal-circulation maps |
| H | Histology of the Cardiovascular & Lymphatic System | Lecture | 6 · 31 | |
| E | Physical & Electrical Properties of the Heart | Lecture | 6 · 25 | |
| C | Cardiac Cycle: Phases, Heart Sounds, Murmurs & the PV Loop | Lecture | 4 · 14 | murmur flowchart |
| D | Circulatory Dynamics I: Pressure, Flow, Resistance & Compliance | Lecture | 4 · 11 | |
| V | Circulatory Dynamics II: Arterial Pressure, Pulse & Venous Return | Lecture | 4 · 15 | |
| M | Microcirculation: Capillary Exchange, Starling Forces, Lymph & Edema | Lecture | 4 · 17 | Starling-forces flowchart |
| R | Regulation of the Cardiovascular System | Lecture | 5 · 22 | baroreflex map |
| B | Biochemistry of the Cardiovascular System | Lecture | 6 · 19 | PKA-targets map |
| K | Basic Electrocardiogram: Waves, Leads, Rate, Axis & Lead Reversal | Lecture | 6 · 21 | ECG rate/axis flowchart |
| O | Regional Circulations | Lecture | 5 · 14 | |
| I | Imaging of the Cardiovascular System | Lecture | 6 · 10 | imaging-modality map |
| X | Cardiovascular Changes in Exercise | Lecture | 5 · 13 | |
| P | Physical Examination of the Cardiovascular System | Lab | 4 · 11 | neck-vessel map |

The dedicated EKG deck in [`ekg/`](ekg/README.md) has 6 more sections (23 concepts · 88 questions) from the EKG TBL, i-RAT and peer notes.

## Pages

- **`student.html`** (also `index.html` and `dist/deck.html`): Present / Browse, **Core only**, light/dark, full screen. Concept cards open with a Thai key-points box, then the card with cloze blanks (Space next blank, Enter all, R hide, click to flip) and figures that zoom on click; any flowchart or map sits under the card. The Thai **Explanation** panel (L) starts closed. Questions reveal on click: green/red, Thai bullets, recall notes.
- **`tutor.html`** (also `dist/notes.html`): the same card order with every answer and blank shown, Thai tutor notes beyond the slides with ASCII diagrams, the 5-video recording plan, an "Understand it: the 80%" summary per section and a SAY line for every concept and core question.
- **`student.pdf`**: A4 handout. Cover with QR codes and a contents table with real page numbers; one page per concept with numbered empty blanks; its quiz in two columns right after it (no answers); then the answer key with Thai explanations, the blank answers, and the Thai key points and explanations. All page references are checked after a second pass.

## Build

```sh
node tools/join.js         # parts/<S>.*.js -> data/lite.js, src/thai-*.js, src/tutor-*.js, src/flows-*.js
node check.js              # IDs, keys, blanks (3–8, never shown elsewhere on the card or in the Thai key points), images, Thai and tutor layers
node tools/flowtest.js     # every flowchart case and map route reaches its answer
node build.js all          # student.html, index.html, tutor.html, dist/deck.html, dist/notes.html
sh tools/pdf.sh            # = python3 tools/build-pdf.py: student.pdf via headless Chrome (Windows, macOS, Linux)
python3 tools/crop.py      # re-crop course figures listed in tools/crops.txt (needs the handouts in src-pdf/, never committed)
```

The EKG deck builds the same way from inside `ekg/` (`python3 tools/build-pdf.py` there).

Course material belongs to the Faculty of Medicine, Chulalongkorn University; past-paper recalls and keys to the MDCU peer-support teams. Figures are cropped from the course handouts for peer study only; some exam tracings carry third-party watermarks and remain their owners’ property.
