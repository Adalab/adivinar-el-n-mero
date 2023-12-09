const bodyNumber = document.querySelector(".js_number_holder");
const button = document.querySelector(".js_button");
const clue = document.querySelector(".js_clue");
let tries = 0;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const randomNumber = getRandomNumber(100);

function comprobarNumero(event) {
  console.log("hola");
  const parsedNumber = parseInt(bodyNumber.value);

  if (parsedNumber >= 1 && parsedNumber <= 100) {
    if (parsedNumber > randomNumber) {
      clue.innerHTML = "Pista: Demasiado alto.";
      tries++;
    } else if (parsedNumber < randomNumber) {
      clue.innerHTML = "Pista: Demasiado bajo.";
      tries++;
    } else {
      clue.innerHTML = "¡Has ganado campeona!!!";
    }
  } else {
    alert("El número debe estar entre 1 y 100");
  }
  const tryHolder = document.querySelector(".js_try");
  tryHolder.innerHTML = "Número de intentos: " + tries;
}

button.addEventListener("click", comprobarNumero);
