"use strict";

// const icon = document.querySelector("[Icon]"); 
const icon = document.querySelector(".ICON");
const menu_display = document.querySelector(".menu-display");
const cancel_icon = document.querySelector(".cancel-icon");
const container = document.querySelector(".container"); 

icon.addEventListener("click", function() {
    menu_display.classList.remove("hidden");
})

cancel_icon.addEventListener("click", function() {
    menu_display.classList.add("hidden");
})
