$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	items:3,
  loop:true,
  autoplay:true,
  autoplayTimeout:3000,
  margin:2,
  mouseDrag:true,
  merge:true,
  slideTransition:'.3s'
  });
  $(".btn-nav").on("click", function(){
		var target = $(this).data("target");
		$(target).toggleClass("nav__list--open")
	});

});



$(document).ready(function () {
  $('a').attr('target', 'blank');
  $('.social-button').click(function () {
    $('.social').toggle(500);
    $('.icon-bar').toggleClass('open');
  })
})

