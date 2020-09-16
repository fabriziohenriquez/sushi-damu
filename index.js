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
  $("#special-1").attr("src", "images/special-img-1.jpg");
  $("#special-2").attr("src", "images/special-img-2.jpg");
  $("#special-3").attr("src", "images/special-img-3.jpg");
  $("#special-4").attr("src", "images/special-img-4.jpg");
}
