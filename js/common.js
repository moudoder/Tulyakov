$(document).ready(function () {
  new WOW().init();

  $(".scrol-to a").on("click", function (event) {
    event.preventDefault();
    
    let id  = $(this).attr('href'),
    top = $(id).offset().top;
    top = top - 50;
    $('html').animate({scrollTop: top}, 1500);
    
  });

  $(".scrol-to").on("click", function (event) {
    event.preventDefault();
    let id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });

  $('.stages-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipe: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: $('.stages-arrow_prev'),
    nextArrow: $('.stages-arrow_next'),
    responsive: [
        {
          breakpoint: 720,
          settings: {
            slidesToShow: 1,
            autoplay: false,
            variableWidth: true,
            infinite: false,
            infinite: false,
          }
        }
      ]
   });

  if ($(window).width() < 992) {
    $('.practices-row').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipe: true,
      prevArrow: $('.practices-arrow_prev'),
      nextArrow: $('.practices-arrow_next'),
     });
  }

  $('.questions-block').on('click', function() {
    $(this).toggleClass('questions-line-active');
  })

})