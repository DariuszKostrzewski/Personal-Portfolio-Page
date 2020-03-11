$('a[href^="#"]').on('click',function () {
    // e.preventDefault();

    var section = this.hash,
    $section = $(section);

   $('html, body').stop().animate({
     'scrollTop': $section.offset().top-80
    }, 1000, 'swing', function () {
     window.location.hash = section;
    });
});