
$(function(){
    $(window).scroll(function(){
        var scrolling =$(this).scrollTop()
        if(scrolling > 2000){
            $(".back_top i").fadeIn(800);
        }else{
            $(".back_top i").fadeOut(800)
        }
    
        });
        //nack to top//
        $(".back_top").click(function(){
            $('html, body').animate({
                scrollTop:0
            }, 2000)
        })
    
    
        //PRELOADER//
        $(window).on("load",function(){
            $("preloader").delay(1000).fadeOut(1000)
        });
    });