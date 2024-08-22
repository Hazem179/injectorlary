(function ($) {
	"use strict";

	var windowOn = $(window)
	///////////////////////////////////////////////////
	// 01. PreLoader Js
	windowOn.on('load', function () {
		$('#loading').fadeOut(500);
	});

	///////////////////////////////////////////////////
	// 02. SubMenu Dropdown Toggle
	if ($('.tp-main-menu nav > ul > li.has-dropdown > a').length) {
		$('.tp-main-menu nav > ul > li.has-dropdown > a').append('<i class="fal fa-angle-down"></i>');
	}

	///////////////////////////////////////////////////
	// 03. scroll-to-target 
	windowOn.on('scroll', function () {
		var scroll = windowOn.scrollTop();
		if (scroll < 245) {
			$('.scroll-to-target').removeClass('open');

		} else {
			$('.scroll-to-target').addClass('open');
		}
	});

	///////////////////////////////////////////////////
	// 04. Scroll Up Js
	if ($('.scroll-to-target').length) {
		$(".scroll-to-target").on('click', function () {
			var target = $(this).attr('data-target');
			// animate
			$('html, body').animate({
				scrollTop: $(target).offset().top
			}, 1000);

		});
	}

	///////////////////////////////////////////////////
	// 05. wow animation
	var wow = new WOW(
		{
			mobile: false,
		}
	);
	wow.init();
	var windowOn = $(window);

	///////////////////////////////////////////////////
	// 06. PreLoader Js
	windowOn.on('load', function () {
		$("#loading").fadeOut(500);

	});

	///////////////////////////////////////////////////
	// 07. Sticky Header Js
	windowOn.on('scroll', function () {
		var scroll = windowOn.scrollTop();
		if (scroll < 300) {
			$("#header-sticky,#header-sticky-mobile").removeClass("header-sticky");
		} else {
			$("#header-sticky,#header-sticky-mobile").addClass("header-sticky");
		}
	});

	////////////////////////////////////////////////////
	// 08. Mobile Menu Js
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "992",
		meanExpand: ['<i class="fal fa-plus"></i>'],
	});

	////////////////////////////////////////////////////
	// 09. Sidebar Js
	$(".tp-menu-bar").on("click", function () {
		$(".tpoffcanvas").addClass("opened");
		$(".body-overlay").addClass("apply");
		document.body.style = "overflow-y: hidden";
	});
	$(".close-btn").on("click", function () {
		$(".tpoffcanvas").removeClass("opened");
		$(".body-overlay").removeClass("apply");
		document.body.style = "overflow-y:auto";
	});
	$(".body-overlay").on("click", function () {
		$(".tpoffcanvas").removeClass("opened");
		$(".body-overlay").removeClass("apply");
		document.body.style = "overflow-y:auto";
	});

	///////////////////////////////////////////////////
	// 10. Magnific Js
	$(".popup-video").magnificPopup({
		type: "iframe",
	});

	////////////////////////////////////////////////////
	// 11. Data CSS Js
	$("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});

	$("[data-width]").each(function () {
		$(this).css("width", $(this).attr("data-width"));
	});

	$("[data-bg-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-bg-color"));
	});



	////////////////////////////////////////////////////
	// 13. Swiper Js
	const serviceswiper = new Swiper('.service-active', {
		// Optional parameters
		loop: true,
		slidesPerView: 4,
		spaceBetween: 30,
		autoplay: {
			delay: 2500,
			disableOnInteraction: true,
		},
		breakpoints: {
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		// Navigation arrows
		navigation: {
			nextEl: '.services-n',
			prevEl: '.services-p',
		},
	});

	////////////////////////////////////////////////////
	// 14. magnificPopup Js
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	////////////////////////////////////////////////////
	// 15. MagnificPopup video view Js
	$(".popup-video").magnificPopup({
		type: "iframe",
	});

	////////////////////////////////////////////////////
	// 16. Swiper Js
	var brandswiper = new Swiper('.brand-slider-active', {
		loop: true,
		slidesPerView: 6,
		spaceBetween: 30,
		autoplay: {
			delay: 2500,
			disableOnInteraction: true,
		},
		breakpoints: {
			'1200': {
				slidesPerView: 6,
			},
			'992': {
				slidesPerView: 5,
			},
			'768': {
				slidesPerView: 4,
			},
			'576': {
				slidesPerView: 3,
			},
			'0': {
				slidesPerView: 2,
			},
		},
		navigation: {
			nextEl: '.test-n',
			prevEl: '.test-p',
		},
	});

	////////////////////////////////////////////////////
	// 17. Swiper Js
	var brandswiper = new Swiper('.testimonial-slider-active', {
		loop: true,
		slidesPerView: 3,
		centeredSlides: true,
		spaceBetween: 50,

		navigation: {
			nextEl: '.test-n',
			prevEl: '.test-p',
		},

		breakpoints: {
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});

	////////////////////////////////////////////////////
	// 18. Swiper Js
	var swiper = new Swiper('.testimonial-slider-active-2', {
		// Optional parameters
		loop: true,
		slidesPerView: 4,
		spaceBetween: 50,
		// Navigation arrows
		navigation: {
			nextEl: '.test-n',
			prevEl: '.test-p',
		},

		breakpoints: {
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 3,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});


	////////////////////////////////////////////////////
	// 19. Swiper Js
	var brandswiper = new Swiper('.testimonial-slider-two', {
		// Optional parameters
		loop: true,
		slidesPerView: 1,


		pagination: {
			el: ".testimonial-slider-dots",
			clickable: true,
		},
		// Navigation arrows
		navigation: {
			nextEl: '.test-n',
			prevEl: '.test-p',
		},

	});
	var brandswiper = new Swiper('.testi-slider-active-four', {
		// Optional parameters
		loop: true,
		slidesPerView: 3,
		spaceBetween: 70,
		centeredSlides: true,


		pagination: {
			el: ".testimonial-slider-dots-four",
			clickable: true,
		},
		// Navigation arrows
		navigation: {
			nextEl: '.test-n',
			prevEl: '.test-p',
		},

		breakpoints: {
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},

	});

	////////////////////////////////////////////////////
	// 20. Swiper Js
	var brandswiper = new Swiper('.testi-slider-pd-active', {
		loop: true,
		slidesPerView: 1,
		autoplay: true,
		pagination: {
			el: ".project-slider-dots",
			clickable: true,
		},
		// Navigation arrows
		navigation: {
			nextEl: '.test-n',
			prevEl: '.test-p',
		},

	});
	var brandswiper = new Swiper('.testi-slider-active-five', {
		// Optional parameters
		loop: true,
		slidesPerView: 3,
		spaceBetween: 20,
		centeredSlides: true,


		pagination: {
			el: ".testimonial-slider-dots-four",
			clickable: true,
		},
		// Navigation arrows
		navigation: {
			nextEl: '.test-n',
			prevEl: '.test-p',
		},

		breakpoints: {
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},

	});

	////////////////////////////////////////////////////
	// 21. Swiper Js
	var brandswiper = new Swiper('.testimonial-htm-active', {
		// Optional parameters
		loop: true,
		slidesPerView: 1,
		spaceBetween: 20,
		centeredSlides: true,


		pagination: {
			el: ".testimonial-slider-dots-four",
			clickable: true,
		},
		// Navigation arrows
		navigation: {
			nextEl: '.test-n',
			prevEl: '.test-p',
		},

	});

	////////////////////////////////////////////////////
	// 22. Swiper Js
	var projectswiper = new Swiper('.project-slider-three-active', {
		// Optional parameters
		loop: true,
		slidesPerView: 2,
		spaceBetween: 30,
		pagination: {
			el: ".project-slider-dots",
			clickable: true,
		},
		// Navigation arrows
		navigation: {
			nextEl: '.test-n',
			prevEl: '.test-p',
		},

		breakpoints: {
			'1200': {
				slidesPerView: 2,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},

	});

	////////////////////////////////////////////////////
	// 23. Swiper Js
	var projectswiper = new Swiper('.product-slider-active', {
		// Optional parameters
		loop: true,
		slidesPerView: 3,
		spaceBetween: 30,
		// Navigation arrows
		navigation: {
			nextEl: '.test-n',
			prevEl: '.test-p',
		},

		breakpoints: {
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},

	});

	////////////////////////////////////////////////////
	// 24. Swiper Js
	var projectswiper = new Swiper('.project-slider-active', {
		// Optional parameters
		loop: true,
		slidesPerView: 3,
		spaceBetween: 30,
		loop: true,
		pagination: {
			el: ".my-dots",
			clickable: true,
		},
		// Navigation arrows
		navigation: {
			nextEl: '.test-n',
			prevEl: '.test-p',
		},

		breakpoints: {
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});

	////////////////////////////////////////////////////
	// 25. Swiper Js
	var projectswiper = new Swiper('.blog-post-slider-active', {
		// Optional parameters
		loop: true,
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		// Navigation arrows
		navigation: {
			nextEl: '.blog-nav-next',
			prevEl: '.blog-nav-prev',
		},

		breakpoints: {
			'1200': {
				slidesPerView: 1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});
})(jQuery);
document.addEventListener("DOMContentLoaded", function () {
	let currentUrl = window.location.pathname;
	let mainLinks = document.querySelectorAll('#main-menu > li >a');

	function markActive(links) {
		for (let i = 0; i < links.length; i++) {
			let linkPath = new URL(links[i].href).pathname;
			if (currentUrl === linkPath) {
				links[i].classList.add('active');
				break;
			}
		}
	}

	for (let i = 0; i < mainLinks.length; i++) {
		mainLinks[i].classList.remove('active');
	}


	markActive(mainLinks);

	let submenu = document.querySelector('#main-menu .has-dropdown .submenu');
	if (submenu) {
		let subLinks = submenu.getElementsByTagName('a');
		for (let i = 0; i < subLinks.length; i++) {
			let linkPath = new URL(subLinks[i].href).pathname;
			if (currentUrl === linkPath) {
				let parentLi = submenu.parentElement;
				parentLi.querySelector('a').classList.add('active');
				break;
			}
		}
	}
});