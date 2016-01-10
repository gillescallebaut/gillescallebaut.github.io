$(window).load(function() {
            var offset = 120;
            var duration = 500;
            var scrollBottom = $(window).scrollTop() + $(window).height();
            var menu = $('.navbar');
            var origOffsetY = menu.offset().top;

            jQuery(window).scroll(function () {

                /* button up*/
                if (jQuery(this).scrollTop() <= origOffsetY || ($(window).scrollTop() + $(window).height() > $(document).height() - 225)) {
                    jQuery('.back-to-top').fadeOut(duration);
                } else {
                    jQuery('.back-to-top').fadeIn(duration);
                }

            });

            jQuery('.back-to-top').click(function (event) {
                event.preventDefault();
                jQuery('html, body').animate({ scrollTop: origOffsetY }, duration);
                jQuery('.back-to-top').fadeOut(duration);
                return false;
            })
            jQuery('.top').click(function (event) {
                event.preventDefault();
                jQuery('html, body').animate({ scrollTop: origOffsetY }, duration);
                jQuery('.back-to-top').fadeOut(duration);
                return false;
            })


        });