var highScoreEl = document.querySelector("#high-score");
var clearScoreBtn = document.querySelector("#clear-score");
var goBackBtn = document.querySelector("#go-back");


goBackBtn.addEventListener("click", function () {
    window.location.replace("./index.html");
});


clearScoreBtn.addEventListener("click", function () {

    highScoreEl.textContent = "";
    location.reload();


});

var highscore = localStorage.getItem("highscore");
highscore = JSON.parse(highscore);//convert srting into a object
// console.log(highscore);
//highScoreEl.textContent = highscore.score + " " + highscore.initials;

if (highscore !== null) {

    for (var i = 0; i < highscore.length; i++) {

        var liEl = document.createElement("li");

        liEl.textContent = highscore[i].initials + " " + highscore[i].score;
        highScoreEl.appendChild(liEl);


    }
};