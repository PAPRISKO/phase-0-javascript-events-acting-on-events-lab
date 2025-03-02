const dodger = document.getElementById("dodger");

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (event.key === "ArrowRight") {
    moveDodgerRight();
  }
});

function moveDodgerLeft() {
  const left = parseInt(dodger.style.left, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  const left = parseInt(dodger.style.left, 10);

  if (left < 360) {
    dodger.style.left = `${left + 1}px`;
  }
}
