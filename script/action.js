$(window).scroll(function(){
    let scrT = $(this).scrollTop();
    let winH = $(window).height();
    if(scrT >= 1000){
        $('.scroll').fadeIn().css({top:scrT + winH - 100})
    } else {
        $('.scroll').fadeOut().css({top:''})
    }
});


$('.scroll').click(function(){
    $('html,body').animate({scrollTop:0})
})