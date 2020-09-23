// Navbar Animation
var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
  var currentScrollpos = window.pageYOffset;
  if (prevScrollpos > currentScrollpos) {
    $("#navbar").css("top", "0");
  } else {
    $("#navbar").css("top", "-100px");
  }
  prevScrollpos = currentScrollpos;
};

$("#menu-link-nav").click(function() {
  $("#navbar-toggler-btn").click();
});

$("#hours-link-nav").click(function() {
  $("#navbar-toggler-btn").click();
});

// Mobile
if ($(window).width() < 1000) {
  $("#map").attr("width", "350");
}
