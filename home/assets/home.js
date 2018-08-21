"use strict";

window.onload = function() {
    const tiles = [
        {img: "hummingbird.jpg", half: "hummingbirdsmall.jpg", desc: "", demo: "", gh: "https://github.com/chuynh18/"},
        {img: "four.jpg", half: "foursmall.jpg", desc: "", demo: "https://chuynh18.github.io/fourinarow/", gh: "https://github.com/chuynh18/fourinarow"},
        {img: "nys.jpg", half: "nyssmall.jpg", desc: "", demo: "https://nyskyscraper.herokuapp.com/", gh: "https://github.com/chuynh18/mongoose-scraper"},
        {img: "tic.jpg", half: "ticsmall.jpg", desc: "", demo: "https://chuynh18.github.io/tictactoe/", gh: "https://github.com/chuynh18/tictactoe"},
        {img: "shiritori.jpg", half: "shiritorismall.jpg", desc: "", demo: "https://chuynh18.github.io/shiritori/", gh: "https://github.com/chuynh18/shiritori"},
        {img: "snake.jpg", half: "snakesmall.jpg", desc: "", demo: "https://chuynh18.github.io/snake/", gh: "https://github.com/chuynh18/snake"}
    ];

    const gridItems = document.getElementsByClassName("mouseover-box");
    let timer;

    // welcome "ceremony"
    setTimeout(function() {
        mouseover("welcome.jpg", false, 150);
    }, 600);   
    setTimeout(function() {
        mouseover("home.jpg", true, 125);
    }, 3500);
    // attach event handlers after ceremony has completed
    setTimeout(function() {
        for (let i = 0; i < gridItems.length; i++) {
            gridItems[i].addEventListener("click", function(){
                openModal(tiles[i].half);
            });
            gridItems[i].addEventListener("mouseenter", function(event){
                timer = setTimeout(function() {
                    mouseover(tiles[i].img, false, 70, i);
                }, 500);
                toggleGlow(event, true);
            });
            gridItems[i].addEventListener("mouseleave", function(event){
                clearTimeout(timer);

                if (transitioning) {
                    setTimeout(function() {
                        mouseover('home.jpg', true, 70);
                    }, 200)
                } else if (transitionedToNonDefault) {
                    mouseover('home.jpg', true, 0);
                }
                
                toggleGlow(event, false);
            });
        }
    }, 4250);
}

let transitioning = false;
let transitionedToNonDefault = false;

const mouseover = function(image, showText, delay, showLabelNum) {
    const existingImage = document.getElementsByClassName("image");
    const infoText = document.getElementsByClassName("infotext");
    transitioning = true;

    for (let i = 0; i < existingImage.length; i++) {
        existingImage[i].classList.remove("fadeIn");
        void existingImage[i].offsetWidth;
        existingImage[i].alt = `assets/img/${image}`;

        setTimeout(function() {
            existingImage[i].src = `assets/img/${image}`;

            if (showText) {
                infoText[i].style.display = "";
                infoText[i].classList.remove("infotextActive");
            } else {
                if (showLabelNum !== i) {
                    infoText[i].style.display = "none";
                } else {
                    infoText[i].classList.add("infotextActive");
                }
            }

            existingImage[i].classList.add("fadeIn");

            if (i === existingImage.length - 1) {
                transitioning = false;
                if (image !== "home.jpg") {
                    transitionedToNonDefault = true;
                } else {
                    transitionedToNonDefault = false;
                }
            }
        }, delay*i);
    }
}

const showName = function(input) {

}

const toggleGlow = function(event, on) {
    if (on) {
        event.target.classList.add("glow");
    } else {
        event.target.classList.remove("glow");
    }
}

const openModal = function(image) {
    const img = document.getElementById("modalImage");
    img.src = `assets/img/${image}`;
    img.alt = `assets/img/${image}`;

    document.getElementById("modal").style.display = "table";
}

document.getElementById("modalClose").onclick = function() {
    document.getElementById("modal").style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById('mid-modal')) {
        document.getElementById("modal").style.display = "none";
    }
}

