var swiper = new Swiper(".home-sliding-cards", {
  slidesPerView: 3,
  spaceBetween: 30,
  centerSlide: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
});