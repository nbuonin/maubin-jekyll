$(document).ready(function() {
    // Mobile Nav
    $(".mobile-nav-trigger").click(function(){
        $(".mobile-nav").css('display', 'none');
        $("nav").css('background-color', '#FFFFFF');
        $(".nav-row-container").fadeIn(500, function(){
            $(".nav-row-container").css('display', 'flex');
        });
    });

    $(".mobile-nav-exit").click(function(){
        $(".nav-row-container").fadeOut(500, function(){
            $(".mobile-nav").fadeIn();
        });
    });


    // AJAX Form Handler
    $("#success").hide();
    $("#error").hide();
    $("#contact-form").validate({
        submitHandler: function(form) {
            $.ajax({
                url: "//formspree.io/matthewhornblower@gmail.com",
                method: "POST",
                data: {
                    name: $(form).find("input[name='name']").val(),
                    message: $(form).find("textarea[name='message']").val(),
                    email: $(form).find("input[name='_replyto']").val()
                },
                dataType: "json",
                success: function() {
                    $("#contact-form").fadeOut();
                    $("#success").fadeIn();
                },
                error: function() {
                    $("#error").fadeIn();
                }
            });
        }
    });

    /* Scroll-Spy */
    var controller = new ScrollMagic.Controller({loglevel: 3});

    // animate color and top border in relation to scroll position
    new ScrollMagic.Scene({triggerElement: ".hp-about", duration: 200})
        .setTween("nav", {
            backgroundColor: "#ffffff",
            boxShadow: "0 2px 8px 0 rgba(0,0,0,0.5),0 -5px 3px -10px #fff",
            color: "#000000"
        })
        .addTo(controller);

    new ScrollMagic.Scene({triggerElement: ".hp-about", duration: 200})
        .setTween("nav.home-page-nav h1", {display: "block"})
        .addTo(controller);

    /* Performances */
    var performance = $('.hp-perf > .future-perf-container');
    // Calculate the seconds from the epoch to midnight of the current day
    var secondsFromEpoch= Math.floor(Date.now() / 1000);
    var secondsInADay = 24 * 60 * 60;
    var secondsFromMidnight = secondsFromEpoch % secondsInADay;
    var today = secondsFromEpoch - secondsFromMidnight;
    var perfCounter = 0;

    var NO_OF_FUTURE_PERF = 3;
    Array.from(performance).map(function(el) {
        var pdate = el.dataset.performanceDate;
        pdate = parseInt(pdate);

        if ((pdate >= today) && perfCounter < NO_OF_FUTURE_PERF) {
            el.style.display = "flex";
            perfCounter += 1;
        }
    });

    // Show all upcoming performances on the Schedule page
    var upcomingPerformances= $('.upcoming-perfs > .future-perf-container');
    Array.from(upcomingPerformances).map(function(el) {
        el.style.display = "flex";
    });
});
