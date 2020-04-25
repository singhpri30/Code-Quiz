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
        question: "Arrays in Javascript can be used to store ____.",
        choice: ["numbers and strings", "booleans", "all of the above"],
        correct: "all of the above"
    },
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        choice: ["curly brackets", "parentheses", "square brackets"],
        correct: "parentheses"
    },
    {
        question: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choice: ["terminal / bash", "for loops", "console log"],
        correct: "console log"
    }
]


//storing HTML elements in the variables
var startQuizButton = document.querySelector("#start-quiz");
var mainDivElement = document.querySelector("#main-div");
var quizDivElement = document.querySelector("#quiz-div");
var timerEl = document.querySelector("#timer");
var olElement = document.createElement("ol");


var timeLeft = questions.length * 15;
var timePenalty = 15;
var timeInterval;
var score = 0;
var currentQuestionIndex = 0;


//event will trigger on start quiz button click and call render question and startTime functions
startQuizButton.addEventListener("click", startTime);
function startTime() {

    timeInterval = setInterval(function () {

        timerEl.textContent = timeLeft;
        timeLeft--;

        if (timeLeft <= 0) {
            timerEl.textContent = "Time's up";
            clearInterval(timeInterval);
            quizOver();
        }

    }, 1000);
    renderQuestions();
}

//renders questions and choices
function renderQuestions() {

    quizDivElement.innerHTML = "";
    olElement.innerHTML = "";
    //hide the mainDiv element
    mainDivElement.classList.add("d-none");
    //display the quizDiv element
    quizDivElement.classList.remove("d-none");


    // loops through the questions
    var userQuestion = questions[currentQuestionIndex].question;
    var userChoice = questions[currentQuestionIndex].choice;
    quizDivElement.textContent = "Question:" + " " + userQuestion;



    //loop over all the question choices
    userChoice.forEach(function (choices) {

        var liElement = document.createElement("li");
        liElement.textContent = choices;
        quizDivElement.appendChild(olElement);
        olElement.appendChild(liElement);

        liElement.addEventListener("click", findCorrectAnswer);

    });
}

function findCorrectAnswer(event) {

    var liclicked = event.target;

    if (liclicked.matches("li")) {

        var answerDivEl = document.createElement("div");
        answerDivEl.classList.add("border-top", "mt-2", "text-muted", "border-dark");

        // correct answer
        if (liclicked.textContent == questions[currentQuestionIndex].correct) {

            score++;
            answerDivEl.textContent = "Correct!";

        } else {
            // -15 seconds will be deducted from timeLeft for wrong answers
            timeLeft = timeLeft - timePenalty;
            answerDivEl.textContent = "Wrong!";
        }

    };
    currentQuestionIndex++;

    if (currentQuestionIndex >= questions.length) {
        // All done will append last page with user stats
        quizOver();

    } else {
        renderQuestions();
    }
    quizDivElement.appendChild(answerDivEl);
    setTimeout(function () {
        answerDivEl.classList.add("d-none");
    }, 1000);

}

function quizOver() {
    quizDivElement.innerHTML = "";
    timerEl.innerHTML = 0;

    // Heading:
    var headingEl = document.createElement("h1");
    headingEl.classList.add("text-center", "mt-2");
    headingEl.textContent = "Quiz is Over!"

    quizDivElement.appendChild(headingEl);

    // Paragraph
    var paragraphEl = document.createElement("p");
    //paragraphEl.setAttribute("id", "para1");


    quizDivElement.appendChild(paragraphEl);

    // Calculates time remaining and replaces it with score
    if (timeLeft >= 0) {
        var timeRemaining = timeLeft;
        var paragraphEl2 = document.createElement("p");
        clearInterval(timeInterval);
        paragraphEl.textContent = "Your final score is: " + timeRemaining;

        quizDivElement.appendChild(paragraphEl2);
    }

    // Label
    var labelEl = document.createElement("label");
    labelEl.setAttribute("id", "labelEl");
    labelEl.textContent = "Enter your initials: ";

    quizDivElement.appendChild(labelEl);

    // input
    var inputEl = document.createElement("input");
    inputEl.setAttribute("type", "text");
    //inputEl.setAttribute("id", "inputEl");
    inputEl.classList.add("ml-3");


    quizDivElement.appendChild(inputEl);

    // submit
    var submitBtnEl = document.createElement("button");
    submitBtnEl.setAttribute("type", "submit");
    submitBtnEl.classList.add("d-block", "btn", "btn-dark", "btn-lg", "mt-3");
    submitBtnEl.textContent = "Submit";

    quizDivElement.appendChild(submitBtnEl);
    submitBtnEl.addEventListener("click", function () {
        var inputValue = inputEl.value;

        if (inputValue === "") {
            alert("enter your initials");
        }
        //create an object to store initials and scores
        var highScore = {
            score: timeRemaining,
            initials: inputValue

        }


        var highscore = localStorage.getItem("highscore");//getting a string form local storage
        console.log(highScore);


        if (highscore !== null) {
            highscore1 = JSON.parse(highscore);//convert srting into a object
            console.log("tt" + "   " + highscore1);

        } else {
            highscore = [];
            // console.log(highScore);
        }


        //convert object into string
        var highScoreJson = JSON.stringify(highScore);
        localStorage.setItem("highscore", highScoreJson);
        console.log(highScoreJson);
        //window.location.replace("./highscore.html");

    });
};












