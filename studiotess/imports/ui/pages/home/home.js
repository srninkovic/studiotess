import './home.html';

Template.App_home.rendered = function() {
  $('#fullpage').fullpage({
		//Scrolling
		css3: false,
		scrollingSpeed: 800,
		autoScrolling: true,
		fitToSection: true,
		fitToSectionDelay: 2000,
		scrollBar: false,
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
		loopHorizontal: true,
		continuousVertical: true,
		touchSensitivity: 50,
		normalScrollElementTouchThreshold: 5,
		bigSectionsDestination: null,
		keyboardScrolling: true,
		controlArrows: true,
		verticalCentered: true,
		responsiveWidth: 800,
		responsiveHeight: 900,
		responsiveSlides: false,
		parallax: true,
		parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
		sectionSelector: '.section',
		lazyLoading: true,
	});
}
