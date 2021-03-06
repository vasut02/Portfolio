$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
            $('.menu-btn img').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
            $('.menu-btn img').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn img').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: [" Web Developer", "Backend Developer"],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Web Developer", "Backend Developer"],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
    });
})