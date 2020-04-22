var startQuizButton = document.querySelector("#startQuiz");
var mainDivElement = document.querySelector("#mainDiv");
var quizDivElement = document.querySelector("#quizDiv");

//console.log(mainDivElement);


// quiz question stored in an array
var questions = [
    {
        question: "What does CSS stand for?",
        choice: ["Cascading style sheet", "Colorful Style Sheets", "Computer Style Sheets"],
        correct: "Cascading style sheet"
    },

    {
        question: "Where in an HTML document is the correct place to refer to an external style sheet?",
        choice: ["At the end of the document", "In the <body> section", "In the <head> section"],
        correct: "In the <head> section"
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        choice: ["style", "class", "styles"],
        correct: "style"
    },
    {
        title: "Arrays in Javascript can be used to store ____.",
        choice: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        correct: "all of the above"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choice: ["quotes", "curly brackets", "parentheses", "square brackets"],
        correct: "parentheses"
    },
    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choice: ["Javascript", "terminal / bash", "for loops", "console log"],
        correct: "console log"
    }
]




var timerEl = document.querySelector("#timer");
var timeLeft = 90;
var timePenalty = 5;
function startTime() {

    var timeInterval = setInterval(function () {
        timerEl.textContent = timeLeft;
        timeLeft--;


        if (timeLeft === 0) {
            timerEl.textContent = "Time is over";
            sendMessage();
            clearInterval(timeInterval);
        }

    }, 1000);
}
function sendMessage() {
    timerEl.textContent = " ";

    alert("time over");

}



//variable
var score = 0;
var currentQuestionIndex = 0;


//renders questions and choices
function renderQuestions() {



    //hide the mainDiv element
    mainDivElement.classList.add("d-none");
    //display the quizDiv element
    quizDivElement.classList.remove("d-none");
    var quizQuestionElement = document.createElement("p");
    quizDivElement.appendChild(quizQuestionElement);

    // For loops to loop through the questions
    for (var i = 0; i < questions.length; i++) {

        var userQuestion = questions[currentQuestionIndex].question;
        var userChoice = questions[currentQuestionIndex].choice;
        quizQuestionElement.textContent = userQuestion;

    }

    //loop over all the question choices
    userChoice.forEach(function (choices) {

        var uiElement = document.createElement("ui");
        var liElement = document.createElement("li");
        quizDivElement.appendChild(uiElement);
        uiElement.appendChild(liElement);
        liElement.textContent = choices;

        liElement.addEventListener("click", findCorrectAnswer);

    })
}

function findCorrectAnswer(event) {

    var liclicked = event.target;
    console.log(liclicked);

    if (liclicked.matches("li")) {

        var answerDivEl = document.createElement("div");

        quizDivElement.appendChild(answerDivEl);

        // Correct condition 
        if (liclicked.textContent == questions[currentQuestionIndex].correct) {
            score++;
            console.log(score);
            answerDivEl.textContent = "Correct! The answer is:  " + questions[currentQuestionIndex].correct;
            // Correct condition 
        } else {
            // -5 seconds will be deducted from timeLeft for wrong answers
            timeLeft = timeLeft - timePenalty;
            answerDivEl.textContent = "Wrong! The correct answer is:  " + questions[currentQuestionIndex].correct;
        }


    };

}
currentQuestionIndex++;
console.log(currentQuestionIndex);

















//event will trigger on start quiz button click and call render question and startTime functions
startQuizButton.addEventListener("click", renderQuestions);
startQuizButton.addEventListener("click", startTime);





