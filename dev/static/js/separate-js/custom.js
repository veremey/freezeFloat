
$(document).ready(function () {
	/*-- CLIENT SLIDER ---*/
	$('.clients__face').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		initialSlide: 1,
		centerMode: true,
		focusOnSelect: true,
		infinite: false,
		// centerPadding: '40px',
		// variableWidth: true,
		prevArrow: '.btn-prev',
		nextArrow: '.btn-next',
		asNavFor: '.clients__bottom'
	});

	$('.clients__bottom').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
		centerMode: true,
		infinite: false,
		focusOnSelect: true,
		centerPadding: '40px',
		arrows: false,
		asNavFor: '.clients__face'
	})

	$('.clients__face').on('afterChange', function(event, slick, currentSlide){
		var nextHiddenSlide = currentSlide + 3;
		var prevHiddenSlide = currentSlide - 2;
		var nextVisibleSlide = currentSlide + 2;
		var prevVisibleSlide = currentSlide - 1;

		$('[data-slick-index="'+nextHiddenSlide+'"]').addClass('is-hidden');
		$('[data-slick-index="'+prevHiddenSlide+'"]').addClass('is-hidden');
		$('[data-slick-index="'+nextVisibleSlide+'"]').removeClass('is-hidden');
		$('[data-slick-index="'+prevVisibleSlide +'"]').removeClass('is-hidden');
	});

	$('.clients__face').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		var nextVisibleSlide = currentSlide + 2;
		var prevVisibleSlide = currentSlide - 2;

		$('[data-slick-index="'+prevVisibleSlide +'"]').removeClass('is-hidden');
	});

	/*-- to the next section ---*/
	$('.js-nextSection').on('click', function(e){
		e.preventDefault();

		var next = $(this).parents('.section').next('.section');

		$('html,body').animate({
			scrollTop: next.offset().top
		}, 800, 'swing');

	} );

	/*--      --*/



});
// doc ready