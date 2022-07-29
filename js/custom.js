$(function(){
  

  //메뉴 모달

  $('header .header-btn').click(function (e) {
    e.preventDefault();

    $('header').toggleClass('show');

    $('body').toggleClass('hidden');
  menu.restart();  
  
  })

  //client 슬라이드

    var swiper = new Swiper(".mySwiper", {
        loop: true,
        slidesPerView: 4,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
   });

  //탑 버튼
  
    $('.top_btn').click(function(e){
      e.preventDefault();
      $('html,body').animate({scrollTop:0},300)
  
    })

   //footer family site 토글

    $('footer .footer_top .footer_left button').click(function(e){
        e.preventDefault();
    
        $('footer .footer_wrap .family_menu').toggleClass('show');
    
    })

    //gsap효과

    menu = gsap.from('header .gnb .gnb_wrap > li',{
      yPercent:50,
      rotation:5,
      opacity:0,
      stagger:0.1,
      duration:1,
      "filter":"blur(10px)",
      })
      menu.pause();

    gsap.from('.menu_wrap .menu ul li',{
      yPercent:50,
      opacity:0,
      stagger:0.1,
      duration:1,
    })

    $(".motion01").each(function(index, item){

      gsap.from(item,{
        scrollTrigger:{
          trigger:item,
          start:"-50% 80%", 
          //markers:true,
          toggleActions:"play pause resume reset",
          scrub:1,
        },
        yPercent:30,
        opacity:0.5, 
        stagger:0.1, 
        duration:1,
      }) 
  
     })
     
});

