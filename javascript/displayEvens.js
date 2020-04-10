
var evenNumbers = [];
function calculate() {
  evenNumbers.length = 0;
  document.getElementById("inv").innerHTML = "";
  document.getElementById("tables").innerHTML = "";


  var num1 =
  Number(document.getElementById("first-number").value);
  var num2 =
  Number(document.getElementById("second-number").value);
  var step =
  Number(document.getElementById("step").value);
    console.log("num1: " + num1);
    console.log("num2: " + num2);
    console.log("step: " + step);
    document.getElementById("results").style.display = "table";




    for (var counter = num1; counter <= num2; counter += step) {
      if (num1 =="" || num2 == "" || step == "" || isNaN(num1) || isNaN(num2) || isNaN(step) || step <= 0 || num2 < num1 && evenNumbers.length < 1) {
        evenNumbers.push("filler");
        document.getElementById("inv").innerHTML = "*All fields must be completed.<br>*Second Number must be greater than the first number. <br> *Only positive integers are valid.<br> *Please re-enter your numbers.";
        document.getElementById("tables").innerHTML = "";
        console.log("Please re-enter your numbers.");
        return "Please re-enter your numbers.";
        }

      if (counter % 2 === 0) {
      evenNumbers.push(counter);
      document.getElementById("inv").innerHTML = "";
      document.getElementById("tables").innerHTML += counter + "<br />";
      console.log(counter);
      }

    }


  if (evenNumbers.length < 1) {
    document.getElementById("inv").innerHTML = "";
    document.getElementById("tables").innerHTML = "No even numbers to display.";

    }


}
