/*
  Primo e ultimo
  Scrivi due funzioni una che prenda in input tre numeri e restituisca il maggiore,
  l'altra che restituisca il minore.

  Esempio:
    Input: a = 1, b = -10, c = 4
    Output: minore = -10, maggiore = 4

  Variante:
  Scrivi due funzioni che prendano in input un array di numeri, una funzione deve restituire il valore maggiore contenuto nell'array,
  l'altra il valore minore.

  http://www.imparareaprogrammare.it
*/

const a = [3, 4, 9, 56, 72, 11, -3, -8, -8.1]
const b = [-2, -15, -18.1, -1.9]
const c = [3, 7, 9]


const highest = array => {
  let highest = array[0]
  for (let i=0; i<array.length; i++) {
    if(array[i]>array[i-1]){
      highest = array[i]
    }
  }
  return highest
}

const lowest = array => {
  let lowest = array[0]
  for (let i=0; i<array.length; i++) {
    if(array[i]<array[i-1]){
      lowest = array[i]
    }
  }
  return lowest
}

console.log('the highest number is ' + highest(a) + ' while the lowest is ' + lowest(a))
console.log('the highest number is ' + highest(b) + ' while the lowest is ' + lowest(b))
console.log('the highest number is ' + highest(c) + ' while the lowest is ' + lowest(c))