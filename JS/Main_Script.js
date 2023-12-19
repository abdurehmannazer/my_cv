



import english from './language/english.js';
var lang =  new URLSearchParams(window.location.search).get('lang') == "en" ? english : null;


if (lang != null) for (const key in lang) document.querySelector("." + key).innerHTML = lang[key];

    
    


















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

