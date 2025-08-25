const leia = require("readline-sync")

let codigo = leia.questionInt("Codigo do Produto: "), preco;
let quantidade = leia.questionInt("Quantidade: ");

switch(codigo) {
    case 1:
        preco = 10
        console.log(`\nProduto: X-Cachorro Quente\nValor total: R$ ${(quantidade * preco).toFixed(2)}`)
        break;
    case 2:
        preco = 15
        console.log(`\nProduto: X-Salada\nValor total: R$ ${(quantidade * preco).toFixed(2)}`)
        break;
    case 3:
        preco = 18
        console.log(`\nProduto: X-Bacon\nValor total: R$ ${(quantidade * preco).toFixed(2)}`)
        break;
    case 4:
        preco = 12
        console.log(`\nProduto: Bauru\nValor total: R$ ${(quantidade * preco).toFixed(2)}`)
        break;
    case 5:
        preco = 8
        console.log(`\nProduto: Refrigerante\nValor total: R$ ${(quantidade * preco).toFixed(2)}`)
        break;
    case 6:
        preco = 13
        console.log(`\nProduto: Suco de laranja\nValor total: R$ ${(quantidade * preco).toFixed(2)}`)
        break;
}