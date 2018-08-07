"use strict";

const mouseover = function(image) {

    const existingImage = document.getElementsByClassName("image");

    for (let i = 0; i < existingImage.length; i++) {
        existingImage[i].src = `assets/img/${image}`;
    }
}