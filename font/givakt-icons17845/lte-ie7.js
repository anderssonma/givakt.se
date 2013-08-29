/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'givakt-icons\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-Analys' : '&#xe000;',
			'icon-Webb' : '&#xe001;',
			'icon-Strategi' : '&#xe002;',
			'icon-Kommunikation' : '&#xe003;',
			'icon-Ideer' : '&#xe004;',
			'icon-Design' : '&#xe005;',
			'icon-Forsta' : '&#xe006;',
			'icon-Formulera' : '&#xe007;',
			'icon-Forandra' : '&#xe008;',
			'icon-prickar' : '&#xe009;',
			'icon-Pratbubbla_2' : '&#xe00a;',
			'icon-Pratbubbla_1' : '&#xe00b;',
			'icon-Person_2' : '&#xe00c;',
			'icon-Person_1' : '&#xe00d;',
			'icon-Mouse' : '&#xe00e;',
			'icon-Kontor_2' : '&#xe00f;',
			'icon-Kontor_1' : '&#xe010;',
			'icon-Dokument_3' : '&#xe011;',
			'icon-Dokument_2' : '&#xe012;',
			'icon-Dokument_1' : '&#xe013;',
			'icon-Computer' : '&#xe014;',
			'icon-bubbla' : '&#xe015;',
			'icon-mustasch' : '&#xe016;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};