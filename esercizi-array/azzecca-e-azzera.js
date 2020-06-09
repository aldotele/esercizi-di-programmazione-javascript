/*
  Azzecca e azzera
  Scrivi un programma che dato un array di 100 elementi, lo riempia con numeri interi casuali da 1 a 50.
  Permetti all'utente di inserire un numero e azzera tutti i gli elementi nell'array principale che sono suoi multipli.
  Richiedi all'utente un altro numero e così via.
  Il programma termina quando tutti gli elementi dell'array principale sono uguali a zero.

  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".
  Per richiedere un numero all'utente puoi usare il comando prompt(), se vuoi saperne di più puoi controllare nella
  documentazione: https://developer.mozilla.org/it/docs/Web/API/Window/prompt

  http://www.imparareaprogrammare.it
*/

// inizio a creare l'array di 100 elementi
let array = []
for (let i=0; i<100; i++) {
  array[i] = Math.round(Math.random()*(99)+1)
}
//console.log(array)

let notZero = true // mi serve nel while per fare in modo che continui a chiedere input di numeri fino a quando la condizione è true
let input

while (notZero) {
  //input = Number(prompt("inserisci un numero"))
  array = array.map(x => x % input ? x : 0)  // è necessario il termine a sinistra dell'espressione per poter far comparire l'array con gli zeri
  //console.log(array)
  for (i=0; i<array.length; i++) {
    if (array[i]) { // è sufficiente scrivere la condizione in questo modo, perchè è TRUE se il numero è diverso da zero
      notZero = true; // in altre parole, se tra tutte le array[i] ho un numero diverso da zero, continuo a chiedere input perchè notZero=true
      break;
    } else { // se tra tutte le array[i] non ne trovo neanche una che sia un numero diverso da zero, o in altre parole array[i]=false, allora notZero=false e il ciclo si ferma.
      notZero = false
    }
  }
}
console.log('array azzerata. Ricaricare pagina.')



    /* TENTATIVO ERRATO INFINITY LOOP
    let arrTest = [5,7,12,4,7,9,43,22,56, 88]


for (let j=0; j<arrTest.length; j++) {
  if (arrTest[j] !== 0) {
    let number = prompt() 
    for (let k=0; k<arrTest.length; k++) {  
      if(arrTest[k]%number === 0) {
      arrTest[k]=0
 
      }   
    }
  } 
}
console.log(arrTest)
*/