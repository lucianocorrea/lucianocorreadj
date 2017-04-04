var w = window, d = document;

function isMobile() { return (/android|webos|iphone|ipad|ipod|blackberry|mobile/i.test(navigator.userAgent.toLowerCase())); }

function detectMobile(ctn) { if(isMobile()) { d.querySelector('body').classList.add(ctn); } }

function Adaptar(ctn, responsive) {
	var selector = d.querySelectorAll(ctn), self = this;

	if(selector.length > 0) {
		var info = {};
		for (var i = selector.length - 1; i >= 0; i--) {
			var elem = selector[i];

			alterar(elem);
			if(isMobile()) {
				w.addEventListener('orientationchange', function() {
					if(info.contador) clearTimeout(info.contador);
					info.contador = setTimeout(function() { alterar(elem); }, 400);
				});
			} else {
				w.addEventListener('resize', function() {
					if(info.contador) clearTimeout(info.contador);
					info.contador = setTimeout(function() { alterar(elem); }, 400);
				});
			}
		}


		function alterar(elem) {
			elem.style.minHeight = w.innerHeight +'px';
		}
	}
}

function navFix(ctn) {
	if(!isMobile()) {
		var selector = document.querySelector(ctn), 
		info = {};

		w.addEventListener('scroll', function() {
			if(info.contador) clearTimeout(info.contador);
			info.contador = setTimeout(function() { alterar(); }, 10);

		});

		function alterar() {
			var scr = w.scrollY || document.body.scrollTop,
			start = w.innerHeight;
			
			if(scr >= start) {
				selector.setAttribute('data-menufixo','true');
			} else if(scr < (start - selector.clientHeight) ) {
				selector.removeAttribute('data-menufixo');
			}
		}
	}
}

function scrollTop(ctn, timeout) {
	var elem = document.querySelector(ctn), info = {};
	window.addEventListener('scroll', function(e) {
		if(info.contador) clearTimeout(info.contador);
		info.contador = setTimeout(function() { scrollar(); }, 50);
	});

	function scrollar() {
		var top = window.scrollY || d.body.scrollTop;
		if(top > 0) {
			elem.setAttribute('data-scroll', 'true');
			if(info.time) clearTimeout(info.time);
			info.time = setTimeout(function() { 
				if(elem.getAttribute('data-scroll')) elem.removeAttribute('data-scroll'); 
			}, timeout);
		} else {
			if(elem.getAttribute('data-scroll')) elem.removeAttribute('data-scroll'); 
		}
	}
}

function pagNav(ctn) {
	$(ctn).bind('click', function(event) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
}

function preLoader(ctn) {
	var selector = $(ctn);
	$(window).on('load', function() {
		selector.addClass('finish');
		setTimeout(function() { selector.remove(); }, 2000);
	});
}

function fecharMenu(container) {
	$(container).on('click', 'a.nav-url', function(e) {
		setTimeout(function() {
			$('.nav-mobile').trigger('click');
		}, 1000);
	});
}



