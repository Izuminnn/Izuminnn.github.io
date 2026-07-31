/* PiHeritage — hành vi dùng chung cho cả hai trang */
(function () {
  'use strict';

  /* `?still=1` dựng trang ở trạng thái tĩnh đã hoàn tất — dùng khi chụp ảnh hoặc in. */
  window.PSH_STILL = /[?&]still=1/.test(window.location.search);
  var reduce = window.PSH_STILL || window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* --- Thanh nav đổi nền khi cuộn --- */
  var nav = document.getElementById('nav');
  if (nav) {
    var onScroll = function () {
      nav.classList.toggle('is-stuck', window.scrollY > 12);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* --- Menu trên mobile --- */
  var burger = document.getElementById('burger');
  var drawer = document.getElementById('drawer');
  if (burger && drawer) {
    burger.addEventListener('click', function () {
      var open = burger.getAttribute('aria-expanded') === 'true';
      burger.setAttribute('aria-expanded', String(!open));
      drawer.hidden = open;
    });
    drawer.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        burger.setAttribute('aria-expanded', 'false');
        drawer.hidden = true;
      }
    });
  }

  /* --- Hiện dần khi cuộn tới (chỉ transform + opacity) --- */
  var risers = document.querySelectorAll('.rise');
  if (reduce || !('IntersectionObserver' in window)) {
    risers.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('is-in');
          io.unobserve(en.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    risers.forEach(function (el, i) {
      el.style.transitionDelay = ((i % 6) * 65) + 'ms';
      io.observe(el);
    });

    /* Lưới an toàn: nếu vì lý do nào đó observer không chạy, nội dung vẫn phải hiện ra. */
    window.setTimeout(function () {
      risers.forEach(function (el) { el.classList.add('is-in'); });
    }, 4000);
  }

  /* --- Số liệu lấy thẳng từ heritage-data.js để không bao giờ lệch --- */
  function applyCounts() {
    var F = window.PSH_FLAT || [];
    var counts = {
      sites: F.length,
      live: F.filter(function (x) { return x.live; }).length,
      provinces: new Set(F.map(function (x) { return x.city; })).size,
      unesco: F.filter(function (x) { return x.unesco; }).length
    };
    Object.keys(counts).forEach(function (k) {
      document.querySelectorAll('[data-count="' + k + '"]').forEach(function (el) {
        el.textContent = counts[k];
      });
    });
  }

  function applyYear() {
    document.querySelectorAll('[data-year]').forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  }

  applyCounts();
  applyYear();

  /* Đổi ngôn ngữ sẽ vẽ lại phần chữ, nên phải điền số vào lần nữa. */
  document.addEventListener('psh:lang', function () {
    applyCounts();
    applyYear();
  });
})();
