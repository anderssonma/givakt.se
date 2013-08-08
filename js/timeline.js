$(document).ready(function() {

	function onScroll(event) {
    // Check if we're within 100 pixels of the bottom edge of the broser window.
    var winHeight = window.innerHeight ? window.innerHeight : $(window).height(); // iphone fix
    var closeToBottom = ($(window).scrollTop() + winHeight > $(document).height() - 100);
    if (closeToBottom) {
      // Get the first then items from the grid, clone them, and add them to the bottom of the grid.
      var items = $('.timeline .item');
      $('.timeline').append(items.clone());
      /*
      var itemSet = '.set-' + (Math.floor(Math.random() * 4) + 1) + ' .item';
      var items = $(itemSet);
      $('.timeline').append(items.clone());
      */
    }
  };

  $(window).on('scroll', onScroll);

});