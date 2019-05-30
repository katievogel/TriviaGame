//Variables needed for timer, correct answers, incorrect answers, unanswered questions, questions, possible answers choices, correct answer choice//

var timeLeft = 10;
var timerRunning = false;
var correctlyAnswered = 0;
var incorrectlyAnswered = 0;
var unanswered = 0;
var intervalId = null;

//Start-game button and Timer countdown from 100. Gives 10s per question
function countDown () {
  timeLeft--;
  $("#timer").text(timeLeft); 
  if (timeLeft <= 0) {
    clearInterval(intervalId);
    $("#timer").text(0)
  }
}

function start() {
  if (!timerRunning) {
    intervalId = setInterval(countDown, 1000);
    timerRunning = true;
    $("#timer").text(timeLeft);
  }
}
window.onload = function () {
  $("#start-game").on("click", start);
  clearInterval(intervalId);
}

//Question and Answer choices in an array
var qAndA = [

  {
    q: "Which of these is not a noble gas?",
    a: 0,
    choices: ["Xenon", "Hydrogen", "Sulfide", "Methane"]
  },

  {
    q: "Which of the following is the rate of acceleration due to gravity?",
    a: 1,
    choices: ["5 mph", "9.8m/s^2", "300m/s", "78ft/s^2"]
  },

  {
    q: "Our Sun currently creates energy through the nuclear fusion of what elements?",
    a: 0,
    choices: ["Hydrogen to Helium", "Carbon to Silicon", "Helium to Iron", "Krypton to Hydrogen"]
  },

  {
    q: "Osmosis is the diffusion of particles across a semi-permeable membrane.",
    a: 1,
    choices: ["True", "False", "Don't pick this one", "Don't pick this either"]
  },

  {
    q: "Which of these clouds are associated with Thunderstorms?",
    a: 2,
    choices: ["Cumulus", "Stratus", "Cumulonimbus", "Unicorn Farts"]
  },

  {
    q: "Which is the next closest star to our solar system?",
    a: 3,
    choices: ["Sirius", "Death Star", "Polaris", "Alpha Centauri"]
  },

  {
    q: "Polonium was discovered by this person.",
    a: 0,
    choices: ["Marie Curie", "Rosalind Franklin", "Albert Einstein", "Vin Diesel"]
  },

  {
    q: "Newton's first law of motion, referred to as the law of inertia states that an object at rest will stay at rest and an object in motion will stay in motion with the same speed and in the same direction unless acted upon by an unbalanced force.",
    a: 0,
    choices: ["True", "False", "Apples", "Bananas"]
  },

  {
    q: "Which is the largest organ of the human body?",
    a: 3,
    choices: ["Lungs", "Large Intestine", "Small Intestine", "Skin"]
  },

  {
    q: "This is the deepest known place in the ocean.",
    a: 1,
    choices: ["Mariana Trench", "Marinara Jar", "Grand Canyon", "Great Bahama Canyon"]
  },

];
//Create a function with a for loop to cycle through each question. Seemed easier than writing out each question and answer set to the document than creating div after div in the HTML//
function questionsGo() {
  for (var i = 0; i < 10; i++) {
    var myDiv = document.createElement('div');
    myDiv.innerHTML = '<div class="wrapper questions">\
    <h2 id="question">' + qAndA[i].q + '</h2>\
    <ul>\
      <li class="answer1"><input type="radio" name="group' + [i] + ' id="radio-1">\
      <label for="radio-1"></label>' + qAndA[i].choices[0] + '</li>\
      <li class="answer2"><input type="radio" name="group' + [i] + ' id="radio-1">\
      <label for="radio-1"></label>' + qAndA[i].choices[1] + '</li>\
      <li class="answer3"><input type="radio" name="group' + [i] + ' id="radio-1">\
      <label for="radio-1"></label>' + qAndA[i].choices[2] + '</li>\
      <li class="answer4"><input type="radio" name="group' + [i] + ' id="radio-1">\
      <label for="radio-1"></label>' + qAndA[i].choices[3] + '</li>\
    </ul>\
 </div>';
    document.querySelector('.questions').append(myDiv);
  }
}
questionsGo();

$('#done').click(function finishedPage(){
  var myNewDiv = document.createElement('div');
    myNewDiv.innerHTML = '<div class="wrapper questions">\
    <h2 id="question">"You have completed the quiz!"</h2>\
    <h3>Correct Answers: <span id="correct"></span></h3>\
    <h3>Incorrect Answers: <span id="incorrect"></span></h3>\
    <h3>Unanswered: <span id="unanswerred"></span></h3>\
 </div>';
    $('.questions').html(myNewDiv);
});

//The Done button should disable the radio buttons, calculate the total correct, incorrect, and unanswered questions, then display them//
// $('#done').click(function finishedPage() {
//   $('#correct').html(correctlyAnswered);
//   $('#incorrect').html(incorrectlyAnswered);
//   $('#unanswered').html(unanswered);
// });

//The Try Again button should start the question round again, but not refresh the page//
function tryAgain() {

}