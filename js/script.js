$(window).on("scroll", function() {
    var y = $(this).scrollTop();

    if (y > 600 && y < 1200) {
        $('.card-group').fadeIn();

    } else if (y > 1200 && y < 2100) {
        $('#reticula').fadeIn();
    } else if (y > 2100 && y < 2400) {
        $('#misionvision').fadeIn();
    } else if (y > 2400) {

        $('#datoscoordinacion').fadeIn();
    } else {
        $('.card-group').fadeOut();
        $('#reticula').fadeOut();
        $('#misionvision').fadeOut();
        $('#datoscoordinacion').fadeOut();
    }

});