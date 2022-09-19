$(document).ready(function(){

//header landingpage 설정-------------------------------------
// slide_btn 을 mouseenter 했을 때 article 이 순번대로 나타나라.
$(".slide_btn li").mouseenter(function(){
    let a =$(this).index();

    console.log(a);
    $("article").stop().fadeOut();
    $("article").eq(a).stop().fadeIn()

})

// article 이 일정 시간에 맞추어 반복적으로 움직여라.(자동설정)**확인필요***
    // let aa =0;

    // setInterval(function(){

    //     if(aa<3)aa++;
    //     if(aa==3)aa=3;

    //     $("article").hide()
    //     $("article").eq(aa).show

    //     $(".slide_btn li").eq(aa).trigger("click");

    // },4000)


// menu_btn을 눌렀을 때 menu>ul (menu001)이 나타나라.
$(".menu001>li").mouseenter(function(e){
    e.preventDefault();

    let b =$(this).index()

    $(".menu001>li").find("ul").stop().slideUp()
    $(this).children("ul").stop().slideDown()
})

$("body").click(function(){

    $(".menu001>li").find("ul").stop().slideUp()
})

$(".menu .menu_btn").click(function(){

    $(".menu001").addClass("on")
    $(".menu001>li").find("ul").stop().slideUp()
})

$(".menu").mouseleave(function(){

    $(".menu001 .depth002").removeClass("on");
    $(".menu001").removeClass("on");
    $(".depth002 ul").removeClass("on");
})



//con01 설정--------------------------------------------
// con01_left 를 클릭시 box3_img 이 왼쪽으로 움직여라.
let c=0;

$(".con01_left").click(function(){

    if(c<3)c++;

    $(".box3_img").css({"left":-470*c})

})
$(".con01_right").click(function(){

    if(c>0)c--;

    $(".box3_img").css({"left":-470*c})

})

// con02 설정-----------------------------------------------
// .con02_icon li에 mousenter 했을 때 순번을 찾고, .con02_img img에 on값이 부여되어라.
$(".con02_icon li").mouseenter(function(){

    let m =$(this).index();

    $(".con02_img img").removeClass("on")
    $(".con02_img img").eq(m).addClass("on")


})



// con03 설정-----------------------------------------------
// 마우스를 .con03_img main에 마우스가 올라갔을 때 .on 값을 받아라.
$(".con03_img main").mouseenter(function(){

    let d = $(this).index();
    

    $(".con03_img main").removeClass("on")
    $(".con03_img main").eq(d).addClass("on")

})


// con04 설정--------------------------------------------
$(".con04_title li").click(function(e){
    e.preventDefault();

    let i =$(this).index();
    console.log(i);
    $(".con04_img p").stop().fadeOut();
    $(".con04_img p").eq(i+1).stop().fadeIn()
    

})

// con05 설정-----------------------------------------------
// .con05_txt p 의 순번을 찾고 클릭 시 .con05_img li 가 순번에 맞게 on값을 받아라.
$(".con05_txt p").click(function(){

    let mm =$(this).index();
    
    $(".con05_img li").removeClass("on")
    $(".con05_img li").eq(mm).addClass("on")

    $(".con05_txtbtn p").removeClass("on")
    $(".con05_txtbtn p").eq(mm).addClass("on")

})




// 미디어쿼리
// mo_photo li 클릭시, on값을 받아라.
$(".mo_photo li").click(function(e){

    let ii =$(this).index();
    console.log(ii);

    $(".mo_photo li").removeClass("on")
    $(".mo_photo li").eq(ii).addClass("on")

})




})