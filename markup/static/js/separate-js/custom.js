var barbaShort, barbaWide;
function stopBarbaAnimation() {
  	clearTimeout(barbaShort);
  	clearTimeout(barbaWide);
}

var ExpandTransition = Barba.BaseTransition.extend({
  start: function() {
    Promise
      .all([this.newContainerLoading, this.fadeOut()])
      .then(this.showNewPage.bind(this));
  },

  fadeOut: function() {
  	$('.page').addClass('add-wave');

  	barbaShort = setTimeout(function() {
    		$('.page').removeClass('add-wave');
    		$('.page').addClass('after-wave');
    	}, 800);
  	barbaWide = setTimeout(function() {
    		$('.page').removeClass('after-wave');
    	}, 1000);

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

    $el.animate({ opacity: 1 }, 400, function() {

      _this.done();
    });
  },

  showNewPage: function() {
  	var urlAfterSlash = window.location.pathname.split("/")[1];
  	// console.log(urlAfterSlash);

  	if(urlAfterSlash == 'main.html' ) {
  		$('.page-header').removeClass('header-inner');
  		$('.header__spin').css({
  			'width' : '0'
  		});
  	} else {
  		$('.page-header').addClass('header-inner');
  	}

  	$(window).scrollTop(0);
  	document.body.scrollTop = 0;


  	reloadDoc();

    this.done();
  }
});

Barba.Pjax.getTransition = function() {
  return ExpandTransition;
};

Barba.Pjax.start();


function reloadDoc() {
	$(document).ready(function () {
		/*-- header nav */
		$('.header__item').on('click', function() {
			$('.header__item').removeClass('is-active');
			// $(this).addClass('is-active');
			var elHeight = $(this).height();
			var elWidthHalf = $(this).outerWidth() / 2;
			var top = $(this).offset().top - $(this).offsetParent().offset().top + elHeight + 4;
			var left = $(this).offset().left - $(this).offsetParent().offset().left + elWidthHalf / 2;

			$('.header__spin').css({
				'top' : top,
				'left' : left,
				'width' : elWidthHalf
			});

			stopBarbaAnimation();
		});
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

		});

		/*--   wave button    --*/

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

};

reloadDoc();
