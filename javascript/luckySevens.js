//document.getElementById("money").innerHTML = "";
function diceRoll() {
   die1 = Math.floor(Math.random() * 6) +1;
  die2 = Math.floor(Math.random() * 6) +1;
    return die1 + die2;
  }

function play() {
  var initialBet = Number(document.getElementById("bet").value);
  var rollCount = 0;
  var bank = initialBet;
  var greatestWin = initialBet;
  var bigMoneyRoll = 0;
  if (initialBet =="" || initialBet <= 0) {
    //document.getElementById("error").style.display = "block";
    //document.getElementById("error").innerHTML = "*Please complete this field.";
  }
  //document.getElementById("money").innerHTML = "";
  //document.getElementById("startingBet").innerHTML = "";

  while(bank > 0){
    diceRoll();
      //code that rolls dice with random and addition
    if (diceRoll() == 7){
      bank += 4;
      console.log("success: $" + bank);
      if (greatestWin < bank ) {
        greatestWin = bank;
        bigMoneyRoll = rollCount;
        //checking what the highest money is
      }
    }
    else {
      bank --;
    }
  rollCount++;
  }
  document.getElementById("results").style.display = "block";
  document.getElementById("startingBet").innerHTML = "$"+initialBet;
  document.getElementById("totalRolls").innerHTML = "#"+rollCount;
  document.getElementById("biggestBank").innerHTML = "$" +greatestWin;
  document.getElementById("greatestRoll").innerHTML = "#"+bigMoneyRoll;
  //document.getElementById("inv").innerHTML = "";
  //document.getElementById("tables").innerHTML = "No even numbers to display.";
console.log("Total rolls : " + rollCount);
console.log("Roll at highest win: " + bigMoneyRoll);
}

  /* As long as there is money, play the game.

Each round, the program rolls a virtual pair of dice for the user.

If the sum of the 2 dice is equal to 7, the player wins $4.
Otherwise, the player loses $1.


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

  }*/
