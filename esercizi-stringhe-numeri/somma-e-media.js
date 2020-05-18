/*
  Somma e media
  Scrivi un programma che dati 5 numeri restituisca in output la somma e la media.

  Esempio:
    Input: a = 1, b = 2, c = 3, d = 4, e = 5
    Output: somma = 15, media = 3
  
  http://www.imparareaprogrammare.it
*/

let numbers = [1,2,3,4,5]
let sumAverage = (number) => {
  let sum = 0;
  let average = 0;
  for(let i = 0; i < number.length; i++) {
    sum += number[i]
    average = sum/i
  }
  return console.log(sum, average)
}
sumAverage(numbers)

