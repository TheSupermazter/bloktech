/* OPDRACHT 1 Herdeclaratie */

/* Selecteer regel 5 t/m 8. Met de toetscombinatie [CMD] + [/] kun je '//' voor de regel weghalen en terugplaatsen om de opdracht te kunnen maken */

// // Probeer de variabele score opnieuw te declareren en kijk of er fouten optreden
// let score = 16;
// score = 18;
// // Plaats hier de juiste declaratie
// console.log(score); 

// als je niet nog een keer let gebruikt, doet hij het gewoon, als je 2x let score gebruikt doet hij het niet. je kan de variabele dus wel veranderen
// maar niet 2x dezelfde variabele aanmaken



/* OPDRACHT 2 Hertoekennen van een constante */

// const PI = 3.14;
// // Probeer hier een nieuwe waarde aan de constante toe te kennen
// // PI = 3.18;
// console.log(PI); // Wat wordt hier uitgevoerd?

// een nieuwe waarde aan een const toevoegen kan niet, deze blijft altijd hetzelfde. 



/* OPDRACHT 3 Function scope */

// Gebruik let en const in plaats van var. Wat is het gevolg voor de uitvoer?


// function exampleScope() {
//     let x;
//     if (true) {
//         let x = 10;
//     }
//     console.log(x);
// }

// exampleScope()

// let en const worden alleen maar gelezen door het stukje waar ze in staan (tussen de haakjes) dus hier alleen binnen de if statement. de console log kan
// hem dus niet opvragen. Door de variabele aan te maken buiten de if statement lukt het wel.



/* Opdracht 4 Hoisting van variabele */

// 1. Wat wordt er gelogd en waarom? Test dit.
// var z = 15;
// console.log(z);


// 2. Plaats de definitie boven de console.log. Wat is de uitvoer nu?

// Nu klopt ie wel, je kan pas iets loggen als je het weet.



/* Opdracht 5a Hoisting van functie declaratie */

// // Wat wordt er gelogd en waarom?
// hoistingVoorbeeld()

// function hoistingVoorbeeld() {
//     console.log("Dit is een voorbeeld van hoisting bij functies!")
// }

// // gewoon wat er in de console log al stond.



// /* Opdracht 5b Hoisting van functie definitie */ 

// // Bekijk onderstaande code. Wat verwacht je dat er zal gebeuren?



// var hoistingVoorbeeldTwee = function() {
//     console.log("Dit is een voorbeeld van hoisting met een functie-definitie!")
// }

// hoistingVoorbeeldTwee()

// Plaats het aanroepen van de functie onder de definitie. Wat wordt de uitvoer? Voorspel en test. 


/* Opdracht 6 Global en local scope */

// Global scope
var globalVar = "Dit is een globale variabele (var)";
let globalLet = "Dit is een globale variabele (let)";
const globalConst = "Dit is een globale variabele (const)";

function voorbeeldScope() {
    // Local scope
    var localVar = "Dit is een lokale variabele (var)";
    let localLet = "Dit is een lokale variabele (let)";
    const localConst = "Dit is een lokale variabele (const)";

    console.log("In de lokale scope:");
    console.log(localVar); // Werkt
    console.log(localLet); // Werkt
    console.log(localConst); // Werkt

    console.log("In de globale scope (toegankelijk vanuit de lokale scope):");
    console.log(globalVar); // Werkt
    console.log(globalLet); // Werkt
    console.log(globalConst); // Werkt
}

// Probeer toegang te krijgen tot lokale variabelen buiten hun scope
// console.log(localVar); // Dit zou een fout veroorzaken
// console.log(localLet); // Dit zou een fout veroorzaken
// console.log(localConst); // Dit zou een fout veroorzaken

// De globale variabelen zijn beschikbaar in de globale scope
console.log("In de globale scope:");
console.log(globalVar); // Werkt
console.log(globalLet); // Werkt
console.log(globalConst); // Werkt

voorbeeldScope(); // Roep de functie aan om de lokale scope te betreden








