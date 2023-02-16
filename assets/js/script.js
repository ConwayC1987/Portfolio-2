// Function for hiding som page content after being clicked. //
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
  document.getElementById("prize").innerHTML = "1st person at the table with all question correct gets a free drink";
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
let qImg = document.getElementById("qImg");
let qImg1 = document.getElementById("qImg1");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");



playB.onclick = function() {
  

}