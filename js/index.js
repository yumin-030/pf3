$(window).scroll(function(){
    if($(window).scrollTop() > 66){
        $('header').css({'position':'fixed','backgroundColor':'rgba(245,244,240,0.5)','height':'50px'});
    } else if($(window).scrollTop() < 66){
        $('header').css({'position':'relative','backgroundColor':'f5f4f0','height':'68px'});
    }
});

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
let mainSwiper = new Swiper('.main-con', {
    slidesPerView: 1,
    loop: true,
    loopAdditionalSlides: 0,
    speed:1000,
    autoplay: { delay: 4000 },
    easing: "cubic-bezier(0.25, 10, 0.25, 1)",
    navigation: {
        nextEl: '.m-next',
        prevEl: '.m-prev',
    },
    pagination: {
        el: '.main-pg',
        clickable: true,
        type: 'fraction',
    },
    on: {
    autoplayTimeLeft(s, time, progress) {
        progressCircle.style.setProperty("--progress", 1 - progress);
        progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    }
    },
});
let main2SlideL = $('.m2-lslider-wrap').bxSlider({
    mode: 'fade',
    speed:1000,
    auto:true,
    pager:false,
    controls:false
},7000);

let main2SlideR = $('.m2-rslider-wrap').bxSlider({
    speed:500,
    auto:true,
    pager:true,
    controls:false
},5000,'easeInSine');

let main3SlideL = $('.m3-lslider-wrap').bxSlider({
    speed:500,
    auto:true,
    pager:true,
    controls:false
},5000,'easeInSine');

let main3SlideR = $('.m3-rslider-wrap').bxSlider({
    mode: 'fade',
    speed:1000,
    auto:true,
    pager:false,
    controls:false
},7000);

let rvSwiper = new Swiper(".rv-con", {
    slidesPerView: 4,
    loop: true,
    loopAdditionalSlides: 0,
    speed:1000,
    autoplay: { delay: 4000 },
    pagination: {
      el: ".rv-pg",
      clickable: true,
    },
    // easing: "cubic-bezier(0.25, 0.1, 0.25, 1)"
});

let newSwiper = new Swiper(".new-con", {
    slidesPerView: 3,
    loop: true,
    loopAdditionalSlides: 0,
    speed:1000,
    autoplay: { delay: 4000 },
    pagination: {
      el: ".new-pg",
      clickable: true,
      type: 'fraction',
    },
    navigation: {
        nextEl: '.n-next',
        prevEl: '.n-prev',
    }
    // easing: "cubic-bezier(0.25, 0.1, 0.25, 1)"
});

let otherSwiper = new Swiper(".other-con", {
    slidesPerView: 'auto',
    effect:'fade',
    loop: true,
    loopAdditionalSlides: 0,
    speed:1000,
    autoplay: { delay: 4000 },
    pagination: {
      el: ".other-pg",
      clickable: true,
    },
});

let ftSlider = $('.ft-wrap').bxSlider({
    minSlides: 4,
    maxSlides: 4,
    pager: false,
    spaceBetween: 20,
    slideWidth: 300,
    ticker: true,
    speed: 20000,
});

let onOff = true;
$('.lang').click(function(){
    if(onOff == true){
        $('.footer-b ul .lang + ul').css({'display':'flex'});
        $('.footer-b .lang > img').css({'rotate':'180deg'});
        onOff = false;
    } else {
        $('.footer-b ul .lang + ul').css({'display':'none'});
        $('.footer-b .lang > img').css({'rotate':'0deg'});
        onOff = true;
    }
})