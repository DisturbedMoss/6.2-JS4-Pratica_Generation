const leia = require("readline-sync")

let escolhido = leia.question("Vertebrado ou Invertebrado? ");

if(escolhido == "vertebrado" || escolhido == "Vertebrado"){

    escolhido = leia.question("Ave ou Mamifero? ");
    
    if(escolhido == "Ave" || escolhido == "ave"){

        escolhido = leia.question("Carnivoro ou Onivoro? ");

        if(escolhido == "Carnivoro" || escolhido == "carnivoro") console.log(`\nÁguia`);
        else console.log(`\nPomba`);
        
    }else{

        escolhido = leia.question("Onivoro ou Herbivoro? ");

        if(escolhido == "Onivoro" || escolhido == "onivoro") console.log(`\nHomem`);

        else console.log(`\nVaca`);
    }

} else{
    
    escolhido = leia.question("Inseto ou Anelideo? ");
    
    if(escolhido == "Inseto" || escolhido == "inseto"){

        escolhido = leia.question("Hematofago ou Herbivoro? ");

        if(escolhido == "Hematofago" || escolhido == "hematofago") console.log(`\nPulga`);
        else console.log(`\nLagarta`);
        
    }else{

        escolhido = leia.question("Hematofago ou Herbivoro? ");

        if(escolhido == "Hematofago" || escolhido == "hematofago") console.log(`\nSanguessuga`);

        else console.log(`\nMinhoca`);
    }
}