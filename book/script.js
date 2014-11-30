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
    $('.book-body .page-wrapper .page-inner').append('<h3 class="subsection">Sections</h3>');
    $('.active>.articles').clone().appendTo('.book-body .page-wrapper .page-inner');
    $('.book-body .page-wrapper .page-inner').append('<br>');
  }
  /* Show subsubsections in page */
  if ($('.articles>.active>.articles').size() > 0 && $('.book-body .articles').size() == 0)
  {
    $('.book-body .page-wrapper .page-inner').append('<h3 class="subsection">Subsections</h3>');
    $('.articles>.active>.articles').clone().appendTo('.book-body .page-wrapper .page-inner');
    $('.book-body .page-wrapper .page-inner').append('<br>');
  }
  /* Add PDF link */
  if ($('.get-pdf').size() > 0) {
    $("<a href=\"https://www.gitbook.com/download/pdf/book/genomecompiler/genome-compiler-manual\" class=\"btn pull-left get-pdf\" aria-label=\"Toggle search\"><i class=\"fa fa-file-pdf-o\"></i> Get PDF</a>").insertAfter('#font-settings-wrapper');
  }
});