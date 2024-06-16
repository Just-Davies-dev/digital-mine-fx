if (typeof(profitGraf) == 'undefined')
	profitGraf = [];
if (typeof(plan1Graf) == 'undefined')
	plan1Graf = plan2Graf = plan3Graf = plan4Graf = [];

var $wind = $(window);

Modernizr.addTest('device_xs', function() {
	return $wind.width() < 768;
});


Modernizr.addTest('device_sm', function() {
	return $wind.width() > 767 && $wind.width() < 992;
});

// check modernizr from xs to sm
Modernizr.addTest('device_xs_sm', function() {
	return $wind.width() < 992;
});



jQuery(document).ready(function($) {

	// adv carousel index
	if ( $( ".adv-carousel" ).length) {
		var carouselElement = $(".adv-carousel .swiper-container");	
		var carouselPrev = 	$(".adv-carousel .btn-prev");
		var carouselNext = $(".adv-carousel .btn-next");
		var carouselDots = $(".adv-carousel .carousel-dots");
		var swiperBannerCarousel = new Swiper(carouselElement, {
			slidesPerView: 3,
			slidesPerGroup: 2,
			spaceBetween:0,
			loop: true,
			pagination: {
				el: carouselDots,
				type: 'bullets',
			},
			navigation: {
				nextEl: carouselNext,
				prevEl: carouselPrev,
			},
		});
	}

	// crypto-slider
	if ( $( ".crypto-slider" ).length) {
		$(".crypto-slider-wrap .crypto-tabs button").click(function() {
			var dataId = $(this).closest("li").data("slide")
			$('.crypto-slider').layerSlider(dataId);
		});

		$('.crypto-slider').layerSlider({
			autoStart: false,
			skinsPath: 'js/layerslider/skins/',
			skin: 'noskin',
			hoverPrevNext:false,
			thumbnailNavigation:'disabled',
			type: 'fullsize',
			fullSizeMode:'fitheight' ,
			allowFullscreen:false,
			showBarTimer:true,
		});  
		$('.crypto-slider').on('slideChangeDidStart', function(event, slider) {
	    	var index = slider.slides.next.index -1;
	    	$('.crypto-slider-wrap .crypto-tabs li').eq(index).addClass('active').siblings().removeClass("active");

	    	// change slider graph
	    	if(index+1 == 1){
	    		profitChart.series[0].setData(plan1Graf)
	    	}
	    	if(index+1 == 2){
	    		profitChart.series[0].setData(plan2Graf)
	    	}
	    	if(index+1 == 3){
	    		profitChart.series[0].setData(plan3Graf)
	    	}
	    	if(index+1 == 4){
	    		profitChart.series[0].setData(plan4Graf)
	    	}

		});
		$(".crypto-slider-holder .slider-prev").click(function(){
			$('.crypto-slider').layerSlider('prev');
		})
		$(".crypto-slider-holder .slider-next").click(function(){
			$('.crypto-slider').layerSlider('next');
		})
	}

	

	//scrollTo script 
    $('a.js_scrollToLink[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			var scrolledAmount = target.offset().top;
			if (target.length) {
				TweenLite.to(window, 2, {scrollTo:scrolledAmount,ease: Power3.easeInOut});
				return false;
			}
		}
    });

	//modal close on another shown	
	$('#regModal').on('show.bs.modal', function () {
		$('#loginModal').modal('hide')
	})
	$('#forgotModal').on('show.bs.modal', function () {
		$('#loginModal').modal('hide')
	})

	var $depoPromo = $(".get-depo-promo")
	setTimeout(function() {
		$depoPromo.addClass("showed-depo-promo");
	}, 10000);
	$(".get-depo-promo .close-btn").click(function() {
		$depoPromo.removeClass("showed-depo-promo");
		$.get('//merrine-sf.com/ajax?module=balance&do=hidebanner');
	});


	
	// charts
	//api: https://api.highcharts.com/highcharts/
	if ( $( "#profitGraph" ).length) {
		var profitChart = new Highcharts.chart('profitGraph', {
			chart: {
				type: 'spline',
			},
			colors: ['#C04CB8', '#0d233a', '#8bbc21', '#910000', '#1aadce','#492970', '#f28f43', '#77a1e5', '#c42525', '#a6c96a'],
			title: {
			    text: ''
			},
			subtitle: {
			    text: ''
			},
			xAxis: {
			    type: 'datetime',
			    tickWidth: 0,
			    gridLineWidth: 1,
			    gridLineColor:'#D8CEE5',
			    lineColor:'#D7CEE5',
			    lineWidth: 2,
			    labels: {
			        style: {
			        	color:"#b2a7be",
			        	fontSize:"13px"
			        }
			    },
			    dateTimeLabelFormats: { // don't display the dummy year
			        month: '%e. %b',
			        year: '%b'
			    },
			    
			},
			yAxis: {
			    gridLineColor:'#D8CEE5',
			    lineColor:'#D7CEE5',
			    title: {
			        text: ''
			    },
			    min: 0
			},
			tooltip: {
			    pointFormat: '{point.x:%e %b}: {point.y:f} %'
			},

			plotOptions: {
			    spline: {
			        marker: {
			            enabled: true
			        }
			    }
			},
			 legend: {
				enabled:false
			},
			series: [{
			    name: 'Merrine - %',
			    // Define the data points. All series have a dummy year
			    // of 1970/71 in order to be compared on the same x axis. Note
			    // that in JavaScript, months start at 0 for January, 1 for February etc.
			    data: plan1Graf
			}]

		});
	}

	$(".graph-big-link").click(function(event) {
		event.preventDefault();
		$(".js_cryptograph").toggleClass('big-graph-active');
		profitChart.reflow();
	});












}); //Jquery Ready


// preloader
$( window ).on( "load", function() {
	setTimeout( function() {
		$("#loader-wrapper").fadeOut("slow")
	}, 600 );

	if ($( ".index-top-sect" ).length) {
		animateIndexTop();
	}
	if ($( ".marquee" ).length) {
		$('.marquee').marquee({
			duration: $('.marquee').width() * 8,
			delayBeforeStart:0,
			duplicated: true,
			
			startVisible:true
		});
	}
});

