console.log("Hi")

var bar_button = document.querySelector(".navbar-toggler");
var bar_icon = document.querySelector(".navbar-toggler i");



bar_button.onclick = function () {
    bar_icon.classList.toggle("fa-bars-staggered");
    if (bar_icon.classList.contains("anima")) {
        bar_icon.classList.remove("anima")
    } else {
        bar_icon.classList.add("anima")
    }
}
