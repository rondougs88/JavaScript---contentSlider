var speed = 500;

$(document).ready(processScript());

function processScript() {
    var autoswitch = true;
    var autoswitch_speed = 4000;

    //Add initial active class
    $('.slide').first().addClass('active');

    //Hide all slides
    $('.slide').hide();

    //Show active class
    $('.active').show();

    //Click next event
    $('#next').on('click', nextSlide);

    //Click prev event
    $('#prev').on('click', prevSlide);

    //Auto scroll to next image.
    if (autoswitch == true) {
        setInterval(nextSlide, autoswitch_speed);
    }
}

//Next handler
function nextSlide() {
    $('.active').removeClass('active').addClass('oldActive');
    if ($('.oldActive').is(':last-child')) {
        $('.slide').first().addClass('active');
    } else {
        $('.oldActive').next().addClass('active');
    }
    $('.oldActive').removeClass('oldActive');
    $('.slide').fadeOut(speed);
    $('.active').fadeIn(speed);
}

//Prev handler
function prevSlide() {
    $('.active').removeClass('active').addClass('oldActive');
    if ($('.oldActive').is(':first-child')) {
        $('.slide').last().addClass('active');
    } else {
        $('.oldActive').prev().addClass('active');
    }
    $('.oldActive').removeClass('oldActive');
    $('.slide').fadeOut(speed);
    $('.active').fadeIn(speed);
}