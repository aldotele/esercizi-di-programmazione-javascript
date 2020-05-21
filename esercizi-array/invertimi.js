/*
  Invertimi
  Scrivi un programma che dato un numero N, generi un array di N numeri casuali
  e stampi sia l'array ottenuto che quello invertito.

  Esempio:
    Input: N = 5
    Output: array ottenuto = [3, 5, 10, 2, 8], array invertito = [8, 2, 10, 5, 3]

  Variante:
  Non utilizzare array/variabili di appoggio per l'inversione.

  Consigli:
  Per la variante ricordati l'uso degli indici del ciclo ;)

  http://www.imparareaprogrammare.it
*/

const twoArrays = num => {
  let array = []

  for (let i = 0 ; i < num; i++) {
  array[i] = Math.floor(Math.random()*10)
  } 
  
  return array
}  
console.log(twoArrays(3))
console.log(twoArrays(7))
console.log(twoArrays(2))

// aggiungere arrayReverse