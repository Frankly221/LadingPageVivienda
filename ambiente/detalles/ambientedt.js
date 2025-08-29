const $ = (selector, node=document) => node.querySelector(selector);
const $$ = (selector, node=document) => node.querySelectorAll(selector);


document.addEventListener('DOMContentLoaded', () => {
  const $header = $('.header');
  const $menuBtn = $('.header__menu-btn');
  const $overlay = $('.overlay');
  const $linksHeader = $$('.header__link')

  const toggleMenu = () => {
    $header.classList.toggle('active');
  };
//comitente solo para probar
  $menuBtn.addEventListener('click', toggleMenu);
  $overlay.addEventListener('click', toggleMenu);
  $linksHeader.forEach(link => {
    link.addEventListener('click', toggleMenu);
  })

  // Lightbox para imágenes de la galería (.hijo-5)
  const $modal = $('#imageModal');
  const $modalImg = $modal?.querySelector('img');
  const $closeBtn = $modal?.querySelector('[data-close]');
  const $gallery = $('.hijo-5');

  const open = (src, alt) => {
    if (!$modal || !$modalImg) return;
    $modalImg.src = src;
    $modalImg.alt = alt || 'Vista ampliada';
    $modal.classList.add('open');
    $modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const close = () => {
    if (!$modal || !$modalImg) return;
    $modal.classList.remove('open');
    $modal.setAttribute('aria-hidden', 'true');
    $modalImg.src = '';
    document.body.style.overflow = '';
  };

  if ($gallery && $modal) {
    $gallery.addEventListener('click', (e) => {
      const img = e.target.closest('img');
      if (!img) return;
      open(img.src, img.alt);
    });
  }

  $closeBtn?.addEventListener('click', close);

  // Cerrar al hacer clic fuera del contenido
  $modal?.addEventListener('click', (e) => {
    if (e.target === $modal) close();
  });

  // Cerrar con ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && $modal.classList.contains('open')) {
      close();
    }
  });
});


