const $ = (selector, node=document) => node.querySelector(selector);
const $$ = (selector, node=document) => node.querySelectorAll(selector);

document.addEventListener('DOMContentLoaded', () => {
  const $header = $('.header');
  const $menuBtn = $('.header__menu-btn');
  const $overlay = $('.overlay');
  const $linksHeader = $$('.header__link');

  const toggleMenu = () => {
    $header.classList.toggle('active');
  };

  $menuBtn.addEventListener('click', toggleMenu);
  $overlay.addEventListener('click', toggleMenu);
  $linksHeader.forEach(link => {
    link.addEventListener('click', toggleMenu);
  });



  const listaBtn = document.querySelector('.vista .lista');
  const tablaBtn = document.querySelector('.vista .tabla');

  // Encuentra todas las secciones que contienen una sala
  const salaSections = Array.from(document.querySelectorAll('section'))
    .filter(sec => sec.querySelector('.sala, .sala2'));

  if (salaSections.length) {
    // Crea un contenedor y mueve dentro todas las secciones de salas (solo una vez)
    let container = document.querySelector('.salas-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'salas-container';
      salaSections[0].before(container);
      salaSections.forEach(sec => container.appendChild(sec));
    }

    // Vista lista (una debajo de otra, comportamiento original)
    listaBtn?.addEventListener('click', () => {
      container.classList.remove('grid-3');
    });

    // Vista tabla (3 por fila)
    tablaBtn?.addEventListener('click', () => {
      container.classList.add('grid-3');
    });
  }
});
