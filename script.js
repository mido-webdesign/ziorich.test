$(function () {

  $('#hamburger-btn-js').click(function() {
    $('body').toggleClass('is-drawerActive');
  });

  $('.hamburger-nav li').click(function() {
    $('body').removeClass('is-drawerActive');
  });

});
