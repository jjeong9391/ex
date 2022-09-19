$(document).ready(function(){

    // // .top_barinner p:nth-child(1)의 span 시간이 나타나라.
    // setInterval(function(){

    // //내장객체
    // let hr = now.getHours();
    // let min = now.getMinutes();
    // let mNum;
    // let hNum;


    // // 한자리 수 일때 앞에 0 붙여 나타나라
   
    // if(min>=10){
    //     mNum = min
    // }else{
    //     mNum = "0"+min
    // }
    // if(hr>=10){
    //     hNum = hr
    // }else{
    //     hNum = "0"+hr
    // }
    
    // // span 공간에 출력시키기
    // $(".top_barinner p:nth-child(1) span").eq(0).text(hNum);
    // $(".top_barinner p:nth-child(1) span").eq(1).text(mNum);
    
    // })

    // .main2_con01btn span 순번을 찾고 순번에 맞게 .main2_con01inner li 움직여라.
    $(".main2_con01btn span").click(function(){

        let a = $(this).index();

        $(".main2_con01inner li").stop().fadeOut();
        $(".main2_con01inner li").eq(a).stop().fadeIn();

        $(".main2_con01btn span").removeClass("on")
        $(".main2_con01btn_ span").removeClass("on")
        $(".main2_con01btn_ span").eq(a).addClass("on")
    })

    // .main2_con02 li 를 click 했을 때 on 값을 받아라. .main2_con02inner가 순번에 맞게 나타나라.
    $(".main2_con02>ul>li").click(function(){

        let b =$(this).index();

        $(".main2_con02>ul>li").removeClass("on")
        $(".main2_con02>ul>li").eq(b).addClass("on")

        $(".main2_con02inner").removeClass("on")
        $(".main2_con02inner").eq(b).addClass("on")

        
    })


    // .main3_con02 li 설정
    $(".main3_con02 li").click(function(){

        let c =$(this).index();

        $(".main3_con02 li").removeClass("on")
        $(".main3_con02 li").eq(c).addClass("on")

    })



})