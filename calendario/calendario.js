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

    // Variable para guardar el estado previo del usuario (solo para desktop)
    let estadoDesktopPrevio = 'lista'; // Por defecto lista

    // Función para cambiar vista
    const cambiarVista = (esTabla) => {
      if (esTabla) {
        container.classList.add('grid-3');
        tablaBtn?.classList.add('active');
        listaBtn?.classList.remove('active');
      } else {
        container.classList.remove('grid-3');
        listaBtn?.classList.add('active');
        tablaBtn?.classList.remove('active');
      }
    };

    // Función para verificar el tamaño de pantalla
    const verificarTamañoPantalla = () => {
      if (window.innerWidth < 768) {
        // En móvil, forzar vista tabla
        cambiarVista(true);
        // Ocultar los botones de vista en móvil
        document.querySelector('.vista')?.style.setProperty('display', 'none');
      } else {
        // En desktop, mostrar botones y restaurar estado previo
        document.querySelector('.vista')?.style.removeProperty('display');
        
        // Restaurar el estado que tenía antes de entrar a móvil
        if (estadoDesktopPrevio === 'tabla') {
          cambiarVista(true);
        } else {
          cambiarVista(false);
        }
      }
    };

    // Vista lista (una debajo de otra, comportamiento original)
    listaBtn?.addEventListener('click', () => {
      if (window.innerWidth >= 768) { // Solo permitir en desktop
        estadoDesktopPrevio = 'lista'; // Guardar estado
        cambiarVista(false);
      }
    });

    // Vista tabla (3 por fila)
    tablaBtn?.addEventListener('click', () => {
      if (window.innerWidth >= 768) {
        estadoDesktopPrevio = 'tabla'; // Guardar estado
      }
      cambiarVista(true);
    });

    // Inicializar con vista lista por defecto
    cambiarVista(false);

    // Ejecutar al cargar la página
    verificarTamañoPantalla();

    // Escuchar cambios en el tamaño de la ventana
    window.addEventListener('resize', verificarTamañoPantalla);
  }
});
