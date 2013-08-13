(function() {

'use strict';

// TODO
// ====

var pager = {
	isAnimating: false,
	pageInView: false,
	pageIn: '.project-page-1',
	pageOut: '.project-page-2',
	index: 0,
	animEndCalls: 0,
	oldBodyTop: 0,
	direction: 'next',
	animEnd: function() {
		this.animEndCalls++;
		if (this.animEndCalls >= 2 || this.pageInView === false) {
			var cache = this.pageIn;
			this.pageIn = this.pageOut;
			this.pageOut = cache;
			this.isAnimating = false;
			this.pageInView = true;
			this.animEndCalls = 0;
		}
	},
	reset: function() {
		this.isAnimating = false;
		this.pageInView = false;
		this.direction = 'next';
		this.index = 0;
		this.animEndCalls = 0;
		this.oldBodyTop = 0;
	}
};

var prepareDiv = function() {
	$(pager.pageIn + ' h1').text(projects[pager.index].title);
	$(pager.pageIn + ' p').text(projects[pager.index].desc);
	$(pager.pageIn + ' img').attr('src', projects[pager.index].img);
};

var indexHandler = function() {
	if (pager.direction === 'next') {
		if (pager.index < 5) {
			pager.index = pager.index + 1;
		} else {
			pager.index = 0;
		}
	} else {
		if (pager.index > 1) {
			pager.index = pager.index - 1;
		} else {
			pager.index = 4;
		}
	}
};

var moveIn = function(inClass) {
	$(pager.pageIn).addClass('project-current ' + inClass).on('webkitAnimationEnd', function() {
		$('body').addClass('noscroll');
		if (!pager.pageInView) {
			$('.project-controls').addClass('active');
		}
		$(pager.pageIn).addClass('scroll');
		$(pager.pageIn).off('webkitAnimationEnd');
		$(pager.pageIn).removeClass(inClass);
		pager.animEnd();
	});
};

var moveOut = function(outClass, isTimeToExit) {
	$(pager.pageOut).addClass(outClass).on('webkitAnimationEnd', function() {
		$(pager.pageOut).off('webkitAnimationEnd');
		$(pager.pageOut).removeClass('project-current ' + outClass);
		pager.animEnd();
		if (isTimeToExit) {
			$('.project-stage').removeClass('active');
			pager.reset();
		}
	});
	if (isTimeToExit) {
		$('.project-controls').removeClass('active');
	}
};

var nextPage = function() {

	if (pager.isAnimating) {
		return false;
	}
	pager.isAnimating = true;
	$(pager.pageOut).removeClass('scroll');

	if (pager.direction !== 'next') {
		$(pager.pageIn).removeClass('project-moveFromLeft project-moveToRight');
		$(pager.pageOut).removeClass('project-moveFromLeft project-moveToRight');
		pager.direction = 'next';
	}

	if (pager.pageInView) {
		indexHandler();
	}
	prepareDiv();

	moveIn('project-moveFromRight');

	if (pager.pageInView) {
		moveOut('project-moveToLeft');
	}

};

var prevPage = function() {

	if (pager.isAnimating) {
		return false;
	}
	pager.isAnimating = true;
	$(pager.pageOut).removeClass('scroll');

	if (pager.direction !== 'prev') {
		$(pager.pageIn).removeClass('project-moveFromRight project-moveToLeft');
		$(pager.pageOut).removeClass('project-moveFromRight project-moveToLeft');
		pager.direction = 'prev';
	}

	if (pager.pageInView) {
		indexHandler();
	}
	prepareDiv();

	moveIn('project-moveFromLeft');

	if (pager.pageInView) {
		moveOut('project-moveToRight');
	}

};

var closePage = function() {
	$('body').removeClass('noscroll');
	moveOut('project-moveToRight', true);
};

$(document).ready(function() {

	$('.project-thumb').on('click', function() {
		pager.index = $(this).data('project-id');
		$('.project-stage').addClass('active');
		nextPage();
	});

	$('.project-stage span').on('click', function() {
		if ($(this).hasClass('next-project')) {
			nextPage();
		} else if ($(this).hasClass('prev-project')) {
			prevPage();
		} else if ($(this).hasClass('exit-project')) {
			closePage();
		}
	});

	$(window).on('keydown', function(e) {
		if (pager.pageInView) {
			switch (e.keyCode) {
				case 39:
					nextPage();
					break;
				case 37:
					prevPage();
					break;
				case 27:
					closePage();
					break;
			}
		}
	});

});

var projects = [
	{
		'tags': ['webb','kommunikation'],
		'id': 0,
		'title': 'Glasvasen',
		'desc': 'Flannel vero odio, aesthetic veniam umami Austin voluptate consequat. Ugh Portland mlkshk scenester wayfarers. Culpa Terry Richardson exercitation ennui, sapiente actually single-origin coffee irony pariatur brunch. YOLO et semiotics fashion axe vinyl, chambray veniam street art organic sartorial. Portland scenester salvia cred labore, squid seitan delectus elit aliquip skateboard bitters. 8-bit sint consectetur, ad Wes Anderson Schlitz Pinterest Cosby sweater chambray stumptown. Pinterest fugiat brunch DIY semiotics, photo booth gluten-free anim accusamus non lo-fi aliqua.',
		'thumbnail': 'project-1-thumb.png',
		'img': 'img/blogg1.png',
		'link': 'www.glasvasen.se'
	},
	{
		'tags': ['redaktionellt','kommunikation'],
		'id': 1,
		'title': 'Skåneleden',
		'desc': 'Flannel vero odio, aesthetic veniam umami Austin voluptate consequat. Ugh Portland mlkshk scenester wayfarers. Culpa Terry Richardson exercitation ennui, sapiente actually single-origin coffee irony pariatur brunch. 8-bit sint consectetur, ad Wes Anderson Schlitz Pinterest Cosby sweater chambray stumptown.',
		'thumbnail': 'project-2-thumb.jpg',
		'img': 'img/blogg2.png',
		'link': 'www.skaneleden.se'
	},
	{
		'tags': ['webb','redaktionellt'],
		'id': 2,
		'title': 'Skånska Landskap',
		'desc': 'Flannel vero odio, aesthetic veniam umami Austin voluptate consequat. Ugh Portland mlkshk scenester wayfarers. Culpa Terry Richardson exercitation ennui, sapiente actually single-origin coffee irony pariatur brunch. YOLO et semiotics fashion axe vinyl, chambray veniam street art organic sartorial. Portland scenester salvia cred labore, squid seitan delectus elit aliquip skateboard bitters. 8-bit sint consectetur, ad Wes Anderson Schlitz Pinterest Cosby sweater chambray stumptown. Pinterest fugiat brunch DIY semiotics, photo booth gluten-free anim accusamus non lo-fi aliqua.',
		'thumbnail': 'project-3-thumb.png',
		'img': 'img/blogg4.jpg',
		'link': 'www.skanskalandskap.se'
	},
	{
		'tags': ['redaktionellt','kommunikation'],
		'id': 3,
		'title': 'Purity Vodka',
		'desc': 'Flannel vero odio, aesthetic veniam umami Austin voluptate consequat. Ugh Portland mlkshk scenester wayfarers. Culpa Terry Richardson exercitation ennui, sapiente actually single-origin coffee irony pariatur brunch. 8-bit sint consectetur, ad Wes Anderson Schlitz Pinterest Cosby sweater chambray stumptown.',
		'thumbnail': 'project-4-thumb.jpg',
		'img': 'img/blogg5.jpg',
		'link': 'www.purityvodka.com'
	},
	{
		'tags': ['webb','redaktionellt'],
		'id': 4,
		'title': 'VASYD',
		'desc': 'Flannel vero odio, aesthetic veniam umami Austin voluptate consequat. Ugh Portland mlkshk scenester wayfarers. Culpa Terry Richardson exercitation ennui, sapiente actually single-origin coffee irony pariatur brunch. YOLO et semiotics fashion axe vinyl, chambray veniam street art organic sartorial. Portland scenester salvia cred labore, squid seitan delectus elit aliquip skateboard bitters. 8-bit sint consectetur, ad Wes Anderson Schlitz Pinterest Cosby sweater chambray stumptown. Pinterest fugiat brunch DIY semiotics, photo booth gluten-free anim accusamus non lo-fi aliqua.',
		'thumbnail': 'project-5-thumb.jpg',
		'img': 'img/blogg6.jpg',
		'link': 'www.vasyd.se'
	},
	{
		'tags': ['webb','kommunikation'],
		'id': 5,
		'title': 'Malmö Live',
		'desc': 'Flannel vero odio, aesthetic veniam umami Austin voluptate consequat. Ugh Portland mlkshk scenester wayfarers. Culpa Terry Richardson exercitation ennui, sapiente actually single-origin coffee irony pariatur brunch. 8-bit sint consectetur, ad Wes Anderson Schlitz Pinterest Cosby sweater chambray stumptown.',
		'thumbnail': 'project-6-thumb.jpg',
		'img': 'img/blogg7.jpg',
		'link': 'www.malmolive.se'
	}
];

}());