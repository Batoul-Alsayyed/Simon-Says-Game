document.addEventListener("DOMContentLoaded",function(){
    const colors = ['green','red','yellow','blue'];
    var gamePattern = [];
    var userClickedPattern = [];
    console.log(nextSequence());
    console.log(nextSequence());
    console.log(nextSequence());
    console.log(nextSequence());
    
    //this function generates the next pattern 
    function nextSequence(){
        var randomNumber = Math.floor(Math.random()*4);
        var randomColor = colors[randomNumber];
        gamePattern.push(randomColor);
        //console.log(gamePattern);
    }
    greenBtn = document.getElementsByClassName("btn green")[0];
    redBtn = document.getElementsByClassName("btn red")[0];
    yellowBtn = document.getElementsByClassName("btn yellow")[0];
    blueBtn = document.getElementsByClassName("btn blue")[0];
    
    greenBtn.onclick = function () {greenOnClick()};
    redBtn.onclick = function () {redOnClick()};
    yellowBtn.onclick = function () {yellowOnClick()};
    blueBtn.onclick = function () {blueOnClick()};
    function greenOnClick(){
        var audio = new Audio('assets/sounds/sounds/green.mp3');
        audio.play();
        addPattern('green')
        var userClickedButtonColor = 'green'
        animatePress(userClickedButtonColor)
    }
    function redOnClick(){
        var audio = new Audio('assets/sounds/sounds/red.mp3');
        audio.play();
        addPattern('red')
        var userClickedButtonColor = 'red'
        animatePress(userClickedButtonColor)
    }
    function yellowOnClick(){
        var audio = new Audio('assets/sounds/sounds/yellow.mp3');
        audio.play();
        addPattern('yellow')
        var userClickedButtonColor = 'yellow'
        animatePress(userClickedButtonColor)
    }
    function blueOnClick(){
        var audio = new Audio('assets/sounds/sounds/blue.mp3');
        audio.play();
        addPattern('blue')
        var userClickedButtonColor = 'blue'
        animatePress(userClickedButtonColor)
    }
    //this function adds the user chosen pattern to the userClickedPattern array
    function addPattern(color){
        userClickedPattern.push(color);
        console.log(userClickedPattern);
    }
    function animatePress(color){
        $("#"+color).addClass("pressed")

        setTimeout(function(){
            $("#" + color).removeClass("pressed")
        }, 100)
    }
});