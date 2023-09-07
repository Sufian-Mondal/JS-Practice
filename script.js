// gussing game

// var numberOfWins = 0;
// var numberOfLosts = 0;

// for (i = 1; i <= 10; i++) {
//   var guessNumber = parseInt(prompt("Enter a random number from 1 to 10 : "));
//   var randomNumber = Math.floor(Math.random() * 10) + 1;

//   if (guessNumber == randomNumber) {
//     console.log("You have won");
//     numberOfWins++;
//   } else {
//     console.log("You have lost. Random number was" + randomNumber);
//     numberOfLosts++;
//   }
// }

// document.write("Total number of wins = " + numberOfWins + "<br>");
// document.write("Total number of Losts = " + numberOfLosts);

// var myHeading = document.getElementById("heading1");
// myHeading.innerHTML = "Hello, I am sufian";

// var myHeading2 = document.getElementById("heading2");
// myHeading2.innerHTML = "Goodbye goodbye";

// var myPera = document.getElementById("pera1");
// myPera.innerHTML = "Today is thursday";

// var photos = [
//   "images/sufian-1.png",
//   "images/sufian-2.png",
//   "images/sufian-3.png",
// ];

// var imgTag = document.querySelector("img");

// var count = 0;

// function next() {
//   count++;

//   if (count >= photos.length) {
//     count = 0;
//     imgTag.src = photos[count];
//   } else {
//     imgTag.src = photos[count];
//   }
// }

// function prev() {
//   count--;

//   if (count < 0) {
//     count = photos.length - 1;
//     imgTag.src = photos[count];
//   } else {
//     imgTag.src = photos[count];
//   }
// }

//changing style dynamically

// var myVar = document.querySelector("#paraId");

// function addStyle() {
//   myVar.classList.add("para-style");
// }

// function removeStyle() {
//   myVar.classList.remove("para-style");
// }

//addEventListner// announimous function

var myStyle = document.querySelector("h1");

myStyle.addEventListener("mouseover", function () {
  myStyle.classList.add("country-style");
});

myStyle.addEventListener("mouseout", function () {
  myStyle.classList.remove("country-style");
});
