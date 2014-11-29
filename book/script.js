$( document ).ajaxSuccess(function() {
  /* Disable past click actions */
  $('.summary>.chapter>.articles>.chapter>a').off('click');
  /* Hide all not in use subsubsections */
  $('.summary>.chapter>.articles>.chapter>.articles').hide();
  /* Show active subsubsections */
  $('.articles>.active').parent().show();
  $('.articles>.active').children('.articles').show();
  /* Show subsections in page */
  if ($('.chapter.active').size() > 0 && $('.book-body .articles').size() == 0)
  {
    $('.book-body .page-wrapper .page-inner').prepend('<br>');
    $('.active>.articles').clone().prependTo('.book-body .page-wrapper .page-inner');
    $('.book-body .page-wrapper .page-inner').prepend('<h3>Sections</h3>');
  }
  /* Show subsubsections in page */
  if ($('.articles>.active>.articles').size() > 0 && $('.book-body .articles').size() == 0)
  {
    $('.book-body .page-wrapper .page-inner').prepend('<br>');
    $('.articles>.active>.articles').clone().prependTo('.book-body .page-wrapper .page-inner');
    $('.book-body .page-wrapper .page-inner').prepend('<h3>Subsections</h3>');
  }
});