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

// $('body, html').scrollTop(0);
/* --- Map ---*/
/*-----------------------------------------------------------*/

function initMap() {
  var myLatLng = {lat: 41.892896, lng: -87.638387};

  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.892896, lng: -87.638387},
    zoom: 15,
    styles: [
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e9e9e9"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 29
                    },
                    {
                        "weight": 0.2
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 18
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dedede"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "saturation": 36
                    },
                    {
                        "color": "#333333"
                    },
                    {
                        "lightness": 40
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    },
                    {
                        "lightness": 19
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#fefefe"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#fefefe"
                    },
                    {
                        "lightness": 17
                    },
                    {
                        "weight": 1.2
                    }
                ]
            }
        ]
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });
};


function reloadDoc() {

  /* --- add map ---*/
  /*-----------------------------------------------------------*/

	if($('#map').length){
		initMap();
	}

	$(document).ready(function () {

    /* --- full page scroll ---*/
    /*-----------------------------------------------------------*/
    if($(document).width() > 768){
      $('.barba-container').fullpage({
          //options here
          autoScrolling: true,
          onLeave: function(index, nextIndex, direction){
            if(direction == 'up') {
              $(this).removeClass('is-active');
            }
          },

          afterLoad: function(anchorLink, index){
            var thisClass = $(this).attr('class');

            if(index == 1) {
              toPosScrollbar(0, 0);
            }
            else {
              toPosScrollbar(0, 5);
            }

            if($(this).hasClass('page-footer')){
              $(this).prev('.section').addClass('is-active');
            }

          }
      });

      $('.custom-scroll').each(function(index, el) {
        var $section_wrap = $(this);

        var $scrollbar__custom;
        $section_wrap.mCustomScrollbar({
          scrollInertia: 200,
          mouseWheel:{ preventDefault: false },
          callbacks: {
            onInit: function() {
              $scrollbar__custom = $(this).find('.mCSB_container');
            },
              onTotalScroll: function() {
                toNextSlide();
              },
              onTotalScrollBack: function() {
                toPrevSlide();

              },
              whileScrolling: function() {
                var scrollTop = -parseFloat($scrollbar__custom.css('top').slice(0, -2));
            }
          }
        });
      });
    }

    function toNextSlide() {
      $.fn.fullpage.moveSectionDown();
    }

    function toPrevSlide() {
      $.fn.fullpage.moveSectionUp();
    }

    function toPosScrollbar(scrollInertia, pos) {
      $('.custom-scroll').mCustomScrollbar('scrollTo', pos, {
        scrollInertia: scrollInertia
      });
    }/* --- startscreen nav ---*/
    $('.js-to-left').click(function(e){
      e.preventDefault();
      $(this).parents('.startscreen__spiner').addClass('to-left');
    });
    $('.js-to-right').click(function(e){
      e.preventDefault();
      $(this).parents('.startscreen__spiner').addClass('to-right');
    });
    $('.js-to-start').click(function(e){
      e.preventDefault();
      $(this).parents('.startscreen__spiner').removeClass('to-right to-left');
    });
    /*-----------------------------------------------------------*/

    /* --- fixed prefooter animation ---*/
    if($('.page-footer').hasClass('active')){
      $(this).prev('.section').addClass('active');
    }
    /*-----------------------------------------------------------*/
		/* --- startscreen drow curved line ---*/
		// var akk = [];
  //   $('.startscreen').on('click', function() {
  //     console.log('click');
  //     akk = []
		// 	$('.startscreen__spiner').on("mousemove", function (e) {
		// 		var height = $('.startscreen').height();
		// 		var width = $('.startscreen__half_right').width();

		// 		var x = (((e.pageX - ($('.startscreen__half_right').offset().left)) / width) * 100).toFixed(2) + '%';
		// 		var y = (((e.pageY - $('.startscreen').offset().top) / height) * 100).toFixed(2) + '%' ;

		// 		akk.push(x, y);
  //       console.log(akk);

		// 		// console.log(akk);
  //       document.getElementById("resort").innerHTML = "You have clicked at: " + akk;
		// 	});
		// });
    /*-----------------------------------------------------------*/
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
		/*-- fixed header --*/

		// $(document).scroll(function(){

		// 	var $scroll = $('body, html').scrollTop();
		// 	console.log($scroll);

		// 	if ($scroll > 6) {
		// 		$('.page-header').addClass('page-scrolled');
		// 	} else {
		// 		$('.page-header').removeClass('page-scrolled');
		// 	}
		// });

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
			asNavFor: '.clients__bottom',
      responsive: [
        {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }]
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


