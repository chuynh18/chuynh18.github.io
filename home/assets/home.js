"use strict";

const mouseover = function(image) {

    const existingImage = document.getElementsByClassName("image");
    
    for (let i = 0; i < existingImage.length; i++) {
        existingImage[i].alt = `assets/img/${image}`;
        setTimeout(() => existingImage[i].src = `assets/img/${image}`, 60*i);
    }
}

const openModal = function(image) {
    const img = document.getElementById("modalImage");
    img.src = `assets/img/${image}`;
    img.alt = `assets/img/${image}`;

    modal.style.display = "block";
}

document.getElementById("modalClose").onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        modal.style.display = "none";
    }
} 