// Challenge 01

let number_1 = Number(prompt("Digite um número?"));
let number_2 = Number(prompt("Digite outro número?"));

let sum, sub, mul, div, res;

sum = number_1 + number_2;
sub = number_1 - number_2;
mul = number_1 * number_2;
div = number_1 / number_2;
res = number_1 % number_2;

alert(`A soma dos 2 números é igual a: ${sum}.`);
alert(`A subtração dos 2 números é igual a: ${sub}.`);
alert(`A multiplicação dos 2 números é igual a: ${mul}.`);
alert(`A divisão dos 2 números é igual a: ${div}.`);
alert(`A o resto da divisão dos 2 números é igual a: ${res}.`);

if (sum % 2 == 0) {
  alert(`A soma dos números retorna um número PAR.`);
} else {
  alert(`A soma dos números retorna um número ÍMPAR.`);
}

if (number_1 === number_2) {
  alert(`Os números digitados são iguais.`);
} else {
  alert(`Os números digitados são diferentes.`);
}
