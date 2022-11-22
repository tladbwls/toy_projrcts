const swiper = new Swiper(".swiper", {
  // Optional parameters
  //direction: "vertical", //가로, 세로 슬라이드 이동 조정 옵션
  loop: true,

  // If we need pagination // 인디케이터 표시 옵션
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar 스크롤바 보이는 옵션
  //   scrollbar: {
  //     el: ".swiper-scrollbar",
  //   },
});
