const logIn = document.querySelector(".logIn");
const register = document.querySelector(".register");
const registerForm = document.querySelector(".registerForm");
const logInForm = document.querySelector(".logInForm");
const logInBtn = document.querySelector(".logInBtn");
const registerBtn = document.querySelector(".registerBtn");
const name = document.querySelector(".name");
const surname = document.querySelector(".surname");
const age = document.querySelector(".age");
const registerEmail = document.querySelector(".registerEmail");
const registerPassword = document.querySelector(".registerPassword");
const logInEmail = document.querySelector(".logInEmail");
const logInPassword = document.querySelector(".logInPassword");
const firstGame = document.querySelector(".firstGame");
const logInBackBtn = document.querySelector(".logInBackBtn");
const registerBackBtn = document.querySelector(".registerBackBtn");
const startBtn = document.querySelector(".startBtn");
const secondGame = document.querySelector(".secondGame");
function hideAll() {
  startBtn.style.display = "none";
  registerForm.style.display = "none";
  logInForm.style.display = "none";
  firstGame.style.display = "none";
  secondGame.style.display = "none;";
}

register.addEventListener("click", function () {
  hideAll();
  registerForm.style.display = "block";
});

registerBtn.addEventListener("click", function () {
  if (
    name.value !== "" &&
    surname.value !== "" &&
    age.value !== "" &&
    registerEmail.value !== "" &&
    registerPassword.value !== ""
  ) {
    localStorage.setItem("name", name.value);
    localStorage.setItem("surname", surname.value);
    localStorage.setItem("age", age.value);
    localStorage.setItem("registerEmail", registerEmail.value);
    localStorage.setItem("registerPassword", registerPassword.value);
    logInForm.style.display = "block";
    registerForm.style.display = "none";
  } else {
    alert("All fields must be filled in!");
  }
});
logIn.addEventListener("click", function () {
  hideAll();
  logInForm.style.display = "block";
});

logInBtn.addEventListener("click", function () {
  let savedEmail = localStorage.getItem("registerEmail");
  let savedPassword = localStorage.getItem("registerPassword");

  if (
    savedEmail === logInEmail.value &&
    savedPassword === logInPassword.value
  ) {
    hideAll();
    firstGame.style.display = "block";
  } else {
    alert("Incorrect email or password");
  }
});
logInBackBtn.addEventListener("click", function () {
  hideAll();
  startBtn.style.display = "flex";
});

registerBackBtn.addEventListener("click", function () {
  hideAll();
  startBtn.style.display = "flex";
});
