var animEndEventNames = {
    'WebkitAnimation' : 'webkitAnimationEnd',
    'OAnimation' : 'oAnimationEnd',
    'msAnimation' : 'MSAnimationEnd',
    'animation' : 'animationend'
};

$(document).ready(function(){

  var isOpen = false;
  var animEnd = animEndEventNames[Modernizr.prefixed('animation')];

    /* IS IT POSSIBLE TO USE TRANSLATEX() WITH A FIXED ELEMENT */
    /* AKA - USE CSS INSTEAD */
  
      $('#nav-open-btn').on('click', function(e) {
        if (!isOpen) {
            $(this).css('-webkit-transform', 'translateX(-250px)');
            $('#inner-wrap').addClass('menu-open');
            $('nav').addClass('show');
            isOpen = true;
        } else {
            $(this).css('-webkit-transform', 'translateX(0)');
            $('#inner-wrap').removeClass('menu-open');
            $('nav').removeClass('show');
            isOpen = false;
        }
      });


  $('#nav-close-btn').on('click', function() {
    $('#nav-open-btn').css('-webkit-transform', 'translateX(0)');
    $('#nav-open-btn, #inner-wrap').removeClass('menu-open');
    $('nav').removeClass('show');
  });
});


$(window).load(function() {

});