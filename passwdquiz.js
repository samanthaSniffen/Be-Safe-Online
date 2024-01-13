/*Add your JavaScript here*/

var yesScore = 0; // Store the strong score
var noScore = 0; // Store the weak score

var questionCount = 0; // Store the number of answers clicked on

// Store HTML elements using the DOM
var result = document.getElementById("result");

var restart = document.getElementById("restart");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

// Listen for click on answer buttons and call function if clicked
q1a1.addEventListener("click", yes);
q1a2.addEventListener("click", no);

q2a1.addEventListener("click", yes);
q2a2.addEventListener("click", no);

q3a1.addEventListener("click", yes);
q3a2.addEventListener("click", no);

//disable buttons
q1a1.addEventListener("click", disQ1);
q1a2.addEventListener("click", disQ1);
q2a1.addEventListener("click", disQ2);
q2a2.addEventListener("click", disQ2);
q3a1.addEventListener("click", disQ3);
q3a2.addEventListener("click", disQ3);

//disable functions
function disQ1() {
	q1a1.disabled = true;
	q1a2.disabled = true;
}
function disQ2() {
	q2a1.disabled = true;
	q2a2.disabled = true;
}
function disQ3() {
	q3a1.disabled = true;
	q3a2.disabled = true;
}

  //redo disable functions
function enableQ() {
	q1a1.disabled = false;
	q1a2.disabled = false;
  q2a1.disabled = false;
	q2a2.disabled = false;
  q3a1.disabled = false;
	q3a2.disabled = false;
}

// Listen for click on restart button and call function if clicked
restart.addEventListener("click", restartQuiz);

// Track dog score and check if quiz is complete
function yes() {
  yesScore += 1; 
  questionCount += 1;

  console.log("questionCount = " + questionCount + "\t" + "yesScore = " + yesScore);

  if (questionCount == 3) {
    console.log("The quiz is done!")
    updateResult();
  }

}

// Track cat score and check if quiz is complete
function no() {
  noScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + "\t" + "noScore = " + noScore);

  if (questionCount == 3) {
    console.log("The quiz is done!")
    updateResult();
  }

}

// Update quiz result
function updateResult() {
  if (yesScore >= 2) {
    result.innerHTML = "Your password is Strong!";
    console.log("Your password is strong")
  } else if (noScore >= 2) {
    result.innerHTML = "Your password is very weak!";
    console.log("Your password is very weak!")
  }
}

// Restart quiz
function restartQuiz() {
  result.innerHTML = "Your password is...";
  questionCount = 0;
  yesScore = 0;
  noScore = 0;
  console.log("questionCount = " + questionCount + "\t" + "noScore = " + noScore + "\t" + "yesScore = " + yesScore);
  enableQ();
  	
	q1a1.style.background = '#93cbe5';
	q1a2.style.background = '#93cbe5';
  q2a1.style.background = '#93cbe5';
	q2a2.style.background = '#93cbe5';
  q3a1.style.background = '#93cbe5';
	q3a2.style.background = '#93cbe5';
}
