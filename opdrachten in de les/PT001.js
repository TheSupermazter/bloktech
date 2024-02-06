/* Met de toetscombinatie [CMD] + [/] kun je '//' voor de regel weghalen en terugplaatsen */

/* OPDRACHT 1 Optellen en vergelijken */

// Maak twee variabelen 'getal1' en 'getal2' en wijs er numerieke waarden aan toe.
// Voeg ze samen en sla het resultaat op in een nieuwe variabele 'som'.
// Controleer vervolgens of 'getal1' en 'getal2' aan elkaar gelijk zijn en sla het resultaat op in een variabele 'gelijk'.

let getal1 = 64;
let getal2 = 102;

let som = getal1 + getal2;

let gelijk = getal1 === getal2;

console.log("som: "+som)
console.log("gelijk: "+gelijk)





/* Opdracht 2 String concatenatie */ 

// Maak drie variabelen 'voornaam', 'tussenvoegsel' en 'achternaam'.
// Voeg ze samen tot een volledige naam en sla het resultaat op in de variabele 'volledigeNaam'.

let voornaam = "Thomas";
let tussenvoegsel = "de";
let achternaam = "Legend";
let volledigeNaam = voornaam+" "+tussenvoegsel+" "+achternaam;

console.log(volledigeNaam);



/* Opdracht 3 Logische operatoren */

// Maak drie variabelen 'isZonnig' (boolean), 'temperatuur' (number) en 'isWeekend' (boolean).
// Gebruik logische operatoren om een nieuwe variabele 'buitenActiviteit' te maken.
// Buitenactiviteit moet waar (true) zijn als het zonnig is, de temperatuur boven 20 graden ligt en het weekend is.

let isZonnig = true;
let temperatuur = 23;
let isWeekend = true;

let buitenActiviteit = isZonnig && temperatuur > 22 && isWeekend;

console.log("Is het tijd voor een buitenactiviteit? "+buitenActiviteit)
 

/* Opdracht 4 Vergelijking en negatie */

// Maak twee variabelen 'a' en 'b' en wijs er numerieke waarden aan toe.
// Maak een nieuwe variabele 'isNietGelijk' die waar is als 'a' niet gelijk is aan 'b'.

let a = 9;
let b = 18;

let isNietGelijk = a != b;

console.log("Zijn a en b verschillende getallen? "+isNietGelijk)

