/* Shared registry for both pages (student deck + tutor deck) and print.js. */
window.CVS = {
  sections: [],
  dims: {},
  SRC: {
    ekg: 'Peer – Physiology of the Heart (EKG notes &amp; TBL)',
    ac75: 'AC75–79 CVS I Key',
    ac80: 'AC80 CVS I MCQ',
    ac81: 'AC81 CVS I MCQ'
  },
  cloze: function (h) { return String(h).replace(/\{\{([\s\S]*?)\}\}/g, '<span class="cz">$1</span>'); },
  fig: function (name, cap, pdf, page, cls) {
    var d = this.dims[name];
    if (!d) throw new Error('no image ' + name);
    var alt = String(cap).replace(/<[^>]+>/g, '').replace(/"/g, '&quot;');
    return '<figure class="scan' + (cls ? ' ' + cls : '') + '"><div class="paperimg"><img src="img/' + name + '.jpg" width="' + d[0] + '" height="' + d[1] + '" alt="' + alt + '" loading="lazy" decoding="async"></div><figcaption>' + cap + ' <span class="src">' + (this.SRC[pdf] || pdf) + ', p.' + page + '</span></figcaption></figure>';
  },
  ans: function (fig, label) { return '<details class="figans"><summary>' + (label || 'The slide (shows the answers)') + '</summary>' + fig + '</details>'; },
  shuffle: function (it) {
    if (it.t !== 'q' || it.keep !== false) return;
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
