"use strict";

window.onload = function() {
    const tiles = [
        {img: "hummingbird.jpg", half: "hummingbirdsmall.jpg", desc: "<p>Hello!  I'm Christopher Huynh.  In a past life, I was a software tester and project manager at a major game studio in Southern California.  I'm also a bit of a musician (piano) and photographer (hence the picture).</p><p>I am no stranger to working on cross-functional software development teams.  As a tester, I was directly embedded alongside software developers, game designers, artists, UX designers, and more.  And as a project manager, (among other things) I helped ship a replacement matchmaking system to tens of environments worldwide.  This was a multi-year project, and I was involved from project inception (design, journey mapping, backlog creation) to development (assisting the team with Scrum artifacts and rituals to facilitate continuous improvement) to delivery (launch planning, risk mitigation, working with partner teams across the companies and at partner companies).</p><p>However, I found that I greatly missed being an individual contributor.  While I learned a lot and got to work with more teams and individuals than I ever would have as an IC, I missed being in a hands-on role.  But I also realized that, in order to get back to being an IC, I would need to get more technical... which brings me to today.  I'm now a web developer.  This site is my portfolio, and I hope it illustrates what I bring to the table.  At the same time, I'm always humble and hungry to learn.</p>", demo: "", gh: "https://github.com/chuynh18/"},
        {img: "four.jpg", half: "foursmall.jpg", desc: "<p>A Connect Four clone written in pure HTML, CSS, and JavaScript with no external libraries.  Includes (extremely rudimentary) AI which plays at a pretty weak level, mainly because I haven't played much Connect Four.  As a distant goal, I would like to make the AI play at a perfect level, as Connect Four was solved back in 1988.</p><p>Please do take a look at the GitHub, especially the README.md; I'd like to think I display some maturity in how I architected the program.  Specifically, I gated most of the interesting logic behind feature toggles.  I also put all feature toggles and tuning values into one object, which lives inside its own .js file, allowing for easy modification.  In addition, there's also a hidden dev panel to let me test changes in real time, at runtime.</p><p class='links-row'><a href='https://chuynh18.github.io/fourinarow/' target='_blank'><img src='assets/img/eye.svg' alt='Try it' class='icon-link'></a><a href='https://github.com/chuynh18/fourinarow' target='_blank'><img src='assets/img/mark-github.svg' alt='See the code' class='icon-link'></a></p>"},
        {img: "nys.jpg", half: "nyssmall.jpg", desc: "<p>This is a small, full stack web application I wrote.  It can scrape headlines and article links off either the home page or any of the main sections.  The backend is JavaScript running in a Node environment (with Express and Mongoose/MongoDB), and deployed to a hobby instance on Heroku.  The front end is HTML, CSS, and JavaScript without the use of any libraries.  The front end communicates with the back end via XMLHttpRequest.</p><p class='links-row'><a href='https://nyskyscraper.herokuapp.com/' target='_blank'><img src='assets/img/eye.svg' alt='Try it' class='icon-link'></a><a href='https://github.com/chuynh18/mongoose-scraper' target='_blank'><img src='assets/img/mark-github.svg' alt='See the code' class='icon-link'></a></p>"},
        {img: "tic.jpg", half: "ticsmall.jpg", desc: "<p>Tic-tac-toe, written in HTML, CSS, and JavaScript.  Game records are saved via localStorage.  The AI plays a perfect game.  A twist is the hint button, which basically just shows the play(s) that the AI would have made.</p><p class='links-row'><a href='https://chuynh18.github.io/tictactoe/' target='_blank'><img src='assets/img/eye.svg' alt='Try it' class='icon-link'></a><a href='https://github.com/chuynh18/tictactoe' target='_blank'><img src='assets/img/mark-github.svg' alt='See the code' class='icon-link'></a></p>"},
        {img: "shiritori.jpg", half: "shiritorismall.jpg", desc: "<p><a href='https://en.wikipedia.org/wiki/Shiritori' target='_blank'>Shiritori<a> is a Japanese children's game.  Players take turns coming up with words; essentially, the following word must start with the same phoneme as as the prior word's ending phoneme.  There are a few other rules, which are handled faithfully.</p><p>My implementation is written in pure HTML, CSS, and JavaScript.  It accepts <a href='https://en.wikipedia.org/wiki/Hiragana' target='_blank'>Hiragana</a> and <a href='https://en.wikipedia.org/wiki/Katakana' target='_blank'>Katakana</a>, and can match across both writing systems.  That is to say, players can play words written in Hiragana with words written in Katakana and vice versa.  I also wrote code to generate <a href='https://en.wikipedia.org/wiki/Romanization_of_Japanese' target='_blank'>Romaji</a> off the user-inputted Hiragana and Katakana.  Hiragana and Katakana digraphs are handled without issue, along with <a href='https://en.wikipedia.org/wiki/Sokuon' target='_blank'>Sokuon</a> and <a href='https://en.wikipedia.org/wiki/Ch%C5%8Donpu' target='_blank'>Chōonpu</a></p><p class='links-row'><a href='https://chuynh18.github.io/shiritori/' target='_blank'><img src='assets/img/eye.svg' alt='Try it' class='icon-link'></a><a href='https://github.com/chuynh18/shiritori' target='_blank'><img src='assets/img/mark-github.svg' alt='See the code' class='icon-link'></a></p>"},
        {img: "snake.jpg", half: "snakesmall.jpg", desc: "<p>A classic game.  My implementation is written in pure HTML, CSS, and JavaScript.  I wanted to try my hand at writing a simple real-time game in JavaScript, and I'm glad I took on the challenge.  My initial version ran without issues on computers, but had performance issues on mobile devices.  Please see the <a href='https://github.com/chuynh18/snake#optimization' target='_blank'>optimization section of the README.md</a> for a closer look.</p><p class='links-row'><a href='https://chuynh18.github.io/snake/' target='_blank'><img src='assets/img/eye.svg' alt='Try it' class='icon-link'></a><a href='https://github.com/chuynh18/snake' target='_blank'><img src='assets/img/mark-github.svg' alt='See the code' class='icon-link'></a></p>"}
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
                openModal(tiles[i].half, tiles[i].desc);
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

const openModal = function(image, description) {
    const img = document.getElementById("modalImage");
    const desc = document.getElementById("description-text");

    document.getElementById("actual-modal").classList.add("fadeIn");
    document.getElementById("mid-modal").classList.add("fadeIn");
    img.src = `assets/img/${image}`;
    img.alt = `assets/img/${image}`;
    desc.innerHTML = description;

    document.getElementById("modal").style.display = "table";
}

document.getElementById("modalClose").onclick = function() {
    document.getElementById("actual-modal").classList.remove("fadeIn");
    document.getElementById("mid-modal").classList.remove("fadeIn");
    document.getElementById("actual-modal").classList.add("fadeOut");
    document.getElementById("mid-modal").classList.add("fadeOut");

    setTimeout(function() {
        document.getElementById("modal").style.display = "none";
        document.getElementById("actual-modal").classList.remove("fadeOut");
        document.getElementById("mid-modal").classList.remove("fadeOut");
    }, 300);
}

window.onclick = function(event) {
    if (event.target == document.getElementById('mid-modal')) {
        document.getElementById("actual-modal").classList.remove("fadeIn");
        document.getElementById("mid-modal").classList.remove("fadeIn");
        document.getElementById("actual-modal").classList.add("fadeOut");
        document.getElementById("mid-modal").classList.add("fadeOut");

        setTimeout(function() {
            document.getElementById("modal").style.display = "none";
            document.getElementById("actual-modal").classList.remove("fadeOut");
        document.getElementById("mid-modal").classList.remove("fadeOut");
        }, 300);
    }
}