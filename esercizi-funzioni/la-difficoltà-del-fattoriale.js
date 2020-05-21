/*
  La difficoltà del fattoriale
  Scrivi una funzione che calcoli in maniera iterativa (usando un ciclo) il fattoriale di un numero preso in input.

  Esempio:
    Input: n = 5
    Output: 120

  Consigli:
  Il fattoriale è il prodotto dei numeri interi da 1 a n.
  Esempio: n = 5, fattoriale = 5*4*3*2*1 = 120

  http://www.imparareaprogrammare.it
*/


const fact = num => {
  let fattoriale = num
  for (i = num -1; i > 0; i--) {
    fattoriale *= i
  }
  return 'il fattoriale di ' + num + ' è ' + fattoriale
}

console.log(fact(3))
console.log(fact(4))
console.log(fact(5))
console.log(fact(12))
console.log(fact(7))