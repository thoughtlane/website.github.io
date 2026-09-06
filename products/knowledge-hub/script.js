(() => {
  const toggle = document.getElementById('nav-toggle');
  const mobile = document.getElementById('mobile-nav');
  if (toggle && mobile) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', open ? 'false' : 'true');
      mobile.hidden = open;
    });
    mobile.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        toggle.setAttribute('aria-expanded', 'false');
        mobile.hidden = true;
      });
    });
  }

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;

  const targets = document.querySelectorAll(
    '.section-head, .steps, .section-split > *, .drop-mock, .access-grid, .faq, .section-end, .teacher-board'
  );
  targets.forEach((el) => el.classList.add('reveal'));

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('reveal-in');
        io.unobserve(entry.target);
      }
    },
    { threshold: 0.18, rootMargin: '0px 0px -8% 0px' }
  );
  targets.forEach((el) => io.observe(el));
})();
