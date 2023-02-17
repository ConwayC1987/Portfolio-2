// Function for hiding some page content after being clicked. //
const element = document.getElementById("begin");
element.addEventListener("click", hidePage);
function hidePage() {
  document.getElementById("landingPage").style.display="none";
  document.getElementById("rulesPage").style.display="block";
  document.getElementById("secondP").style.display="block";
}

// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("rules");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
  document.getElementById("prize").innerHTML = "First person at the table with all question correct gets one free drink";
  document.getElementById("rule1").innerHTML = "No use of the internet";
  document.getElementById("rule2").innerHTML = "No looking at others answers";
  document.getElementById("message").innerHTML = "GOOD LUCK";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

let playB = document.getElementById("play");
let question = document.getElementById("question");
let qImg = document.getElementById("qImg");
let qImg1 = document.getElementById("qImg1");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");


let questions = [
  {
      question : "Who is the oldest?",
      imgSrc : "assets/images/tom_hanks.jpg",
      imgSrc1 : "assets/images/liam_Neeson.jpg",
      option1 : "Tom Hanks",
      option2 : "Liam Neeson",
      correct : "option2"
  },
  {
    question : "Who is the oldest?",
    imgSrc : "assets/images/arnold_S.jpg",
    imgSrc1 : "assets/images/syl_S.jpg",
    option1 : "Arnold Schwarzenegger",
    option2 : "Sylvester Stallone",
    correct : "option2"
},
  {
    question : "Who is the oldest?",
    imgSrc : "assets/images/kate_Winslet.jpg",
    imgSrc1 : "assets/images/",
    option1 : "Kate Winslet",
    option2 : "Sylvester Stallone",
    correct : "option2"
},
{
  question : "Who is the oldest?",
  imgSrc : "assets/images/leo_V.jpg",
  imgSrc1 : "assets/images/mary_L.jpg",
  option1 : "Leo Var",
  option2 : "Mary Lou",
  correct : "option2"
},
{
  question : "Who is the oldest?",
  imgSrc : "assets/images/pam_A.jpg",
  imgSrc1 : "assets/images/syl_S.jpg",
  option1 : "Pam",
  option2 : "Sylvester Stallone",
  correct : "option2"
},
{
  question : "Who is the oldest?",
  imgSrc : "assets/images/arnold_S.jpg",
  imgSrc1 : "assets/images/syl_S.jpg",
  option1 : "Arnold Schwarzenegger",
  option2 : "Sylvester Stallone",
  correct : "option2"
},
{
  question : "Who is the oldest?",
  imgSrc : "assets/images/arnold_S.jpg",
  imgSrc1 : "assets/images/syl_S.jpg",
  option1 : "Arnold Schwarzenegger",
  option2 : "Sylvester Stallone",
  correct : "option2"
},
{
  question : "Who is the oldest?",
  imgSrc : "assets/images/arnold_S.jpg",
  imgSrc1 : "assets/images/syl_S.jpg",
  option1 : "Arnold Schwarzenegger",
  option2 : "Sylvester Stallone",
  correct : "option2"
},
{
  question : "Who is the oldest?",
  imgSrc : "assets/images/arnold_S.jpg",
  imgSrc1 : "assets/images/syl_S.jpg",
  option1 : "Arnold Schwarzenegger",
  option2 : "Sylvester Stallone",
  correct : "option2"
},
{
  question : "Who is the oldest?",
  imgSrc : "assets/images/arnold_S.jpg",
  imgSrc1 : "assets/images/syl_S.jpg",
  option1 : "Arnold Schwarzenegger",
  option2 : "Sylvester Stallone",
  correct : "option2"
}
];

let lastQ = questions.length - 1;
let currentQ = 0;
let count = 0;
const qTime = 15; // 10s
const timeLeft = 150; // 150px
const timeUnit = timeLeft / qTime;
let TIMER;
let score = 0;

function makeQuestion() {
  let ques = questions[currentQ];
  question.innerHTML = "<p>"+ ques.question +"</p>";
  qImg.innerHTML = "<img src="+ ques.imgSrc +">";
  qImg1.innerHTML = "<img src="+ ques.imgSrc1 +">";
  option1.innerHTML = ques.option1;
  option2.innerHTML = ques.option2;
}

//option1.addEventListener("click",checkAnswer('option1'));
//option2.addEventListener("click",checkAnswer('option2'));

function checkAnswer(answer) {
  if (answer == questions[currentQ].correct){
    score++;
    ansCorrect();
  }else{
    ansWrong();
  }
  count = 0;
  if(currentQ < lastQ){
    currentQ++;
    makeQuestion();
  }else{
    clearInterval(TIMER)

  }

}

// answer is correct
function ansCorrect(){
  //document.getElementById(currentQ).style.backgroundColor = "green";
}

// answer is Wrong
function ansWrong(){
  //document.getElementById(currentQ).style.backgroundColor = "green";
}



playB.onclick = function() {
  modal.style.display = "none";
  rulesPage.style.display = "none";
  gameTitle.style.display = "none";
  makeQuestion();
  makeTimer();
  TIMER = setInterval(makeTimer,1000); // 1000ms = 1s
}

const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");

function makeTimer(){
  if(count <= qTime){
      counter.innerHTML = count;
      timeGauge.style.width = count * timeUnit + "px";
      count++
  }else{
      count = 0;
      // change progress color to red
      ansWrong();
      if(currentQ < lastQ){
          currentQ++;
          makeQuestion();
      }else{
          // end the quiz and show the score
          clearInterval(TIMER);
          //scoreRender();
      }
  }
}
