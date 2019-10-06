$(document).ready(function(){
  $('.work-slider').slick({
  	prevArrow: '<div class="slider-arrow-prev"></div>',
			nextArrow: '<div class="slider-arrow-next"></div>',
    infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]


  });
});

$('.feedback-slider').slick({
	  	prevArrow: '<div class="slider-feedback-arrow-prev"></div>',
				nextArrow: '<div class="slider-feedback-arrow-next"></div>'
});

