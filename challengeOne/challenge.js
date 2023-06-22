/* solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.
*/

let firstNumber = prompt(`Digite o primeiro numero`)
let secondNumber = prompt(`Digite o segundo numero`)

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const mult = firstNumber * secondNumber
const div = firstNumber / secondNumber
const rest = firstNumber % secondNumber

alert(`O resultado da soma dos dois numeros e: ` + sum)
alert(`O resultado da subtracao dos dois numeros e: ` + sub)
alert(`O resultado da multiplicacao dos dois numeros e: ` + mult)
alert(`O resultado da divisao dos dois numeros e: ` + div.toFixed(2))
alert(`O resto da divisao dos dois numeros e: ` + rest)

if(rest % 2 == 0) {
    alert(`A soma da divisao dos dois numeros e par`)

} else {
alert(`A soma da divisao dos dois numeros e impar`)
}

if(firstNumber == secondNumber) {
    alert(`Os dois numeros inseridos sao iguais`)

} else {
alert(`Os dois numeros inseridos sao diferentes`)
}