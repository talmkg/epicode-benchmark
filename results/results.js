//laying out how scores will be calculated

//made up value for now
let score = 3;
//max Points would also need to be grabbed from questions JS if the questions were to ever increase
const maxPoints = 4;

const percentCorrect = parseFloat((score / maxPoints) * 100);
const percentWrong = parseFloat(100 - percentCorrect);

console.log(percentCorrect);
//choosing elements to work with
const circle = document.getElementById("circle");

//this piece of code adds the calculation to the screen in the form of a pie chart
circle.style.backgroundImage = `conic-gradient(#00ffff ${percentCorrect}%, #c2128d ${percentCorrect}%)`;
