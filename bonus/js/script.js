$(document).ready(function(){

  // genero 5 numeri random e li stampo nell'html

  var numeri = generaNumeri(5);

  console.log(numeri);

  $("#numeri").text(numeri);


  // al click faccio partire il gioco

  $("#btn").click(function(){

    var correzione = []; // variabile in cui salverò un array con i numeri indovinati dall'utente

    $("#numeri").text(""); // cancello i numeri visualizzati a schermo

    var counterNumber = 5;

    var counter = setInterval(function(){ // creo un piccolo conto alla rovescia

      if (counterNumber >= 0){ // se il conto alla rovescia non è ancora finito stampo il numero a schermo e decremento il contatore
        $(".counter").text(counterNumber);
        counterNumber--;

      } else{ // quando il conto alla rovescia è arrivato a 0

        $(".counter").text(""); // cancello il numeri del conto alla rovescia a schermo

        clearInterval(counter); // interrompo il conto alla rovescia

        correzione = controllo(numeri, gioca(5)); // controllo è la funzione di controllo su due array. i due argomenti sono l'array di numeri generati random e la funzione "gioca" che chiede i numeri all'utente e restituisce un array. La variabile correzione sarà un array contente tutti i numeri indovinati dall'utente


        $(".counter").text("Hai indovinato " + correzione.length + " numeri: " + correzione); // stampo il risultato a schermo
      }

    },1000);
  })

});



// FUNCTIONS

// FUNZIONI PER GIOCARE


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
