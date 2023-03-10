//__________________________________Variables__________________________________________________//
// Variables //
const qTime = 10; // 10s
const timeLeft = 150; // 150px
const timeUnit = timeLeft / qTime; // Makes the time gague
let TIMER = ""; // Timer
let score = 0; // Score
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const refreshButton = document.getElementById("refresh-button");
const refreshButton1 = document.getElementById("refresh-button1");
//__________________________________Landing Page_______________________________________________//

// Function for hiding some page content after being clicked. //
const start = document.getElementById("begin");
start.addEventListener("click", hidePage);
setTimeout(hidePage, 99000); // Home page will change after 99 seconds 

function hidePage() {
  document.getElementById("landingPage").style.display = "none";
  document.getElementById("rulesPage").style.display = "block";
}

//___________________________________Modal Rules Section_________________________________________//
// Get the modal
// Code idea from w3schools
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let getRules = document.getElementById("rules");

// When the user clicks the button, open the modal 
getRules.onclick = function () {
  modal.style.display = "block";
  document.getElementById("prize").innerHTML = "First table with all the question correct gets one free drink each";
  document.getElementById("rule1").innerHTML = "No use of the internet";
  document.getElementById("rule2").innerHTML = "Click on the name to pick you answer";
  document.getElementById("message").innerHTML = "GOOD LUCK";
};
let exist = document.getElementById("exist");
// When the user clicks on the close button it closes the rules
exist.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//_____________________________________Questions___________________________________________________//
// Questions for the quiz

let questions = [{
    question: "Who is the oldest?",
    imgSrc: "assets/images/tom_hanks.webp",
    imgSrc1: "assets/images/liam_Neeson.webp",
    option1: "Tom Hanks",
    option2: "Liam Neeson",
    correct: "option2"
  },
  {
    question: "Who is the oldest?",
    imgSrc: "assets/images/arnold_S.webp",
    imgSrc1: "assets/images/syl_S.webp",
    option1: "Schwarzenegger",
    option2: "Sylv Stallone",
    correct: "option2"
  },
  {
    question: "Who is the younger?",
    imgSrc: "assets/images/kate_Winslet.webp",
    imgSrc1: "assets/images/pam_A.webp",
    option1: "Kate Winslet",
    option2: "Pam Anderson",
    correct: "option1"
  },
  {
    question: "Who is the youngest?",
    imgSrc: "assets/images/leo_V.webp",
    imgSrc1: "assets/images/mary_L.webp",
    option1: "Leo Var",
    option2: "Mary Lou",
    correct: "option1"
  },
  {
    question: "Who is the oldest?",
    imgSrc: "assets/images/pam_A.webp",
    imgSrc1: "assets/images/mary_L.webp",
    option1: "Pam Anderson",
    option2: "Mary Lou",
    correct: "option1"
  },
  {
    question: "Who is richer?",
    imgSrc: "assets/images/arnold_S.webp",
    imgSrc1: "assets/images/syl_S.webp",
    option1: "Schwarzenegger",
    option2: "Sylv Stallone",
    correct: "option1"
  },
  {
    question: "Who is the oldest?",
    imgSrc: "assets/images/arnold_S.webp",
    imgSrc1: "assets/images/liam_Neeson.webp",
    option1: "Schwarzenegger",
    option2: "Liam Neeson",
    correct: "option1"
  },
  {
    question: "Who is has scored more goals?",
    imgSrc: "assets/images/messi.webp",
    imgSrc1: "assets/images/ronaldo.webp",
    option1: "Lionel Messi",
    option2: "Ronaldo",
    correct: "option2"
  },
  {
    question: "Who has acted in more movies?",
    imgSrc: "assets/images/arnold_S.webp",
    imgSrc1: "assets/images/syl_S.webp",
    option1: "Schwarzenegger",
    option2: "Sylv Stallone",
    correct: "option2"
  },
  {
    question: "Who is the youngest?",
    imgSrc: "assets/images/messi.webp",
    imgSrc1: "assets/images/ronaldo.webp",
    option1: "Lionel Messi",
    option2: "Ronaldo",
    correct: "option1"
  },
  {
    question: "Who is the youngest?",
    imgSrc: "assets/images/tom_hanks.webp",
    imgSrc1: "assets/images/simon_Cowell.webp",
    option1: "Tom Hanks",
    option2: "Simon Cowell",
    correct: "option2"
  },
  {
    question: "Who is the richer?",
    imgSrc: "assets/images/messi.webp",
    imgSrc1: "assets/images/ronaldo.webp",
    option1: "Lionel Messi",
    option2: "Ronaldo",
    correct: "option2"
  },
  {
    question: "Who is the oldest?",
    imgSrc: "assets/images/leo_D.webp",
    imgSrc1: "assets/images/kate_Winslet.webp",
    option1: "Leo DiCaprio",
    option2: "Kate Winslet",
    correct: "option1"
  },
  {
    question: "Who has won more trophies in their career?",
    imgSrc: "assets/images/messi.webp",
    imgSrc1: "assets/images/ronaldo.webp",
    option1: "Lionel Messi",
    option2: "Ronaldo",
    correct: "option1"
  }
];
//__________________________________Play Game Function____________________________________________//

