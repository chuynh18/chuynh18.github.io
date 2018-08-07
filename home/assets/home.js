"use strict";

const mouseover = function(image, showText) {

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

        }, 70*i);
    }
}

const toggleGlow = function(event, on) {
    console.log(event.target);
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