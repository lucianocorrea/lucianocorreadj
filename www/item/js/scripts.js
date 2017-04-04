(function($) {

	$(window).on('load', function() {

		detectMobile('is-mobile');
		Adaptar('.adaptar');
		scrollTop('.btn-topo', 2000);

		// Fancybox
		$(".fancybox").fancybox({
		  padding: 0,
		  helpers: {
		    overlay: {
		      locked: false
		    }
		  }
		});

		var slickGrid = $('.slick-grid');
		
		// Grid Parceiros
		slickGrid.slick({
			autoplay: false,
			infinite: true,
			speed: 700,
			slidesToShow: 3,
			slidesToScroll: 3,
			dots: true,
			responsive: [
		    {
		      breakpoint: 992,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2,
		        infinite: true,
		        dots: true
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        infinite: true,
		        dots: false
		      }
		    }
		    ]
		});
		

		$('#nav-menu').on('click', 'a.nav-url', function(e) {
			var wH = $('#nav-menu').hasClass('in');
			if(wH) $('.nav-mobile').trigger('click');
		});

	});


})(jQuery);