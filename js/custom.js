
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
  $(".flat-icon").flatshadow({
        angle: "SE",
            fade: true,
        boxShadow: false // Accept full 6 digit hex color (#000000)
  });

});

$(window).load(function() {

});