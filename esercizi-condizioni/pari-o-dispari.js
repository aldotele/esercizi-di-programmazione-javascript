/*
  Pari o dispari?
  Scrivi un programma che prenda in input un numero intero e restituisca 0 se è pari o 1 se è dispari.

  Esempi:
    Input: numero = 63
    Output: 1

    Input: numero = 24
    Output: 0

  Consigli:
  Per capire se un numero è pari o dispari puoi usare un operatore, ma quale? :) 
  (Se non ti ricordi riguarda la lezione "Come dichiarare e definire le variabili e i tipi di dato" oppure "Il tipo Numero e gli operatori aritmetici")

  http://www.imparareaprogrammare.it
*/

let evenOrOdd = (num) => {
  return num % 2 === 0 ? 0 : 1
}

console.log(evenOrOdd(13))
console.log(evenOrOdd(12))
console.log(evenOrOdd(50))
console.log(evenOrOdd(77))
console.log(evenOrOdd(7.6))


