/* Shared registry for both pages (deck + tutor notes) and print.js.
   Concept-card HTML may mark key details as {{blanks}}: they render as click-to-reveal cloze spans.
   CVS.fig(name, caption, pdf, page[, cls]) builds a click-to-zoom course figure from img/<name>.jpg
   (sizes from data/figs.js). */
window.CVS = {
  sections: [],
  dims: {},
  SRC: {
    anat: 'Pericardium, heart &amp; great vessels handout',
    histo: 'Histology of CVS handout',
    histosheet: 'Histology of CVS lab sheet',
    elec: 'Electrical &amp; cardiac cycle handout',
    cd1: 'Circulatory dynamics 1 handout',
    cd2: 'Circulatory dynamics 2 handout',
    micro: 'Microcirculation handout',
    reg: 'Regulation in CVS handout',
    bio: 'Biochemistry of CVS handout',
    bioth: 'Biochemistry of the heart handout (Thai)',
    ecg: 'Basic ECG handout',
    regional: 'Regional circulation handout',
    imaging: 'Imaging of CVS handout',
    exercise: 'CVS changes in exercise handout',
    pevasc: 'Physical examination of vascular system handout',
    ac81: 'AC81 CVS I MCQ recall (PS81)',
    ac81s: 'AC81 spot test',
    ac80: 'AC80 CVS I MCQ recall',
    ac80s: 'AC80 spot test',
    ac79s: 'AC79 spot test',
    ac7579: 'AC75–79 CVS compilation (PS79)'
  },
  cloze: function (h) { return String(h).replace(/\{\{([\s\S]*?)\}\}/g, '<span class="cz">$1</span>'); },
  fig: function (name, cap, pdf, page, cls) {
    var d = this.dims[name];
    if (!d) throw new Error('no image ' + name);
    var alt = String(cap).replace(/<[^>]+>/g, '').replace(/"/g, '&quot;');
    return '<figure class="scan' + (cls ? ' ' + cls : '') + '"><div class="paperimg"><img src="img/' + name + '.jpg" width="' + d[0] + '" height="' + d[1] + '" alt="' + alt + '" loading="lazy" decoding="async"></div><figcaption>' + cap + ' <span class="src">' + (this.SRC[pdf] || pdf) + ', p.' + page + '</span></figcaption></figure>';
  },
  ans: function (fig, label) { return '<details class="figans"><summary>' + (label || 'The slide (shows the answers)') + '</summary>' + fig + '</details>'; },
  /* Options are written with the answer first; shuffle them once, the same way everywhere (seeded by the item ID).
     Options such as "None ..." or "All ..." stay last. Set keep: true to leave an item's order alone. */
  shuffle: function (it) {
    if (it.t !== 'q' || it.keep) return;
    var h = 2166136261, i;
    for (i = 0; i < it.id.length; i++) { h ^= it.id.charCodeAt(i); h = Math.imul(h, 16777619) >>> 0; }
    var rnd = function () { h = (h + 0x6D2B79F5) >>> 0; var t = h; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
    var idx = it.o.map(function (o, k) { return k; });
    var free = idx.filter(function (k) { return !/^(None|All |Both |Neither )/.test(it.o[k]); });
    var tail = idx.filter(function (k) { return free.indexOf(k) < 0; });
    for (i = free.length - 1; i > 0; i--) { var j = Math.floor(rnd() * (i + 1)), t = free[i]; free[i] = free[j]; free[j] = t; }
    var order = free.concat(tail), A = [].concat(it.a);
    it.o = order.map(function (k) { return it.o[k]; });
    var na = A.map(function (a) { return order.indexOf(a); });
    it.a = Array.isArray(it.a) ? na : na[0];
  },
  add: function (sec) {
    sec.items.forEach(function (it) { if (it.html) it.html = window.CVS.cloze(it.html); window.CVS.shuffle(it); });
    this.sections.push(sec);
  }
};
