const display = document.getElementById("display");
const buttons = document.querySelectorAll(".key");
let n1 = 0;
let n2 = 0;
let operator = "";
let result = 0;
let isOperator = false;
let isDot = false;

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let key = e.target.innerText;
    if (key >= "0" && key <= "9") {
      if (isOperator) {
        display.value = key;
        isOperator = false;
      } else {
        if (display.value === "0") {
          display.value = key;
        } else {
          display.value += key;
        }
      }
    }

    if (key === "+" || key === "-" || key === "x" || key === "/") {
      if (isOperator) {
        isOperator = false;
      } else {
        n1 = Number(display.value);
        operator = key;
        isOperator = true;
      }
    }

    if (key === "C") {
      display.value = "0";
      isOperator = false;
      isDot = false;
      n1 = 0;
      n2 = 0;
      operator = "";
    }

    if (key === "x²") {
      display.value = Math.pow(display.value, 2);
    }

    if (key === "√") {
      display.value = Math.sqrt(display.value);
    }

    if (key === ".") {
      if (!isDot) {
        display.value += key;
        isDot = true;
      }
    }

    if (key === "=") {
      n2 = Number(display.value);
      if (operator === "+") {
        result = n1 + n2;
      } else if (operator === "-") {
        result = n1 - n2;
      } else if (operator === "x") {
        result = n1 * n2;
      } else if (operator === "/") {
        result = n1 / n2;
      }
      display.value = result;
      isOperator = false;
      isDot = false;
      n1 = 0;
      n2 = 0;
      operator = "";
    }
  });
});
