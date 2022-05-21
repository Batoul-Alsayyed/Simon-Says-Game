document.addEventListener("DOMContentLoaded",function(){
    const colors = ['green','red','yellow','blue'];
    var gamePattern = [];
    var userClickedPattern  = [];
    var start = false
    
    //this function generates the next pattern 
    function nextSequence(){
        var randomNumber = Math.floor(Math.random()*4);
        var randomColor = colors[randomNumber];
        gamePattern.push(randomColor);
        //console.log(gamePattern);
    }
    document.body.addEventListener('click', fn, true); 
    function fn(){
        if (!start){
            start = true
            nextSequence()
            showGamePattern()
            console.log(gamePattern)
        }
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
        PlayAudio('green');
        addPattern('green');
        var userClickedButtonColor = 'green'
        animatePress(userClickedButtonColor)
    }
    function redOnClick(){
        PlayAudio('red');
        addPattern('red');
        var userClickedButtonColor = 'red'
        animatePress(userClickedButtonColor)
    }
    function yellowOnClick(){
        PlayAudio('yellow')
        addPattern('yellow')
        var userClickedButtonColor = 'yellow'
        animatePress(userClickedButtonColor)
    }
    function blueOnClick(){
        PlayAudio('blue');
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
    function PlayAudio(color){
        src = 'assets/sounds/sounds/';  
        var audio = new Audio (src+color+'.mp3');
        audio.play();
    }
    function showGamePattern(){
        let start = 0
        let pattern = setInterval(thisfunction, 1000)
        function thisfunction(){
            if (start < gamePattern.length){
                var currentColor = gamePattern[start]
                animatePress(currentColor)
                PlayAudio(currentColor)
                start++
            }
            else{
                clearInterval(pattern)
            }
        }
    }
});