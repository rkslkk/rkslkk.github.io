
function fade() {
    // fades in all the media, ie, the icons
    $('.media').hide();
    $('.media').fadeIn(2000);

    // fades in the closer, ie, the 'erikslikk41@gmail.com'
    $('.closer').hide();
    $('.closer').fadeIn(2000);
}

function colorChange() {
    // on mouseenter function for all the icons to fade in and out when a mouse enters/leaves
    $('.centered').mouseenter(function() { //  enter icon 1
        $('.centered').fadeTo(.10, .7);
    });
    $('.centered').mouseleave(function() { // leave icon 1
        $('.centered').fadeTo(.10, 1);
    });
    $('.centered2').mouseenter(function() { // enter icon 2
        $('.centered2').fadeTo(.1, .7);
    });
    $('.centered2').mouseleave(function() { // leave icon 2
        $('.centered2').fadeTo(.1, 1);
    });
    $('.centered3').mouseenter(function() { // enter icon 3
        $('.centered3').fadeTo(.1, .7);
    });
    $('.centered3').mouseleave(function() { // leave icon 3
        $('.centered3').fadeTo(.1, 1);
    });
}

$(document).ready(fade, colorChange()); // function call 
