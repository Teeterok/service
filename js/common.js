$(document).ready(function() {


	// $("#jquery_jplayer_1").jPlayer({
	// 	ready: function () {
	// 		$(this).jPlayer("setMedia", {
	// 			title: "Stirring of a fool",
	// 			m4a: "http://www.jplayer.org/audio/m4a/Miaow-08-Stirring-of-a-fool.m4a",
	// 			oga: "http://www.jplayer.org/audio/ogg/Miaow-08-Stirring-of-a-fool.ogg"
	// 		});
	// 	},
	// 	play: function() { // To avoid multiple jPlayers playing together.
	// 		$(this).jPlayer("pauseOthers");
	// 	},
	// 	swfPath: "../js",
	// 	supplied: "m4a, oga",
	// 	wmode: "window",
	// 	globalVolume: true,
	// 	useStateClassSkin: true,
	// 	autoBlur: false,
	// 	smoothPlayBar: true,
	// 	keyEnabled: true
	// });

	// $("#jquery_jplayer_2").jPlayer({
	// 	ready: function () {
	// 		$(this).jPlayer("setMedia", {
	// 			title: "Hidden",
	// 			m4a: "http://www.jplayer.org/audio/m4a/Miaow-02-Hidden.m4a",
	// 			oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
	// 		});
	// 	},
	// 	play: function() { // To avoid multiple jPlayers playing together.
	// 		$(this).jPlayer("pauseOthers");
	// 	},
	// 	swfPath: "../js",
	// 	supplied: "m4a, oga",
	// 	cssSelectorAncestor: "#jp_container_2",
	// 	wmode: "window",
	// 	globalVolume: true,
	// 	useStateClassSkin: true,
	// 	autoBlur: false,
	// 	smoothPlayBar: true,
	// 	keyEnabled: true
	// });

	// $("#jquery_jplayer_3").jPlayer({
	// 	ready: function () {
	// 		$(this).jPlayer("setMedia", {
	// 			title: "Hidden",
	// 			m4a: "http://www.jplayer.org/audio/m4a/Miaow-02-Hidden.m4a",
	// 			oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
	// 		});
	// 	},
	// 	play: function() { // To avoid multiple jPlayers playing together.
	// 		$(this).jPlayer("pauseOthers");
	// 	},
	// 	swfPath: "../js",
	// 	supplied: "m4a, oga",
	// 	cssSelectorAncestor: "#jp_container_3",
	// 	wmode: "window",
	// 	globalVolume: true,
	// 	useStateClassSkin: true,
	// 	autoBlur: false,
	// 	smoothPlayBar: true,
	// 	keyEnabled: true
	// });

	// $("#jquery_jplayer_4").jPlayer({
	// 	ready: function () {
	// 		$(this).jPlayer("setMedia", {
	// 			title: "Hidden",
	// 			m4a: "http://www.jplayer.org/audio/m4a/Miaow-02-Hidden.m4a",
	// 			oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
	// 		});
	// 	},
	// 	play: function() { // To avoid multiple jPlayers playing together.
	// 		$(this).jPlayer("pauseOthers");
	// 	},
	// 	swfPath: "../js",
	// 	supplied: "m4a, oga",
	// 	cssSelectorAncestor: "#jp_container_4",
	// 	wmode: "window",
	// 	globalVolume: true,
	// 	useStateClassSkin: true,
	// 	autoBlur: false,
	// 	smoothPlayBar: true,
	// 	keyEnabled: true
	// });

	// $("#jquery_jplayer_5").jPlayer({
	// 	ready: function () {
	// 		$(this).jPlayer("setMedia", {
	// 			title: "Hidden",
	// 			m4a: "http://www.jplayer.org/audio/m4a/Miaow-02-Hidden.m4a",
	// 			oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
	// 		});
	// 	},
	// 	play: function() { // To avoid multiple jPlayers playing together.
	// 		$(this).jPlayer("pauseOthers");
	// 	},
	// 	swfPath: "../js",
	// 	supplied: "m4a, oga",
	// 	cssSelectorAncestor: "#jp_container_5",
	// 	wmode: "window",
	// 	globalVolume: true,
	// 	useStateClassSkin: true,
	// 	autoBlur: false,
	// 	smoothPlayBar: true,
	// 	keyEnabled: true
	// });


	$(".fancybox").fancybox();

	// mask-input 
	$(".input-phone").mask("+7 (999) 999-99-99");

	//плавный скролл
	$(".navigat li a").mPageScroll2id();


	//кнопка sandwich
	$(".btn_nav").click(function() {
		$(".sandwich").toggleClass("active");
		if ($(".header__bottom").is(":hidden")) {
			$(".header__bottom").slideDown(200);
		} else {
			$(".header__bottom").slideUp(200);
		}

		$(".header__bottom a").click(function() {
			$(".header__bottom").slideUp(200);
			$(".sandwich").removeClass("active");
		});
		
	});

	/*высота блока по экрану*/
    function heightDetect() {
      $('.header__bottom').css("height", $(window).height() -$(".header").height() + 60);
    };
    heightDetect();
    $(window).resize(function() {
      heightDetect();
    });

	//слайдер

	$('.billboard-slider').slick({
		arrows: false,
		dots: true,
		infinite: true,
		slidesToShow: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="far fa-angle-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="far fa-angle-right"></i><div/>',
		slidesToScroll: 1,
		autoplay: true,
      	autoplaySpeed: 2000,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				adaptiveHeight: true
			}
		}
		]
	});

	


 $('.works-slider').each( function() {
          $(this).slick({
		arrows: true,
		dots: true,
		infinite: true,
		slidesToShow: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="far fa-angle-left"></i></div>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="far fa-angle-right"></i></div>',
		 appendArrows: $(this).siblings('.slider-arrows'),
		slidesToScroll: 1,
		centerMode: true,
		variableWidth: true,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				adaptiveHeight: true
			}
		}
		]
	});

       } );
	

	$(document).ready(function() {
		$('.catalog-menu__items').on('click', '.catalog-menu__buttons', function() {
			$(this).toggleClass('').siblings('.catalog-menu').slideUp(200);
			if ($(this).siblings(".catalog-menu").is(":hidden")) {
				$(this).parent().addClass("active");
				$(this).siblings(".catalog-menu").slideDown(200);
	
			} else {
				$(this).parent().removeClass("active");
				$(this).siblings(".catalog-menu").slideUp(200);
	
			}
		});
	});

	
 var $menu = $(".header-menu__hidden");
