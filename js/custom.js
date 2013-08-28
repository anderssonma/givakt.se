
$(document).ready(function(){

  $('#nav-open-btn').on('click', function() {
    $(this).toggleClass('menu-open');
    $('#inner-wrap').toggleClass('menu-open');
    $('nav').toggleClass('show');
  });

  $('#nav-close-btn').on('click', function() {
    $('#nav-open-btn').removeClass('menu-open');
    $('#nav-open-btn, #inner-wrap').removeClass('menu-open');
    $('nav').removeClass('show');
  });

});

$(window).load(function() {

});