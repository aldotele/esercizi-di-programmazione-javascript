/*
  Maggiore e minore
  Scrivi un programma che dati quattro numeri in input,
  restituisca in output il maggiore e il minore.

  Esempio:
    Input: a = 3, b = -1, c = 4, d = -2
    Output: maggiore = 4, minore = -2
    

  http://www.imparareaprogrammare.it
*/

let numbers = [7, 12, 4, 17, 27, 35, 11, 6];
let numbers2 = [1, 1, 1, 0, 1, -1];
let numbers3 = [0, -15, 818, 11];

const maxMin = (arr) => {
  let max = arr[0]
  let min = arr[arr.length - 1]
  for (let i = 0; i < arr.length; i++){
  if (arr[i] >= max) {
    max = arr[i];
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] <= min) {
      min = arr[i]
    }
  }
}
return 'the highest number is ' + max + ', while the lowest number is ' + min + '.'
}; // end of function

console.log(maxMin(numbers))
console.log(maxMin(numbers2))
console.log(maxMin(numbers3))