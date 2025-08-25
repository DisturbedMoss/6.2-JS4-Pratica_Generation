const leia = require("readline-sync")

let A, B, C;

A = leia.questionInt("Digite o numero A: ")
B = leia.questionInt("Digite o numero B: ")
C = leia.questionInt("Digite o numero C: ")

if(A + B > C) console.log(`\n${A} + ${B} = ${A + B} > ${C}\nA Soma de A + B é Maior do que C`)

else if(A + B < C) console.log(`\n${A} + ${B} = ${A + B} < ${C}\nA Soma de A + B é Menor do que C`)

else if(A + B == C) console.log(`\n${A} + ${B} = ${A + B} = ${C}\nA Soma de A + B é Igual do que C`)