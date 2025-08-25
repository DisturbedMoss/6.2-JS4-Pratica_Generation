const leia = require("readline-sync")

let codigo, reajuste, nome, salario;

nome = leia.question("Nome do colaborador: ")
codigo = leia.questionInt("Cargo: ")
salario = leia.questionFloat("Salario: ")

switch (codigo){
    case 1:
        reajuste = 0.1
        cargo = "Gerente"
        console.log(`\nNome do colaborador: ${nome}\nCargo: ${cargo}\nSalário: R$ ${(salario + (reajuste * salario)).toFixed(2)}`)
        break;
    case 2:
        reajuste = 0.07
        cargo = "Vendedor"
        console.log(`\nNome do colaborador: ${nome}\nCargo: ${cargo}\nSalário: R$ ${(salario + (reajuste * salario)).toFixed(2)}`)
        break;
    case 3:
        reajuste = 0.09
        cargo = "Supervisor"
        console.log(`\nNome do colaborador: ${nome}\nCargo: ${cargo}\nSalário: R$ ${(salario + (reajuste * salario)).toFixed(2)}`)
        break;
    case 4:
        reajuste = 0.06
        cargo = "Motorista"
        console.log(`\nNome do colaborador: ${nome}\nCargo: ${cargo}\nSalário: R$ ${(salario + (reajuste * salario)).toFixed(2)}`)
        break;
    case 5:
        reajuste = 0.05
        cargo = "Estoquista"
        console.log(`\nNome do colaborador: ${nome}\nCargo: ${cargo}\nSalário: R$ ${(salario + (reajuste * salario)).toFixed(2)}`)
        break;
    case 6:
        reajuste = 0.08
        cargo = "Técnico de TI"
        console.log(`\nNome do colaborador: ${nome}\nCargo: ${cargo}\nSalário: R$ ${(salario + (reajuste * salario)).toFixed(2)}`)
        break;
}