/* Tracy Tha Barber — interactions */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── year ─────────────────────────────────────────────── */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  /* ── mobile nav ───────────────────────────────────────── */
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');

  function closeNav() {
    if (!nav) return;
    nav.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
  }

  if (burger && nav) {
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', String(open));
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) closeNav();
    });
  }

  /* ── masthead shadow on scroll ────────────────────────── */
  var masthead = document.getElementById('masthead');
  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      masthead.classList.toggle('is-stuck', window.scrollY > 12);
      ticking = false;
    });
  }
  if (masthead) {
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── scroll reveal ────────────────────────────────────── */
  var reveals = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  if (reduced || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });
    reveals.forEach(function (el, i) {
      el.style.transitionDelay = (Math.min(i % 5, 4) * 70) + 'ms';
      io.observe(el);
    });
  }

  /* ── lightbox ─────────────────────────────────────────── */
  var lb = document.getElementById('lightbox');
  if (!lb) return;

  var lbImg = document.getElementById('lbImg');
  var lbCap = document.getElementById('lbCap');
  var shots = Array.prototype.slice.call(document.querySelectorAll('.shot__btn'));
  var index = 0;
  var lastFocus = null;

  function show(i) {
    index = (i + shots.length) % shots.length;
    var btn = shots[index];
    var img = btn.querySelector('img');
    lbImg.src = btn.getAttribute('data-full');
    lbImg.alt = img ? img.alt : '';
    lbCap.textContent = btn.getAttribute('data-caption') || '';
  }

  function open(i) {
    lastFocus = document.activeElement;
    show(i);
    lb.hidden = false;
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(function () { lb.classList.add('is-open'); });
    document.getElementById('lbClose').focus();
  }

  function close() {
    lb.classList.remove('is-open');
    document.body.style.overflow = '';
    window.setTimeout(function () {
      lb.hidden = true;
      lbImg.removeAttribute('src');
    }, reduced ? 0 : 280);
    if (lastFocus) lastFocus.focus();
  }

  shots.forEach(function (btn, i) {
    btn.addEventListener('click', function () { open(i); });
  });

  document.getElementById('lbClose').addEventListener('click', close);
  document.getElementById('lbPrev').addEventListener('click', function () { show(index - 1); });
  document.getElementById('lbNext').addEventListener('click', function () { show(index + 1); });

  lb.addEventListener('click', function (e) {
    if (e.target === lb || e.target.classList.contains('lightbox__fig')) close();
  });

  document.addEventListener('keydown', function (e) {
    if (lb.hidden) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowLeft') show(index - 1);
    else if (e.key === 'ArrowRight') show(index + 1);
    else if (e.key === 'Tab') {
      /* keep focus inside the dialog */
      var f = lb.querySelectorAll('button');
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
}());
