var scoreTableEl = document.querySelector("#score-table");
var clearScoreBtn = document.querySelector("#clear-score");
var goBackBtn = document.querySelector("#go-back");
var tableBodyElement = document.querySelector('#score-body');




//get all of the current scores from local storage

var scores = localStorage.getItem("key");
scores = JSON.parse(scores);

if (scores !== null) {
    scoreTableEl.classList.remove("d-none");

    for (var i = 0; i < scores.length; i++) {


        var tableRowElement = document.createElement("tr");
        var scoreTd = document.createElement("td");
        scoreTd.textContent = scores[i].score;
        var initialsTd = document.createElement("td");
        initialsTd.textContent = scores[i].initials;

        tableRowElement.append(scoreTd);
        tableRowElement.append(initialsTd);

        tableBodyElement.append(tableRowElement);

    }
}


goBackBtn.addEventListener("click", function () {
    window.location.replace("./index.html");
});


clearScoreBtn.addEventListener("click", function () {
    localStorage.clear();
    scoreTableEl.classList.add("d-none");

});