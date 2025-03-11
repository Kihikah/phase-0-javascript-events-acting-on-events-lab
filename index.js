const dodger = document.getElementById("dodger");
const game = document.getElementById("game");

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 4}px`; // Increased step size for better movement
  }
}

function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);
  const gameWidth = game.offsetWidth;
  const dodgerWidth = dodger.offsetWidth;

  if (left + dodgerWidth < gameWidth) { // Ensuring dodger doesn't go beyond boundary
    dodger.style.left = `${left + 4}px`; // Increased step size for better movement
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (event.key === "ArrowRight") {
    moveDodgerRight();
  }
});
