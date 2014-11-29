$( document ).ajaxSuccess(function() {
  /* Disable past click actions */
  $('.summary>.chapter>.articles>.chapter>a').off('click');
  /* Hide all not in use subsubsections */
  $('.summary>.chapter>.articles>.chapter>.articles').hide();
  /* Show active subsubsections */
  $('.articles>.active').parent().show();
  $('.articles>.active').children('.articles').show();
  /* Show subsections in page */
  if ($('.summary>.chapter.active').size() > 0 && $('.book-body .articles').size() == 0 && $('.active>.articles').size() > 0)
  {
    $('.book-body .page-wrapper .page-inner').append('<h3>Sections</h3>');
    $('.active>.articles').clone().appendTo('.book-body .page-wrapper .page-inner');
    $('.book-body .page-wrapper .page-inner').append('<br>');
  }
  /* Show subsubsections in page */
  if ($('.articles>.active>.articles').size() > 0 && $('.book-body .articles').size() == 0)
  {
    $('.book-body .page-wrapper .page-inner').append('<h3>Subsections</h3>');
    $('.articles>.active>.articles').clone().appendTo('.book-body .page-wrapper .page-inner');
    $('.book-body .page-wrapper .page-inner').append('<br>');
  }
});