//if true, we're tracking the mouse.
var tracking = false;
//grab DOM reference to be used in all functions.
var mouseX = document.getElementById("mouseX");
var mouseY = document.getElementById("mouseY");

function toggle() {
  //"this" here is the html element that triggered the event.
  //When we're done it'll be btnToggle.
  //classList is an array-like collection of Css class names:
  // (https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
  // It allows us to treat class names individually
  // instead of setting all classes at once:
  // element.className = "btn btn-default btn-lrg"

if (tracking) {
  this.classList.remove("btn-danger");
  this.classList.add("btn-success");
  this.innerText = "Start mouse tracking.";
  mouseX.innerText = "Untracked";
  mouseY.innerText = "Untracked";
} else{
  this.classList.remove("btn-success");
  this.classList.add("btn-danger");
  this.innerText = "Stop mouse tracking.";
}
tracking = !tracking;
}
function updateMousePosition(evt) {
  if (tracking) {
    mouseX.innerText = evt.clientX;
    mouseY.innerText = evt.clientY;
  }
}
document.getElementById("btnToggle").addEventListener("click", toggle);
document.addEventListener("mousemove", updateMousePosition);
