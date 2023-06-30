const kilometres = prompt("Quanti kilometri vuoi percorrere?");
const age = prompt("Inserisci la tua età");

//calcolo il prezzo totale in base al n di km
const prezzo = kilometres * 0.21;
//console.log(prezzo);

//il prezzo effettivo finale
let prezzoFinale;
let sconto;
let coupon;

if (age < 18) {
    sconto = 20;
    coupon = (prezzo * sconto) / 100; //quantità da sottrarre
    prezzoFinale = prezzo - coupon;
} else if (age > 65) {
    sconto = 40;
    coupon = (prezzo * sconto) / 100;
    prezzoFinale = prezzo - coupon;
} else {
    prezzoFinale = prezzo;
}
 

console.log(prezzoFinale.toFixed(2));