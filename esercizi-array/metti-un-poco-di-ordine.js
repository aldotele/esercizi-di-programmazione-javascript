/*
  Metti un po' d'ordine
  Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.

  Esempio:
    Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]
    Output: [8, 7, 6, 5, 5, 3, 2, 1, -4, -2]

  Variante:
  Prova ad ordinali in modo crescente.

  Consigli:
  Ti consiglio di non usare il metodo sort per questo esercizio ma di provare a scrivere tu il codice per ordinare gli array,
  usando if e cicli ;)

  http://www.imparareaprogrammare.it
*/

// ordino in modo decrescente
let arrMakeFall = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]

for (let i=0; i<arrMakeFall.length; i++) {
  for (let j=0, swapping; j<arrMakeFall.length; j++) {
    if (arrMakeFall[j] < arrMakeFall[j+1]) { // inizio comparando il primo elemento con il secondo. Poi ripartirò comparando sempre dal primo elemento visto che ci saranno modifiche
      swapping = arrMakeFall[j+1]  // se il primo elemento è inferiore al secondo, dovrò invertire i due elementi nell'array servendomi di una variabile che chiamo swapping
      arrMakeFall[j+1] = arrMakeFall[j]
      arrMakeFall[j] = swapping
    }
  }
}

console.log(arrMakeFall)

// ordino in modo crescente
let arrMakeGrow = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]

for (let i=0; i<arrMakeGrow.length; i++) {
  for (let j=0, swapping; j<arrMakeGrow.length; j++) {
    if (arrMakeGrow[j] > arrMakeGrow[j+1]) {
      swapping = arrMakeGrow[j+1]
      arrMakeGrow[j+1] = arrMakeGrow[j]
      arrMakeGrow[j] = swapping
    }   
  }
}

console.log(arrMakeGrow)