$(window).scroll(function(){
  if ( $(this).scrollTop() > 200 && $menu.hasClass("default") ){
     $menu.removeClass("default").addClass("fixed");
   } else if($(this).scrollTop() <= 200 && $menu.hasClass("fixed")) {
     $menu.removeClass("fixed").addClass("default");
   }
  
 });

if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
    $menu.removeClass("default").addClass("fixed");
  } else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
    $menu.removeClass("fixed").addClass("default");
  }

 
  $(".catalog-menu__btn").click(function(event) {
	event.preventDefault();
	$(".catalog-menu__btn").removeClass('active');
	$(this).parent().addClass('active');
	$(".catalog-menu__btn").removeClass("active");

});


	

	$(".tabs li a").click(function(event) {
		event.preventDefault();
		$(".tabs li").removeClass('active');
		$(this).parent().addClass('active');
		$(".tab-pane").removeClass("active");
		var selectTab = $(this).attr("href");
		$(selectTab).addClass("active");
	});

	$('.blog-tabs li a').click(function(event) {
		event.preventDefault();
		$(this).parent().parent().find("li").removeClass('active');
		$(this).parent().addClass('active');
		$(this).parent().parent().siblings(".tabs-container").find(".tab-pane").fadeOut(0);
		var selectTab1 = $(this).attr("href");
		$(selectTab1).fadeIn(200);
	});

	$('.card-tabs li a').click(function(event) {
		event.preventDefault();
		$(this).parent().parent().find("li").removeClass('active');
		$(this).parent().addClass('active');
		$(this).parent().parent().siblings(".tabs-container").find(".tab-pane").fadeOut(0);
		var selectTab2 = $(this).attr("href");
		$(selectTab2).fadeIn(200);
	});


	{
		if ($(window).width() < 768) { 

			/*scroll to tabs*/

			$('.tabs a').on( 'click', function(){ 
				var el = $(this);
				var dest = el.attr('href'); 
				if(dest !== undefined && dest !== '') { 
					$('html').animate({ 
						scrollTop: $(dest).offset().top - 60
        }, 500 // скорость прокрутки
        );
				}
				return false;
			});


		}
	}

	$(".question__name").click(function(e) {
		e.preventDefault();
		$(".question").removeClass("active");
		$(".question__answer").slideUp(200);
		if ($(this).siblings(".question__answer").is(":hidden")) {
			$(this).parent().addClass("active");
			$(this).siblings(".question__answer").slideDown(200);

		} else {
			$(this).parent().removeClass("active");
			$(this).siblings(".question__answer").slideUp(200);

		}
	});

	$(".catalog-more a").click(function(e) {
		e.preventDefault();
		if ($(".tab-pane").is(":hidden")) {
			$(".tab-pane").slideDown(200);
			$(".tab-pane").addClass("active");
			$(this).html("Показать ещё");
		} 
	});

	$(".show-more a").click(function(e) {
		e.preventDefault();
		if ($(".catalog-products__more").is(":hidden")) {
			$(".catalog-products__more").slideDown(200);
			$(".catalog-products__more").addClass("active");
			$(this).html("Показать ещё");
		} 
	});

	$(".catalog-menu__buttons").on("click", ".catalog-menu__btn", function(){
			$(".catalog-menu__buttons .catalog-menu__btn").removeClass("active"); //удаляем класс во всех вкладках
			$(this).addClass("active"); //добавляем класс текущей (нажатой)
		
		});
		
	

	 // стайлер для select
	 $('select').styler();

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();



	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$(".btn_top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	objectFitImages();

});

jQuery('.quantity').each(function() {
	var spinner = jQuery(this),
	input = spinner.find('input[type="number"]'),
	btnUp = spinner.find('.quantity-up'),
	btnDown = spinner.find('.quantity-down'),
	min = input.attr('min'),
	max = input.attr('max');

	btnUp.click(function() {
		var oldValue = parseFloat(input.val());
		if (oldValue >= max) {
			var newVal = oldValue;
		} else {
			var newVal = oldValue + 1;
		}
		spinner.find("input").val(newVal);
		spinner.find("input").trigger("change");
	});

	btnDown.click(function() {
		var oldValue = parseFloat(input.val());
		if (oldValue <= min) {
			var newVal = oldValue;
		} else {
			var newVal = oldValue - 1;
		}
		spinner.find("input").val(newVal);
		spinner.find("input").trigger("change");
	});

});

/*polifyl*/
/*! npm.im/object-fit-images 3.2.4 */
var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="fregante:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();


