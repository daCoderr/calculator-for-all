// variables
const inputNumber = document.querySelector("#inputNumber");
const plus = document.querySelector(".add");
const minus = document.querySelector(".minus");
const divide = document.querySelector(".divide");
const multiply = document.querySelector(".multiply");
const resultInput = document.querySelector("#resultInput");
let originalNumber = 0;
let finalResult = 0;
let inputValue;

//logic

inputNumber.addEventListener("click", (e) => {
  e.preventDefault();
  inputNumber.placeholder = "";
});
plus.addEventListener("click", () => {
  inputValue = +inputNumber.value;
  finalResult = originalNumber += inputValue;
  resultInput.placeholder = finalResult;
  inputNumber.value = "";
});

minus.addEventListener("click", () => {
  inputValue = +inputNumber.value;
  finalResult = originalNumber -= inputValue;
  resultInput.placeholder = finalResult;
  inputNumber.value = "";
});
divide.addEventListener("click", () => {
  inputValue = +inputNumber.value;
  finalResult = originalNumber /= inputValue;
  resultInput.placeholder = finalResult;
  inputNumber.value = "";
});
multiply.addEventListener("click", () => {
  inputValue = +inputNumber.value;
  finalResult = originalNumber *= inputValue;
  resultInput.placeholder = finalResult;
  inputNumber.value = "";
});
