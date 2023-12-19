



import english from './language/english.js';
var lang =  new URLSearchParams(window.location.search).get('lang') == "en" ? english : null;
const arBtn = document.getElementById("arBtn");
const enBtn = document.getElementById("enBtn");


let x = Math.floor((Math.random() * 1000) + 999);

document.querySelectorAll("script").forEach((e) => e.src += x )


if (lang != null) {
    enBtn.classList.replace("btn-outline-light" , "btn-light")
    arBtn.classList.replace("btn-light" , "btn-outline-light" )
    for (const key in lang) document.querySelector("." + key).innerHTML = lang[key];
    document.querySelector(".my_name").style.textAlign  = "left";
    document.querySelectorAll(".dir").forEach((e) => e.dir = "ltr");
    document.querySelectorAll(".font20").forEach((e) => e.style.fontSize = "20px");
    document.querySelectorAll(".font16").forEach((e) => e.style.fontSize = "16px");
    document.querySelectorAll(".font14").forEach((e) => e.style.fontSize = "14px");
    document.querySelectorAll(".font12").forEach((e) => e.style.fontSize = "12px");
}















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

