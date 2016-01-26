
//Question 1
//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
//Find the sum of all the multiples of 3 or 5 below 1000.
var answer1 = 0;

var answer1Showing = false;

var toggleAnswer = function() {
  if (answer1Showing === false) {
    document.getElementById("answer1").style.display="initial";
    document.getElementById("button1").innerText="Hide Answer";
    answer1Showing = true;
  } else {
    document.getElementById("answer1").style.display="none";
    document.getElementById("button1").innerText="Show Answer";
    answer1Showing = false;
  }
};

for (var i =0; i <1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    answer1 += i;
  }
}

document.getElementById("answer1").innerText = answer1;

document.getElementById("answer1").style.display="none";

document.getElementById("button1").addEventListener("click", toggleAnswer);

