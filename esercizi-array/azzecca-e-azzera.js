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

// creo l'array da 100 elementi con numeri tra 1 e 50. Capire come fissarla
let array = []
for (let i=0; i<100; i++) { 
  array.push(Math.round(Math.random()*(50-1)+1))
}
console.log(array)

/* TESTANDO seconda parte esercizio 

let arrTest = [5,7,12,4,7,9,43,22,56, 88]

let  number = window.prompt()      
for (let j=0; j<arrTest.length; j++) {
  
  if(arrTest[j]%number === 0) {
    arrTest[j]=0
 
  }   
  
}
console.log(arrTest)
    */