$(document).ready(function () {
  $('.foto-slider__img').magnificPopup({
    type: 'image',
    //gallery: {
    //enabled: true
    //},
  });
  document.querySelector('.icon-menu, .menu__body').onclick = function () {
    document.querySelector('.icon-menu').classList.toggle('active');
    document.querySelector('.menu__body').classList.toggle('active');
    document.querySelector('body').classList.toggle('lock');
  }
 
  // Closes the Responsive Menu on Menu Item Click
  //Закрывает отзывчивое меню при нажатии пункта меню
  $('.menu__body ul li a').click(function () {
    $('.icon-menu:visible').click();
  });

$('.item-slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 1500,
    infinite: true,
    // pauseOnHover: true, //по умолчанию
    waitForAnimate: false,
    centerMode: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: true,
          dots: false,
          // variableWidth: true,
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 785,
        settings: {
          slidesToShow: 2,
          arrows: true,
          dots: false,
        }
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          arrows: true,
          dots: false,
        }
      }
    ]
  });
});
