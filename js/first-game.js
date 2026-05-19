const img = document.querySelector("#img1");
const counterEl = document.querySelector("#counter");
const timerEl = document.querySelector("#timer");
const result = document.querySelector("#result");
const resultText = document.querySelector("#resultText");
const roosterSound = document.querySelector("#roosterSound");
const tryAgain1 = document.querySelector("#tryAgain1");
const nextLevel = document.querySelector("#nextLevel");
let count = 0;
let timeLeft = 10;
let gameStarted = false;
let timerInterval = null;
img.addEventListener("click", function () {
  if (!gameStarted) {
    gameStarted = true;
    timerInterval = setInterval(() => {
      timeLeft--;
      timerEl.textContent = timeLeft;

      if (timeLeft <= 0) {
        clearInterval(timerInterval);

        if (count >= 40) {
          resultText.innerHTML = `WIN! <br>
            Your score: ${count} <br>
            You unlocked level 2!`;
          nextLevel.classList.remove("hidden");
        } else {
          resultText.innerHTML = `You need 40 clicks! <br>
            Your score: ${count}`;
        }
        result.classList.remove("hidden");
        result.classList.add("show");
        tryAgain1.classList.remove("hidden");
      }
    }, 1000);
  }
  if (timeLeft <= 0) return;
  count++;
  counterEl.textContent = count;

  roosterSound.currentTime = 0;
  roosterSound.play();

  img.classList.add("pulse");

  setTimeout(() => {
    img.classList.remove("pulse");
  }, 200);
});

tryAgain1.addEventListener("click", function () {
  count = 0;
  timeLeft = 10;
  gameStarted = false;

  counterEl.textContent = 0;
  timerEl.textContent = 10;

  result.classList.remove("show");
  result.classList.add("hidden");

  tryAgain1.classList.add("hidden");
  nextLevel.classList.add("hidden");
});
