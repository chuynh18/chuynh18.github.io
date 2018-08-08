"use strict";


window.onload = function() {
    const tiles = ['yellowbird.jpg', 'geese.jpg', 'redbird.jpg', 'heron.jpg', 'hummingbird.jpg', 'flyheron.jpg'];
    const gridItems = document.getElementsByClassName("grid-item");

    // welcome "ceremony"
    setTimeout(function() {
        mouseover("welcome.png", false, 150);
    }, 1000);   
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
                mouseover(tiles[i], false);
                toggleGlow(event, true);
            });
            gridItems[i].addEventListener("mouseleave", function(event){
                mouseover('tiled.jpg', true);
                toggleGlow(event, false);
            });
        }
    }, 4250);
}

const mouseover = function(image, showText, delay) {
    if (!delay) {
        delay = 70;
    }

    const existingImage = document.getElementsByClassName("image");
    const infoText = document.getElementsByClassName("infotext");
    
    for (let i = 0; i < existingImage.length; i++) {
        existingImage[i].alt = `assets/img/${image}`;
        setTimeout(function() {
            existingImage[i].src = `assets/img/${image}`;
            if (showText) {
                infoText[i].style.display = "";
            } else {
                infoText[i].style.display = "none";
            }

        }, delay*i);
    }
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

