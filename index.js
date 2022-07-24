$(function(){
    var bar = new ProgressBar.Line(splash_text, {//id名を指定
        easing: 'easeInOut',//アニメーション効果linear、easeIn、easeOut、easeInOutが指定可能
        duration: 1000,//時間指定(1000＝1秒)
        strokeWidth: 0.2,//進捗ゲージの太さ
        color: '#000000',//進捗ゲージのカラー
        trailWidth: 0.2,//ゲージベースの線の太さ
        trailColor: '#bbb',//ゲージベースの線のカラー
        text: {//テキストの形状を直接指定       
          style: {//天地中央に配置
            position: 'absolute',
            left: '50%',
            top: '50%',
            padding: '0',
            margin: '-30px 0 0 0',//バーより上に配置
            transform:'translate(-50%,-50%)',
            'font-size':'1rem',
            color: '#000000',
          },
          autoStyleContainer: false //自動付与のスタイルを切る
        },
        step: function(state, bar) {
          bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
        }
      });
      
      //アニメーションスタート
      bar.animate(1.0, function () {//バーを描画する割合を指定します 1.0 なら100%まで描画します
        $("#splash_text").fadeOut(10);//フェイドアウトでローディングテキストを削除
        $(".loader_cover-up").addClass("coveranime");//カバーが上に上がるクラス追加
        $(".loader_cover-down").addClass("coveranime");//カバーが下に下がるクラス追加
        $("#splash").fadeOut();//#splashエリアをフェードアウト
      });
    
    });

let nav = document.querySelector("#inner")
let btn = document.querySelector(".toggle-btn")
let headerNav = document.querySelector(".header-nav")
let span = document.querySelector(".span")
let span2 = document.querySelector(".span-2")
let span3 = document.querySelector(".span-3")
let headerNavLogo = document.querySelector(".header-nav-logo")
let offsetTop = Math.floor(headerNav.getBoundingClientRect().top);


//btn.onclick = () =>{
    //nav.classList.toggle("open")
    //span.classList.toggle("open")
    //span2.classList.toggle("open")
    //span3.classList.toggle("open")

//};


let headerHeight = document.querySelector("header").clientHeight;


window.addEventListener('scroll', function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop >= headerHeight) {
    span.classList.add('changed')
    span2.classList.add('changed')
    span3.classList.add('changed')
    headerNavLogo.classList.add('changed')
    headerNav.classList.add('header-nav-changed')
    btn.classList.add('changed')
    //nav.classList.add('changed')
  }else{
    span.classList.remove('changed')
    span2.classList.remove('changed')
    span3.classList.remove('changed')
    headerNavLogo.classList.remove('changed')
    headerNav.classList.remove('header-nav-changed')
    btn.classList.remove('changed')
    //nav.classList.remove('changed')
  }
});

//スクロール量に応じて変更を含める。

$(function(){
  $(window).on('scroll', function(){
      var topbar = $(".header-nav").offset().top;
      let headerTop = 40;
      if($(window).scrollTop() > headerTop ){
          $('.header-nav').addClass('position-changed');
          $('#inner').addClass('changed');
      }else{
          $('.header-nav').removeClass('position-changed');
          $('#inner').removeClass('changed');
      }
  });
      $('.toggle-btn').click(function(){
          if($('#inner').hasClass('open')){
              $('#inner').removeClass('open');
              $('#inner').addClass('closed');
              $('.span').removeClass('open');
              $('.span-2').removeClass('open');
              $('.span-3').removeClass('open');


          }else{
              $('#inner').addClass('open');
              $('#inner').removeClass('closed');
              $('.span').addClass('open');
              $('.span-2').addClass('open');
              $('.span-3').addClass('open');
              

          }
          

      });

      $('#inner').find('ul').find('li').click(function(){
          $('#inner').removeClass('open');
      })


  
});

