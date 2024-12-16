const buttons = document.querySelectorAll(
  ".calculator__button, .calculator__action"
);
const buttonClear = document.querySelector(".calculator__clear");
const display = document.querySelector(".calculator__display");
const buttonResult = document.querySelector(".calculator__value");
let currentInput = ""; // Текущее введённое выражение
let result = "";
const operation = ["+", "-", "*", "/"];
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (result === "") {
      const value = button.innerHTML;
      if (
        (currentInput === "" && operation.includes(value)) ||
        (operation.includes(currentInput.at(-1)) && operation.includes(value))
      ) {
        return;
      } else {
        currentInput += value;
        display.innerHTML = currentInput;
      }
      buttonResult.addEventListener("click", () => {
        result = eval(currentInput).toString();
        display.innerHTML = result;
      });
    }
  });
});
buttonClear.addEventListener("click", () => {
  currentInput = "";
  result = "";
  display.innerHTML = result;
});
