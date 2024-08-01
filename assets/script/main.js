// ハンバーガーメニュー
var hamburger = $('.hamburger-menu');
// OPEN/CLOSEボタンをクリックしたら
$('.hamburger-btn').on('click', function () {
  // .hamburgerの表示・非表示を繰り返す
  hamburger.toggleClass('hamburger-menu-active');
});
// 画面幅のサイズが変わったら
$(window).on('resize', function () {
  // ハンバーガーメニューを閉じる
  hamburger.removeClass('hamburger-menu-active');
});