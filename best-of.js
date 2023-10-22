// Caroussel Script: 
const box2 = document.querySelector(".box2"); 
const bc1 = document.querySelector(".bc1"); 
const bestTitle1 = document.querySelector(".best-title1"); 
const bestTitle2 = document.querySelector(".best-title2"); 
const description = document.querySelector(".description"); 
const redMark = document.querySelector(".redMark"); 

// Slides:
const slide1 = [
    "img/best/img1.webp", 
    "Adventure",    
    "Marvel's Spider-Man 2",
    "One of the most playing video games recently.", 
    "TOP 1" 
];

const slide2 = [
    "img/best/img2.avif", 
    "Survival",    
    "Counter-Strike 2 & GO",
    "Counter-Strike 2 is a 2023 multiplayer tactical first-person shooter game developed and published by Valve.",
    "TOP 2"
];

const slide3 = [
    "img/best/img3.avif", 
    "Unlimeted Space", 
    "Minecraft", 
    "Minecraft is a sandbox game developed by Mojang Studios and originally released in 2009..",
    "TOP 3"
];

const slide4 = [
    "img/best/img4.jpg", 
    "Survival",    
    "Fortnite", 
    "Fortnite is an online video game developed by Epic Games and released in 2017. It is available in three distinct game...",
    "TOP 4"
];

const slide5 = [
    "img/best/img5.jpg", 
    "Creativity",    
    "ROBLOX",
    "Roblox is an online game platform and game creation system developed by Roblox Corporation that allows users to program games and play games created by other users...",
    "TOP 5"
];

// Array of slides: 
const Slides = [slide1, slide2, slide3, slide4, slide5]; 
const prev = document.querySelector(".prev"); 
const next = document.querySelector(".next");

// red circles: 
const circles = document.querySelectorAll(".circle"); 
// By Default: 
let indexKeeper = 0;
circles[indexKeeper].style.backgroundColor = "red";

// prev button: 
let bIndexKeeper;
prev.addEventListener("click", () => {
    if (indexKeeper == 0) indexKeeper = (Slides.length - 1);
    else indexKeeper--; 
    slideContent(indexKeeper);

    // remove hidden from the current box and add it to the previous one:
    if (indexKeeper == (circles.length - 1)) bIndexKeeper = 0; 
    else bIndexKeeper = indexKeeper + 1;
    circles[bIndexKeeper].style.backgroundColor = "#fff";
    circles[indexKeeper].style.backgroundColor = "red";
})

// next button:
let dIndexKeeper;
next.addEventListener("click", () => {
    if (indexKeeper == (Slides.length - 1)) indexKeeper = 0; 
    else indexKeeper++;
    slideContent(indexKeeper);
})

function slideContent(index) {
    // Update background image
    box2.style.backgroundImage = `url(${Slides[index][0]})`;

    // Update text content for other elements
    bc1.textContent = Slides[index][1];
    bestTitle1.textContent = Slides[index][2];
    description.textContent = Slides[index][3];
    redMark.textContent = Slides[index][4];

    // remove hidden from the current box and add it to the previous one:
    if (indexKeeper == 0) dIndexKeeper = (circles.length - 1); 
    else dIndexKeeper = indexKeeper - 1; 
    circles[dIndexKeeper].style.backgroundColor = "#fff";
    circles[indexKeeper].style.backgroundColor = "red";
}
