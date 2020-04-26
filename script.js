// quiz questions stored in an array
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
var inputValue;
var timeRemaining;


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

        //call quizOver function if time is less than or equal to 0
        if (timeLeft <= 0) {

            quizOver();
        }

    }, 1000);

    //call renderQuestion function after starting the timer
    renderQuestions();
}

//render questions and choices
function renderQuestions() {
    //empty any previous values
    quizDivElement.innerHTML = "";
    olElement.innerHTML = "";

    //hide the mainDiv element
    mainDivElement.classList.add("d-none");
    //display the quizDiv element
    quizDivElement.classList.remove("d-none");

    // loop through the questions using currentQuestionIndex variable
    var userQuestion = questions[currentQuestionIndex].question;
    var userChoice = questions[currentQuestionIndex].choice;

    //question will be displayed in quizDivElement
    quizDivElement.textContent = "Question:" + " " + userQuestion;

    //loop over all the question choices
    userChoice.forEach(function (choices) {

        //create liElement and display choices
        var liElement = document.createElement("li");
        liElement.textContent = choices;

        //append li and ol to quizDivElement
        quizDivElement.appendChild(olElement);
        olElement.appendChild(liElement);

        //adding event listener on a list-item click event and calling findCorrectAnswer function
        liElement.addEventListener("click", findCorrectAnswer);

    });
}

function findCorrectAnswer(event) {

    //finding which li is clicked
    var liclicked = event.target;

    if (liclicked.matches("li")) {

        //creating a div element to show correct or wrong text
        var answerDivEl = document.createElement("div");
        answerDivEl.setAttribute("class", "answer")

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
    currentQuestionIndex++; //increment the currentQuestionIndex

    //call quizOver function if currentQuestionIndex is greater than questions.length
    if (currentQuestionIndex >= questions.length) {

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

    // create a heading element
    var headingEl = document.createElement("h1");
    headingEl.classList.add("text-center", "mt-2");
    headingEl.textContent = "Quiz is Over!"

    quizDivElement.appendChild(headingEl);

    // create a aragraph element
    var paragraphEl = document.createElement("p");
    //paragraphEl.setAttribute("id", "para1");
    quizDivElement.appendChild(paragraphEl);

    // Calculates time remaining and replaces it with score
    if (timeLeft >= 0) {
        timeRemaining = timeLeft;

        clearInterval(timeInterval);
        paragraphEl.textContent = "Your final score is: " + timeRemaining;

    }

    // Label
    var labelEl = document.createElement("label");
    labelEl.setAttribute("id", "labelEl");
    labelEl.textContent = "Enter your initials: ";

    quizDivElement.appendChild(labelEl);

    // input
    var inputEl = document.createElement("input");
    inputEl.setAttribute("type", "text");
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
            return;
        }
        //create an object to store initials and scores
        var scoreObject = {
            score: timeRemaining,
            initials: inputValue
        };

        var scores = getScores();
        // push our scoreObject onto the existing scores array
        scores.push(scoreObject);
        // JSOn.strigify to turn our array into string
        var scoreJSON = JSON.stringify(scores);
        // store our new JSON string in local storage
        localStorage.setItem("key", scoreJSON);

        console.log(scores)
        window.location.replace("./highscore.html");

    });
};

function getScores() {
    //get all of the current scores from local storage
    var scores = localStorage.getItem("key");
    // JSOn.parse the value from local storage to get an array
    if (scores) {

        return JSON.parse(scores);
    }
    return [];

};

















