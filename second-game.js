const img2 = document.querySelector("#img2");
const secondTimer = document.querySelector("#secondTimer");
const secondCounter = document.querySelector("#seconCounter");
const roosterSound2 = document.querySelector("#roosterSound2");
const secondResult = document.querySelector("#secondResult");
const secondResultText = document.querySelector("#secondResultText");
const restartGame2 = document.querySelector("#restartGame2");
const watchVideo = document.querySelector("#watchVideo");
const videoContainer = document.querySelector("#videoContainer");
let secondCount = 0;
let secondTimeLeft = 10;
let secondStarted = false;
let secondInterval = null;
nextLevel.addEventListener("click", function () {
  result.classList.remove("show");
  result.classList.add("hidden");

  tryAgain1.classList.add("hidden");
  nextLevel.classList.add("hidden");

  firstGame.style.display = "none";
  secondGame.style.display = "block";
});
img2.addEventListener("click", function () {
  if (!secondStarted) {
    secondStarted = true;

    img2.classList.add("move");

    secondInterval = setInterval(() => {
      secondTimeLeft--;

      secondTimer.textContent = secondTimeLeft;

      if (secondTimeLeft <= 0) {
        clearInterval(secondInterval);

        img2.classList.remove("move");
        secondResult.classList.remove("hidden");
        secondResult.classList.add("show");

        restartGame2.classList.remove("hidden");

        if (secondCount >= 12) {
          secondResultText.innerHTML = `YOU WIN! <br>
            Your score: ${secondCount}`;
          watchVideo.classList.remove("hidden");
        } else {
          secondResultText.innerHTML = `You need 12 clicks! <br>
            Your score: ${secondCount}`;
        }
      }
    }, 1000);
  }

  if (secondTimeLeft <= 0) return;

  secondCount++;

  secondCounter.textContent = secondCount;

  roosterSound2.currentTime = 0;
  roosterSound2.play();
});

restartGame2.addEventListener("click", function () {
  secondCount = 0;
  secondTimeLeft = 10;
  secondStarted = false;

  secondCounter.textContent = 0;
  secondTimer.textContent = 10;

  secondResult.classList.remove("show");
  secondResult.classList.add("hidden");

  restartGame2.classList.add("hidden");
  watchVideo.classList.add("hidden");
});

watchVideo.addEventListener("click", function () {
  secondGame.style.display = "none";

  secondResult.classList.remove("show");
  secondResult.classList.add("hidden");

  videoContainer.classList.remove("hidden");
});
