const stars = document.querySelectorAll(".ratings_stars");

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("ratings_stars")) {
    let isClickTargetReached = false;
    for (const star of stars) {
      star.classList[isClickTargetReached ? "remove" : "add"]("selected");
      if (star === e.target) {
        isClickTargetReached = true;
      }
    }
  }
});
