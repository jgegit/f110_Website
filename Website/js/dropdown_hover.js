$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(10).fadeIn(0);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(10).fadeOut(50);
});