///////////////// GENERAL SETTINGS//////////////////////
const rootConfig = document.documentElement; // HTML target

const defaultCursor = "url('./Assets/Website-Assets/Website-main/cursor.svg'), auto";
const buttonCursor = "url('./Assets/Website-Assets/Website-main/cursor-btn.svg'), pointer";

rootConfig.style.cursor = defaultCursor; //CHANGES cursor on HTML

window.addEventListener("mouseover", function(hoverEvent) {

    if (hoverEvent.target.classList.contains("btn-cursor") || hoverEvent.target.tagName === "A" ) {     //In JavaScript, "A" refers to the HTML anchor tag (<a>)
        hoverEvent.target.style.cursor = buttonCursor;
    }
});





///////////////////Hero Image parralex effect//////////////////////////////////

const heroContainer = document.getElementById("hero-img-cont");

let lastScrollY = window.scrollY;
 //------It says Remember the current scroll position and window.scrollY tells you how far the page has been scrolled vertically.

window.addEventListener("scroll", function heroMoveFunc() { 
    //------ This says Watch for scrolling and whenever the user scrolls the windows page, run this code.
    
    const currentScrollY = window.scrollY;
    //------ Get the new scroll position: After the user scrolls, we get the current position.
    
    const direction = currentScrollY > lastScrollY ? 1 : -1;
    //Find the scroll direction This checks: Is the new position bigger than the old position?
    // If yes → user is scrolling down: direction = 1;
    // If no → user is scrolling up: direction = -1;
    // The ? : is called a ternary operator. It's basically a short if/else.

    //----- Long if and else subsitute-----//
    
    // if (currentScrollY > lastScrollY) {
    // direction = 1;
    // } else {
    // direction = -1;
    // }

    heroContainer.style.transform = `translateY(${direction * 10}px)`;
    //Move the container vertically: translateY() moves the element up or down.
    //If scrolling down: direction = 1 , so 1 * 10 = 10px
    //If scrolling up: direction = -1, so -1 * 10 = -10px

    lastScrollY = currentScrollY;
    //Remember the new position: The current position becomes the old position for the next scroll event.
    //For example:
    //Before: lastScrollY = 500
    //After scrolling: currentScrollY = 550
    //Then:lastScrollY = 550
});

///////////////////////////////////////////////////////////////////////////////////////////////////////


const cloudLEFT = document.getElementById("cloud-left");

let lastScrollCLY = window.scrollY;
let cloudPositionCLX = 0;

window.addEventListener("scroll", function cloudLeftFunc() {     
    const currentScrollCLY = window.scrollY;
    const scrollDifferenceCL = currentScrollCLY - lastScrollCLY;
    
    cloudPositionCLX -= scrollDifferenceCL * 0.5;

    cloudLEFT.style.transform = `translateX(${cloudPositionCLX}px)`;
    lastScrollCLY = currentScrollCLY;
});




const cloudRIGHT = document.getElementById("cloud-right");

let lastScrollCRY = window.scrollY;
let cloudPositionCRX = 0;

window.addEventListener("scroll", function cloudRightFunc() {     
    const currentScrollCRY = window.scrollY;
    const scrollDifferenceCR = currentScrollCRY - lastScrollCRY;
    
    cloudPositionCRX += scrollDifferenceCR * 0.5;

    cloudRIGHT.style.transform = `translateX(${cloudPositionCRX}px)`;
    lastScrollCRY = currentScrollCRY;
});


const navFixed = document.getElementById("nav-Fixed");
window.addEventListener("scroll", function navFixedAnimation() {

    if (window.scrollY > 50) {
        navFixed.style.top = "0px";
        navFixed.style.boxShadow = "0px 4px 5px -1px #d5d7fb";
        navFixed.style.width = "100%";
        navFixed.style.borderRadius = "0px";
    }

    else if (window.scrollY < 50) {
        navFixed.style.top = "10px";
        navFixed.style.boxShadow = "none";
        navFixed.style.width = "98%";
        navFixed.style.borderRadius = "10px";
        
    }
});


const flexCardRounded = document.getElementById("flex-card-rounded");
let initialRadius = 0;

window.addEventListener("scroll", function radiusRoundedAnimation() {

    initialRadius = Math.min((window.scrollY*0.5) - 520 , 80); //It means "use window.scrollY, but don't allow the value to go above 200."

    flexCardRounded.style.borderRadius = `${initialRadius}px ${initialRadius}px 0px 0px`;

});


// window.addEventListener("scroll", function () {
//     if (window.scrollY > 1400) {
//         flexCardRounded.style.width = "95%";}
//     else if (window.scrollY < 1400) {
//         flexCardRounded.style.width = "100%";}
// });



window.addEventListener("scroll", function() {
    const currentScrollWidth = (125 + (-window.scrollY / 50))
    let initialwidth = Math.max(Math.min(currentScrollWidth, 100), 95)

    flexCardRounded.style.width = `${initialwidth}%`;

});