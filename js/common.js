$(function() {
  $('header .menu a').on('click', function(e){
    var t = $($(this).attr('href')).position().top;
    $('html,body').animate({scrollTop:t},500);
    e.preventDefault();
    return false;
  });

  $(window).on('scroll', function() {
    var wh = window.innerHeight;
    var h = Math.floor(window.innerHeight / 2);
    var t1 = $('#COMPANY').position().top;
    var t2 = $('#ACCESS').position().top;
    var y = $(window).scrollTop();

    if (y > (t1 - h) && $('#COMPANY').data('opacity') == 0) {
      $('#COMPANY').animate({opacity:1},500);
      $('#COMPANY').data('opacity', 1);
    }
    if (y > (t2 - h) && $('#ACCESS').data('opacity') == 0) {
      $('#ACCESS').animate({opacity:1},500);
      $('#ACCESS').data('opacity', 1);
    }
    if (y < (t1 - wh) && $('#COMPANY').data('opacity') == 1) {
      $('#COMPANY').stop();
      $('#COMPANY').css({opacity:0});
      $('#COMPANY').data('opacity', 0);
    }
    if (y < (t2 - wh) && $('#ACCESS').data('opacity') == 1) {
      $('#ACCESS').stop();
      $('#ACCESS').css({opacity:0});
      $('#ACCESS').data('opacity', 0);
    }
  });
  $(window).trigger('scroll');
});
