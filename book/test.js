$( document ).ajaxSuccess(function() {
  $('.summary > .chapter > a').click(function() {
    if (($(this).attr('data-level') == 1) || ($(this).attr('data-level') == 2)) {
      $(this).parent().find('> ul').slideToggle(); return false;
    }
  });
  $('.summary > .chapter > ul').hide(); 
  $('.articles > .active').parent().show();
});