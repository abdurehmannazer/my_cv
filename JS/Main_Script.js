const element = (e) => {return document.querySelector(e)}
const elementAll = (e) => {return document.querySelectorAll(e)}

let x = Math.floor((Math.random() * 1000) + 999);
element(".Main_Script").src += x ;
element(".main_style").href += x ;


import english from './language/english.js';
var lang =  new URLSearchParams(window.location.search).get('lang') == "en" ? english : null;

if (lang) {
    for (const key in lang) element("." + key).innerHTML = lang[key];
    element("#enBtn").classList.replace("btn-outline-light" , "btn-light")
    element("#arBtn").classList.replace("btn-light" , "btn-outline-light" )
    element(".my_name").style.textAlign  = "left";
    elementAll(".dir").forEach((e)     => e.dir = "ltr");
    elementAll(".dir_rtl").forEach((e) => e.dir = "rtl");
    elementAll(".font20").forEach((e)  => e.style.fontSize = "20px");
    elementAll(".font16").forEach((e)  => e.style.fontSize = "16px");
    elementAll(".font14").forEach((e)  => e.style.fontSize = "14px");
    elementAll(".font12").forEach((e)  => e.style.fontSize = "12px");
}


var bar_button = element(".navbar-toggler");
var bar_icon   = element(".navbar-toggler i");
bar_button.onclick = function () {
    bar_icon.classList.toggle("fa-bars-staggered");
    if (bar_icon.classList.contains("anima")) {
        bar_icon.classList.remove("anima")
    } else {
        bar_icon.classList.add("anima")
    }
}

