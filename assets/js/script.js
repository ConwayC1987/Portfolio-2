const element = document.getElementById("begin");
element.addEventListener("click", hidePage);

function hidePage() {
  document.getElementById("landingPage").style.display="none";
}