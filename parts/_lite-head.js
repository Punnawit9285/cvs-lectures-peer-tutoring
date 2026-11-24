/* Short concept cards: each card's body is written here as arrow chains and brief bullets.
   Loaded last (data/sections.json), so it rebuilds the html of every card listed below.
   The card's figures and flow widgets are taken from its original html in the section file;
   the text there is superseded. Block syntax (one string per block):
     '> A → B → C'      cause → effect chain          '- text'   bullet (consecutive bullets form one list)
     '## Heading'        small group label            '! text'   exam trap / past-paper note
     '| a | b |'         table row (first row = head)  '= text'   centered equation
     '@F1' '@F2'         place that figure here; figures not placed go to a column beside the text
     '@X1'               place that flow widget        {{...}}    cloze blank (keep 3–8 per card, key ideas only)
     '@flow:name'        an interactive chart from src/flows*.js
     '---'               what follows goes full width under the text and figure columns */
(function () {
  var C = window.CVS, byId = {};
  C.sections.forEach(function (s) { s.items.forEach(function (it) { byId[it.id] = it; }); });
  function inl(t) { return C.cloze(String(t)).replace(/(→|↔|⇄)/g, '<span class="lt-ar">$1</span>'); }
  function render(blocks, F, X) {
    var out = [], main = out, below = null, ul = null, tb = null, used = {};
    function flush() {
      if (ul) { out.push('<ul class="lt-pts">' + ul.join('') + '</ul>'); ul = null; }
      if (tb) {
        out.push('<div class="tblwrap"><table class="lt-tbl"><thead><tr>' + tb[0].map(function (c) { return '<th>' + c + '</th>'; }).join('') + '</tr></thead><tbody>' +
          tb.slice(1).map(function (r) { return '<tr>' + r.map(function (c) { return '<td>' + inl(c) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div>');
        tb = null;
      }
    }
    blocks.forEach(function (b) {
      b = b.replace(/<(?![A-Za-z\/!])/g, '&lt;');  /* a bare < (as in "< 80") is text, not a tag */
      var k = b.slice(0, 2), t = b.slice(2);
      if (k === '- ') { if (tb) flush(); (ul = ul || []).push('<li>' + inl(t) + '</li>'); return; }
      if (b[0] === '|') { if (ul) flush(); (tb = tb || []).push(b.replace(/^\|\s*|\s*\|\s*$/g, '').split(/\s*\|\s*/)); return; }
      flush();
      if (b === '---') { below = []; out = below; return; }
      if (k === '> ') out.push('<p class="lt-chain">' + inl(t) + '</p>');
      else if (b.slice(0, 3) === '## ') out.push('<h4 class="lt-h">' + b.slice(3) + '</h4>');
      else if (k === '! ') out.push('<p class="lt-trap">' + inl(t) + '</p>');
      else if (k === '= ') out.push('<div class="eqn">' + inl(t) + '</div>');
      else if (/^@F\d+$/.test(b)) { var i = +b.slice(2) - 1; if (!F[i]) throw new Error('no figure ' + b); used[i] = 1; out.push(F[i]); }
      else if (/^@flow:\w+$/.test(b)) out.push('<div class="flowx" data-flow="' + b.slice(6) + '"></div>');
      else if (/^@X\d+$/.test(b)) { var j = +b.slice(2) - 1; if (!X[j]) throw new Error('no flow ' + b); out.push(X[j]); }
      else out.push('<p class="lt-p">' + inl(b) + '</p>');
    });
    flush();
    var rest = F.filter(function (f, i) { return !used[i]; });
    var text = '<div class="lt">' + main.join('') + '</div>';
    var top = rest.length ? '<div class="two lt-two">' + text + '<div class="lt-figs">' + rest.join('') + '</div></div>' : text;
    return below ? '<div class="lt">' + top + below.join('') + '</div>' : top;
  }
  C.short = function (id, blocks, opt) {
    var it = byId[id];
    if (!it || it.t !== 'c') throw new Error('short(): no concept ' + id);
    var F = [], X = [];
    /* figures in document order; a collapsed <details> that holds a figure (answers, extra slides) is kept whole */
    String(it.html).replace(/<details\b[\s\S]*?<\/details>|<figure\b[\s\S]*?<\/figure>/g, function (m) { if (/^<figure/.test(m) || /<figure\b/.test(m)) F.push(m); return m; });
    String(it.html).replace(/<div class="flowx"[^>]*><\/div>/g, function (m) { X.push(m); return m; });
    if (opt && opt.drop) F = F.filter(function (f, i) { return opt.drop.indexOf(i + 1) < 0; });
    it.html = render(blocks, F, X);
  };
})();
var S_ = CVS.short;
