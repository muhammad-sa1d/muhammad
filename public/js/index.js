var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 18,
  centeredSlides: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  navigation: {
    nextEl: ".swiper-prev",
    prevEl: ".swiper-next",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    620: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

var swiper = new Swiper(".Kunden-Swiper", {
  slidesPerView: 3,
  spaceBetween: 18,
  centeredSlides: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  navigation: {
    nextEl: ".swiper-botton-pre",
    prevEl: ".swiper-botton-nex",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    620: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
let btn1 = document.querySelectorAll(".btn-js-down");
let main1 = document.querySelectorAll(".main-js-down");

btn1.forEach((item, index) => {
  item.addEventListener("click", function () {
    main1[index].classList.toggle("hidden");
  });
});
