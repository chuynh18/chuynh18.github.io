"use strict";

window.onload = function() {
    const tiles = ['yellowbird.jpg', 'geese.jpg', 'redbird.jpg', 'heron.jpg', 'hummingbird.jpg', 'flyheron.jpg'];
    const gridItems = document.getElementsByClassName("mouseover-box");
    let timer;

    // welcome "ceremony"
    setTimeout(function() {
        mouseover("welcome.jpg", false, 150);
    }, 600);   
    setTimeout(function() {
        mouseover("tiled.jpg", true, 125);
    }, 3500);
    // attach event handlers after ceremony has completed
    setTimeout(function() {
        for (let i = 0; i < gridItems.length; i++) {
            gridItems[i].addEventListener("click", function(){
                openModal(tiles[i]);
            });
            gridItems[i].addEventListener("mouseenter", function(event){
                timer = setTimeout(function() {
                    mouseover(tiles[i], false, 70);
                }, 500);
                toggleGlow(event, true);
            });
            gridItems[i].addEventListener("mouseleave", function(event){
                clearTimeout(timer);

                if (transitioning) {
                    setTimeout(function() {
                        mouseover('tiled.jpg', true, 70);
                    }, 200)
                } else if (transitionedToNonDefault) {
                    mouseover('tiled.jpg', true, 0);
                }
                
                toggleGlow(event, false);
            });
        }
    }, 4250);
}

let transitioning = false;
let transitionedToNonDefault = false;

const mouseover = function(image, showText, delay) {
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
            } else {
                infoText[i].style.display = "none";
            }

            existingImage[i].classList.add("fadeIn");

            if (i === existingImage.length - 1) {
                transitioning = false;
                if (image !== "tiled.jpg") {
                    transitionedToNonDefault = true;
                } else {
                    transitionedToNonDefault = false;
                }
            }
        }, delay*i);
    }
}

const timer = function() {

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

    modal.style.display = "table";
}

document.getElementById("modalClose").onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById('mid-modal')) {
        modal.style.display = "none";
    }
}

