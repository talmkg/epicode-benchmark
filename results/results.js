//laying out how scores will be calculated

//made up value for now
let score = 4;
//max Points would also need to be grabbed from questions JS if the questions were to ever increase
const maxPoints = 6;

const percentCorrect = parseFloat((score / maxPoints) * 100);
const percentWrong = parseFloat(100 - percentCorrect);

console.log(percentCorrect);
//choosing elements to work with
const circle = document.getElementById("circle");
const inputCorrect = document.getElementById("inputCorrect");
const inputWrong = document.getElementById("inputWrong");

//this code displays the dynamic value of the correct percentage
inputCorrect.value = percentCorrect.toFixed(2);

//this code displays the dynamic value of the wrong percentatge
inputWrong.value = percentWrong.toFixed(2);

//this piece of code adds the calculation to the screen in the form of a pie chart
circle.style.backgroundImage = `conic-gradient(#00ffff ${percentCorrect}%, #c2128d ${percentCorrect}%)`;
