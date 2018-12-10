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

    $('.header__burger').toggleClass('is-active');
    $('.header__wrap').toggleClass('is-active');

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

if($(document).width() > 850) {
  Barba.Pjax.getTransition = function() {
    return ExpandTransition;
  };

  Barba.Pjax.start();
}
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
    /* --- header menu mob ---*/

    $('.header__burger').on('touchstart', function(e) {
      e.stopPropagation();
      $(this).toggleClass('is-active');
      $('.header__wrap').toggleClass('is-active');
      console.log('click');
    });

    $(document).on('scroll', function(){
      if($(document).width() <= 850) {
        if($(window).scrollTop() > 10){
          $('.page-header').addClass('is-fixed');
        } else {
          $('.page-header').removeClass('is-fixed');
        }
      } else {
        $('.page-header').removeClass('is-fixed');
      }
    });
    /*-----------------------------------------------------------*/

    /* --- full page scroll ---*/
    /*-----------------------------------------------------------*/
    /* -- hide fullpage
    if($(document).width() > 850){
      $('.startscreen-mob').remove();

      $('.barba-container').fullpage({
          scrollingSpeed: 900,
          onLeave: function(index, nextIndex, direction){
            if(direction == 'up') {
              $(this).removeClass('is-active');
            }
          },

          afterLoad: function(anchorLink, index){
            $.fn.fullpage.setAllowScrolling(false);

            var thisClass = $(this).attr('class');
            var hasScrollBar = $(this).find('.custom-scroll');

            if(!$(this).hasClass('mCS_no_scrollbar')) {
              toPosScrollbar(0, 5);
            }

            // toPosScrollbar(0, 0);

            if($(this).hasClass('page-footer')){
              $(this).prev('.section').addClass('is-active');
            }

            setTimeout(function(){
              $.fn.fullpage.setAllowScrolling(true);
            }, 800);

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
    }

    ## end hide fullPage scroll */

    /* --- startscreen nav ---*/
    $('.js-to-left').click(function(e){
      e.preventDefault();
      if ($(this).hasClass('is-active')) {

        $('.startscreen__nav_link').removeClass('is-active');
        $(this).parents('.startscreen__spiner').removeClass('to-right to-left');

        // $(this).parents('.startscreen__spiner').removeClass('to-left');
        $(this).html('<svg class="leftArrow" viewBox="0 0 18 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M12.1209908,0.180471502 C11.8757701,-0.0601571674 11.4676405,-0.0601571674 11.2138457,0.180471502 C10.968625,0.412970825 10.968625,0.799927739 11.2138457,1.03188511 L15.8135916,5.39300876 L0.635058749,5.39300876 C0.281232137,5.39355072 0,5.6601933 0,5.99566435 C0,6.3311354 0.281232137,6.60644928 0.635058749,6.60644928 L15.8135916,6.60644928 L11.2138457,10.9594436 C10.968625,11.2000723 10.968625,11.5875711 11.2138457,11.8195285 C11.4676405,12.0601572 11.8763417,12.0601572 12.1209908,11.8195285 L17.8096539,6.42597778 C18.0634487,6.19347846 18.0634487,5.80652154 17.8096539,5.57456418 L12.1209908,0.180471502 Z"></path></svg> Freeze');

      } else {

        var self = $(this);
        $('.startscreen__nav_link').removeClass('is-active');
        $(this).parents('.startscreen__spiner').removeClass('to-right to-left');

        $('.startscreen__nav_right').html('Float <svg viewBox="0 0 18 12" height="12" width="18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="rightArrow"><path d="M12.1209908,0.180471502 C11.8757701,-0.0601571674 11.4676405,-0.0601571674 11.2138457,0.180471502 C10.968625,0.412970825 10.968625,0.799927739 11.2138457,1.03188511 L15.8135916,5.39300876 L0.635058749,5.39300876 C0.281232137,5.39355072 0,5.6601933 0,5.99566435 C0,6.3311354 0.281232137,6.60644928 0.635058749,6.60644928 L15.8135916,6.60644928 L11.2138457,10.9594436 C10.968625,11.2000723 10.968625,11.5875711 11.2138457,11.8195285 C11.4676405,12.0601572 11.8763417,12.0601572 12.1209908,11.8195285 L17.8096539,6.42597778 C18.0634487,6.19347846 18.0634487,5.80652154 17.8096539,5.57456418 L12.1209908,0.180471502 Z" id="Path"></path></g></svg>');

          setTimeout(function(){
            self.parents('.startscreen__spiner').addClass('to-left');
            self.addClass('is-active');

            self.html('Back <svg viewBox="0 0 18 12" height="12" width="18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="rightArrow"><path d="M12.1209908,0.180471502 C11.8757701,-0.0601571674 11.4676405,-0.0601571674 11.2138457,0.180471502 C10.968625,0.412970825 10.968625,0.799927739 11.2138457,1.03188511 L15.8135916,5.39300876 L0.635058749,5.39300876 C0.281232137,5.39355072 0,5.6601933 0,5.99566435 C0,6.3311354 0.281232137,6.60644928 0.635058749,6.60644928 L15.8135916,6.60644928 L11.2138457,10.9594436 C10.968625,11.2000723 10.968625,11.5875711 11.2138457,11.8195285 C11.4676405,12.0601572 11.8763417,12.0601572 12.1209908,11.8195285 L17.8096539,6.42597778 C18.0634487,6.19347846 18.0634487,5.80652154 17.8096539,5.57456418 L12.1209908,0.180471502 Z" id="Path"></path></g></svg>');
          }, 800);

      }
    });

    $('.js-to-right').click(function(e){
      e.preventDefault();

      if ($(this).hasClass('is-active')) {

        $('.startscreen__nav_link').removeClass('is-active');
        $(this).parents('.startscreen__spiner').removeClass('to-right to-left');

        $(this).html('Float <svg viewBox="0 0 18 12" height="12" width="18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="rightArrow"><path d="M12.1209908,0.180471502 C11.8757701,-0.0601571674 11.4676405,-0.0601571674 11.2138457,0.180471502 C10.968625,0.412970825 10.968625,0.799927739 11.2138457,1.03188511 L15.8135916,5.39300876 L0.635058749,5.39300876 C0.281232137,5.39355072 0,5.6601933 0,5.99566435 C0,6.3311354 0.281232137,6.60644928 0.635058749,6.60644928 L15.8135916,6.60644928 L11.2138457,10.9594436 C10.968625,11.2000723 10.968625,11.5875711 11.2138457,11.8195285 C11.4676405,12.0601572 11.8763417,12.0601572 12.1209908,11.8195285 L17.8096539,6.42597778 C18.0634487,6.19347846 18.0634487,5.80652154 17.8096539,5.57456418 L12.1209908,0.180471502 Z" id="Path"></path></g></svg>');
      } else {
        var self = $(this);
        $('.startscreen__nav_link').removeClass('is-active');
        $(this).parents('.startscreen__spiner').removeClass('to-right to-left');

         $('.startscreen__nav_left').html('<svg class="leftArrow" viewBox="0 0 18 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M12.1209908,0.180471502 C11.8757701,-0.0601571674 11.4676405,-0.0601571674 11.2138457,0.180471502 C10.968625,0.412970825 10.968625,0.799927739 11.2138457,1.03188511 L15.8135916,5.39300876 L0.635058749,5.39300876 C0.281232137,5.39355072 0,5.6601933 0,5.99566435 C0,6.3311354 0.281232137,6.60644928 0.635058749,6.60644928 L15.8135916,6.60644928 L11.2138457,10.9594436 C10.968625,11.2000723 10.968625,11.5875711 11.2138457,11.8195285 C11.4676405,12.0601572 11.8763417,12.0601572 12.1209908,11.8195285 L17.8096539,6.42597778 C18.0634487,6.19347846 18.0634487,5.80652154 17.8096539,5.57456418 L12.1209908,0.180471502 Z"></path></svg> Freeze');

        setTimeout(function() {
          self.parents('.startscreen__spiner').addClass('to-right');
          self.addClass('is-active');
          self.html('<svg class="leftArrow" viewBox="0 0 18 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M12.1209908,0.180471502 C11.8757701,-0.0601571674 11.4676405,-0.0601571674 11.2138457,0.180471502 C10.968625,0.412970825 10.968625,0.799927739 11.2138457,1.03188511 L15.8135916,5.39300876 L0.635058749,5.39300876 C0.281232137,5.39355072 0,5.6601933 0,5.99566435 C0,6.3311354 0.281232137,6.60644928 0.635058749,6.60644928 L15.8135916,6.60644928 L11.2138457,10.9594436 C10.968625,11.2000723 10.968625,11.5875711 11.2138457,11.8195285 C11.4676405,12.0601572 11.8763417,12.0601572 12.1209908,11.8195285 L17.8096539,6.42597778 C18.0634487,6.19347846 18.0634487,5.80652154 17.8096539,5.57456418 L12.1209908,0.180471502 Z"></path></svg> Back');
        }, 800 )



      }
    });

    /*-----------------------------------------------------------*/

    /* --- starscreen mobile ---*/
    if($('.startscreen-mob__slider').length){
      $('.startscreen-mob__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        focusOnSelect: true,
        infinite: false,
        prevArrow: '.js-go-left',
        nextArrow: '.js-go-right',
      });
    }

    $('.startscreen-mob__slider').on('afterChange', function(event, slick, currentSlide){
      if(currentSlide == 0){
        $('.startscreen__nav').addClass('startscreen-first');
      } else if(currentSlide == 2){
        $('.startscreen__nav').addClass('startscreen-last');
      } else {
        $('.startscreen__nav').removeClass('startscreen-first startscreen-last');
      }
    });
    /*-----------------------------------------------------------*/

    /* --- fixed prefooter animation ---*/
    if($('.page-footer').hasClass('active')){
      $(this).prev('.section').addClass('active');
    }
    /*-----------------------------------------------------------*/

		/*-- header nav */
		$('.header__item').on('click', function() {
			$('.header__item').removeClass('is-active');
			// $(this).addClass('is-active');
			var elHeight = $(this).outerHeight() - 12;
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

      $('[data-slick-index="'+nextHiddenSlide+'"]').addClass('is-hidden');
			$('[data-slick-index="'+prevHiddenSlide+'"]').addClass('is-hidden');
		});

		$('.clients__face').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      var nextHiddenSlide = currentSlide + 3;
      var prevHiddenSlide = currentSlide - 3;
			var nextVisibleSlide = currentSlide + 2;
			var prevVisibleSlide = currentSlide - 2;

      $('[data-slick-index="'+nextHiddenSlide+'"]').addClass('is-hidden');
      $('[data-slick-index="'+prevHiddenSlide+'"]').addClass('is-hidden');
      $('[data-slick-index="'+prevVisibleSlide +'"]').removeClass('is-hidden');
			$('[data-slick-index="'+nextVisibleSlide +'"]').removeClass('is-hidden');
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

     /* --- doc resize  ---*/
    $('document').resize(function(){
      if($(document).width() > 850){
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
              var hasScrollBar = $(this).find('.custom-scroll');

              if(!$(this).hasClass('mCS_no_scrollbar')) {
                toPosScrollbar(0, 0);
              }

              // toPosScrollbar(0, 0);


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
    });
     /*-----------------------------------------------------------*/
     /* --- contact form ---*/
     $('.formContact__input, .formContact__text').change(function () {
        var $this = $(this);

        if( $this.val().length > 0 ) {
          $this.addClass('has-content');
        } else {
          $this.removeClass('has-content');
        }
      });
     /*-----------------------------------------------------------*/




	/*--      --*/

	});
	// doc ready


};

reloadDoc();


