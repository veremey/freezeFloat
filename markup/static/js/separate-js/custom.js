var ExpandTransition = Barba.BaseTransition.extend({
  start: function() {
    Promise
      .all([this.newContainerLoading, this.fadeOut()])
      .then(this.showNewPage.bind(this));
  },

  fadeOut: function() {
  	$('.page').addClass('add-wave');
  	setTimeout(function() {
    		$('.page').removeClass('add-wave');
    		$('.page').addClass('after-wave');
    	}, 800);
  	setTimeout(function() {
    		$('.page').removeClass('after-wave');
    	}, 2000);
    return $(this.oldContainer).animate({ opacity: 0 }).promise();
  },

  fadeIn: function() {
    var _this = this;
    var $el = $(this.newContainer);

    $(this.oldContainer).hide();

    $el.css({
      visibility : 'visible',
      opacity : 0
    });
    // function()({
    // 	setTimeout(function() {
    // 		$('.page').removeClass('add-wave');
    // 	}, 800);
    // });

    $el.animate({ opacity: 1 }, 400, function() {

      _this.done();
    });
  },

  showNewPage: function() {
  	$(window).scrollTop(0);
  	document.body.scrollTop = 0;
    this.done();
  }
});

Barba.Pjax.getTransition = function() {
  return ExpandTransition;
};

Barba.Pjax.start();


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

	/*--   wavw button    --*/

	$('.wave-btn')
		.on('mouseenter', function(e) {
			var parentOffset = $(this).offset(),
					relX = e.pageX - parentOffset.left,
					relY = e.pageY - parentOffset.top;
			$(this).find('em').css({top:relY, left:relX})
		})
		.on('mouseout', function(e) {
			var parentOffset = $(this).offset(),
					relX = e.pageX - parentOffset.left,
					relY = e.pageY - parentOffset.top;
			$(this).find('em').css({top:relY, left:relX})
		});


	/*--      --*/



});
// doc ready