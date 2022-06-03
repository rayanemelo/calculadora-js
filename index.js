n1 = document.querySelector("#n1");
n2 = document.querySelector("#n2");
op = document.querySelector("#op");

switch (op) {
  case "+":
    soma(n1, n2);
    break;
  case "-":
    subt(n1, n2);
    break;
  case "/":
    divisao(n1, n2);
  case "*":
    mult(n1, n2);
  case "^2":
    potencia(n1, n2);
  case "√":
    raiz(n1);
}

const soma = (n1, n2) => {
  return n1 + n2;
};

const subt = (n1, n2) => {
  return n1 - n2;
};

const divisao = (n1, n2) => {
  return n1 / n2;
};

const mult = (n1, n2) => {
  return n1 * n2;
};

const potencia = (n1, n2) => {
  return Math.pow(n1, 2);
};

const raiz = (n1) => {
  return Math.sqrt(n1);
};
