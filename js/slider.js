$(document).ready(function(){
	$('.slider').slick({
      waitForAnimate:false,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      dots: true,
      appendDots: '.header__dots',
      
      }
      
   )
});

$(document).ready(function(){
	$('.slider__people').slick({
      waitForAnimate:false,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      dots: false,
      appendArrows: '.block__arrows',
      adaptiveHeight: true,
      }
      
   )
});

