$(function () {

  // PC版ヘッダーを固定
  $(window).scroll(function() {
    var headerHeight = $('#header-js').height();
    var scroll = $(window).scrollTop();
    if(scroll >= headerHeight) {
        $('.header-nav').addClass('fixed');
    } else {
        $('.header-nav').removeClass('fixed');   
    };
    console.log(headerHeight);
});

  // スマホ版ハンバーガーメニュー
  $('#hamburger-btn-js').click(function() {
    $('body').toggleClass('is-drawerActive');
  });

  $('.hamburger-nav li').click(function() {
    $('body').removeClass('is-drawerActive');
  });

});
