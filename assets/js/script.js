// Variables //
const qTime = 10; // 10s
const timeLeft = 150; // 150px
const timeUnit = timeLeft / qTime;
let TIMER = "";
let score = 0;
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
// Function for hiding some page content after being clicked. //
const element = document.getElementById("begin");
element.addEventListener("click", hidePage);
const myTimeout = setTimeout(hidePage, 9900);
function hidePage() {
  document.getElementById("landingPage").style.display = "none";
  rulesPage.style.display = "block";
}

// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("rules");

// Get the button that closes the modal

let existM = document.getElementById("exist");

// When the user clicks the button, open the modal 
btn.onclick = function () {
  modal.style.display = "block";
  document.getElementById("prize").innerHTML = "First person at the table with all question correct gets one free drink";
  document.getElementById("rule1").innerHTML = "No use of the internet";
  document.getElementById("rule2").innerHTML = "No looking at others answers";
  document.getElementById("message").innerHTML = "GOOD LUCK";
}

// When the user clicks on the close button it closes the rules
exist.onclick = function () {
  modal.style.display = "none";
}



// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



//___________________________________________________________________________________________________________________//
// Questions for the quiz
let question = document.getElementById("question");
let qImg = document.getElementById("qImg");
let qImg1 = document.getElementById("qImg1");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let questions = [{
    question: "Who is the oldest?",
    imgSrc: "assets/images/tom_hanks.jpg",
    imgSrc1: "assets/images/liam_Neeson.jpg",
    option1: "Tom Hanks",
    option2: "Liam Neeson",
    correct: "option2"
  },
  {
    question: "Who is the oldest?",
    imgSrc: "assets/images/arnold_S.jpg",
    imgSrc1: "assets/images/syl_S.jpg",
    option1: "Arnold Schwarzenegger",
    option2: "Sylvester Stallone",
    correct: "option2"
  },
  {
    question: "Who is the younger?",
    imgSrc: "assets/images/kate_Winslet.jpg",
    imgSrc1: "assets/images/pam_A.jpg",
    option1: "Kate Winslet",
    option2: "Pam Anderson",
    correct: "option1"
  },
  {
    question: "Who is the youngest?",
    imgSrc: "assets/images/leo_V.jpg",
    imgSrc1: "assets/images/mary_L.jpg",
    option1: "Leo Var",
    option2: "Mary Lou",
    correct: "option1"
  },
  {
    question: "Who is the oldest?",
    imgSrc: "assets/images/pam_A.jpg",
    imgSrc1: "assets/images/mary_L.jpg",
    option1: "Pam Anderson",
    option2: "Mary Lou",
    correct: "option1"
  },
  {
    question: "Who is richer?",
    imgSrc: "assets/images/arnold_S.jpg",
    imgSrc1: "assets/images/syl_S.jpg",
    option1: "Arnold Schwarzenegger",
    option2: "Sylvester Stallone",
    correct: "option1"
  },
  {
    question: "Who is the oldest?",
    imgSrc: "assets/images/arnold_S.jpg",
    imgSrc1: "assets/images/syl_S.jpg",
    option1: "Arnold Schwarzenegger",
    option2: "Sylvester Stallone",
    correct: "option2"
  },
  {
    question: "Who is has scored more goals?",
    imgSrc: "assets/images/messi.jpg",
    imgSrc1: "assets/images/ronaldo.jpg",
    option1: "Lionel Messi",
    option2: "Cristiano Ronaldo",
    correct: "option2"
  },
  {
    question: "Who is the oldest?",
    imgSrc: "assets/images/arnold_S.jpg",
    imgSrc1: "assets/images/syl_S.jpg",
    option1: "Arnold Schwarzenegger",
    option2: "Sylvester Stallone",
    correct: "option2"
  },
  {
    question: "Who is the youngest?",
    imgSrc: "assets/images/messi.jpg",
    imgSrc1: "assets/images/ronaldo.jpg",
    option1: "Lionel Messi",
    option2: "Cristiano Ronaldo",
    correct: "option1"
  },
  {
    question: "Who is the oldest?",
    imgSrc: "assets/images/arnold_S.jpg",
    imgSrc1: "assets/images/syl_S.jpg",
    option1: "Arnold Schwarzenegger",
    option2: "Sylvester Stallone",
    correct: "option2"
  },
  {
    question: "Who is the youngest?",
    imgSrc: "assets/images/messi.jpg",
    imgSrc1: "assets/images/ronaldo.jpg",
    option1: "Lionel Messi",
    option2: "Cristiano Ronaldo",
    correct: "option1"
  },
  {
    question: "Who is the oldest?",
    imgSrc: "assets/images/arnold_S.jpg",
    imgSrc1: "assets/images/syl_S.jpg",
    option1: "Arnold Schwarzenegger",
    option2: "Sylvester Stallone",
    correct: "option2"
  },
  {
    question: "Who is the youngest?",
    imgSrc: "assets/images/messi.jpg",
    imgSrc1: "assets/images/ronaldo.jpg",
    option1: "Lionel Messi",
    option2: "Cristiano Ronaldo",
    correct: "option1"
  }
];
//__________________________________________________________________________________________________________________________//

