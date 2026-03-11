document.querySelectorAll(".attraction-slider").forEach(function (el) {
  new Swiper(el, {
    slidesPerView: 3,
    spaceBetween: 40,
    loop: true,
    navigation: {
      nextEl: el.querySelector(".swiper-button-next"),
      prevEl: el.querySelector(".swiper-button-prev")
    },
    breakpoints: {
      320: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    }
  });
});