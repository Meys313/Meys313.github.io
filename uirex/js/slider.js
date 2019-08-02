$('.screenshots-sl').slick({
    slidesToShow: 5,
    prevArrow: "<i class='fa fa-long-arrow-left prev' aria-hidden='true'></i>",
    nextArrow: "<i class='fa fa-long-arrow-right next' aria-hidden='true'></i>",
    centerMode: true,
    centerPadding: '0px',
    responsive: [
        {
            breakpoint: 1520,
            settings: {
                slidesToShow: 4,
                centerMode: true,
                centerPadding: '1px'
              }
        },
        {
            breakpoint: 1420,
            settings: {
                slidesToShow: 3
              }
        },
        {
            breakpoint: 1020,
            settings: {
                slidesToShow: 2
              }
        },
        {
            breakpoint: 620,
            settings: {
                slidesToShow: 1
              }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                arrows: false
              }
        },
    ]
  });

  $('.clients-sl').slick({
    slidesToShow: 2,
    arrows: false,
    dots: true,
    responsive: [
        {
            breakpoint: 1170,
            settings: {
                slidesToShow: 1,
              }
        }
    ]
  });