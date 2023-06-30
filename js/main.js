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
    document.getElementById("sconto").innerHTML = `Hai diritto ad uno sconto del ${sconto}%`;
    coupon = (prezzo * sconto) / 100; //quantità da sottrarre
    prezzoFinale = prezzo - coupon;
} else if (age > 65) {
    sconto = 40;
    document.getElementById("sconto").innerHTML = `Hai diritto ad uno sconto del ${sconto}%`;
    coupon = (prezzo * sconto) / 100;
    prezzoFinale = prezzo - coupon;
} else {
    document.getElementById("sconto").innerHTML = "Spiacenti, non hai diritto a nessuno sconto";
    prezzoFinale = prezzo;
}
 

//console.log(prezzoFinale.toFixed(2));
//output visualizzato arrotondato
const output = prezzoFinale.toFixed(2);

document.getElementById("prezzo").innerHTML = `Il prezzo del biglietto è di ${output} €`;