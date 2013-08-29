(function() {

'use strict';

// TODO
// ====

var animEndEventNames = {
	'WebkitAnimation' : 'webkitAnimationEnd',
	'OAnimation' : 'oAnimationEnd',
	'msAnimation' : 'MSAnimationEnd',
	'animation' : 'animationend'
};

var pager = {
	animEnd: function() {
		this.animEndCalls++;
		if (this.animEndCalls >= 2 || this.pageInView === false) {
			var temp = this.pageIn;
			this.pageIn = this.pageOut;
			this.pageOut = temp;
			this.isAnimating = false;
			this.pageInView = true;
			this.animEndCalls = 0;
		}
	},
	setDefaults: function() {
		this.isAnimating = false;
		this.animEndName = animEndEventNames[Modernizr.prefixed('animation')];
		this.pageInView = false;
		this.pageIn = $('.project-page-1');
		this.pageOut =  $('.project-page-2');
		this.controls = $('.project-controls');
		this.stage = $('.project-stage');
		this.direction = 'next';
		this.index = 0;
		this.projectsCount = 2;
		this.animEndCalls = 0;
		this.oldBodyTop = 0;
	},
	init: function() {
		this.setDefaults();
	}
};

var prepareDiv = function() {
	// PRELOAD IMAGES HERE
	console.timeEnd('Load images');
	var wrapper = pager.pageIn.selector;
	$(wrapper + ' h1').text(projects[pager.index].title);
	$(wrapper + ' .h-center h3').html(projects[pager.index].subtitle);
	$(wrapper + ' .large-6 h3').html(projects[pager.index].subsection);
	/* $(wrapper + ' p').text(projects[pager.index].desc); */
	for (var i = 0; i < projects[pager.index].imgs.length; i++) {
		if (i === 0) {
			$(wrapper + ' .image-full').css('background-image', 'url(' + projects[pager.index].imgs[i] + ')');
		} else {
			$(wrapper + ' .img-' + i).attr('src', projects[pager.index].imgs[i]);
		}
	}

	if (pager.direction === 'next') {
		moveIn('project-moveFromRight');
		if (pager.pageInView) {
			moveOut('project-moveToLeft');
		}
	} else {
		moveIn('project-moveFromLeft');
		if (pager.pageInView) {
			moveOut('project-moveToRight');
		}
	}
};


var preloadImages = function(imgArr, callback) {
	var all = imgArr.length,
			remaining = all,
			progressbar = $('.progress-bar'),
			img, fx;

	var finish = function() {
		remaining = remaining - 1;
		window.clearTimeout(fx);
		fx = window.setTimeout(function() {
			var loadPercent = parseInt(((all - remaining )* 100 / all), 10);
			progressbar.css('width', loadPercent + '%');
		}, 50);
		if (remaining <= 0) {
			callback();
			if (parseInt(progressbar.css('width'), 10) <= 0) {
				window.clearTimeout(fx);
			}
			window.setTimeout(function() {
				progressbar.css({
					'width': '0%',
					'display': 'none'
				});
			}, 400);
		}
	};

	progressbar.css('display', 'block');
	for (var i = 0; i < imgArr.length; i++) {
		img = new Image();
		img.onload = finish;
		img.src = imgArr[i];
	}
};


var indexHandler = function() {
	if (pager.direction === 'next') {
		pager.index = (pager.index + 1) % pager.projectsCount;
	} else {
		pager.index = (pager.index - 1);
		if (pager.index < 0) {
			pager.index = pager.projectsCount - 1;
		}
	}
};


var preparePages = function(direction) {
	if (pager.isAnimating) {
		return false;
	}
	pager.isAnimating = true;
	pager.pageOut.removeClass('scroll');

	if (direction === 'next' && pager.direction !== 'next') {
		pager.pageIn.removeClass('project-moveFromLeft project-moveToRight');
		pager.pageOut.removeClass('project-moveFromLeft project-moveToRight');
		pager.direction = 'next';
	} else if (direction === 'prev' && pager.direction !== 'prev') {
		pager.pageIn.removeClass('project-moveFromRight project-moveToLeft');
		pager.pageOut.removeClass('project-moveFromRight project-moveToLeft');
		pager.direction = 'prev';
	}

	if (pager.pageInView) {
		indexHandler();
	}
	console.time('Load images');
	pager.controls.removeClass('active');
	preloadImages(projects[pager.index].imgs, prepareDiv);
};


var moveIn = function(inClass) {
	pager.pageIn.addClass('project-current ' + inClass).on(pager.animEndName, function() {
		$('body').addClass('noscroll');
		pager.controls.addClass('active');
		pager.pageIn.addClass('scroll');
		pager.pageIn.off(pager.animEndName);
		pager.pageIn.removeClass(inClass);
		pager.animEnd();
	});
};


var moveOut = function(outClass, isTimeToExit) {
	pager.pageOut.addClass(outClass).on(pager.animEndName, function() {
		pager.pageOut.off(pager.animEndName);
		pager.pageOut.removeClass('project-current ' + outClass);
		pager.animEnd();
		if (isTimeToExit) {
			pager.stage.removeClass('active');
			pager.setDefaults();
		}
	});
	if (isTimeToExit) {
		pager.controls.removeClass('active');
	}
};


var closePage = function() {
	$('body').removeClass('noscroll');
	moveOut('project-moveToRight', true);
};


$(document).ready(function() {

	pager.init();

	$('.overlay-thumb').on('click', function() {
		pager.index = $(this).data('project-id');
		pager.stage.addClass('active');
		preparePages('next');
	});

	$(pager.stage.selector + ' span').on('click', function() {
		if ($(this).hasClass('next-project')) {
			preparePages('next');
		} else if ($(this).hasClass('prev-project')) {
			preparePages('prev');
		} else if ($(this).hasClass('exit-project')) {
			closePage();
		}
	});

	$(window).on('keydown', function(e) {
		if (pager.pageInView) {
			switch (e.keyCode) {
				case 39:
					preparePages('next');
					break;
				case 37:
					preparePages('prev');
					break;
				case 27:
					closePage();
					break;
			}
		}
	});

	var controlsVisible = false;
	var $window = $(window);
	var page1 = $('.project-page-1');
	var page2 = $('.project-page-2');

	page1.on('scroll', function() {
	  var treshold = window.innerHeight * 0.375;
  	if (!controlsVisible && page1.scrollTop() > treshold) {
  		$('.project-stage .icon-2x').addClass('show');
  		controlsVisible = true;
  	} else if (controlsVisible && page1.scrollTop() < treshold) {
  		$('.project-stage .icon-2x').removeClass('show');
  		controlsVisible = false;
  	}
	});

	page2.on('scroll', function() {
	  var treshold = window.innerHeight * 0.375;
  	if (!controlsVisible && page2.scrollTop() > treshold) {
  		$('.project-stage .icon-2x').addClass('show');
  		controlsVisible = true;
  	} else if (controlsVisible && page2.scrollTop() < treshold) {
  		$('.project-stage .icon-2x').removeClass('show');
  		controlsVisible = false;
  	}
	});

	/*
	$('.nav-direction').scrollspy({
    min: $('.nav-direction').offset().top,
    onEnter: function(element, position) {
      $(".nav-direction").addClass('fixed');
    },
    onLeave: function(element, position) {
      $(".nav-direction").removeClass('fixed');
    }
  });
*/

});


var projects = [
	{
		'tags': ['webb','kommunikation'],
		'id': 0,
		'title': 'Glasvasen',
		'subtitle': 'Jernhusen',
		'subsection': 'HAUTE CONTOR',
		'desc': 'Flannel vero odio, aesthetic veniam umami Austin voluptate consequat. Ugh Portland mlkshk scenester wayfarers. Culpa Terry Richardson exercitation ennui, sapiente actually single-origin coffee irony pariatur brunch. YOLO et semiotics fashion axe vinyl, chambray veniam street art organic sartorial. Portland scenester salvia cred labore, squid seitan delectus elit aliquip skateboard bitters. 8-bit sint consectetur, ad Wes Anderson Schlitz Pinterest Cosby sweater chambray stumptown. Pinterest fugiat brunch DIY semiotics, photo booth gluten-free anim accusamus non lo-fi aliqua.',
		'thumbnail': 'project-1-thumb.png',
		'imgs': [
			'http://www.glasvasen.se/img/glasvasen-out-1.jpg',
			'http://www.marcus-andersson.com/givakt/glasvasen/bild_2.jpg',
			'http://www.marcus-andersson.com/givakt/glasvasen/bild_3.jpg'
		],
		'link': 'www.glasvasen.se'
	},
	{
		'tags': ['redaktionellt','kommunikation'],
		'id': 1,
		'title': 'Dags att komma igång igen efter semestern',
		'subtitle': '2013/10/8&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;MIKAEL HJELM',
		'subsection': 'GRÖNT ÄR SKÖNT',
		'desc': 'Flannel vero odio, aesthetic veniam umami Austin voluptate consequat. Ugh Portland mlkshk scenester wayfarers. Culpa Terry Richardson exercitation ennui, sapiente actually single-origin coffee irony pariatur brunch. 8-bit sint consectetur, ad Wes Anderson Schlitz Pinterest Cosby sweater chambray stumptown.',
		'thumbnail': 'project-2-thumb.jpg',
		'imgs': [
			'http://www.marcus-andersson.com/givakt/bloggpost/topp.jpg',
			'http://www.marcus-andersson.com/givakt/bloggpost/bild_3.jpg',
			'http://www.marcus-andersson.com/givakt/bloggpost/bild_2.jpg',
			'http://www.marcus-andersson.com/givakt/bloggpost/bild_3.jpg',
		],
		'link': 'www.skaneleden.se'
	},
];

}());