var pager = {
	isAnimating: false,
	pageInView: false,
	pageIn: '.project-page-1',
	pageOut: '.project-page-2',
	animEndCalls: 0,
	animEnd: function() {
		this.animEndCalls++;
		if (this.animEndCalls >= 2 || this.pageInView === false) {
			var cache = this.pageIn;
			this.pageIn = this.pageOut;
			this.pageOut = cache;
			this.isAnimating = false;
			this.pageInView = true;
			this.animEndCalls = 0;
			console.log('Animation Ended');
		}
	}
}

var nextPage = function() {

	if (pager.isAnimating) {
		return false;
	}

	pager.isAnimating = true;

	$(pager.pageIn).addClass('project-current project-moveFromRight').on('webkitAnimationEnd', function() {
		$(pager.pageIn).off('webkitAnimationEnd');
		$(pager.pageIn).removeClass('project-moveFromRight');
		pager.animEnd();
	});

	if (pager.pageInView) {
		$(pager.pageOut).addClass('project-moveToLeft').on('webkitAnimationEnd', function() {
			$(pager.pageOut).off('webkitAnimationEnd');
			$(pager.pageOut).removeClass('project-current project-moveToLeft');
			pager.animEnd();
		});
	}

}

$(document).ready(function() {

	$('.project-thumb').on('click', function(e) {
		nextPage();
	});

	$(window).on('keydown', function(e) {
		if (e.keyCode === 39) {
			nextPage();
		} else if (e.keyCode === 37) {
			prevPage();
		}
	});

});

