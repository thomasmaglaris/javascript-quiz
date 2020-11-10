var questions = [
  {
    question: "Inside which HTML do we put the javascript?",
    options: [
      {
        title: "<script>",
        isAnswer: true,
      },
      {
        title: "<javascript>",
        isAnswer: false,
      },
      {
        title: "<js>",
        isAnswer: false,
      },
      {
        title: "<body>",
        isAnswer: false,
      },
    ],
  },
  {
    question: "what is the scope of let?",
    options: [
      {
        title: "functional",
        isAnswer: false,
      },
      {
        title: "block",
        isAnswer: true,
      },
      {
        title: "both of the above",
        isAnswer: false,
      },
      {
        title: "none of the above",
        isAnswer: false,
      },
    ],
  },
  {
    question: "Javascript is a _____-side programming language",
    options: [
      {
        title: "Client",
        isAnswer: false,
      },
      {
        title: "Server",
        isAnswer: false,
      },
      {
        title: "None",
        isAnswer: false,
      },
      {
        title: "Both",
        isAnswer: true,
      },
    ],
  },
  {
    question:
      "Which built-in method calls a function for each element in the array?",
    options: [
      {
        title: "While()",
        isAnswer: false,
      },
      {
        title: "Loop()",
        isAnswer: false,
      },
      {
        title: "forEach()",
        isAnswer: true,
      },
      {
        title: "None of the above",
        isAnswer: false,
      },
    ],
  },
  {
    question:
      "Which built-in method returns the calling string value converted to upper case?",
    options: [
      {
        title: "toUpperCase()",
        isAnswer: true,
      },
      {
        title: "toUpper()",
        isAnswer: false,
      },
      {
        title: "changeCase(case)",
        isAnswer: false,
      },
      {
        title: "None of the above",
        isAnswer: false,
      },
    ],
  },
  {
    question:
      "Which of the following function of Number object returns a string value version of the current number?",
    options: [
      {
        title: "toString()",
        isAnswer: true,
      },
      {
        title: "toFixed()",
        isAnswer: false,
      },
      {
        title: "toLocaleString()",
        isAnswer: false,
      },
      {
        title: "toPrecision()",
        isAnswer: false,
      },
    ],
  },
  {
    question:
      "Which of the following function of Array object returns a new array comprised of this array joined with other array(s) and/or value(s)?",
    options: [
      {
        title: "concat()",
        isAnswer: true,
      },
      {
        title: "pop()",
        isAnswer: false,
      },
      {
        title: "push()",
        isAnswer: false,
      },
      {
        title: "some()",
        isAnswer: false,
      },
    ],
  },
  {
    question:
      "Which of the following function of String object returns the characters in a string beginning at the specified location through the specified number of characters?",
    options: [
      {
        title: "slice()",
        isAnswer: false,
      },
      {
        title: "split()",
        isAnswer: false,
      },
      {
        title: "substr()",
        isAnswer: true,
      },
      {
        title: "search()",
        isAnswer: false,
      },
    ],
  },
];

var timeRemaining = 59;
var currentQuestionIndex = 0;

var timerEl = document.querySelector(".timer");

function setTime() {
  var timerInterval = setInterval(function () {
    timeRemaining--;
    timerEl.textContent = "Time left: " + timeRemaining + " seconds";
    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      alert(
        "Game over! You didn't complete the quiz! Hit refresh to try again!"
      );
    }
  }, 1000);
}

function validateAnswer(e) {
  var isCorrect = e.target.getAttribute("data-answer");
  var resultDiv = document.getElementById("result");

  if (isCorrect === "true") {
    resultDiv.innerHTML = "Your answer is correct!";
    timeRemaining += 5;
    if (currentQuestionIndex === questions.length - 1) {
      alert("game is over");
    } else {
      currentQuestionIndex++;
      var domEle = document.getElementById("question");
      domEle.innerHTML = "";
      resultDiv.innerHTML = "";
      showNextQuestion();
    }
  } else {
    resultDiv.innerHTML = "Your answer is incorrect!";
    timeRemaining -= 5;
  }
}

function showNextQuestion() {
  var question = questions[currentQuestionIndex];
  var container = document.createElement("div");
  var p = document.createElement("p");
  p.setAttribute("style", "font-size:24px");
  p.innerHTML = question.question;
  container.appendChild(p);

  var ul = document.createElement("ul");
  for (var index = 0; index < question.options.length; index++) {
    var li = document.createElement("li");
    var button = document.createElement("button");
    button.setAttribute(
      "style",
      "background:sandyBrown; margin:5px; width:350px; height:175px; font-family: Comic Sans MS, cursive, sans-serif; font-size:20px;"
    );

    button.addEventListener("click", validateAnswer);
    button.innerText = question.options[index].title;
    button.setAttribute("data-answer", question.options[index].isAnswer);
    console.log(question.options[index].title);

    li.appendChild(button);
    ul.appendChild(li);
  }

  container.appendChild(ul);

  var domEle = document.getElementById("question");
  domEle.appendChild(container);
}

var confirm1 = confirm(
  "Welcome to the javascript quiz! \n You will start with 59 seconds on the clock and will gain 5 seconds for a correct answer and lose 5 seconds for an incorrect answer. \n Are you ready to start the quiz?"
);
if (confirm1 === true) {
  console.log("test");
  setTime();
  showNextQuestion();
}
