/*
  La funzione che sembra difficile
  Scrivi una funzione che prenda in input due numeri N e K e restituisca la k-esima cifra (partendo da destra) di N.
  Se K è maggiore del numero delle cifre di N, la funzione restituirà 0.

  Esempio:
    Input : N = 123456, K = 3
    Output: 4

    
  http://www.imparareaprogrammare.it
*/

const accessFigure = (n, k) => {
  let N = n.toString()
  if (k > N.length) {
    return 0
  } else {
    return N[N.length-k]
  }
}

console.log(accessFigure(5349287694, 1)) // stampo l'ultima cifra
console.log(accessFigure(5349287694, 2)) // stampo la penultima cifra
console.log(accessFigure(5349287694, 3)) // stampo la terzultima cifra
console.log(accessFigure(5349287694, 10)) // stampo la prima cifra
console.log(accessFigure(5349287694, 11)) // k è maggiore del numero di cifre in n

