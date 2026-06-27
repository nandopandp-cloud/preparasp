/* PreparaSP · Relatório — conteúdo dos achados da pesquisa
   Todo o conteúdo abaixo é derivado das rodas de conversa transcritas.
   Edite o objeto DATA para atualizar o relatório. */
(function () {
  'use strict';

  const DATA = {
    themes: [
      // {icon, title, desc, pct, tone: ''|'warm'|'mint'}
    ],
    pains: [
      // {icon, tag, title, text, metric:{v,k}}
    ],
    opps: [
      // {icon, tag, title, text, metric:{v,k}}
    ],
    quotes: [
      // {text, who, meta, hl:false}
    ],
    recs: [
      // {pr, prio:'high'|'mid'|'low', title, text}
    ],
  };

  /* ---------- renderers ---------- */
  function el(html) { const t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstChild; }

  function renderThemes() {
    const root = document.getElementById('themesRows'); if (!root) return;
    DATA.themes.forEach((t, i) => {
      const toneClass = t.tone ? ' ' + t.tone : '';
      const node = el(`
        <div class="theme" data-reveal data-reveal-delay="${(i % 5) + 1}">
          <div class="ti">${t.icon}</div>
          <div class="tc"><h4>${t.title}</h4><p>${t.desc}</p></div>
          <div class="tbar">
            <div class="barwrap${toneClass}"><div class="bar" data-pct="${t.pct}"></div></div>
            <div class="pct" data-pct="${t.pct}">0%</div>
          </div>
        </div>`);
      root.appendChild(node);
    });
  }

  function renderCards(list, rootId, variant) {
    const root = document.getElementById(rootId); if (!root) return;
    list.forEach((c, i) => {
      const metric = c.metric ? `<div class="metric"><span class="v">${c.metric.v}</span><span class="k">${c.metric.k}</span></div>` : '';
      const node = el(`
        <article class="card ${variant}" data-reveal data-reveal-delay="${(i % 3) + 1}">
          <div class="ic">${c.icon}</div>
          <div class="tag">${c.tag}</div>
          <h3>${c.title}</h3>
          <p>${c.text}</p>
          ${metric}
        </article>`);
      root.appendChild(node);
    });
  }

  function renderQuotes() {
    const root = document.getElementById('quoteRail'); if (!root) return;
    DATA.quotes.forEach((q, i) => {
      const initials = (q.who || '•').split(' ').map(s => s[0]).slice(0, 2).join('').toUpperCase();
      const node = el(`
        <figure class="qcard ${q.hl ? 'qcard--hl' : ''}" data-reveal data-reveal-delay="${(i % 2) + 1}">
          <div class="mark">&ldquo;</div>
          <blockquote>${q.text}</blockquote>
          <figcaption class="who">
            <span class="av">${initials}</span>
            <span class="meta"><b>${q.who}</b><span>${q.meta}</span></span>
          </figcaption>
        </figure>`);
      root.appendChild(node);
    });
  }

  function renderRecs() {
    const root = document.getElementById('recGrid'); if (!root) return;
    DATA.recs.forEach((r, i) => {
      const node = el(`
        <article class="rec p-${r.prio}" data-reveal data-reveal-delay="${(i % 2) + 1}">
          <div class="pr">${r.pr}</div>
          <div><h4>${r.title}</h4><p>${r.text}</p></div>
        </article>`);
      root.appendChild(node);
    });
  }

  renderThemes();
  renderCards(DATA.pains, 'painsGrid', 'card--pain');
  renderCards(DATA.opps, 'oppsGrid', 'card--opp');
  renderQuotes();
  renderRecs();
  // content.js runs before main.js, so the observers in main.js will pick up
  // these freshly injected [data-reveal] / [data-count] / .bar nodes.
})();
