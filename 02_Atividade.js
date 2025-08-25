const leia = require("readline-sync")

let numero = leia.questionInt("Digite um numero: ")

if(numero%2 == 0){
    if(numero >= 0) console.log(`\nO Número ${numero} é par e positivo!`)
    else console.log(`\nO Número ${numero} é par e negativo!`)
} 
else{
    if(numero >= 0) console.log(`\nO Número ${numero} é ímpar e positivo!`)
    else console.log(`\nO Número ${numero} é ímpar e negativo!`)
}