/*
  Operazioni tra array
  Scrivi un programma che dati:
  - 2 array di 10 elementi interi casuali compresi tra 1 e 10,
  - il tipo di operazione aritmetica da effettuare, una delle seguenti:
    addizione
    sottrazione
    moltiplicazione
    divisione
  Esegua il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array di appoggio.

  Esempio:
    Input: a = [3, 7, 2, 5, 8, 1, 2, 5, 6, 4], b = [9, 3, 1, 4, 7, 6, 5, 10, 1, 5], operazione = "addizione"
    Output: c = [12, 10, 3, 9, 15, 7, 7, 15, 7, 9]

  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".


  http://www.imparareaprogrammare.it
*/


let array1 = []
array1.length = 10
for (let i=0; i <= array1.length-1; i++) {
  array1[i] = Math.floor(Math.random()*(10-1)+1)
}
console.log(array1)

let array2 = []
array2.length = 10
for (let j=0; j <= array2.length-1; j++) {
  array2[j] = Math.floor(Math.random()*(10-1)+1)
}
console.log(array2)

const arrayOperation = (arr1, arr2) => {
  let arr3 = []
  for (let k=0; k<=arr1.length-1; k++) {
    arr3.push(arr1[k]*[arr2[k]])
  }
  return console.log(arr3)
}

arrayOperation(array1, array2)
