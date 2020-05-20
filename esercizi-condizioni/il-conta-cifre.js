/*
  Il conta cifre
  Scrivi un programma che dato un numero (massimo 9999) conti da quante cifre è formato.

  Esempi:
    Input: numero = 9
    Output: 1 cifra

    Input: numero = 245
    Output: 3 cifre

  http://www.imparareaprogrammare.it
*/


const contaCifre = num => {
  if(num >= 0 && num < 10) {
    console.log('il numero ' + num + ' ha 1 cifra')
  } else if(num >= 10 && num < 100) {
    console.log('il numero ' + num + ' ha due cifre')
  } else if(num >= 100 && num < 1000 ) {
    console.log('il numero ' + num + ' ha 3 cifre')
  } else if(num >= 1000 && num < 10000) {
    console.log('il numero ' + num + ' ha 4 cifre')
  } else {
    console.log('numero non valido')
  }
}

contaCifre('500')
contaCifre(500)
contaCifre(10000)
contaCifre(9999)
contaCifre('770')
