$(window).ready(function() {
    $(document).ready(function () {
        if ($(".banner").is(":visible")) {
            var h = $(".banner img").height();
            h += 30;
            $(".content-wrapper").css('margin-top', h);
            console.log(h);
        } else {
            var nh = $(".navbar").height();
            $(".content-wrapper").css('margin-top', nh);
        }

        $(".content-wrapper").fadeIn("slow");

        $(window).resize(function () {
            if ($(".banner").is(":visible")) {
                var h = $(".banner img").height();
                h += 30;
                $(".content-wrapper").css('margin-top', h);
                $(".content-wrapper").fadeIn("slow");
                console.log(h);
            } else {
                var nh = $(".navbar").height();
                $(".content-wrapper").css('margin-top', nh);
            }
        });
    });
});
$('.banner img').load(function(){
    if ($(".banner").is(":visible")) {
        var h = $(".banner img").height();
        h += 30;
        $(".content-wrapper").css('margin-top', h);
        console.log(h);
    } else {
        var nh = $(".navbar").height();
        $(".content-wrapper").css('margin-top', nh);
    }
});