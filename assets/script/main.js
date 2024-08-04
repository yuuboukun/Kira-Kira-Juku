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

// タブメニュー
// 初期表示時にtab1以外の要素を非表示にする
document.querySelectorAll('.courses__tab-content:not(#tab1)').forEach(elm => {
  elm.style.display = 'none';
});

// クリックされたリンクに応じて要素を表示する
document.querySelectorAll('.courses__tab a').forEach(link => {
  link.addEventListener('click', e => {
    // デフォルトの動作を無効にする
    e.preventDefault();
    let target = e.target;

    // クリックされたリンクのhref属性に対応する要素を表示し、それ以外の要素を非表示にする
    let targetId = target.getAttribute('href').substring(1); // リンク先のIDを取得（先頭の#を削除）
    document.querySelectorAll('.courses__tab-content').forEach(elm => {
      if (elm.id === targetId) {
        elm.style.display = 'block';
      } else {
        elm.style.display = 'none';
      }
    });

    // クリックされたリンクにcurrentクラスを付け、他のリンクからcurrentクラスを削除する
    document.querySelector('.courses__tab.current').classList.remove('current');
    target.parentElement.classList.add('current');
  });
});
