//ナビゲーションの開閉

$(function () {
    $('header-btn').on('click', () => {
        //.onはスイッチのオンじゃないイベントリスナーをつけるということ
        // on = addEventListener
        $('body').toggleClass('is-openMenu')
        //toggleClass(指定したクラスを追加・削除)
    })
})