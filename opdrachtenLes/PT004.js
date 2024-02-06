/* Met de toetscombinatie [CMD] + [/] kun je '//' voor de regel weghalen en terugplaatsen */

// Hier zijn oefenopdrachten voor het gebruiken van array methoden in JavaScript

/* OPDRACHT 1. push */
// Maak een array `getallen` met enkele numerieke waarden. Voeg een nieuw getal toe aan het einde van de array met de `push`-methode.

let getallen = [1,2,3];

getallen.push(8);

console.log(getallen);



/* OPDRACHT 2. pop */
// Maak een array `dieren` met enkele stringwaarden. Verwijder het laatste element uit de array met de `pop`-methode.

let dieren = ["hond","kat","olifant"];

dieren.pop()

console.log(dieren);


/* OPDRACHT 3. shift */
// Maak een array `kleuren` met enkele stringwaarden. Verwijder het eerste element uit de array met de `shift`-methode.

let kleuren = ["rood","blauw","geel"]

kleuren.shift()

console.log(kleuren)



/* OPDRACHT 4. unshift */
// Maak een array `fruit` met enkele stringwaarden. Voeg een nieuw element toe aan het begin van de array met de `unshift`-methode.

let fruit = ["appel","peer","banaan"]

fruit.unshift("bosbes")

console.log(fruit)


/* OPDRACHT 5. indexOf */
// Maak een array `steden` met enkele stringwaarden. Gebruik de `indexOf`-methode om de index van een specifieke stad in de array te vinden.

let steden = ["amsterdam","berlijn","praag"]

let index = steden.indexOf("berlijn")

console.log(index)



/* OPDRACHT 6. splice */
// Maak een array `gerechten` met enkele stringwaarden. Gebruik de `splice`-methode om een specifiek gerecht te vervangen door een nieuw gerecht.

let gerechten = ["Pasta", "Pizza", "Sushi", "Curry", "Salade"];

gerechten.splice(2, 1, "Koekjes");

console.log(gerechten);



/* OPDRACHT 7. slice */
// Maak een array `nummers` met enkele numerieke waarden. Gebruik de `slice`-methode om een nieuw array te maken dat bestaat uit een deel van de originele array.

let nummers = [2,4,6,8,10];



console.log(nummers.slice(2,4));



/* OPDRACHT 8. Combinatie van methoden */
// Maak een array `namen` met enkele stringwaarden. Voer verschillende bewerkingen uit op de array, zoals het toevoegen, verwijderen en vervangen van elementen met behulp van verschillende array-methoden.

let namen = ["Alice", "Bob", "Charlie", "David", "Eva"];

namen.splice(2, 1, "Thomas");

namen.push("Kees");

namen.shift()

namen.unshift("Merel")



console.log(namen)

