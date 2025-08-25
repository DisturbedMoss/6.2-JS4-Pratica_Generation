const leia = require("readline-sync")

let nome = leia.question("Digite o Nome do doador: ")

let idade = leia.questionInt("Digite a Idade do doador: ")

let primeiradoacao = leia.keyInYNStrict("Primeira doacao de sangue? ")

if(idade >= 18 && idade < 60){
    console.log(`\n${nome} está apto para doar sangue!`)

}else if(idade >= 60 && idade <= 69){

    if(primeiradoacao == false) console.log(`\n${nome} está apto para doar sangue!`)
        else console.log(`\n${nome} não está apto para doar sangue!`)

}else console.log(`\n${nome} não está apto para doar sangue!`)
