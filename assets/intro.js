"use strict";

window.onload = function() {

    const date = new Date();
    const hour = date.getHours();
    const timeGreeting = document.getElementById("welcome1");

    if (hour > 22 || hour < 5) {
        timeGreeting.textContent = "good night.";
    } else if (hour >= 5 && hour <= 12) {
        timeGreeting.textContent = "good morning.";
    } else if (hour > 12 && hour <= 19) {
        timeGreeting.textContent = "good afternoon.";
    } else if (hour > 19 && hour <= 22) {   
        timeGreeting.textContent = "good evening.";
    }

    anime.timeline()
        .add({
            targets: '#welcome0',
            translateY: ["30%", "33%"],
            opacity: [0,1,1,0],
            duration: 3000,
            easing: "linear",
            offset: 0
        }) .add({
            targets: '#welcome1',
            translateY: ["37%", "40%"],
            opacity: [0,1,1,0],
            duration: 3000,
            easing: "linear",
            offset: 650
        }) .add({
            targets: '#welcome2',
            translateY: ["45%", "48%"],
            opacity: [0,1,1,0],
            duration: 3000,
            easing: "linear",
            offset: 1300
        }) .add({
            targets: '#welcome3',
            translateY: ["53%", "56%"],
            opacity: [0,1,1,0],
            duration: 3000,
            easing: "linear",
            offset: 2050,
            complete: function() {
                window.location = "./home";
            }
        })
}