$(document).ready(function(){
// =========================================
// filter tooltip
// =========================================
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
// =========================================
// catagory slider
// =========================================

$('.catagory_slider').slick({
  dots: false,
  infinite: false,
  prevArrow:'<i class="fa fa-chevron-left"></i>',
  nextArrow:'<i class="fa fa-chevron-right"></i>',
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


// main document function end..............
});






// =========================================
// full window scoll top
// =========================================
$(window).scroll(function(){

	if($(this).scrollTop()>200){
		$("#gotoup").fadeIn();
	}else{
		$("#gotoup").fadeOut();
	}	
});

$("#gotoup").click(function(){
		$("html, body").animate({scrollTop:0}, 2000);
});




