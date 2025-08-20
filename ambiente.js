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

  // ----------------------
  // DROPDOWN AFORO
  // ----------------------
  const $dropdownBtn = $('#selected'); // el botón principal
  const $dropdownMenu = $('#dropdownMenu'); // el menú con opciones
  const $options = $$('#dropdownMenu div'); // todas las opciones

  const toggleDropdown = () => {
    $dropdownMenu.classList.toggle('show');
  };

  const selectOption = (value) => {
    $dropdownBtn.innerText = value;
    $dropdownMenu.classList.remove('show');
  };

  $dropdownBtn.addEventListener('click', toggleDropdown);

  $options.forEach(option => {
    option.addEventListener('click', () => selectOption(option.innerText));
  });

  // cerrar si clicas fuera
  document.addEventListener('click', (e) => {
    if (!$dropdownBtn.contains(e.target) && !$dropdownMenu.contains(e.target)) {
      $dropdownMenu.classList.remove('show');
    }
  });
});
