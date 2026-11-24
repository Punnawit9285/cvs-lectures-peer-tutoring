/* Interactive flowcharts on concept cards. A card places <div class="flowx" data-flow="name"></div>; this file fills it
   in both decks (a MutationObserver mounts every new placeholder). The charts themselves are registered with
   FLOWS.add(name, {...}) in src/flows-charts.js (decision procedures) and src/flows-anatomy.js (anatomy maps).
   Click a box to read why that step exists; load a case to walk its path one step at a time.
   print.js calls FLOWS.printHtml(name) for a static copy of the chart. */
(function () {
  var F = window.FLOWS = {};
  var ST = {};  /* widget state per flow name, kept while the page is open */
  function r1(x) { return Math.round(x * 10) / 10; }
  function r2(x) { return Math.round(x * 100) / 100; }
  function ul(a) { return '<ul>' + a.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>'; }

  /* ---------- SVG drawing ---------- */
  function wrapText(x, y, lines, cls, lh) {
    return lines.map(function (t, i) { return '<text class="' + cls + '" x="' + x + '" y="' + (y + i * lh) + '" text-anchor="middle">' + t + '</text>'; }).join('');
  }
  function drawNode(n, st) {
    var cls = 'fx-node k-' + n.k + (st.on[n.id] ? ' on' : '') + (st.cur === n.id ? ' cur' : '') + (st.sel === n.id ? ' sel' : '') + (st.dim && !st.on[n.id] ? ' dim' : '');
    var cx = n.x + n.w / 2, t = n.t, s = n.s || [];
    var top = n.ty ? n.y + n.ty : n.y + n.h / 2 - ((t.length - 1) * 18 + (s.length ? 6 + s.length * 15 : 0)) / 2 + 6;
    var h = '<g class="' + cls + '" data-n="' + n.id + '" tabindex="0" role="button" aria-label="' + (t.join(' ') + ' ' + s.join(' ')).replace(/<[^>]+>/g, '') + '">';
    h += '<rect x="' + n.x + '" y="' + n.y + '" width="' + n.w + '" height="' + n.h + '" rx="' + (n.k === 'q' ? 6 : 12) + '"/>';
    h += wrapText(cx, top, t, 'fx-t', 18) + wrapText(cx, top + (t.length - 1) * 18 + 19, s, 'fx-s', 15);
    var v = st.val[n.id];
    if (v) {
      var w = Math.max(48, v.replace(/&[a-z]+;/g, 'x').length * 7.1 + 16), px = n.x + n.w - w - 6, py = n.y - 11;  /* top-right corner, clear of the arrows */
      h += '<g class="fx-pill"><rect x="' + px + '" y="' + py + '" width="' + w + '" height="20" rx="10"/><text x="' + (px + w / 2) + '" y="' + (py + 14.5) + '" text-anchor="middle">' + v + '</text></g>';
    }
    return h + '</g>';
  }
  function drawEdge(e, st) {
    var key = e.f + '>' + e.to, on = st.onE[key];
    var d = 'M' + e.p.map(function (p) { return p[0] + ' ' + p[1]; }).join(' L');
    var h = '<g class="fx-edge' + (on ? ' on' : '') + (st.dim && !on ? ' dim' : '') + (e.dash ? ' dash' : '') + '"><path d="' + d + '" marker-end="url(#fxa-' + st.name + (on ? '-on' : '') + ')"/>';
    if (e.l) h += '<text x="' + e.l[0] + '" y="' + e.l[1] + '" text-anchor="middle">' + e.l[2] + '</text>';
    return h + '</g>';
  }
  function svg(def, st) {
    var h = '<svg class="fx-svg" viewBox="0 0 ' + def.W + ' ' + def.H + '" role="img" aria-label="' + def.label + '"><defs>' +
      ['', '-on'].map(function (sfx) { return '<marker id="fxa-' + st.name + sfx + '" class="fx-mk' + sfx + '" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z"/></marker>'; }).join('') + '</defs>';
    def.E.forEach(function (e) { h += drawEdge(e, st); });
    def.N.forEach(function (n) { h += drawNode(n, st); });
    return h + '</svg>';
  }

  /* ================= widget ================= */
  var DEFS = {};

  function state(name) {
    return ST[name] || (ST[name] = { name: name, caseK: null, v: null, res: null, step: 0, sel: null, form: false });
  }
  function view(name, st) {
    var D = DEFS[name], steps = st.res ? st.res.steps : [], shown = steps.slice(0, st.step);
    var vs = { name: name, on: {}, onE: {}, val: {}, cur: null, sel: st.sel, dim: !!st.res && steps.length > 0, grade: null };
    shown.forEach(function (s, i) {
      vs.on[s.n] = true; if (s.val) vs.val[s.n] = s.val;
      if (i < shown.length - 1 || st.step >= steps.length) { if (s.e) vs.onE[s.n + '>' + s.e] = true; (s.e2 || []).forEach(function (e) { vs.onE[s.n + '>' + e] = true; }); }
    });
    if (shown.length) vs.cur = shown[shown.length - 1].n;
    return vs;
  }
  function render(el) {
    var name = el.getAttribute('data-flow'), D = DEFS[name]; if (!D) return;
    var st = state(name), vs = view(name, st), steps = st.res ? st.res.steps : [];
    var h = '<div class="fx-head"><b>' + D.title + '</b><span>' + D.hint + '</span></div>';
    h += '<div class="fx-cases" role="group" aria-label="Load a case">' + D.cases.map(function (c) { return '<button type="button" class="fx-btn' + (st.caseK === c.k ? ' on' : '') + '" data-a="case" data-k="' + c.k + '">' + c.b + '</button>'; }).join('') +
      (D.fields && D.fields.length ? '<button type="button" class="fx-btn ghost' + (st.form ? ' on' : '') + '" data-a="form">Your numbers</button>' : '') + '</div>';
    if (st.form) {
      var cur = st.v || {};
      h += '<div class="fx-form">' + D.fields.map(function (f) { return '<label><span>' + f[1] + '</span><input type="number" step="any" inputmode="decimal" data-f="' + f[0] + '" value="' + (typeof cur[f[0]] === 'number' ? cur[f[0]] : '') + '"></label>'; }).join('') +
        '<button type="button" class="fx-btn go" data-a="run">Walk it</button></div>';
    }
    if (st.res) {
      var c = D.cases.filter(function (x) { return x.k === st.caseK; })[0];
      h += '<div class="fx-case"><span class="fx-src">' + (c ? c.src : 'Your numbers') + '</span>' + D.fields.filter(function (f) { return typeof st.v[f[0]] === 'number'; }).map(function (f) { return '<span class="fx-chip">' + f[1].replace(/ \(.*\)/, '') + ' <b>' + st.v[f[0]] + '</b></span>'; }).join('') + '</div>';
    }
    h += '<div class="fx-scroll">' + svg(D.def, vs) + '</div>';
    if (st.res && steps.length) {
      h += '<div class="fx-ctl"><button type="button" class="fx-btn" data-a="back"' + (st.step <= 1 ? ' disabled' : '') + '>◀ Back</button><span class="fx-pos">Step ' + st.step + ' of ' + steps.length + '</span>' +
        '<button type="button" class="fx-btn go" data-a="next"' + (st.step >= steps.length ? ' disabled' : '') + '>Next step ▶</button><button type="button" class="fx-btn ghost" data-a="all"' + (st.step >= steps.length ? ' disabled' : '') + '>Whole path</button><button type="button" class="fx-btn ghost" data-a="clear">Clear</button></div>';
    }
    if (st.res && st.res.err) h += '<p class="fx-err">' + st.res.err + '</p>';
    h += '<div class="fx-panel">' + panel(name, st, vs) + '</div>';
    el.innerHTML = h;
  }
  function panel(name, st, vs) {
    var D = DEFS[name], steps = st.res ? st.res.steps : [], h = '';
    if (st.res && steps.length && st.step) {
      h += '<ol class="fx-trail">' + steps.slice(0, st.step).map(function (s, i) { return '<li' + (i === st.step - 1 ? ' class="now"' : '') + '>' + s.why + '</li>'; }).join('') + '</ol>';
      if (st.step >= steps.length) {
        if (D.dxLabel && st.res.dx && st.res.dx.length) h += '<p class="fx-dx"><span>' + D.dxLabel + '</span>' + st.res.dx.join(' → ') + '</p>';
      }
    }
    var key = st.sel || vs.cur, t = key && D.txt[key];
    if (t) {
      h += '<div class="fx-explain"><h4>' + t.h + '</h4>' + ul(t.b) + (t.ratio ? ratioBox(t.ratio) : '') + (t.th ? '<p class="fx-th">' + t.th + '</p>' : '') + '</div>';
    } else if (!st.res) {
      h += '<p class="fx-idle">' + (D.idle || 'Click any box to see why that step exists, or load a case and press Next step.') + '</p>';
    }
    return h;
  }
  function act(el, a, btn) {
    var name = el.getAttribute('data-flow'), D = DEFS[name], st = state(name);
    if (a === 'case') {
      var c = D.cases.filter(function (x) { return x.k === btn.getAttribute('data-k'); })[0];
      st.caseK = c.k; st.v = JSON.parse(JSON.stringify(c.v)); st.res = D.path(st.v); st.step = 1; st.sel = null;
    } else if (a === 'form') { st.form = !st.form; }
    else if (a === 'run') {
      var v = {}, ins = el.querySelectorAll('input[data-f]');
      for (var i = 0; i < ins.length; i++) { var x = parseFloat(ins[i].value); if (!isNaN(x)) v[ins[i].getAttribute('data-f')] = x; }
      st.caseK = null; st.v = v; st.res = D.path(v); st.step = st.res.steps.length ? 1 : 0; st.sel = null;
    }
    else if (a === 'next') { if (st.res) st.step = Math.min(st.res.steps.length, st.step + 1); st.sel = null; }
    else if (a === 'back') { st.step = Math.max(1, st.step - 1); st.sel = null; }
    else if (a === 'all') { if (st.res) st.step = st.res.steps.length; st.sel = null; }
    else if (a === 'clear') { st.caseK = null; st.v = null; st.res = null; st.step = 0; st.sel = null; }
    render(el);
    var again = el.querySelector('[data-a="' + a + '"]' + (a === 'case' ? '[data-k="' + st.caseK + '"]' : ''));
    if (again && !again.disabled) try { again.focus({ preventScroll: true }); } catch (e) { }
  }
  function pick(el, n) {
    var st = state(el.getAttribute('data-flow'));
    st.sel = st.sel === n ? null : n;
    render(el);
    var g = el.querySelector('.fx-node[data-n="' + n + '"]'); if (g) try { g.focus({ preventScroll: true }); } catch (e) { }
  }

  /* edges without a path get an elbow connector: sideways when the target box is beside the source, else up/down.
     e.dir forces 'h' or 'v'; e.mx / e.my move the elbow. */
  function autoEdges(def) {
    var N = {}; def.N.forEach(function (n) { N[n.id] = n; });
    def.E.forEach(function (e) {
      if (e.p) return;
      var a = N[e.f], b = N[e.to]; if (!a || !b) throw new Error('flow ' + def.name + ': no box ' + (a ? e.to : e.f));
      var ac = [a.x + a.w / 2, a.y + a.h / 2], bc = [b.x + b.w / 2, b.y + b.h / 2];
      var side = b.x >= a.x + a.w - 1 || b.x + b.w <= a.x + 1, stack = b.y >= a.y + a.h - 1 || b.y + b.h <= a.y + 1;
      var dir = e.dir || (stack && !(side && Math.abs(bc[1] - ac[1]) < Math.abs(bc[0] - ac[0]) * 0.35) ? 'v' : side ? 'h' : 'v');
      if (dir === 'h') {
        var r = bc[0] > ac[0], x1 = r ? a.x + a.w : a.x, x2 = r ? b.x : b.x + b.w, y1 = e.y1 || ac[1], y2 = e.y2 || bc[1], mx = e.mx || (x1 + x2) / 2;
        e.p = Math.abs(y1 - y2) < 1 ? [[x1, y1], [x2, y2]] : [[x1, y1], [mx, y1], [mx, y2], [x2, y2]];
      } else {
        var d = bc[1] > ac[1], y1v = d ? a.y + a.h : a.y, y2v = d ? b.y : b.y + b.h, x1v = e.x1 || ac[0], x2v = e.x2 || bc[0], my = e.my || (y1v + y2v) / 2;
        e.p = Math.abs(x1v - x2v) < 1 ? [[x1v, y1v], [x2v, y2v]] : [[x1v, y1v], [x1v, my], [x2v, my], [x2v, y2v]];
      }
    });
  }
  F.add = function (name, d) { if (d.def) autoEdges(d.def); DEFS[name] = d; };  /* charts: src/flows-charts.js, src/flows-anatomy.js */
  F.defs = DEFS;  /* used by tools/flowtest.js */
  F.mount = function (root) {
    var els = (root || document).querySelectorAll('.flowx');
    for (var i = 0; i < els.length; i++) if (!els[i].getAttribute('data-on')) { els[i].setAttribute('data-on', '1'); render(els[i]); }
  };
  /* static copy for the PDF: the chart only, nothing loaded */
  F.printHtml = function (name) {
    var D = DEFS[name], vs = { name: name + 'p', on: {}, onE: {}, val: {}, cur: null, sel: null, dim: false, grade: null };
    return '<div class="fx fx-print"><div class="fx-scroll">' + svg(D.def, vs) + '</div></div>';
  };

  if (typeof document !== 'undefined' && document.addEventListener) {
    document.addEventListener('click', function (e) {
      var t = e.target && e.target.closest ? e.target : null; if (!t) return;
      var el = t.closest('.flowx'); if (!el) return;
      var b = t.closest('[data-a]'); if (b && !b.disabled) { act(el, b.getAttribute('data-a'), b); return; }
      var g = t.closest('.fx-node'); if (g) pick(el, g.getAttribute('data-n'));
    });
    document.addEventListener('keydown', function (e) {
      var t = e.target; if (!t || !t.closest) return;
      var el = t.closest('.flowx'); if (!el) return;
      if ((e.key === 'Enter' || e.key === ' ') && t.classList && t.classList.contains('fx-node')) { e.preventDefault(); pick(el, t.getAttribute('data-n')); }
      if (e.key === 'Enter' && t.tagName === 'INPUT') { e.preventDefault(); act(el, 'run', null); }
    });
    var go = function () { F.mount(document); };
    if (document.body) { go(); try { new MutationObserver(go).observe(document.body, { childList: true, subtree: true }); } catch (e) { } }
    else document.addEventListener('DOMContentLoaded', function () { go(); try { new MutationObserver(go).observe(document.body, { childList: true, subtree: true }); } catch (e) { } });
  }
})();
