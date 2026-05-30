(function () {
  const TARGETS = [
    '.badge',
    '.h1, .h2, .h3',
    '.grid-4 > div',
    '.grid-3 > div',
    '.grid-2 > div',
    '.process-step',
    '.portfolio-card',
    '.curri__item',
    '.stat-card',
    '.vol-card',
    '.case-item',
    '.tag-grid',
    'p.body-lg',
    '.about2__top',
    '.form-box',
    'form',
  ].join(', ');

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll(TARGETS).forEach(el => {
      if (el.closest('.nav') || el.closest('#hero') || el.closest('.nav__mobile')) return;
      el.classList.add('reveal');
    });

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const el = entry.target;
        const siblings = Array.from(
          el.parentElement.querySelectorAll('.reveal:not(.is-visible)')
        ).filter(s => s.parentElement === el.parentElement);

        siblings.forEach((s, i) => {
          setTimeout(() => {
            s.classList.add('is-visible');
            setTimeout(() => s.classList.remove('reveal'), 800);
          }, i * 80);
        });

        el.classList.add('is-visible');
        setTimeout(() => el.classList.remove('reveal'), 800);
        observer.unobserve(el);
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  });
})();
