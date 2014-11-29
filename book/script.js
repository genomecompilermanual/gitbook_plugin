$( document ).ajaxSuccess(function() {
  $('.summary>.chapter>.articles>.chapter>a').off('click');
  $('.summary>.chapter>.articles>.chapter>.articles').hide();
  $('.articles>.active').parent().show();
  $('.articles>.active').children('.articles').show();
});