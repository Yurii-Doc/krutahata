$(document).ready(function () {
  document.querySelector('.icon-menu, .menu__body').onclick = function () {
    document.querySelector('.icon-menu').classList.toggle('active');
    document.querySelector('.menu__body').classList.toggle('active');
    document.querySelector('body').classList.toggle('lock');
  }

  //прокрутка (скрол)

  const animItems = document.querySelectorAll("._anim-items");

  if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params) {
      for (let index = 0; index < animItems.length; index++) {
        const animItem = animItems[index];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 4;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;
        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - awindow.innerHeight / animStart
        }

        if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
          animItem.classList.add("_active");
        } else {
          if (!animItem.classList.contains('_anim-no-hide')) {    //отключаем повторную прокрутку(появление скрола)//
            animItem.classList.remove("_active");                 //повторного анимирования//
          }
        }
      }
    }
    function offset(el) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, Left: rect.Left + scrollLeft }
    }

    setTimeout(() => {      //задержка вызова функции//
      animOnScroll();
    }, 400);

  }

  //плавной прокрутки//
  $("a.page-scroll").bind("click", function (e) {
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
      scrollTop: $(anchor).offset().top - 0
    }, 1500);
  });


  // Closes the Responsive Menu on Menu Item Click
  // Закрывает отзывчивое меню при нажатии пункта меню
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
  $('.foto-slider__img').magnificPopup({
    type: 'image',
    //gallery: {
    //enabled: true
    //},
  });
});
