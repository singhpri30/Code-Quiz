
# Project: ***Code-Quiz***
Objective: Build a timed code quiz with multiple-choice questions. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

### The project has following pages:
 * [index.html](https://singhpri30.github.io/Code-Quiz/)
   * Landing page to start quiz
 * [highscore.html](https://singhpri30.github.io/Code-Quiz/highscore.html)
   * Retrieves local data from previous page

### This project has the following features:
* A Start Quiz button
  * This starts a timer for the user, each question averages 15 seconds each and total time should be number of questions * 15.
* A HTML page that features questions, dynamically created multiple choice answers, and final scores
  * If questions are answered incorrectly, 15 seconds are deducted off remaining time
  * Answers are compared using an event listener
  * Final score which is calculated using time remaining
  * dynamically created input area to save initials
  * A Submit button- saves initials and score to local storage and redirect to highscore.html page
* A Highscore HTML page
  * This a list summary of initials and final scores
  * Clear button resets the page and local storage
  * Go back button redirect to the index.html page

### This project has following script features:
  * Questions contained in an array variable with objects
  * Variable declaration area
  * An event listener (onclick) that generates time interval
  * A function to render the questions and choices on the page using a loop
  * An event listener on all list choices
  * A comparison statement to compare correct answers to choices
  * The dynamically created elements to display the final scores and to store user's initials
  * Highscore page to retrieve data from local storage





## Developer ##

**Priyanka Singh**


### Below are the links of the deployed project: ###

*https://github.com/singhpri30/Code-Quiz*

*https://singhpri30.github.io/Code-Quiz/index.html*
