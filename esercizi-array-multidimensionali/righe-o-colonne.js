/*
  Righe o colonne?
  Scrivi un programma che:
    - Prenda in input due numeri, N e M.
    - Generi una matrice di NxM popolata di valori casuali compresi tra 1 e 100.
    - Dichiari due array, l'array R di N elementi e l'array C di M elementi.
    - Salvi, nell'array R le somme di ogni riga della matrice e nell'array C le somme di tutte le colonne.
    - Stampi la matrice e i due array.

    Esempio:
      Input: N = 2, M = 3
      Output:
        matrice =
        [
          [1, 50, 100],
          [1, 20, 40],
        ]

        array R = [152, 61]
        array C = [2, 70, 140]

  http://www.imparareaprogrammare.it
*/

// creo matrice NxM con numeri casuali tra 1 e 100
let N = 2
let M = 3
let matrice = []
let casuale

for (let i=0; i<N; i++) {
  matrice[i] = []
  for (let j=0; j<M; j++) {  
    casuale = Math.round(Math.random()*(99)+1)
    matrice[i][j] = casuale
  }
}
console.log(matrice)

// creo array R in cui ogni elemento equivale alla somma delle righe di matrice
let arrayR = []
let sommaR=0 //al termine di ogni ciclo delle j azzero somma R perchè sto andando a sommare per i+1
for (i=0; i<matrice.length; i++) {   // matrice.length equivale a N
  sommaR = 0
  for (j=0; j<matrice[i].length; j++) {  // matrice[i].length equivale a M
    sommaR += matrice[i][j]   
  }
  arrayR[i]=sommaR
}
console.log(arrayR) 

// creo array C
let arrayC = []
let sommaC = 0
for (i=0; i<M; i++) {
  sommaC=0
  for (j=0; j<N; j++) {
    sommaC += matrice[j][i]
  }
  arrayC[i]=sommaC
     

}
console.log(arrayC) 