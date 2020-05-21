/*
  Tanti numeri
  Scrivi un programma che dato array di numeri, calcoli la media dei valori e
  restituisca in output la media e tutti i valori minori della media.

  Esempio:
    Input: a = [3, 5, 10, 2, 8]
    Output: media = 5.6, valori minori = [3, 5, 2]

  Variante:
  Stampa anche quanti sono i valori monori della media e quanti quelli maggiori.

  http://www.imparareaprogrammare.it
*/

const a = [3, 5, 10, 2, 8]
const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const calcStats = array => {
  let average = 0
  let sum = 0
  let belowAvg = []
  let aboveAvg = []
  for (i=0; i<array.length;i++) {
    sum += array[i]
  }
  average = sum/i
  for (i=0; i<array.length;i++) {
  if(array[i] < average) {
    belowAvg.push(array[i])
  } else {
    aboveAvg.push(array[i])
  }
}
return 'the average is ' + average + ' while the numbers below the average are ' + belowAvg +
 '. The rest are the numbers above the average, namely: ' + aboveAvg
}
console.log(calcStats(a));
console.log(calcStats(b));

