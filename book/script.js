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
  /* Add Introduction link in contents to prevent numbering */
  if (window.location.pathname == "/Introduction/README.html")
  {
    active = " active";
  }
  else 
  {
    active = "";
  }
  if ($('.js-added').size() <= 0)
  {
    function count(s1, letter) {
      match = s1.match( new RegExp(letter,'g') )
      return match ? match.length : 0;
    }
    level = count($('.active').attr('data-level'),'\\.')+1;
    function repeat(str, times) {
        return new Array(times + 1).join(str);
    }
    pre_path = (level==1) ? './' : repeat('../', level-1);
    $('li[data-path="Introduction/README.html"]').remove();
    $('<li class="chapter js-added'+active+'" data-level="0" data-path="Introduction/README.html"><a href="'+pre_path+'Introduction/README.html"></i>Introduction</a></li>').insertAfter('li[data-level=0]');
  }
  /* Add PDF link */
  if ($('.get-pdf').size() == 0) {
    $("<a href=\"https://www.gitbook.com/download/pdf/book/genomecompiler/genome-compiler-manual\" class=\"btn pull-left get-pdf\" aria-label=\"Toggle search\"><i class=\"fa fa-file-pdf-o\"></i> Get PDF</a>").insertAfter('#font-settings-wrapper');
  }
});