const leia = require("readline-sync")

let num1 = leia.questionFloat("Digite o 1 numero: ")
let num2 = leia.questionFloat("Digite o 2 numero: ")
let codigo = leia.questionInt("Operacao: ")

switch (codigo) {
    case 1:
        console.log(`\n${num1} + ${num2} = ${(num1 + num2).toFixed(1)}`)
        break;
    case 2:
        console.log(`\n${num1} - ${num2} = ${(num1 - num2).toFixed(1)}`)
        break;
    case 3:
        console.log(`\n${num1} * ${num2} = ${(num1 * num2).toFixed(1)}`)
        break;
    case 4:
        console.log(`\n${num1} / ${num2} = ${(num1 / num2).toFixed(1)}`)
        break;

    default:
        console.log(`\nOperacao Invalida!`)
        break;
}