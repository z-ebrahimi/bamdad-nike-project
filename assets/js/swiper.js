const air_max_swiper = new Swiper("#air-max .swiper", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 3.07,
  spaceBetween: 10,
  loop: false,
  grabCursor: true,
  /*breakpoints: {
    // when window width is >= 576px
    576: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // when window width is >= 1400px
    1400: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },*/

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
