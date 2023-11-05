$(".header__toggle").click(function () {
    $(this).toggleClass('active');
    $(".header__navContainer").toggleClass('panelactive');
  });
  
$(".header__navContainer a").click(function () {
$(".header__toggle").removeClass('active');
    $(".header__navContainer").removeClass('panelactive');
});

$(window).scroll(function () {
var scrollAnimationElm = document.querySelectorAll('.scroll_up');
var scrollAnimationFunc = function () {
    for (var i = 0; i < scrollAnimationElm.length; i++) {
    var triggerMargin = 100;
    if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
        scrollAnimationElm[i].classList.add('on');
    }
    }
}
window.addEventListener('scroll', scrollAnimationFunc);
});

$(function(){
var imgHeight = $('.mv').outerHeight(); 
var header = $('.color-change'); 

$(window).on('load scroll', function(){
    if ($(window).scrollTop() < imgHeight) {
        header.removeClass('invert');
    }else {
        header.addClass('invert');
    }
});
});

const mySwiper = new Swiper('.swiper', {
    loop: true,
    speed : 600,
    slidesPerView: 1,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
    pagination: {
      el: '.swiper-pagination',
    },
   
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
   
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });