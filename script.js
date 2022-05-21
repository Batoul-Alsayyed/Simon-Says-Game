document.addEventListener("DOMContentLoaded",function(){
    //code here
    const colors = ['green','red','yellow','blue'];
    var gamePattern = [];
    var userClickedPattern  = [];
    var level = 0
    var start = false
    var totalLevels = 10
    //this function generates the next pattern 
    function nextSequence(){
        var randomNumber = Math.floor(Math.random()*4);
        var randomColor = colors[randomNumber];
        gamePattern.push(randomColor);
        console.log(gamePattern)
    }


    document.addEventListener('keypress', function(event) {
        if (!start){
            start = true
            nextSequence()
            showGamePattern()
            document.getElementById("prompt").innerHTML = "Level "+level
            console.log(gamePattern)
        }
    }); 

    greenBtn = document.getElementsByClassName("btn green")[0];
    redBtn = document.getElementsByClassName("btn red")[0];
    yellowBtn = document.getElementsByClassName("btn yellow")[0];
    blueBtn = document.getElementsByClassName("btn blue")[0];
    
    greenBtn.onclick = function () {greenOnClick()};
    redBtn.onclick = function () {redOnClick()};
    yellowBtn.onclick = function () {yellowOnClick()};
    blueBtn.onclick = function () {blueOnClick()};


    function greenOnClick(){
        var userClickedButtonColor = 'green'
        userClickedPattern.push(userClickedButtonColor)
        animatePress(userClickedButtonColor)
        PlayAudio(userClickedButtonColor)
        console.log(userClickedButtonColor)
        if (subList() && userClickedPattern.length === gamePattern.length){
            level++
            userClickedPattern = []
            nextSequence()
            showGamePattern()
            document.getElementById("prompt").innerHTML = "Level "+level
            console.log(gamePattern)
        }
        else if (!subList()){
            gameOver()
        }else if (level==totalLevels){
            gameWin()
        }
    }
    function redOnClick(){
        var userClickedButtonColor = 'red'
        userClickedPattern.push(userClickedButtonColor)
        animatePress(userClickedButtonColor)
        PlayAudio(userClickedButtonColor)
        console.log(userClickedButtonColor)
        if (subList() && userClickedPattern.length === gamePattern.length){
            level++
            userClickedPattern = []
            nextSequence()
            showGamePattern()
            document.getElementById("prompt").innerHTML = "Level "+level
            console.log(gamePattern)
        }
        else if (!subList()){
            gameOver()
        }else if (level==totalLevels){
            gameWin()
        }
    }
    function yellowOnClick(){
        var userClickedButtonColor = 'yellow'
        userClickedPattern.push(userClickedButtonColor)
        animatePress(userClickedButtonColor)
        PlayAudio(userClickedButtonColor)
        console.log(userClickedButtonColor)
        if (subList() && userClickedPattern.length === gamePattern.length){
            level++
            userClickedPattern = []
            nextSequence()
            showGamePattern()
            document.getElementById("prompt").innerHTML = "Level "+level
            console.log(gamePattern)
        }
        else if (!subList()){
            gameOver()
        }else if (level==totalLevels){
            gameWin()
        }
    }
    function blueOnClick(){
        var userClickedButtonColor = 'blue'
        userClickedPattern.push(userClickedButtonColor)
        animatePress(userClickedButtonColor)
        PlayAudio(userClickedButtonColor)
        console.log(userClickedButtonColor)
        if (subList() && userClickedPattern.length === gamePattern.length){
            level++
            userClickedPattern = []
            nextSequence()
            showGamePattern()
            document.getElementById("prompt").innerHTML = "Level "+level
            console.log(gamePattern)
        }
        else if (!subList()){
            gameOver()
        }else if (level==totalLevels){
            gameWin()
        }
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
        console.log("Clicked!")
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
    
    function subList(){
        for (var i=0; i<userClickedPattern.length; i++){
            if (userClickedPattern[i] != gamePattern[i]) return false
        }
        return true
    }

    // To reset the game when its game over
    function gameOver() {
        level = 0
        userClickedPattern = []
        gamePattern = []
        start = false
  
        $('body').addClass("lose");

        document.getElementById("prompt").innerHTML = "Game Over!";
        
  
        setTimeout(function() {
          $('body').removeClass("lose")

          document.getElementById("prompt").innerHTML = "Press any key to restart";
        }, 1000)
      }
    function gameWin(){
        level = 0
        userClickedPattern = []
        gamePattern = []
        start = false
        document.getElementById("prompt").innerHTML = "Congratulations You won !"
        setTimeout(function(){
            document.getElementById("prompt").innerHTML = "Press any key to restart"
        }, 1000)
    }  


})