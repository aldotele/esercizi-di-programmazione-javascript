/*
  La tombola magica
  Scrivi un programma che dato:
  - un array di 10 elementi di numeri casuali interi (compresi tra 1 e 90 senza ripetizioni),
  - un array di 10 numeri interi a tuo piacimento (compresi tra 1 e 90 senza ripetizioni)
  Verifichi quanti numeri scelti da te sono presenti nell'array principale e restituisca un risultato del tipo:
    2 numeri uguali => ambo
    3 numeri uguali => terna
    4 numeri uguali => quaterna
    5 numeri uguali => cinquina
    tutti i numeri uguali => tombola

  In caso di vittoria dovrà essere stampato un messaggio "Hai fatto X",
  in caso di perdita dovrà essere mostrato il messaggio "Mi dispiace, hai perso!".


  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/

let myArray = [7, 8, 17, 22, 23, 32, 33, 45, 77, 99]
let casualArray = []
let n = 0

for (i=0; i<10+n; i++) {
   let randomNumber = Math.floor(Math.random()*(90-1)+1)
   if (!casualArray.includes(randomNumber)) { // se il nuovo randomNumber generato non è già incluso nell'array, lo aggiungo
     casualArray.push(randomNumber)
   } else {
     n+=1 //altrimenti se il randomNumber generato è già presente nell'array, aggiungo un'iterazione in più
   } 
}

let mutualNumbers = []  // creo un'array che include i numeri in comune
for(let j = 0; j < myArray.length; j++) {
  for (let k = 0; k < casualArray.length; k++) { //comparo ogni elemento dell'array scelta con ogni elemento di quella casuale
    if (myArray[j] === casualArray[k]) {
      mutualNumbers.push(myArray[j]) // aggiungo ogni elemento comune nell'array mutualNumbers
    }
  }
}

console.log(myArray)
console.log(casualArray)

if(mutualNumbers.length===0 || mutualNumbers.length===1) {
  console.log('mi dispiace hai perso')
} else if(mutualNumbers.length===2) {
  console.log('hai fatto AMBO')
} else if(mutualNumbers.length===3) {
  console.log('hai fatto TERNA')
} else if(mutualNumbers.length===4) {
  console.log('hai fatto QUATERNA')
} else if(mutualNumbers.length===5) {
  console.log('hai fatto CINQUINA')
} else if(mutualNumbers.length===10) {
  console.log('hai fatto TOMBOLA')
}

if(mutualNumbers.length>1) { // stampo i numeri in comune solo in caso di vittoria
console.log('i numeri comuni alle due array: ' + mutualNumbers)  
} 