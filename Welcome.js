const input = document.getElementById("promise");
const button = document.getElementById("proceed");

const addBoxShadow = (event) => {
  console.log("pushed");
  button.classList.toggle("glow");
};
input.addEventListener("click", addBoxShadow);
