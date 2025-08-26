const leia = require("readline-sync")

let codigo = leia.questionInt("Operacao: ")
let saldo = 1000.00, saque, novoSaldo = 0;

switch (codigo) {
    case 1:
        console.log(`\nOperacao - Saldo\nSaldo: ${
                            new Intl.NumberFormat('pr-BR', {
                            style: 'currency',
                            currency: 'BRL',
                        }).format(saldo)
            }`)
        break;
    case 2:
        saque = leia.questionFloat("Valor: R$ ")

        if(saldo >= saque){
            saldo = saldo - saque;

            console.log(`\nOperacao - Saque\nNovo Saldo: ${
                            new Intl.NumberFormat('pr-BR', {
                            style: 'currency',
                            currency: 'BRL',
                        }).format(saldo)
                }`)
        }else{
            console.log(`\nOperacao - Saque\nSaldo Insuficiente!`)
        }
        break;
    case 3:
        novoSaldo = leia.questionFloat("Valor: R$ ")
        
        novoSaldo = saldo + novoSaldo;

        console.log(`\nOperacao - Deposito\nSaldo: ${
                            new Intl.NumberFormat('pr-BR', {
                            style: 'currency',
                            currency: 'BRL',
                        }).format(novoSaldo)
            }`)
        break;
    default:
        console.log(`\nOperacao Inválida!`)
        break;
}