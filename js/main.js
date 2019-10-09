$(document).ready(function () {
    // User Dropdown Menu
    $('.userbtn').click(function () {
        $('.drop-menu').toggle();
    });
    $('body').click(function () {
        $('.drop-menu').hide();
    });
    $(".drop-menu").click(function (e) {
        e.stopPropagation();
    });
    $(".userbtn").click(function (e) {
        e.stopPropagation();
    });

    // Mobile Side Menu 
    $('.top-menu').click(function () {
        $('.xs-nav').show();
        $('.main-xs-nav').addClass('inscreen');
        $('.main-xs-nav').removeClass('outscreen');
        $('body').css("overflow", "hidden");
    });
    $('.xs-nav').click(function () {
        $('.xs-nav').fadeOut(500);
        $('.main-xs-nav').addClass('outscreen');
        $('.main-xs-nav').removeClass('inscreen');
        $('body').css("overflow", "auto");
    });
    $(".menu").click(function (e) {
        e.stopPropagation();
    });
    // Mobile Search 
    $('.searchbtn').click(function () {
        $('.search-pop').fadeIn(500);
        $('body').css("overflow", "hidden");
    });
    $('.search-pop').click(function () {
        $('.search-pop').fadeOut(500);
        $('body').css("overflow", "auto");
    });
    $(".search").click(function (e) {
        e.stopPropagation();
    });
    // Main Slider
    if ($(window).width() < 769) {
        $(".header-container").removeClass("container");
    } else {
        $(".header-container").addClass("container");
    }
    $('.main-slider').owlCarousel({
        items: 1,
        autoplay: true,
        rtl: true,
        loop: false,
        nav: true,
        dots: true,
        navText: ["<i class='fas fa-chevron-right'></i>", "<i class='fas fa-chevron-left'></i>"],
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true
            },
            768: {
                items: 1,
                nav: true,
                dots: true
            },
        }
    });

    // Product Slider
    $('.Product-slider').owlCarousel({
        items: 5,
        autoplay: false,
        margin: 15,
        rtl: true,
        loop: true,
        nav: true,
        dots: false,
        navText: ["<img src='images/right.png' alt=''>", "<img src='images/left.png' alt=''>"],
        responsive: {
            0: {
                nav: false,
                dots: true,
                items: 1,
            },
            500: {
                items: 2,
                nav: false,
                dots: true,
            },
            768: {
                items: 3,
                nav: true,
            },
            992: {
                items: 4,
            },
            1199: {
                items: 5
            }
        }
    });
    // Brands Slider
    $('.brand-slider').owlCarousel({
        items: 7,
        autoplay: false,
        margin: 15,
        rtl: true,
        loop: true,
        nav: true,
        dots: false,
        navText: ["<img src='images/right.png' alt=''>", "<img src='images/left.png' alt=''>"],
        responsive: {
            0: {
                nav: false,
                dots: true,
                items: 1,
                center: true
            },
            500: {
                items: 2,
                nav: false,
                dots: true,
            },
            768: {
                items: 3,
                nav: false,
                dots: true,
            },
            991: {
                items: 4,
                dots: true,
            },
            1199: {
                items: 7
            }
        }
    });

    // Footer Accordion
    if ($(window).width() < 769) {
        $(".nav-links-header").addClass("accordion");
        $(".links").addClass("panel");
    }
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
});

$().ready(function () {

    // validate signup form on keyup and submit
    $("#news").validate({
        rules: {
            news_input: {
                email: true
            },
        },
        messages: {

            news_input: {
                email: "Please enter a valid email address",
            },
        }
    });
});