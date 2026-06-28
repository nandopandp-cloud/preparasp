/* PreparaSP · Relatório · interações e animações */
(function () {
  'use strict';
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- reveal on scroll ---------- */
  const revealEls = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && !prefersReduced) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-in'));
  }

  /* ---------- count-up numbers ---------- */
  const easeOut = (t) => 1 - Math.pow(1 - t, 3);
  function animateCount(el) {
    const target = parseFloat(el.dataset.count);
    const decimals = parseInt(el.dataset.decimals || '0', 10);
    const dur = 1500;
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    if (prefersReduced) { el.textContent = prefix + target.toLocaleString('pt-BR', {minimumFractionDigits:decimals, maximumFractionDigits:decimals}) + suffix; return; }
    let start = null;
    function step(ts) {
      if (!start) start = ts;
      const p = Math.min((ts - start) / dur, 1);
      const val = target * easeOut(p);
      el.textContent = prefix + val.toLocaleString('pt-BR', {minimumFractionDigits:decimals, maximumFractionDigits:decimals}) + suffix;
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = prefix + target.toLocaleString('pt-BR', {minimumFractionDigits:decimals, maximumFractionDigits:decimals}) + suffix;
    }
    requestAnimationFrame(step);
  }
  const counters = document.querySelectorAll('[data-count]');
  if ('IntersectionObserver' in window) {
    const cio = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { animateCount(e.target); cio.unobserve(e.target); } });
    }, { threshold: 0.6 });
    counters.forEach((el) => cio.observe(el));
  } else { counters.forEach(animateCount); }

  /* ---------- progress bars (themes) ---------- */
  const bars = document.querySelectorAll('.bar[data-pct]');
  const pcts = document.querySelectorAll('.pct[data-pct]');
  if ('IntersectionObserver' in window) {
    const bio = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          if (e.target.classList.contains('bar')) {
            e.target.style.width = e.target.dataset.pct + '%';
          } else {
            const pc = e.target; const t = parseFloat(pc.dataset.pct); let s = null;
            const step = (ts) => { if (!s) s = ts; const p = Math.min((ts - s)/1300, 1); pc.textContent = Math.round(t*easeOut(p)) + '%'; if (p<1) requestAnimationFrame(step); };
            if (prefersReduced) pc.textContent = t + '%'; else requestAnimationFrame(step);
          }
          bio.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });
    bars.forEach((b) => bio.observe(b));
    pcts.forEach((p) => bio.observe(p));
  }

  /* ---------- reading progress bar ---------- */
  const pb = document.querySelector('.progressbar');
  function onScroll() {
    const h = document.documentElement;
    const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight);
    if (pb) pb.style.width = (scrolled * 100) + '%';
    const nav = document.querySelector('.nav');
    if (nav) nav.classList.toggle('is-stuck', window.scrollY > 40);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- parallax hero blobs ---------- */
  const blobs = document.querySelectorAll('.hero__blob');
  if (!prefersReduced && blobs.length) {
    let mx = 0, my = 0, tx = 0, ty = 0;
    window.addEventListener('mousemove', (e) => {
      mx = (e.clientX / window.innerWidth - 0.5);
      my = (e.clientY / window.innerHeight - 0.5);
    });
    function loop() {
      tx += (mx - tx) * 0.05; ty += (my - ty) * 0.05;
      blobs.forEach((b, i) => {
        const d = (i + 1) * 18;
        b.style.transform = `translate(${tx * d}px, ${ty * d}px)`;
      });
      requestAnimationFrame(loop);
    }
    loop();
    // scroll parallax
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      blobs.forEach((b, i) => { b.style.marginTop = (y * 0.06 * (i + 1)) + 'px'; });
    }, { passive: true });
  }

  /* ---------- section dock active state ---------- */
  const dockLinks = [...document.querySelectorAll('.dock a')];
  const dockTargets = dockLinks
    .map((a) => {
      const el = document.querySelector(a.getAttribute('href'));
      return el ? { link: a, el } : null;
    })
    .filter(Boolean);

  if (dockTargets.length) {
    let activeLink = null;
    function setActive(link) {
      if (link === activeLink) return;
      activeLink = link;
      dockLinks.forEach((a) => a.classList.toggle('is-active', a === link));
    }
    function updateDock() {
      // linha de leitura a ~34% da altura da viewport
      const line = window.scrollY + window.innerHeight * 0.34;
      const docH = document.documentElement.scrollHeight;
      const atBottom = window.scrollY + window.innerHeight >= docH - 2;

      let current = dockTargets[0];
      if (atBottom) {
        // garante que a última seção fique ativa ao chegar no rodapé
        current = dockTargets[dockTargets.length - 1];
      } else {
        for (const t of dockTargets) {
          if (t.el.getBoundingClientRect().top + window.scrollY <= line) current = t;
          else break;
        }
      }
      setActive(current.link);
    }
    window.addEventListener('scroll', updateDock, { passive: true });
    window.addEventListener('resize', updateDock, { passive: true });
    updateDock();
  }

  /* ---------- galeria: masonry encaixado (grid row-span) ---------- */
  const galGrid = document.querySelector('.gal-grid');
  const galItems = galGrid ? [...galGrid.querySelectorAll('.gal-item')] : [];
  if (galGrid && galItems.length) {
    function galCols() {
      const w = window.innerWidth;
      if (w <= 520) return 1;
      if (w <= 900) return 2;
      return 3;
    }
    const ROW = 8; // px (grid-auto-rows)
    function packGallery() {
      const cols = galCols();
      if (cols <= 1) {
        // coluna única: deixa fluxo natural, sem grid
        galGrid.classList.remove('is-packed');
        galItems.forEach((it) => (it.style.gridRowEnd = ''));
        return;
      }
      const gapStr = getComputedStyle(galGrid).getPropertyValue('--gal-gap').trim();
      const gap = parseFloat(gapStr) || 16;
      galGrid.style.setProperty('--gal-cols', cols);
      galGrid.style.setProperty('--gal-row', ROW + 'px');
      galGrid.classList.add('is-packed');
      galItems.forEach((item) => {
        item.style.gridRowEnd = 'auto';
        const h = item.getBoundingClientRect().height;
        const span = Math.max(1, Math.round((h + gap) / (ROW + gap)));
        item.style.gridRowEnd = 'span ' + span;
      });
    }
    function packWhenReady() {
      const imgs = galItems.map((it) => it.querySelector('img')).filter(Boolean);
      let pending = imgs.filter((im) => !im.complete).length;
      packGallery();
      if (!pending) return;
      imgs.forEach((im) => {
        if (im.complete) return;
        im.addEventListener('load', () => { if (--pending <= 0) packGallery(); else packGallery(); }, { once: true });
        im.addEventListener('error', () => { if (--pending <= 0) packGallery(); }, { once: true });
      });
    }
    packWhenReady();
    let galTO;
    window.addEventListener('resize', () => { clearTimeout(galTO); galTO = setTimeout(packGallery, 120); }, { passive: true });
    if ('fonts' in document) document.fonts.ready.then(packGallery).catch(() => {});
  }

  /* ---------- lightbox / tela cheia com zoom ---------- */
  const lb = document.getElementById('lightbox');
  if (lb && galItems.length) {
    const lbImg = document.getElementById('lbImg');
    const lbCap = document.getElementById('lbCap');
    const slides = galItems.map((it) => {
      const img = it.querySelector('img');
      const cap = it.querySelector('.cap');
      return { src: img ? img.getAttribute('src') : '', alt: img ? img.getAttribute('alt') : '', cap: cap ? cap.textContent.trim() : '' };
    });
    let idx = 0, scale = 1, panX = 0, panY = 0, lastFocus = null;
    const MIN = 1, MAX = 4, STEP = 0.5;

    function applyTransform() {
      lbImg.style.setProperty('--lb-scale', scale);
      lbImg.style.setProperty('--lb-x', panX + 'px');
      lbImg.style.setProperty('--lb-y', panY + 'px');
      const resetBtn = lb.querySelector('[data-lb="reset"]');
      if (resetBtn) resetBtn.textContent = Math.round(scale * 100) + '%';
    }
    function resetZoom() { scale = 1; panX = 0; panY = 0; applyTransform(); }
    function show(i) {
      idx = (i + slides.length) % slides.length;
      const s = slides[idx];
      lbImg.src = s.src; lbImg.alt = s.alt;
      lbCap.textContent = s.cap;
      resetZoom();
    }
    function openAt(i) {
      lastFocus = document.activeElement;
      show(i);
      lb.classList.add('is-open');
      lb.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      const closeBtn = lb.querySelector('[data-lb="close"]');
      if (closeBtn) closeBtn.focus();
    }
    function close() {
      lb.classList.remove('is-open');
      lb.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }
    function zoom(dir) {
      scale = Math.min(MAX, Math.max(MIN, scale + dir * STEP));
      if (scale === 1) { panX = 0; panY = 0; }
      applyTransform();
    }

    galItems.forEach((it, i) => {
      it.setAttribute('role', 'button');
      it.setAttribute('tabindex', '0');
      it.addEventListener('click', () => openAt(i));
      it.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openAt(i); }
      });
    });

    lb.addEventListener('click', (e) => {
      const act = e.target.closest('[data-lb]');
      if (act) {
        const a = act.dataset.lb;
        if (a === 'close') close();
        else if (a === 'prev') show(idx - 1);
        else if (a === 'next') show(idx + 1);
        else if (a === 'zoom-in') zoom(1);
        else if (a === 'zoom-out') zoom(-1);
        else if (a === 'reset') resetZoom();
        return;
      }
      // clicar no fundo (fora da imagem) fecha
      if (e.target === lb || e.target.classList.contains('lightbox__stage')) close();
    });

    // double-click / wheel zoom na imagem
    lbImg.addEventListener('dblclick', () => { scale > 1 ? resetZoom() : zoom(2); });
    lb.querySelector('.lightbox__stage').addEventListener('wheel', (e) => {
      if (!lb.classList.contains('is-open')) return;
      e.preventDefault();
      zoom(e.deltaY < 0 ? 1 : -1);
    }, { passive: false });

    // arrastar (pan) quando ampliado
    let dragging = false, startX = 0, startY = 0, baseX = 0, baseY = 0;
    lbImg.addEventListener('pointerdown', (e) => {
      if (scale <= 1) return;
      dragging = true; startX = e.clientX; startY = e.clientY; baseX = panX; baseY = panY;
      lbImg.classList.add('is-grabbing');
      lbImg.setPointerCapture(e.pointerId);
    });
    lbImg.addEventListener('pointermove', (e) => {
      if (!dragging) return;
      panX = baseX + (e.clientX - startX);
      panY = baseY + (e.clientY - startY);
      applyTransform();
    });
    function endDrag() { dragging = false; lbImg.classList.remove('is-grabbing'); }
    lbImg.addEventListener('pointerup', endDrag);
    lbImg.addEventListener('pointercancel', endDrag);

    document.addEventListener('keydown', (e) => {
      if (!lb.classList.contains('is-open')) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') show(idx - 1);
      else if (e.key === 'ArrowRight') show(idx + 1);
      else if (e.key === '+' || e.key === '=') zoom(1);
      else if (e.key === '-' || e.key === '_') zoom(-1);
    });
  }

  /* ---------- baixar PDF (impressão nativa do navegador) ---------- */
  const pdfBtn = document.querySelector('[data-download-pdf]');
  if (pdfBtn) {
    pdfBtn.addEventListener('click', () => {
      // garante que todo conteúdo animado esteja visível antes de imprimir
      document.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('is-in'));
      // preenche números/percentuais que ainda não animaram
      document.querySelectorAll('[data-count]').forEach((el) => {
        if (!el.textContent.trim() && typeof animateCount === 'function') animateCount(el);
      });
      document.querySelectorAll('.bar[data-pct]').forEach((b) => { b.style.width = b.dataset.pct + '%'; });
      document.querySelectorAll('.pct[data-pct]').forEach((p) => { if (!p.textContent.trim()) p.textContent = p.dataset.pct + '%'; });

      pdfBtn.classList.add('is-printing');
      // pequeno atraso para o reflow aplicar antes da janela de impressão
      setTimeout(() => {
        window.print();
        pdfBtn.classList.remove('is-printing');
      }, 120);
    });
    // título do arquivo sugerido no diálogo "Salvar como PDF"
    window.addEventListener('beforeprint', () => {
      pdfBtn.dataset.prevTitle = document.title;
      document.title = 'PreparaSP - Relatorio de pesquisa de campo';
      // garante que números/barras estejam preenchidos mesmo via Ctrl+P
      document.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('is-in'));
      document.querySelectorAll('[data-count]').forEach((el) => {
        const t = parseFloat(el.dataset.count);
        const dec = parseInt(el.dataset.decimals || '0', 10);
        const pre = el.dataset.prefix || '', suf = el.dataset.suffix || '';
        el.textContent = pre + t.toLocaleString('pt-BR', { minimumFractionDigits: dec, maximumFractionDigits: dec }) + suf;
      });
      document.querySelectorAll('.bar[data-pct]').forEach((b) => { b.style.width = b.dataset.pct + '%'; });
      document.querySelectorAll('.pct[data-pct]').forEach((p) => { p.textContent = p.dataset.pct + '%'; });
    });
    window.addEventListener('afterprint', () => {
      if (pdfBtn.dataset.prevTitle) document.title = pdfBtn.dataset.prevTitle;
    });
  }

  /* ---------- current year ---------- */
  const yr = document.querySelector('[data-year]');
  if (yr) yr.textContent = new Date().getFullYear();
})();
