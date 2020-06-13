// create variables to select specific elements, classes and ID's
var timerEl = document.querySelector(".timer")
var highScorebtn = document.querySelector("#highScore-btn")
var btnDesign = document.querySelectorAll(".btn")
var btnOne = document.querySelector("#btn-1")
var btnTwo = document.querySelector("#btn-2")
var btnThree = document.querySelector("#btn-3")
var btnFour = document.querySelector("#btn-4")
var qstn = document.querySelector("h4")
var quizSection = document.querySelector(".question-1")
var incorrectAnswer = document.querySelector(".incorrect")

//Style and position the timer
timerEl.setAttribute("style", "margin-left:80%; font-size:18px")

highScorebtn.setAttribute("style", "margin-top:0%; margin-left: 0%; height:50px; width:130px")
highScorebtn.textContent = "View high scores"

//style the question section toward middle of the screen
quizSection.setAttribute("style", "margin-left:20%; margin-right:20%; width:60%;")

//Style the question
qstn.setAttribute("style", "font-size:18px; font-family: Comic Sans MS, cursive, sans-serif; font-size:26px" )

//Style the buttons
for (var i = 0; i < btnDesign.length; i++) {
    btnDesign[i].setAttribute("style", "float:left; background:sandyBrown; margin:5px; width:350px; height:175px; font-family: Comic Sans MS, cursive, sans-serif; font-size:20px")
}


// //Set up question 1 
qstn.textContent = "Which of the following best describes JavaScript?"
btnOne.textContent = "a compiled scripting language.";
btnTwo.textContent = "a scripting language precompiled in the browser.";
btnThree.textContent = "an object-oriented scripting language.";
btnFour.textContent = "a low-level programming language.";

var secondsLeft = 59


function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = "Time left: " + secondsLeft + " seconds";
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            alert("Game over! You didn't complete the quiz!")
        }
    }, 1000);
}

var confirm1 = confirm("Welcome to the javascript quiz! \n You will start with 59 seconds on the clock and will gain 5 seconds for a correct answer and lose 5 seconds for an incorrect answer. \n Are you ready to start the quiz?")
if (confirm1 === true) {
    console.log("test");
    setTime();
}

btnOne.addEventListener("click", function(incorrectanswer) {
    incorrectanswer.preventDefault;
    secondsLeft = parseInt(secondsLeft - 6)
    incorrectAnswer.textContent = "Incorrect!"
});

btnTwo.addEventListener("click", function(incorrectanswer) {
    secondsLeft = parseInt(secondsLeft - 6)
    incorrectAnswer.textContent = "Incorrect!"
});

btnFour.addEventListener("click", function(incorrectanswer) {
    secondsLeft = parseInt(secondsLeft - 6)
    incorrectAnswer.textContent = "Incorrect!"
});

btnThree.addEventListener("click", function(correctanswer) {
    //add 6 seconds to secondsLeft variable, write answer correct at the bottom
    secondsLeft = parseInt(secondsLeft + 6)
    alert("That is correct!");
    qstn.textContent = "Inside which HTML do we put the javascript?"
    btnOne.textContent = "<script>";
    btnTwo.textContent = "<javascript>";
    btnThree.textContent = "<js>";
    btnFour.textContent = "<body>"; 
    incorrectAnswer.textContent = ("") 
});





