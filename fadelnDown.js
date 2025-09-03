document.addEventListener('DOMContentLoaded', () => {
  const grupos = document.querySelectorAll('#why, #ofices2, #ofices');
  const targets = [];
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Estado inicial y delays escalonados por grupo
  grupos.forEach((grupo) => {
    const hijos = grupo.querySelectorAll(':scope > .p-faden, :scope > .title, :scope > .ofices__content');
    hijos.forEach((el, i) => {
      el.classList.remove('animate__animated', 'animate__fadeInDown');
      el.style.opacity = '0';
      el.style.setProperty('--animate-duration', '700ms');
      el.dataset.delay = `${i * 0.15}s`;
      targets.push(el);
    });
  });

  if (prefersReduced) {
    targets.forEach(el => (el.style.opacity = '1'));
    return;
  }

  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        el.classList.add('animate__animated', 'animate__fadeInDown');
        el.style.opacity = '1';
        el.style.animationDelay = el.dataset.delay || '0s';
        obs.unobserve(el); // ejecutar una sola vez
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
  );

  targets.forEach(el => io.observe(el));
});