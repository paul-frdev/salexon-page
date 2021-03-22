$(function () {

  $('.header-top__lang-link').on('click', function (e) {
    e.preventDefault();
    $('.header-top__lang-link').removeClass('header-top__lang-link--active');
    $(this).addClass('header-top__lang-link--active');
  });

  $('.menu__list-link').on('click', function (e) {
    e.preventDefault();
    $('.menu__list-link').removeClass('menu__list-link--active');
    $(this).addClass('menu__list-link--active');
  });

  $('.footer-lang__link').on('click', function (e) {
    e.preventDefault();
    $('.footer-lang__link').removeClass('footer-lang__link--active');
    $(this).addClass('footer-lang__link--active');
  });

  $('.tabs__title-item').on('click', function (e) {

    e.preventDefault();
    $('.tabs__title-item').removeClass('tabs__title-item--active');
    $(this).addClass('tabs__title-item--active');

    $('.tabs__content-wrapper').removeClass('tabs__content-wrapper--active');
    $($(this).attr('href')).addClass('tabs__content-wrapper--active');
  });

  $('.slider-active').slick({
    slidesToShow: 1,
    arrows: true,
    dots: false,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/slide-left.png" alt="slide left"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/slide-right.png" alt="slide right"></button>',
  });
  $('.slider-active').slick('setPosition'); 
  

});