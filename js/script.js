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

  $('.foto-slider').slick({

    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplay: false,
    autoplaySpeed: 3000,
    speed: 300,
    centerMode: false,
    waitForAnimate: false,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          centerMode: true,
          variableWidth: true,
          slidesToShow: 4,
          arrows: true,
          dots: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          variableWidth: true,
          slidesToShow: 3,
          arrows: true,
          dots: false,
        }
      },
      {
        breakpoint: 700,
        settings: {
          centerMode: false,
          variableWidth: true,
          slidesToShow: 2,
          arrows: true,
          dots: false,
        }
      },
      {
        breakpoint: 650,
        settings: {
          centerMode: true,
          variableWidth: true,
          slidesToShow: 1,
          arrows: true,
          dots: false,
        }
      },
      }
    ]
  });
});