// Play button to start quiz
let playB = document.getElementById("play");
playB.onclick = function () {
  modal.style.display = "none";
  document.getElementById("secondP").style.display = "none";
  document.getElementById("githubIcon").style.display = "none";
  document.getElementById("gameTitle").style.display = "none";
  document.getElementById("gameArea").style.display = "block";
  makeQuestion();
  makeTimer();
  showProgress();
  TIMER = setInterval(makeTimer, 1000); // 1000ms = 1s
};

//___________________________________Make Question Function______________________________________//
// Some variables for the questions
let lastQ = questions.length - 1;
let currentQ = 0;
let count = 0;

// Function to make questions
function makeQuestion() {
  let question = document.getElementById("question");
  let qImg = document.getElementById("qImg");
  let qImg1 = document.getElementById("qImg1");
  let option1 = document.getElementById("option1");
  let option2 = document.getElementById("option2");
  let ques = questions[currentQ];
  question.innerHTML = "<p>" + ques.question + "</p>";
  qImg.innerHTML = "<img src=" + ques.imgSrc + " alt=" + option1 +">";
  qImg1.innerHTML = "<img src=" + ques.imgSrc1 + " alt=" + option2 +">";
  option1.innerHTML = ques.option1;
  option2.innerHTML = ques.option2;
}

//_____________________________________Progess Section__________________________________________//
// Function to display area to let user know how many questions in the quiz
// Code idea from https://www.youtube.com/watch?v=49pYIMygIcU
function showProgress() {
  for (let quesIndex = 0; quesIndex <= lastQ; quesIndex++) {
    progress.innerHTML += "<div class='prog' id=" + quesIndex + "></div>";
  }
}
// Functions to show the user how many questions are correct
// Answer is Correct
function ansCorrect() {
  document.getElementById(currentQ).style.backgroundColor = "green";
}

// Answer is Wrong
function ansWrong() {
  document.getElementById(currentQ).style.backgroundColor = 'red';
}

//_____________________________________Check Answer______________________________________________//
// Function to check if answer is correct
function checkAnswer(answer) {
  if (answer == questions[currentQ].correct) {
    // Answer is correct
    score++;
    // Change progress color to green
    ansCorrect();
  } else {
    ansWrong();
  }
  count = 0;
  if (currentQ < lastQ) {
    currentQ++;
    makeQuestion();
  } else {
    clearInterval(TIMER);
    document.getElementById("gameArea").style.display = "none";
    scoreRender();
  }
}

//________________________________________Timer___________________________________________________//
// Function to make a timer for the quiz
function makeTimer() {
  if (count <= qTime) {
    counter.innerHTML = count;
    // Code idea from https://www.youtube.com/watch?v=49pYIMygIcU
    timeGauge.style.width = count * timeUnit + "px";
    count++;
  } else {
    count = 0;
    // Change progress color to red
    ansWrong();
    if (currentQ < lastQ) {
      currentQ++;
      makeQuestion();
    } else {
      // End the quiz and show the score
      clearInterval(TIMER);
      scoreRender();
    }
  }
}
// Function to make a timer flash red when the has a few seconds left
// Code idea from http://jsfiddle.net/Dzk2h/2/
(function () {
  var s = document.getElementById('counter').style,
    f = false,
    c1 = 'red',
    c3 = 'white';

  setInterval(function () {
    s.backgroundColor = c3;
    if (count >= 7 && count <= 10) {
      s.backgroundColor = f ? c1 : c3;
      f = !f;
    }
  }, 400);
})();
//_____________________________________Result Section____________________________________________//
// Calculate the amount of questions percent answered by the user
const scoreDiv = document.getElementById("scoreContainer");

// Function to display score results section
function scoreRender() {
  scoreDiv.style.display = "block";
  // Calculate the amount of question percent answered by the user
  const scorePer = Math.round(100 * score / questions.length);
  document.getElementById("gameArea").style.display = "none";
  document.getElementById("modalResults").style.display = "block";
  scoreDiv.style.display = "block";
  scoreDiv.innerHTML += "<p>" + scorePer + "%</p>";

  if (scorePer >= 100) {
    document.getElementById("resultMessage").innerHTML = "You won free drinks for the table";
  } else if (scorePer >= 80) {
    document.getElementById("resultMessage").innerHTML = "Well done but better luck next time";
  } else if (scorePer >= 60) {
    document.getElementById("resultMessage").innerHTML = "You might of had enough";
  } else {
    document.getElementById("resultMessage").innerHTML = "You are drunk go home";
  }
}

//_____________________________________Modal Results_____________________________________________//
// Get the modal
let replay = document.getElementById("replay");
// Function for replaying the game
replay.onclick = function () {
  document.getElementById("modalResults").style.display = "none";
  document.getElementById("gameArea").style.display = "block";
  progress.replaceChildren();
  scoreContainer.replaceChildren();
  scorePer = 0;
  currentQ = 0;
  score = 0;
  makeQuestion();
  makeTimer();
  showProgress();
  TIMER = setInterval(makeTimer, 1000); // 1000ms = 1s
};

// Function for returning to homepage 
const refreshPage = () => {
  location.reload();
};
refreshButton.addEventListener('click', refreshPage);
refreshButton1.addEventListener('click', refreshPage);

// Code from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_navbar_hide_scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}