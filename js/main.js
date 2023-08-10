$(document).ready(function () {
  $(".hamburger_menu").click(function () {
    $(".hamburger_nav").slideToggle();
  });

  $(window).resize(function () {
    if (window.innerWidth >= 1025) {
      $(".hamburger_nav").hide();
    }
  });

  // $(window).resize(function () {
  //   if (window.innerWidth <= 1024) {
  //     $(".hamburger_nav").hide();
  //   }
  // });
});
