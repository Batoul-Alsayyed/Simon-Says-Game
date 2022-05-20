document.addEventListener("DOMContentLoaded",function(){
    greenBtn = document.getElementsByClassName("green-button")[0];
    redBtn = document.getElementsByClassName("red-button")[0];
    yellowBtn = document.getElementsByClassName("yellow-button")[0];
    blueBtn = document.getElementsByClassName("blue-button")[0];
    
    greenBtn.onclick = function () {greenOnClick()};
    redBtn.onclick = function () {redOnClick()};
    yellowBtn.onclick = function () {yellowOnClick()};
    blueBtn.onclick = function () {blueOnClick()};
    
    function greenOnClick(){
        console.log("Clicked green!");
        var audio = new Audio('assets/sounds/sounds/green.mp3');
        audio.play();
    }
    function redOnClick(){
        console.log("Clicked green!");
        var audio = new Audio('assets/sounds/sounds/red.mp3');
        audio.play();
    }
    function yellowOnClick(){
        console.log("Clicked green!");
        var audio = new Audio('assets/sounds/sounds/yellow.mp3');
        audio.play();
    }
    function blueOnClick(){
        console.log("Clicked green!");
        var audio = new Audio('assets/sounds/sounds/blue.mp3');
        audio.play();
    }
});