/*
  Sommali tutti
  Scrivi un programma che:
    - Prenda in input due numeri, N e M.
    - Generi una matrice di NxM popolata di valori casuali da 1 a 100.
    - Stampi la matrice e la somma di tutti i valori contenuti.

    Esempio:
      Input: N = 2, M = 3
      Output:
        matrice =
        [
          [1, 50, 100],
          [1, 20, 40],
        ]
        somma = 212

  http://www.imparareaprogrammare.it
*/

let N=2   // la considero come l'altezza della matrice che creo, ovvero N sarà il numero di elementi(array)
let M=3 // la considero come la larghezza ovvero il numero di elementi in ogni singolo elemento(array)
let matrice = []
let sommaTutto=0

for (let i=0; i<N; i++) {
  matrice[i] = []
  for (let j=0; j<M; j++) {
    casuale = Math.round(Math.random()*(99)+1)
    sommaTutto += casuale
    matrice[i][j] = casuale    
  }
}

console.log(matrice, sommaTutto)
