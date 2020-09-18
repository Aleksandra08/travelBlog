'use strict';

const menu = document.querySelector('#menu');
const btn = document.querySelector('#button');
const goTopBtn = document.querySelector('.back_to_top');
const el = $(".js-button");
const div = $('.js-overlay');
const btnClose = $('.js-close');
const nav = document.querySelector('.navigation');

//fix menu on scrolling//
(function() {
    window.addEventListener('scroll', function navScroll() {

        if (document.documentElement.scrollTop > 0) {
            nav.classList.add('navigation_scroll')
        } else {
            nav.classList.remove('navigation_scroll')
        }
    });
})();


//open mobile menu//
(function() {
    btn.addEventListener('click', () => {
        menu.classList.toggle('navigation_expand');
    });
})();


//scrolling up//
function trackScroll() {
    let scrolled = window.pageYOffset;
    let coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
        goTopBtn.classList.add('back_to_top-show');
    }
    if (scrolled < coords) {
        goTopBtn.classList.remove('back_to_top-show');
    }
}

function backToTop() {
    if (window.pageYOffset > 0) {
        window.scrollBy(0, -70);
        setTimeout(backToTop, 0);
    }
}


(function() {
    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
})();


$(document).on('ready', function() {

    //loading//
    $(window).on('load', function() {
        $('.loader-box').fadeOut();
        $('.loader').delay(350).fadeOut('slow');

        //scrolling all//
        $(document).on('click', 'a[href^="#"]', function(event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top - 70
            }, 1500);
        });

        if (location.hash.length) {
            $('html, body').animate({
                scrollTop: $(location.hash).offset().top - 70
            }, 1500);
        }


        $(document).on('click', '.navigation_link', function(event) {
            event.preventDefault();
            console.log('event')
        })
    })

    //slider on header//
    $('#header-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        smartSpeed: 1500,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1

            },
            768: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    });


    //slider on blog//
    $("#articles-carousel").owlCarousel({
        items: 2,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            }
        },
        loop: true
    });


    // localStorage['cookie-bar'] = 'open';
    if (localStorage['cookie-bar'] !== 'closed') {
        $('.cookies').addClass('cookies-open');
    } else {
        $('.cookies').removeClass('cookies-open');
    }
    //close cookies popup
    $('.cookies__btn').click(function() {
        localStorage['cookie-bar'] = 'closed';
        $('.cookies').removeClass('cookies-open');
    });


    //modal window//

    // open

    el.click(function() {
        div.fadeIn();
        div.addClass('disabled');
    });

    //close
    $(document).mouseup(function(e) {
        if (!el.is(e.target) && div.has(e.target).length === 0) {
            div.fadeOut();
        }
    });

    btnClose.click(function() {
        div.fadeOut();
    });


    //wow animation//
    let wow = new WOW({
        mobile: false
    });
    wow.init();

});