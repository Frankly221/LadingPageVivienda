    document.addEventListener('DOMContentLoaded', () => {
      const grupos = document.querySelectorAll('.div-padre');
      grupos.forEach((grupo) => {
        const hijos = grupo.querySelectorAll(':scope > .container');
        hijos.forEach((el, i) => {
          el.classList.add('animate__animated', 'animate__fadeInDown');
          el.style.animationDelay = `${i * 0.15}s`; // escalonado
          el.style.setProperty('--animate-duration', '700ms'); // velocidad
        });
      });
    });