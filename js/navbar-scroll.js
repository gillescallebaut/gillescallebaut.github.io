$(window).load(function() {
            var offset = 120;
            var duration = 500;
            var scrollBottom = $(window).scrollTop() + $(window).height();
            if ($(window).width() > 768) {
                $('.navbar').removeClass('navbar-fixed-top');
            }
            var menu = $('.navbar');
            var origOffsetY = menu.offset().top;

            jQuery(window).scroll(function () {

                /* navbar */
                if ($(window).scrollTop() >= origOffsetY) {
                    $('.navbar').addClass('navbar-fixed-top');
                } else {
                    $('.navbar').removeClass('navbar-fixed-top');
                }
                if (jQuery(this).scrollTop() = origOffsetY) {
                    jQuery('.back-to-top').fadeOut(duration);
                }
            });


        });