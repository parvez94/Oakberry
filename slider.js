var heroSwiper = new Swiper(".heroSwiper", {
  loop: true,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
})

// Grid
var reviewSwiper = new Swiper(".reviewSwiper", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loopFillGroupWithBlank: true,
  breakpoints: {
    1007: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
})

// Burger menu
const burger = document.querySelector(".burger_menu")
const nav = document.querySelector(".navigation")

burger.addEventListener("click", (e) => {
  nav.classList.toggle("fold")

  burger.classList.toggle("toggle")
})
