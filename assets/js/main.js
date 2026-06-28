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
  const dockLinks = document.querySelectorAll('.dock a');
  const sections = [...dockLinks].map((a) => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  if ('IntersectionObserver' in window && sections.length) {
    const sio = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const id = '#' + e.target.id;
          dockLinks.forEach((a) => a.classList.toggle('is-active', a.getAttribute('href') === id));
        }
      });
    }, { threshold: 0.5 });
    sections.forEach((s) => sio.observe(s));
  }

  /* ---------- current year ---------- */
  const yr = document.querySelector('[data-year]');
  if (yr) yr.textContent = new Date().getFullYear();
})();
