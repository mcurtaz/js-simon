$(document).ready(function(){

  // nascondo il bottone che in questo caso non serve
  $("#btn").hide();

  // genero 5 numeri random e li stampo nell'html

  var numeri = generaNumeri(5);

  console.log(numeri);

  $("#numeri").text(numeri).fadeOut(10000, function(){ // stampo i numeri a schermo ma li faccio sparire gradualmente in 10 secondi. Quando sono spariti parte la funzione con il gioco

    var correzione = play(numeri); //ho racchiuso tutto il gioco nella funzione play a cui bisogna passare come argomento l'array di numeri casuali. la funzione chiede i numeri all'utente, li confronta con quelli random e restituisce un array con soltanto i numeri indovinati.

    $(".counter").text("Hai indovinato " + correzione.length + " numeri: " + correzione); // stampo il risultato a schermo

  });


});




// FUNCTIONS

// FUNZIONI PER GIOCARE

function play(num){
  
  var tentativi = gioca(5);

  return controllo(num, tentativi);

}

// la funzione gioca prende i numeri dall'utente. restituisce un array con gli n numeri inseriti dall'utente

function gioca(n){

  var tentativi = []; // creo un array dove salvare i tentativi
  while (tentativi.length < n){

    var nuovoTent = parseInt(prompt("Inserisci un numero:"));

    //console.log(nuovoTent);

    if (!cercaElemento(nuovoTent, tentativi) && !isNaN(nuovoTent)) {
      tentativi.push(nuovoTent); // controllo che il numero inserito sia un numero e che non sia già stato inserito
    }
    //console.log(tentativi);
  }
  return tentativi;
}



// La funzione controllo prende due array, li confronta e restituisce un array soltanto con i numeri del primo array presenti anche nel secondo. In questo caso restituisce un array con tutti i numeri indovinati

function controllo(numeri, tentativi){
  // confronto i due array e restituisco la quantità di numeri indovinati e quali sono.

  var numeriCorretti = [];

  for (var i = 0; i < 5; i++) {
    if (cercaElemento(tentativi[i], numeri)){
      numeriCorretti.push(tentativi[i]);
    }
  }

  return numeriCorretti;

}

// FUNZIONI GENERICHE

// Funzione per cercare un elemento in un array. Se l'elemento è presente restituisce true se non è presente restituisce false.

function cercaElemento(elem, array){
  for (var i = 0; i < array.length; i++) {
    if (elem == array[i]) {
      return true;
    }

  }

  return false;
}


// funzione per generare n numeri random tra 1 e 100 in un array

function generaNumeri(n){

  // Genero n numeri casuali univoci e li metto in un array

  var numeri = [];

  while (numeri.length < n){
    var nuovoNum = Math.floor(Math.random()*100) + 1;
    if(!cercaElemento(nuovoNum, numeri)){
      numeri.push(nuovoNum)
    }
  }

  return numeri;
}
