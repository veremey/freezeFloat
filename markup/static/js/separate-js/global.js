var Global = new GlobalClass();

function GlobalClass() {
	var globalThis = this;

	/*--- close something ---*/
	/*--------------------------------------------------*/
	this.close = function () {
		var closeBtn = document.querySelector('.js-close');

		closeBtn.onclick = function () {
			var closedItem = this.getAttribute('data-close').split(' ');

			for (var i = closedItem.length - 1; i >= 0; i--) {
				var close = document.querySelector( '.' + closedItem[i] );
				close.classList.remove('is-active');
			}

		};
	}

	/*--- open something ---*/
	/*--------------------------------------------------*/
	this.open = function () {
		var openBtn = document.querySelector('.js-open');

		openBtn.onclick = function () {
			var openItem = this.getAttribute('data-open').split(' ');

			for (var i = openItem.length - 1; i >= 0; i--) {
				var open = document.querySelector( '.' + openItem[i] );
				open.classList.remove('is-active');
			}

		};
	}

	/*--- open ppp ---*/
	/*--------------------------------------------------*/
	this.ppp = function () {
		var pppBtn = document.querySelector('.js-ppp');
		// var ppp = document.getElementsByClassName('ppp');

		pppBtn.onclick = function () {
			var ppp = document.querySelector('.ppp');
			var pppWrap = document.querySelectorAll('.ppp-wrap');
			var pppItem = this.getAttribute('data-ppp').split(' ');

			ppp.classList.remove('is-active');
			ppp.classList.add('is-active');

			[].forEach.call(pppWrap, function (el) {
				el.classList.remove('is-active');
			} );

			for (var i = pppItem.length - 1; i >= 0; i--) {
				var pppWindow = document.querySelector( '.' + pppItem[i] );
				pppWindow.classList.add('is-active');
			}

		};
	}
	/*-- height like width  ---*/
	/*----------------------------------------------------*/
	this.heightLikeWidth = function (opt) {
		var el = $(opt.el);
		var widthEl = el.width();

		el.css({ 'height' : widthEl});
	}


} /*- end global -*/




/*-----     init global      ----*/

Global.ppp();