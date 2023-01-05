// Typewriter created by Tameem Safi.
// source: https://github.com/tameemsafi/typewriterjs

var app = document.getElementById('intro-text');

var typewriter = new Typewriter(app, {
    loop: true,
    delay:50,
    deleteSpeed:5
});

typewriter.typeString('hi! im isaac.')
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString('nice to meet you.')
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString('can you tell i like purple?')
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("i'm a student at cardiff university.")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("i'm studying software engineering, currently year 2 of 3.")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("i also love to game.")
    .deleteAll()
    .pauseFor(500)
    .typeString("i hope you like what you see!")
    .pauseFor(1000)
    .deleteAll()
    .start();

// Unhide navigation by sliding it down when the user scrolls 20px
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        document.getElementById("nav").style.top = "0";
    } else {
        document.getElementById("nav").style.top = "-70px";
    }
}

//Remove hidden class of project cards to show, acts as dropdown
document.getElementById('showprojlist').addEventListener('click', function() {
    document.getElementById('pythonproj').classList.remove('extendmyproj');
    document.getElementById('csharpproj').classList.remove('extendmyproj');
    document.getElementById('mixproj').classList.remove('extendmyproj');
    document.getElementById('javaproj').classList.remove('extendmyproj');
});


