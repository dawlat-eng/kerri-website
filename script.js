//loading bage
$(document).ready(function(){
    $('.spinner').hide(1000 , function(){
        $('loading').slideUp(1000 , function(){
            $('body').css('overflow' , 'auto')
        });
    });
let aboutoffset=$('.about').offset().top
let navHeight=$('.navbar').outerHeight(true)
$(window).scroll(function(){
    // console.log($(window).scrollTop());
    let scrollVal=$(window).scrollTop()
    if(scrollVal> aboutoffset -navHeight){
        $('.navbar').css('background-color' , 'rgb(0,0,0,.7')
        // $('#upBtn').fadeIn(1000)
    }
    else{
        $('.navbar').css('background-color' , 'transparent')
        // $('#upBtn').fadeOut(1000)
    } 
});
//up btn
$('#upBtn').click(function(){
    $('body , html').animate({scrollTop:0} , 3000)
});
    //sec detect
$('a[href^="#"]').click(function(){
let currentLink=$(this).attr('href')
// console.log(currentLink);
let secOffset=$(currentLink).offset().top
$('body , html').animate({scrollTop:secOffset} , 3000)
});

});

//sidebar
$('.colorContainer span').eq(0).css('background' , 'red')
$('.colorContainer span').eq(1).css('background' , 'grey')
$('.colorContainer span').eq(2).css('background' , 'blue')
$('.colorContainer span').eq(3).css('background' , 'black')
$('.colorContainer span').eq(4).css('background' , 'pink')

let containerWidth=$('.colorContainer').innerWidth() //w+p
console.log(containerWidth);
$('.sidebar').animate({left:`-${containerWidth}`} , 1000)
$('.icon').click(function(){
    if($('.sidebar').css('left')=='0px'){
        $('.sidebar').animate({left:`-${containerWidth}`} , 1000)
    }
    else{
        $('.sidebar').animate({left:0} , 1000)
    }
});

//color changer
$('.colorContainer span').click(function(){
    let color= $(this).css('backgroundColor')
    console.log(color);
    $('h1,h2,p').css('color' , color)
});

//img slider
$('.colorContainer img').click(function(){
    let currentSrc= $(this).attr('src')
    console.log(currentSrc);
    $('header').css('backgroundImage' , `url(${currentSrc})`)
});