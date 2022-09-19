$(document).ready(function(){
// 실행문

// header 설정---------------------------------------------------------------------------
// header 와 section의 높이를 윈도우의 높이랑 맞추어라.
let ht =$(window).height();

// console.log(ht);
$("header").height(ht)
$("section").height(ht)


// 리사이징 될 때마다 header, section의 높이를 윈도우의 높이와 맞추어라.
$(window).resize(function(){
    let ht = $(window).height();

    $("header").height(ht)
    $("section").height(ht)

})


// header 에서 마우스를 내렸을 때 #wrap 의 위치로 scroll 의 위치가 바뀌어라.
$("header").mousewheel(function(event,delta){
    let ht =$(window).height();
    let wrapTop =$("#wrap").offset().top

    if(delta<0){
        $("html,body").stop().animate({scrollTop:wrapTop},800)
    }
})
// 첫번째 섹션에서 마우스를 올렸을 때 스크롤 탑이 0이 되어라.
$("section").eq(0).mousewheel(function(event,delta){
    if(delta>0){
        $("html,body").stop().animate({scrollTop:0},800)
    }

    // 첫번째 섹션에서 마우스를 내릴 때 다음 섹션으로 넘어가라.
    
    let sec2 =$("section").eq(1).offset().top

    if(delta<0){

        $("html,body").stop().animate({screenTop:sec2},800)
    }
})

// 두번째 섹션에서 마우스를 올렸을 때 스크롤 탑이 0이 되어라.
$("section").eq(1).mousewheel(function(event,delta){
    
    if(delta>0){
        let sec1 =$("section").eq(0).offset().top

        $("html,body").stop().animate({scrollTop:sec1},800)
    }

    // 두번째 섹션에서 마우스를 내릴 때 다음 섹션으로 넘어가라.
    if(delta<0){
        let sec3 =$("section").eq(2).offset().top

        $("html,body").stop().animate({screenTop:sec3},800)
    }
})





// 랜딩페이지 자동 변환---------------------------------------------------------------------
// landingTxt를 클릭하면 각 순번에 맞는 landing li가 보여져라.
$(".landingTxt li").click(function(){

    let li = $(this).index();
    console.log(li);

    $(".landing li").eq(li-1).css({"left":0}).stop().animate({"left":"-100%"})
    $(".landing li").eq(li).css({"left":"100%"}).stop().animate({"left":0})

})



// landing cursor 설정
// landing001
$(window).mousemove(function(e){
    $(".cursor01").css({"left":e.clientX-200,"top":e.clientY-200})
})

// // style1 안으로 들어갔을 때, cursor 에 class 값을 넣어라.
// $(".style1").mouseenter(function(){
//     $(".cursor01").addClass("style1")
// })
// $(".style1").mouseleave(function(){
//     $(".cursor01").removeClass("style1")
// })

// landing002
$(window).mousemove(function(e){
    $(".cursor02").css({"left":e.clientX-200,"top":e.clientY-200})
})

// // style1 안으로 들어갔을 때, cursor 에 class 값을 넣어라.
// $(".style2").mouseenter(function(){
//     $(".cursor02").addClass("style2")
// })
// $(".style2").mouseleave(function(){
//     $(".cursor02").removeClass("style2")
// })

// landing003
$(window).mousemove(function(e){
    $(".cursor03").css({"left":e.clientX-200,"top":e.clientY-200})
})

// // style1 안으로 들어갔을 때, cursor 에 class 값을 넣어라.
// $(".style3").mouseenter(function(){
//     $(".cursor03").addClass("style3")
// })
// $(".style3").mouseleave(function(){
//     $(".cursor03").removeClass("style3")
// })


//sec01 설정-------------------------------------------------------------------------------
// background 시퀀스 적용
// 이미지 한꺼번에 불러오기
for (var i = 0; i < 17; i++) {
    $('<img src="img/obj' + i + '.png">').appendTo(".obj");
}

$(window).mousemove(function(e){

    let posX =e.pageX;
    let wd =$("section:nth-child(1)").width();

    let percent = Math.floor((posX / wd)*17)
    console.log(percent)

    $(".obj>img").hide();
    $(".obj>img").eq(percent).show()

})






// // 마우스가 움직일 때, back img가 움직이는 반응해라.
// $("section:nth-child(1)").mousemove(function(e){

//     let x =e.pageX;
//     let y =e.pageY;

//     // 나누는 수치가 커질수록 마우스의 움직임에 따른 이미지의 움직임 폭이 작아지고,
//     // 나누는 수치가 적을수록 이미지의 움직임 폭이 커진다.
//     $(".p41").css({"bottom": -80-(y/20) , "right": 20-(x/30)})
//     $(".p42").css({"bottom": -120+(y/30) , "right": 0+(x/20)})


// })


// 윈도우에서 스크롤 했을 때 .txtBox 와 .imgBox 가 on값을 부여받아라.
$(window).scroll(function(){
    let sc = $(this).scrollTop()

    let sec01 = $("section").eq(0).offset().top;
    let sec02 = $("section").eq(1).offset().top;
    let sec03 = $("section").eq(2).offset().top;

    if(sc>=sec01-1 && sc<sec02){
        $("section").eq(0).addClass("on")
    }else{$("section").eq(0).removeClass("on")}

})

// .txtBox h2가 .txt_cursor에 의해 타이핑 되는 효과를 나타내라.
// .txtBox h2가 한글자씩 잘라져(split) 나열된 갯수를(length)찾아라.
let txt = $(".txtBox h2").text().split("")
let tl =txt.length
console.log(tl)

let tt = 0;
setInterval(function(){

    if(tt<tl);
    $(".txt_cursor").append(txt[tt])
    tt++;

    if(tt==tl)
    console.log(tt)


},500)



// sec02 세부설정-------------------------------------------------------------------------
// article h2 click 했을 때 article 와 h2 p 가 on값을 부여받아라.
$("article").click(function(){
    
    let h2 = $(this).index();

    
    $("article").removeClass("on")
    $("article").eq(h2).addClass("on")

    $("article h2").removeClass("on")
    $("article h2").eq(h2).addClass("on")

    $("article p").removeClass("on")
    $("article p").eq(h2).addClass("on")

})

// .best_nav li를 클릭했을 때 순번을 찾고, 순번에 맞게 .obj_inner가 120deg 회전해라.
$(".best_nav li").click(function(){

    let best = $(this).index();
    console.log(best)

    $(".obj_inner").css({"transform":"rotate("+(120*best)+"deg)"})
    
    

    let p =$(this).index()
    $(".obj_inner p").removeClass("on")
    $(".obj_inner p").eq(p).addClass("on")

})

// .sec02_article .left를 클릭하면 best가 보여져라.
// sec02_out div의 순서찾기
$(".sec02_article .left").click(function(){

    let div =$(".sec02_out>div").index();

    $(".sec02_out>div").eq(div-1).css({"left":0}).stop().animate({"left":"0"})

})
// .best .right를 클릭하면 .sec02_article가 보여져라.
// sec02_out div의 순서찾기
$(".best .right").click(function(){

    let div =$(".sec02_out>div").index();

    $(".sec02_out>div").eq(div-1).css({"left":"100%"}).stop().animate({"left":"100%"})

})





// sec03 세부설정--------------------------------------------------------------------------

$(".scroll").mousemove(function(e){

    let X = e.offsetX;
    let scWd = $(this).width();

    $(".scroll").find(".bar").css({"left":e.offsetX-100})

})


/$(".best_nav li").mouseenter(function(){

    let bn = $(this).index();
    console.log(bn);

    $(".best_nav li").removeClass("on")
    $(".best_nav li").eq(bn).addClass("on")


    let bt = $(this).index(); 

    $(".best_top").removeClass("on")
    $(".best_top").eq(bt).addClass("on")



})













    
})