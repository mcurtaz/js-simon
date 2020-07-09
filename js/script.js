// Un alert espone 5 numeri casuali (univoci).
// Poi parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati


// Genero 5 numeri casuali univoci e li metto in un array

var numeri = [];

while (numeri.length < 5){
  var nuovoNum = Math.floor(Math.random()*100) + 1;
  if(!cercaElemento(nuovoNum, numeri)){
    numeri.push(nuovoNum)
  }
}

console.log(numeri);

// creo un alert per visualizzare i numeri

alert(numeri);

var tentativi = []; // creo un array dove salvare i tentativi

setTimeout(function(){ // set timeOut di 30000millisecondi (30s)

  while (tentativi.length < 5){

    var nuovoTent = parseInt(prompt("Inserisci un numero:"));

    //console.log(nuovoTent);

    if (!cercaElemento(nuovoTent, tentativi) && !isNaN(nuovoTent)) {
      tentativi.push(nuovoTent); // controllo che il numero inserito sia un numero e che non sia già stato inserito
    }
    //console.log(tentativi);
  }

  console.log(tentativi);

  controllo(numeri, tentativi);

},10000);




// Funzione di controllo e stampa dei risultati

function controllo(numeri, tentativi){
  // confronto i due array e restituisco la quantità di numeri indovinati e quali sono.

  var numeriCorretti = [];

  for (var i = 0; i < 5; i++) {
    if (cercaElemento(tentativi[i], numeri)){
      numeriCorretti.push(tentativi[i]);
    }
  }

  console.log("Hai indovinato " + numeriCorretti.length + " numeri.");
  console.log("I numeri indovinati sono: " + numeriCorretti);


}







// FUNCTIONS

// Funzione per cercare un elemento in un array. Se l'elemento è presente restituisce true se non è presente restituisce false.

function cercaElemento(elem, array){
  for (var i = 0; i < array.length; i++) {
    if (elem == array[i]) {
      return true;
    }

  }

  return false;
}
