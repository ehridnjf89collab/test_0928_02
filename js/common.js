$(document).ready(function(){//실행틀 시작


// $(".gnb > li").mouseenter(function(){

// $(this).children(".depth2").stop().fadeIn();

// });

// $(".gnb > li").mouseleave(function(){


// $(this).children(".depth2").stop().fadeOut();


// });

$(".gnb > li").hover(function(){

$(this).children(".depth2").stop().fadeToggle();

});

$(".ham").click(function(){
$(".dim").fadeIn();
$(".mgnb-wrap").animate({

   "right":"0"

});

});

$(".mgnb-close").click(function(){

  $(".dim").fadeOut();
  $(".mgnb-wrap").animate({"right":"-100%"});

});

$(".btn-search").click(function(){
$(".search").fadeIn();

});
$(".search-close").click(function(){
  $(".search").fadeOut();
});



const visual_list = new Swiper(".visual_list", {


  effect: "fade",
  fadeEffect: {
    crossFade: true 
  },
  loop: true,

autoplay: {
    // 자동슬라이드
    delay: 5000, 
    disableOnInteraction: false,
    
  },
  speed: 1000, 
  navigation: {
    nextEl: ".swiper-button-next", 
    prevEl: ".swiper-button-prev", 
  },

  pagination: {
    el: ".swiper-pagination", 
    type: "bullets", 
    clickable: true, 
  },


})



const about_txt_list = new Swiper(".about_txt_list", {
effect: "fade",
  fadeEffect: {
    crossFade: true 
  },

});




const about_img_list = new Swiper(".about_img_list", {
  autoplay: {
    // 자동슬라이드
    delay: 5000, 
    disableOnInteraction: false,
    
  },
  speed: 1000, 
  pagination: {
    el: ".swiper-pagination",  
    clickable: true, 
  },

});
about_txt_list.controller.control=about_img_list
about_img_list.controller.control=about_txt_list


const prd_list = new Swiper(".prd_list", {

centeredSlides: true,
 loop: true,
 speed: 1000,
 autoplay: {
    // 자동슬라이드
    delay: 5000, 
    disableOnInteraction: false,
    
  },
  navigation: {
    nextEl: ".prb-next", 
    prevEl: ".prb-prev", 
  },
   slidesPerView: 1,
   breakpoints: { 
    1000: {
      
      slidesPerView: 2,
    },
    1400: {
    
      slidesPerView: 3,
    },
  },
   
});

$("#collection ul li").hover(function(){

$(this).addClass("active").siblings().removeClass("active")

});
      
  });//실행틀 끝