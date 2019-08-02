$('.home-slider').slick({
    arrows: false,
    dots: true,
    //dotsClass: 'home-slider-dots',
    autoplay: true,
    autoplaySpeed: 7000
  });


  $('.reviews-sl').slick({
    asNavFor: '.reviews-sl-min',
    autoplay: true,
    autoplaySpeed: 7000,
    fade: true,
    arrows: false
  });

  $('.reviews-sl-min').slick({
    asNavFor: '.reviews-sl',
    slidesToShow: 5,
    arrows: false,
    focusOnSelect: true
  });