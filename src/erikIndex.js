
function fade() {
    $('.media').hide();
    $('.media').fadeIn(2000);
}

function colorChange() {
    $('.centered').mouseenter(function() {
        $('.centered').fadeTo('fast', .25);
    });
    $('.centered').mouseleave(function() {
        $('.centered').fadeTo('fast', 1);
    });
}

function colorChange2() {
    $('.centered2').mouseenter(function() {
        $('.centered2').fadeTo('fast', .25);
    });
    $('.centered2').mouseleave(function() {
        $('.centered2').fadeTo('fast', 1);
    });
}

function colorChange3() {
    $('.centered3').mouseenter(function() {
        $('.centered3').fadeTo('fast', .25);
    });
    $('.centered3').mouseleave(function() {
        $('.centered3').fadeTo('fast', 1);
    });
}

function closerFade() {
    $('.closer').hide();
    $('.closer').fadeIn(2000);
}

$(Document).ready(fade);
$(document).ready(colorChange);
$(document).ready(colorChange2);
$(document).ready(colorChange3);
$(document).ready(closerFade);
