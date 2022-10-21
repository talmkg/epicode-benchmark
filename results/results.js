/*This page is ready to receive values from the questions page. 
The only values that this page needs to function are the score and the maxPoints.
These values must be integers.*/

//laying out how scores will be calculated

//made up value for now

//max Points would also need to be grabbed from questions JS ------------- DONE
const maxPoints = MAX_QUESTIONS;

const percentCorrect = parseFloat((score / maxPoints) * 100);
const percentWrong = parseFloat(100 - percentCorrect);

console.log(percentCorrect);
//choosing elements to work with
const circle = document.getElementById("circle");
const inputCorrect = document.getElementById("inputCorrect");
const inputWrong = document.getElementById("inputWrong");

//this code displays the dynamic value of the correct percentage
inputCorrect.value = percentCorrect.toFixed(1);

//this code displays the dynamic value of the wrong percentatge
inputWrong.value = percentWrong.toFixed(1);

//this piece of code adds the calculation to the screen in the form of a pie chart
circle.style.backgroundImage = `conic-gradient(#00ffff ${percentCorrect}%, #c2128d ${percentCorrect}%)`;

// calculating number of questions

const numOfQuestions = maxPoints;
const numOfCorrect = score;
const numOfWrong = maxPoints - score;
const words = " questions";
// checking what I wrote... it works!!!
console.log(`${numOfWrong} " out of " ${numOfQuestions}`);
// Now I need the page to display these in the correct place
const displayRight = document.getElementById("theseAreright");
const displayWrong = document.getElementById("theseAreWrong");

displayRight.innerText = `${numOfCorrect}/${numOfQuestions} ${words}`;
displayWrong.innerText = `${numOfWrong}/${numOfQuestions} ${words}`;
