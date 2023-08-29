// gussing game

var numberOfWins = 0;
var numberOfLosts = 0;

for (i = 1; i <= 10; i++) {
  var guessNumber = parseInt(prompt("Enter a random number from 1 to 10 : "));
  var randomNumber = Math.floor(Math.random() * 10) + 1;

  if (guessNumber == randomNumber) {
    console.log("You have won");
    numberOfWins++;
  } else {
    console.log("You have lost. Random number was" + randomNumber);
    numberOfLosts++;
  }
}

document.write("Total number of wins = " + numberOfWins + "<br>");
document.write("Total number of Losts = " + numberOfLosts);
