/* Start Navbar */

var nav = document.querySelector('nav');
function navScroll () {
    'use strict';
    if (pageYOffset >= 70) {
        nav.setAttribute('style', 'background:#20262f;');
    } 
    else {
        nav.setAttribute('style', 'background:none;');
    }
} addEventListener('scroll', navScroll);

$(document).ready(function () {
    $('.bars').click(function() {
        $('.sm-ul').slideToggle();
    });
})

$(function () {
    $('a').click(function () {
        $('.sm-ul').delay(500).slideUp();
    });
});

/* End Navbar */

/* Start Scrolling to top */
$(document).ready(function () {
    $('.scrolltop').click(function() {
        $('html, body').animate({
            scrollTop : $('#top').offset().top
        }, 1000);
    });
});
/* End Scrolling To top */

// Start Features 



$(function () {
    $('.slider button').click(function () {
        $('html, body').animate({
            scrollTop : $('.products').offset().top - 200
        }, 1000)
    });
});



// End Features 
