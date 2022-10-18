const input = document.getElementById("promise");
const button = document.getElementById("proceed");

const addBoxShadow = (event) => {
  console.log("pushed");
  button.classList.toggle("glow");
};
input.addEventListener("click", addBoxShadow);

//want to stop user from moving on without checking the box.
const isChecked = (event) => {
  if (input.checked === false) {
    event.preventDefault();
    alert("please check the box");
  }
};

button.addEventListener("click", isChecked);
