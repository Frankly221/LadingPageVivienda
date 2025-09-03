const $ = (selector, node=document) => node.querySelector(selector);
const $$ = (selector, node=document) => node.querySelectorAll(selector);

const swiperEl = $('#ofices-swiper');
const swiperParams = {
  slidesPerView: 1,
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
};
Object.assign(swiperEl, swiperParams);

swiperEl.initialize();
// nuevo
const swiperEl2 = $('#ofices-swiper2');
const swiperParams2 = {
  slidesPerView: 1,
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
};
Object.assign(swiperEl2, swiperParams2);

swiperEl2.initialize();
// fin del nuevo

document.addEventListener('DOMContentLoaded', () => {
  const $header = $('.header');
  const $menuBtn = $('.header__menu-btn');
  const $overlay = $('.overlay');
  const $linksHeader = $$('.header__link')

  const toggleMenu = () => {
    $header.classList.toggle('active');
  };

  $menuBtn.addEventListener('click', toggleMenu);
  $overlay.addEventListener('click', toggleMenu);
  $linksHeader.forEach(link => {
    link.addEventListener('click', toggleMenu);
  })
});

const $swiperImportant = $('#important-swiper');
const $btnNextImportant = $('#important .btn-slider.next');
const $btnPrevImportant = $('#important .btn-slider.prev');

$btnNextImportant.addEventListener('click', () => {
  $swiperImportant.swiper.slideNext();
});

$btnPrevImportant.addEventListener('click', () => {
  $swiperImportant.swiper.slidePrev();
});

const $swiperofice = $('#ofices-swiper');
const $btnNextofice = $('#ofices .btn-slider.next');
const $btnPrevofice = $('#ofices .btn-slider.prev');

//agregando el nuevo
const $swiperofice2 = $('#ofices-swiper2');
const $btnNextofice2 = $('#ofices2 .btn-slider.next2');
const $btnPrevofice2= $('#ofices2 .btn-slider.prev2');

$btnNextofice2.addEventListener('click', () => {
  $swiperofice2.swiper.slideNext();
});


$btnPrevofice2.addEventListener('click', () => {
  $swiperofice2.swiper.slidePrev();
});


//fin del nuevo


$btnNextofice.addEventListener('click', () => {
  $swiperofice.swiper.slideNext();
});

$btnPrevofice.addEventListener('click', () => {
  $swiperofice.swiper.slidePrev();
});

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('chatbot-btn');
  const container = document.getElementById('chatbot-container');
  if (!btn || !container) return;

  btn.addEventListener('click', () => {
    container.classList.toggle('open');
  });

  // Opcional: cerrar con ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') container.classList.remove('open');
  });
});
