"use strict";



 /*  Preloader    */

const preloader = document.querySelector("[data-preload]");

const loaded =  function() {

    setTimeout(function() {
        preloader.classList.add("loaded");
        this.document.body.classList.add("loaded");
    }, 3000);
}


window.addEventListener("load", loaded);