var projects = [
	{
		"tags": ["webb","kommunikation"],
		"id": 0,
		"title": "Glasvasen",
		"desc": "Flannel vero odio, aesthetic veniam umami Austin voluptate consequat. Ugh Portland mlkshk scenester wayfarers. Culpa Terry Richardson exercitation ennui, sapiente actually single-origin coffee irony pariatur brunch. YOLO et semiotics fashion axe vinyl, chambray veniam street art organic sartorial. Portland scenester salvia cred labore, squid seitan delectus elit aliquip skateboard bitters. 8-bit sint consectetur, ad Wes Anderson Schlitz Pinterest Cosby sweater chambray stumptown. Pinterest fugiat brunch DIY semiotics, photo booth gluten-free anim accusamus non lo-fi aliqua. Ennui cillum farm-to-table, nisi do Godard et intelligentsia vinyl excepteur messenger bag post-ironic. Veniam readymade duis, ea id et tousled Terry Richardson flexitarian. Austin nulla adipisicing keytar shabby chic ea swag, tattooed Godard accusamus fugiat Truffaut ugh. Consequat irony flexitarian, forage ethical scenester chambray proident gastropub tote bag brunch. Beard actually roof party post-ironic, salvia meggings accusamus. Cupidatat consectetur flannel, mollit yr nostrud Portland. Roof party dolore Portland nesciunt, semiotics cardigan in disrupt deserunt shabby chic esse duis.",
		"thumbnail": "project-1-thumb.png",
		"images": [
			"project-1-shot1.jpg",
			"project-1-shot2.png",
			"project-1-shot3.jpg"
		],
		"link": "www.glasvasen.se"
	},
	{
		"tags": ["redaktionellt","kommunikation"],
		"id": 1,
		"title": "Skåneleden",
		"desc": "Flannel vero odio, aesthetic veniam umami Austin voluptate consequat. Ugh Portland mlkshk scenester wayfarers. Culpa Terry Richardson exercitation ennui, sapiente actually single-origin coffee irony pariatur brunch. YOLO et semiotics fashion axe vinyl, chambray veniam street art organic sartorial. Portland scenester salvia cred labore, squid seitan delectus elit aliquip skateboard bitters. 8-bit sint consectetur, ad Wes Anderson Schlitz Pinterest Cosby sweater chambray stumptown. Pinterest fugiat brunch DIY semiotics, photo booth gluten-free anim accusamus non lo-fi aliqua. Ennui cillum farm-to-table, nisi do Godard et intelligentsia vinyl excepteur messenger bag post-ironic. Veniam readymade duis, ea id et tousled Terry Richardson flexitarian. Austin nulla adipisicing keytar shabby chic ea swag, tattooed Godard accusamus fugiat Truffaut ugh. Consequat irony flexitarian, forage ethical scenester chambray proident gastropub tote bag brunch. Beard actually roof party post-ironic, salvia meggings accusamus. Cupidatat consectetur flannel, mollit yr nostrud Portland. Roof party dolore Portland nesciunt, semiotics cardigan in disrupt deserunt shabby chic esse duis.",
		"thumbnail": "project-2-thumb.jpg",
		"images": [
			"project-2-shot1.jpg",
			"project-2-shot2.jpg",
			"project-2-shot3.jpg"
		],
		"link": "www.skaneleden.se"
	},
	{
		"tags": ["webb","redaktionellt"],
		"id": 2,
		"title": "Skånska Landskap",
		"desc": "Flannel vero odio, aesthetic veniam umami Austin voluptate consequat. Ugh Portland mlkshk scenester wayfarers. Culpa Terry Richardson exercitation ennui, sapiente actually single-origin coffee irony pariatur brunch. YOLO et semiotics fashion axe vinyl, chambray veniam street art organic sartorial. Portland scenester salvia cred labore, squid seitan delectus elit aliquip skateboard bitters. 8-bit sint consectetur, ad Wes Anderson Schlitz Pinterest Cosby sweater chambray stumptown. Pinterest fugiat brunch DIY semiotics, photo booth gluten-free anim accusamus non lo-fi aliqua. Ennui cillum farm-to-table, nisi do Godard et intelligentsia vinyl excepteur messenger bag post-ironic. Veniam readymade duis, ea id et tousled Terry Richardson flexitarian. Austin nulla adipisicing keytar shabby chic ea swag, tattooed Godard accusamus fugiat Truffaut ugh. Consequat irony flexitarian, forage ethical scenester chambray proident gastropub tote bag brunch. Beard actually roof party post-ironic, salvia meggings accusamus. Cupidatat consectetur flannel, mollit yr nostrud Portland. Roof party dolore Portland nesciunt, semiotics cardigan in disrupt deserunt shabby chic esse duis.",
		"thumbnail": "project-3-thumb.png",
		"images": [
			"project-3-shot1.jpg",
			"project-3-shot2.jpg",
			"project-3-shot3.jpg"
		],
		"link": "www.skanskalandskap.se"
	},
	{
		"tags": ["redaktionellt","kommunikation"],
		"id": 3,
		"title": "Purity Vodka",
		"desc": "Flannel vero odio, aesthetic veniam umami Austin voluptate consequat. Ugh Portland mlkshk scenester wayfarers. Culpa Terry Richardson exercitation ennui, sapiente actually single-origin coffee irony pariatur brunch. YOLO et semiotics fashion axe vinyl, chambray veniam street art organic sartorial. Portland scenester salvia cred labore, squid seitan delectus elit aliquip skateboard bitters. 8-bit sint consectetur, ad Wes Anderson Schlitz Pinterest Cosby sweater chambray stumptown. Pinterest fugiat brunch DIY semiotics, photo booth gluten-free anim accusamus non lo-fi aliqua. Ennui cillum farm-to-table, nisi do Godard et intelligentsia vinyl excepteur messenger bag post-ironic. Veniam readymade duis, ea id et tousled Terry Richardson flexitarian. Austin nulla adipisicing keytar shabby chic ea swag, tattooed Godard accusamus fugiat Truffaut ugh. Consequat irony flexitarian, forage ethical scenester chambray proident gastropub tote bag brunch. Beard actually roof party post-ironic, salvia meggings accusamus. Cupidatat consectetur flannel, mollit yr nostrud Portland. Roof party dolore Portland nesciunt, semiotics cardigan in disrupt deserunt shabby chic esse duis.",
		"thumbnail": "project-4-thumb.jpg",
		"images": [
			"project-1-shot1.jpg",
			"project-1-shot2.png",
			"project-1-shot3.jpg"
		],
		"link": "www.purityvodka.com"
	},
	{
		"tags": ["webb","redaktionellt"],
		"id": 4,
		"title": "VASYD",
		"desc": "Flannel vero odio, aesthetic veniam umami Austin voluptate consequat. Ugh Portland mlkshk scenester wayfarers. Culpa Terry Richardson exercitation ennui, sapiente actually single-origin coffee irony pariatur brunch. YOLO et semiotics fashion axe vinyl, chambray veniam street art organic sartorial. Portland scenester salvia cred labore, squid seitan delectus elit aliquip skateboard bitters. 8-bit sint consectetur, ad Wes Anderson Schlitz Pinterest Cosby sweater chambray stumptown. Pinterest fugiat brunch DIY semiotics, photo booth gluten-free anim accusamus non lo-fi aliqua. Ennui cillum farm-to-table, nisi do Godard et intelligentsia vinyl excepteur messenger bag post-ironic. Veniam readymade duis, ea id et tousled Terry Richardson flexitarian. Austin nulla adipisicing keytar shabby chic ea swag, tattooed Godard accusamus fugiat Truffaut ugh. Consequat irony flexitarian, forage ethical scenester chambray proident gastropub tote bag brunch. Beard actually roof party post-ironic, salvia meggings accusamus. Cupidatat consectetur flannel, mollit yr nostrud Portland. Roof party dolore Portland nesciunt, semiotics cardigan in disrupt deserunt shabby chic esse duis.",
		"thumbnail": "project-5-thumb.jpg",
		"images": [
			"project-2-shot1.jpg",
			"project-2-shot2.jpg",
			"project-2-shot3.jpg"
		],
		"link": "www.vasyd.se"
	},
	{
		"tags": ["webb","kommunikation"],
		"id": 5,
		"title": "Malmö Live",
		"desc": "Flannel vero odio, aesthetic veniam umami Austin voluptate consequat. Ugh Portland mlkshk scenester wayfarers. Culpa Terry Richardson exercitation ennui, sapiente actually single-origin coffee irony pariatur brunch. YOLO et semiotics fashion axe vinyl, chambray veniam street art organic sartorial. Portland scenester salvia cred labore, squid seitan delectus elit aliquip skateboard bitters. 8-bit sint consectetur, ad Wes Anderson Schlitz Pinterest Cosby sweater chambray stumptown. Pinterest fugiat brunch DIY semiotics, photo booth gluten-free anim accusamus non lo-fi aliqua. Ennui cillum farm-to-table, nisi do Godard et intelligentsia vinyl excepteur messenger bag post-ironic. Veniam readymade duis, ea id et tousled Terry Richardson flexitarian. Austin nulla adipisicing keytar shabby chic ea swag, tattooed Godard accusamus fugiat Truffaut ugh. Consequat irony flexitarian, forage ethical scenester chambray proident gastropub tote bag brunch. Beard actually roof party post-ironic, salvia meggings accusamus. Cupidatat consectetur flannel, mollit yr nostrud Portland. Roof party dolore Portland nesciunt, semiotics cardigan in disrupt deserunt shabby chic esse duis.",
		"thumbnail": "project-6-thumb.jpg",
		"images": [
			"project-3-shot1.jpg",
			"project-3-shot2.jpg",
			"project-3-shot3.jpg"
		],
		"link": "www.malmolive.se"
	},
	{
		"tags": ["webb","kommunikation"],
		"id": 0,
		"title": "Glasvasen",
		"desc": "Flannel vero odio, aesthetic veniam umami Austin voluptate consequat. Ugh Portland mlkshk scenester wayfarers. Culpa Terry Richardson exercitation ennui, sapiente actually single-origin coffee irony pariatur brunch. YOLO et semiotics fashion axe vinyl, chambray veniam street art organic sartorial. Portland scenester salvia cred labore, squid seitan delectus elit aliquip skateboard bitters. 8-bit sint consectetur, ad Wes Anderson Schlitz Pinterest Cosby sweater chambray stumptown. Pinterest fugiat brunch DIY semiotics, photo booth gluten-free anim accusamus non lo-fi aliqua. Ennui cillum farm-to-table, nisi do Godard et intelligentsia vinyl excepteur messenger bag post-ironic. Veniam readymade duis, ea id et tousled Terry Richardson flexitarian. Austin nulla adipisicing keytar shabby chic ea swag, tattooed Godard accusamus fugiat Truffaut ugh. Consequat irony flexitarian, forage ethical scenester chambray proident gastropub tote bag brunch. Beard actually roof party post-ironic, salvia meggings accusamus. Cupidatat consectetur flannel, mollit yr nostrud Portland. Roof party dolore Portland nesciunt, semiotics cardigan in disrupt deserunt shabby chic esse duis.",
		"thumbnail": "project-7-thumb.png",
		"images": [
			"project-1-shot1.jpg",
			"project-1-shot2.png",
			"project-1-shot3.jpg"
		],
		"link": "www.glasvasen.se"
	},
	{
		"tags": ["kommunikation"],
		"id": 1,
		"title": "Skåneleden",
		"desc": "Flannel vero odio, aesthetic veniam umami Austin voluptate consequat. Ugh Portland mlkshk scenester wayfarers. Culpa Terry Richardson exercitation ennui, sapiente actually single-origin coffee irony pariatur brunch. YOLO et semiotics fashion axe vinyl, chambray veniam street art organic sartorial. Portland scenester salvia cred labore, squid seitan delectus elit aliquip skateboard bitters. 8-bit sint consectetur, ad Wes Anderson Schlitz Pinterest Cosby sweater chambray stumptown. Pinterest fugiat brunch DIY semiotics, photo booth gluten-free anim accusamus non lo-fi aliqua. Ennui cillum farm-to-table, nisi do Godard et intelligentsia vinyl excepteur messenger bag post-ironic. Veniam readymade duis, ea id et tousled Terry Richardson flexitarian. Austin nulla adipisicing keytar shabby chic ea swag, tattooed Godard accusamus fugiat Truffaut ugh. Consequat irony flexitarian, forage ethical scenester chambray proident gastropub tote bag brunch. Beard actually roof party post-ironic, salvia meggings accusamus. Cupidatat consectetur flannel, mollit yr nostrud Portland. Roof party dolore Portland nesciunt, semiotics cardigan in disrupt deserunt shabby chic esse duis.",
		"thumbnail": "project-8-thumb.jpg",
		"images": [
			"project-2-shot1.jpg",
			"project-2-shot2.jpg",
			"project-2-shot3.jpg"
		],
		"link": "www.skaneleden.se"
	},
	{
		"tags": ["webb"],
		"id": 2,
		"title": "Skånska Landskap",
		"desc": "Flannel vero odio, aesthetic veniam umami Austin voluptate consequat. Ugh Portland mlkshk scenester wayfarers. Culpa Terry Richardson exercitation ennui, sapiente actually single-origin coffee irony pariatur brunch. YOLO et semiotics fashion axe vinyl, chambray veniam street art organic sartorial. Portland scenester salvia cred labore, squid seitan delectus elit aliquip skateboard bitters. 8-bit sint consectetur, ad Wes Anderson Schlitz Pinterest Cosby sweater chambray stumptown. Pinterest fugiat brunch DIY semiotics, photo booth gluten-free anim accusamus non lo-fi aliqua. Ennui cillum farm-to-table, nisi do Godard et intelligentsia vinyl excepteur messenger bag post-ironic. Veniam readymade duis, ea id et tousled Terry Richardson flexitarian. Austin nulla adipisicing keytar shabby chic ea swag, tattooed Godard accusamus fugiat Truffaut ugh. Consequat irony flexitarian, forage ethical scenester chambray proident gastropub tote bag brunch. Beard actually roof party post-ironic, salvia meggings accusamus. Cupidatat consectetur flannel, mollit yr nostrud Portland. Roof party dolore Portland nesciunt, semiotics cardigan in disrupt deserunt shabby chic esse duis.",
		"thumbnail": "project-9-thumb.png",
		"images": [
			"project-3-shot1.jpg",
			"project-3-shot2.jpg",
			"project-3-shot3.jpg"
		],
		"link": "www.skanskalandskap.se"
	},
	{
		"tags": ["kommunikation"],
		"id": 3,
		"title": "Purity Vodka",
		"desc": "Flannel vero odio, aesthetic veniam umami Austin voluptate consequat. Ugh Portland mlkshk scenester wayfarers. Culpa Terry Richardson exercitation ennui, sapiente actually single-origin coffee irony pariatur brunch. YOLO et semiotics fashion axe vinyl, chambray veniam street art organic sartorial. Portland scenester salvia cred labore, squid seitan delectus elit aliquip skateboard bitters. 8-bit sint consectetur, ad Wes Anderson Schlitz Pinterest Cosby sweater chambray stumptown. Pinterest fugiat brunch DIY semiotics, photo booth gluten-free anim accusamus non lo-fi aliqua. Ennui cillum farm-to-table, nisi do Godard et intelligentsia vinyl excepteur messenger bag post-ironic. Veniam readymade duis, ea id et tousled Terry Richardson flexitarian. Austin nulla adipisicing keytar shabby chic ea swag, tattooed Godard accusamus fugiat Truffaut ugh. Consequat irony flexitarian, forage ethical scenester chambray proident gastropub tote bag brunch. Beard actually roof party post-ironic, salvia meggings accusamus. Cupidatat consectetur flannel, mollit yr nostrud Portland. Roof party dolore Portland nesciunt, semiotics cardigan in disrupt deserunt shabby chic esse duis.",
		"thumbnail": "project-10-thumb.jpg",
		"images": [
			"project-1-shot1.jpg",
			"project-1-shot2.png",
			"project-1-shot3.jpg"
		],
		"link": "www.purityvodka.com"
	},
	{
		"tags": ["webb"],
		"id": 4,
		"title": "VASYD",
		"desc": "Flannel vero odio, aesthetic veniam umami Austin voluptate consequat. Ugh Portland mlkshk scenester wayfarers. Culpa Terry Richardson exercitation ennui, sapiente actually single-origin coffee irony pariatur brunch. YOLO et semiotics fashion axe vinyl, chambray veniam street art organic sartorial. Portland scenester salvia cred labore, squid seitan delectus elit aliquip skateboard bitters. 8-bit sint consectetur, ad Wes Anderson Schlitz Pinterest Cosby sweater chambray stumptown. Pinterest fugiat brunch DIY semiotics, photo booth gluten-free anim accusamus non lo-fi aliqua. Ennui cillum farm-to-table, nisi do Godard et intelligentsia vinyl excepteur messenger bag post-ironic. Veniam readymade duis, ea id et tousled Terry Richardson flexitarian. Austin nulla adipisicing keytar shabby chic ea swag, tattooed Godard accusamus fugiat Truffaut ugh. Consequat irony flexitarian, forage ethical scenester chambray proident gastropub tote bag brunch. Beard actually roof party post-ironic, salvia meggings accusamus. Cupidatat consectetur flannel, mollit yr nostrud Portland. Roof party dolore Portland nesciunt, semiotics cardigan in disrupt deserunt shabby chic esse duis.",
		"thumbnail": "project-11-thumb.jpg",
		"images": [
			"project-2-shot1.jpg",
			"project-2-shot2.jpg",
			"project-2-shot3.jpg"
		],
		"link": "www.vasyd.se"
	},
	{
		"tags": ["webb","kommunikation"],
		"id": 5,
		"title": "Malmö Live",
		"desc": "Flannel vero odio, aesthetic veniam umami Austin voluptate consequat. Ugh Portland mlkshk scenester wayfarers. Culpa Terry Richardson exercitation ennui, sapiente actually single-origin coffee irony pariatur brunch. YOLO et semiotics fashion axe vinyl, chambray veniam street art organic sartorial. Portland scenester salvia cred labore, squid seitan delectus elit aliquip skateboard bitters. 8-bit sint consectetur, ad Wes Anderson Schlitz Pinterest Cosby sweater chambray stumptown. Pinterest fugiat brunch DIY semiotics, photo booth gluten-free anim accusamus non lo-fi aliqua. Ennui cillum farm-to-table, nisi do Godard et intelligentsia vinyl excepteur messenger bag post-ironic. Veniam readymade duis, ea id et tousled Terry Richardson flexitarian. Austin nulla adipisicing keytar shabby chic ea swag, tattooed Godard accusamus fugiat Truffaut ugh. Consequat irony flexitarian, forage ethical scenester chambray proident gastropub tote bag brunch. Beard actually roof party post-ironic, salvia meggings accusamus. Cupidatat consectetur flannel, mollit yr nostrud Portland. Roof party dolore Portland nesciunt, semiotics cardigan in disrupt deserunt shabby chic esse duis.",
		"thumbnail": "project-12-thumb.jpg",
		"images": [
			"project-3-shot1.jpg",
			"project-3-shot2.jpg",
			"project-3-shot3.jpg"
		],
		"link": "www.malmolive.se"
	}
]