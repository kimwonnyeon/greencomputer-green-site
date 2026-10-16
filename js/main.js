//상품 스와이퍼
const proSwiper = new Swiper(".productSwiper", {
  slidesPerView: 3,
  spaceBetween: 24,
  loop: true,
  // 반응형
  breakpoints: {
    0: {
      slidesPerView: 1.3,
      spaceBetween: 15,
    },
    390: {
      slidesPerView: 2.3,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3.3,
      spaceBetween: 24,
    },
  },
});
// 모바일 메뉴
const hambar = document.querySelector(".hamburger");
const mbMenu = document.querySelector("#mobile-menu")
const overlay=document.querySelector(".over-lay");
hambar.addEventListener("click", ()=>{
   mbMenu.classList.toggle("active");
   overlay.classList.toggle("active");
   hambar.classList.toggle("active");

})