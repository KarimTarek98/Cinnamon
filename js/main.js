$(function () {
    $(window).scroll(function () {

       var nav = $('.navbar');
       if ( $(window).scrollTop() > nav.height() )
       {
           if ( !nav.hasClass('scrolled') )
           {
               nav.addClass('scrolled');
           }
       }
       else
       {
           if ( nav.hasClass('scrolled') )
           {
               nav.removeClass('scrolled');
           }
       }
    });
    $('.datepicker').datepicker();

    new WOW().init(); // initialize wow library
    $('.owl-carousel').owlCarousel({        // owl carousel setup
        loop:true,
        autoplay:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1200:{
                items:3
            }
        }
    })



});

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("mySidenav").style.height = "60%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
