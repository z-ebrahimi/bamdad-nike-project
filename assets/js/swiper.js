//air-max-sliders
const air_max_swiper = new Swiper("#air-max .swiper", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 10,
  loop: false,
  grabCursor: true,
  breakpoints: {
    // when window width is >= 576px
    576: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 3.07,
      spaceBetween: 10,
    },
    // when window width is >= 1400px
    1400: {
      slidesPerView: 3.5,
      spaceBetween: 10,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


//gear-up-section-sliders:
//1-men-swiper
const gear_up_men_swiper = new Swiper("#men-swiper .swiper", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 5,
  loop: false,
  grabCursor: true,
  breakpoints: {
    // when window width is >= 576px
    576: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // when window width is >= 1400px
    1400: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


//2-women-swiper
const gear_up_women_swiper = new Swiper("#women-swiper .swiper", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 5,
  loop: false,
  grabCursor: true,
  breakpoints: {
    // when window width is >= 576px
    576: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // when window width is >= 1400px
    1400: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
