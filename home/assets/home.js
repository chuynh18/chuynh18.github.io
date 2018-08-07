"use strict";

const mouseover = function(image) {

    const existingImage = document.getElementsByClassName("image");

    for (let i = 0; i < existingImage.length; i++) {
        setTimeout(() => existingImage[i].src = `assets/img/${image}`, 60*i);
    }
}