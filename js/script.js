//スマホの高さ合わせ(読み込み時)
/*$(window).resize(function () {
  var windowHeight = $(window).height();
  $(".mv").height(windowHeight);
});

//スマホの高さ合わせ
$('.mv').css('height', $(window).height());*/

//BGMの再生停止ボタン
var audio = $("#audio").get(0);
var isPlaying = false;
audio.volume = 0.3;

$(".sound-button").click(function () {
  if (isPlaying) {
    audio.pause();
    $(this).removeClass("sound-on");
    $(".sound-text").html("sound off");
  } else {
    audio.play();
    $(this).addClass("sound-on");
    $(".sound-text").html("sound on");
  }
});
audio.onplaying = function () {
  isPlaying = true;
};
audio.onpause = function () {
  isPlaying = false;
};

//ページスクロール
//#から始まるaリンクをクリックしたとき
jQuery('a[href^="#"]').on('click', function () {
  //クリックしたもののid="#〇〇"を取得　
  var id = jQuery(this).attr('href');
  //ページの一番上からの距離をpositionとして0としておく
  var position = 0;
  //id="#〇〇"が#だけじゃない時はその距離を取得、#だけの時は元々0なので0扱いになる
  if (id != '#') {
    position = jQuery(id).offset().top;
  };

  jQuery('html, body').animate({
    scrollTop: position
  }, 300);

});

$(window).resize(function () {
  var width = $(window).width();

  if(768 < width < 1280) {
    $('.container').css('padding-right', 50);
    $('.container').css('padding-left', 50);
  }
});

// 読み込んだらフェードアウト
$(window).on('load', function () {
    // 消えるタイミングはお好みで
    $('.loading').delay(1500).fadeOut(300);
});