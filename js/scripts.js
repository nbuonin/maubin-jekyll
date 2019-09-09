$(document).ready(function() {
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
  }); // end .validate

  //Scroll-spy
  var controller = new ScrollMagic.Controller({loglevel: 3});

  // animate color and top border in relation to scroll position
  new ScrollMagic.Scene({triggerElement: ".hp-about", duration: 200})
    .setTween("nav", {backgroundColor: "#ffffff", boxShadow: "0 2px 8px 0 rgba(0,0,0,0.5),0 -5px 3px -10px #fff", color: "#000000"})
    .addTo(controller);

  new ScrollMagic.Scene({triggerElement: ".hp-about", duration: 200})
    .setTween("nav.home-page-nav h1", {display: "block"})
    .addTo(controller);

  var performance = document.getElementsByClassName('future-performance');
  // Calculate the seconds from the epoch to midnight of the current day
  var secondsFromEpoch= Math.floor(Date.now() / 1000);
  var secondsInADay = 24 * 60 * 60;
  var secondsFromMidnight = secondsFromEpoch % secondsInADay;
  var today = secondsFromEpoch - secondsFromMidnight;
  for (var i = 0; i < performance.length; i++) {
      var pdate = performance[i].dataset.performanceDate;
      // convert the seconds from the Jekyll template to milliseconds
      pdate = parseInt(pdate);
      // if the performance is in the past hide it
      if (pdate < today) {
          performance[i].style.display = "none";
      }
  }
});
