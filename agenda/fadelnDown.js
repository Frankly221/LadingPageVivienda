document.addEventListener('DOMContentLoaded', () => {
  const targets = document.querySelectorAll('.div-padre > .container');
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Estado inicial
  targets.forEach((el, i) => {
    el.classList.remove('animate__animated', 'animate__fadeInDown');
    el.style.opacity = '0';
    el.style.setProperty('--animate-duration', '700ms');
    el.dataset.delay = `${i * 0.15}s`; // escalonado
  });

  if (prefersReduced) {
    targets.forEach(el => (el.style.opacity = '1'));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        el.classList.add('animate__animated', 'animate__fadeInDown');
        el.style.opacity = '1';
        el.style.animationDelay = el.dataset.delay || '0s';
        io.unobserve(el); // solo una vez
      });
    },
    {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -10% 0px',
    }
  );

  targets.forEach((el) => io.observe(el));
});