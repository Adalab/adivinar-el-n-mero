"use strict"

const bodyNumberHolder = document.querySelector(".js_number_holder");
const btn = document.querySelector(".js_button");
const clueNumber = document.querySelector(".js_clue");
const tryHolder = document.querySelector(".js_try");
let tries = 0;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const randomNumber = getRandomNumber(100);

function checkNumber(event) {
  console.log("hola");
  const parsedNumber = parseInt(bodyNumberHolder.value);

  if (parsedNumber >= 1 && parsedNumber <= 100) {
    if (parsedNumber > randomNumber) {
      clueNumber.innerHTML = "Pista: Demasiado alto.";
      tries++;
    } else if (parsedNumber < randomNumber) {
      clueNumber.innerHTML = "Pista: Demasiado bajo.";
      tries++;
    } else {
      clueNumber.innerHTML = "¡Has ganado campeona!";
    }
  } else {
    clueNumber.innerHTML= "El número debe estar entre 1 y 100";
  }
  
  tryHolder.innerHTML = "Número de intentos: " + tries;
}

btn.addEventListener("click", checkNumber);