// Play button to start quiz
let playB = document.getElementById("play");
playB.onclick = function () {
  modal.style.display = "none";
  secondP.style.display = "none";
  gameTitle.style.display = "none";
  gameArea.style.display = "block";
  //generateRandomQuestion();
  makeQuestion();
  makeTimer();
  renderProgress();
  TIMER = setInterval(makeTimer, 1000); // 1000ms = 1s
}

let lastQ = questions.length - 1;
let currentQ = 0;
let count = 0;
//let randomNumber = currentQ;

function makeQuestion() {
  let ques = questions[currentQ];
  question.innerHTML = "<p>" + ques.question + "</p>";
  qImg.innerHTML = "<img src=" + ques.imgSrc + ">";
  qImg1.innerHTML = "<img src=" + ques.imgSrc1 + ">";
  option1.innerHTML = ques.option1;
  option2.innerHTML = ques.option2;
}


// render progress
function renderProgress() {
  for (let quesIndex = 0; quesIndex <= lastQ; quesIndex++) {
    progress.innerHTML += "<div class='prog' id=" + quesIndex + "></div>";
  }
}

//option1.addEventListener("click",checkAnswer('option1'));
//option2.addEventListener("click",checkAnswer('option2'));

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
    clearInterval(TIMER)
    gameArea.style.display = "none";
    scoreRender();
  }
}

//let myArray = [];

//function generateRandomQuestion() {
  //const randomNumber = Math.floor(Math.random() * questions.length);

  //let hitDuplicate = 0;

  //if (myArray.length == 0) {} else {
  //  for (let i = 0; i < myArray.length; i++) {
   //   if (randomNumber == myArray[i]) {
   //     hitDuplicate = 1;
  //    }
   // }
   // if (hitDuplicate == 1) {
     // generateRandomQuestion();
   // }
 // }
//}

// Answer is Correct
function ansCorrect() {
  document.getElementById(currentQ).style.backgroundColor = "green";
}

// Answer is Wrong
function ansWrong() {
  document.getElementById(currentQ).style.backgroundColor = 'red';
}

function makeTimer() {
  if (count <= qTime) {
    counter.innerHTML = count;
    timeGauge.style.width = count * timeUnit + "px";
    count++
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

(function () {
  let s = document.getElementById('counter').style,
    f = false,
    c1 = 'red',
    c3 = 'white';

  setInterval(function () {
    s.backgroundColor = c3;
    if (count >= 9) {
      s.backgroundColor = f ? c1 : c3;
      f = !f;
    }
  }, 280);
});

// calculate the amount of question percent answered by the user
const scorePer = Math.round(100 * score / questions.length);
const scoreDiv = document.getElementById("scoreContainer");
const resultMessage = document.getElementById("resultMessage");

// score render
function scoreRender() {
  scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePer = Math.round(100 * score/questions.length);
  gameArea.style.display = "none";
  modalResults.style.display = "block";
  scoreDiv.style.display = "block";
  scoreDiv.innerHTML += "<p>"+ scorePer +"%</p>";

  if(scorePer >= 100){  
    document.getElementById("resultMessage").innerHTML = "You won free drinks for the table"; 
    }  
    else if(scorePer >= 80){  
      document.getElementById("resultMessage").innerHTML = "Well done better luck next time";  
    }  
    else if(scorePer >= 60){  
      document.getElementById("resultMessage").innerHTML = "You might of had enough";  
    }  
    else{  
      document.getElementById("resultMessage").innerHTML = "Your drunk go home"; 
    }  
}


// Get the modal
let result = document.getElementById("modalResults");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modalResults.style.display = "none";
}

replay.onclick = function () {
  modalResults.style.display = "none";
  gameArea.style.display = "block";
  //generateRandomQuestion();
  makeQuestion();
  makeTimer();
  renderProgress();
  TIMER = setInterval(makeTimer, 1000); // 1000ms = 1s
}