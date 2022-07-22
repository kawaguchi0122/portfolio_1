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
