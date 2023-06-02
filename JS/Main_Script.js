console.log("Hi")

var bar_button = document.querySelector(".navbar-toggler");
var bar_icon = document.querySelector(".navbar-toggler i");



bar_button.onclick = function () {
    bar_icon.classList.toggle("fa-bars-staggered")
}