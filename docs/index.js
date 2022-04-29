AOS.init();
$(document).ready(function () {
  var currentPosition = parseInt($(".quickmenu").css("top"));
  $(window).scroll(function () {
    var position = $(window).scrollTop();
    $(".quickmenu")
      .stop()
      .animate(
        {
          top: position + currentPosition + "px",
        },
        800
      );
  });
});

function SwiperBox1__init() {
  /*
    const swiper = new Swiper('.swiper-box-1 .swiper', {
      loop: true,

      // If we need pagination
      pagination: {
        el: '.swiper-box-1 .swiper-pagination',
        clickable: true
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-box-1 .swiper-box-1__button-next',
        prevEl: '.swiper-box-1 .swiper-box-1__button-prev',
      },
    });
    */

  const swiper = new Swiper(".swiper-box-1 .swiper", {
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-box-1 .swiper-pagination",
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-box-1 .swiper-box-1__button-next",
      prevEl: ".swiper-box-1 .swiper-box-1__button-prev",
    },
    spaceBetween: 500,
  });
}

SwiperBox1__init();
