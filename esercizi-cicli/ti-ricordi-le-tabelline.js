/*
  Ti ricordi le tabelline?
  Scrivi un programma che dato un numero stampi la tabellina corrispondente.

  Esempio:
    Input: 5
    Output: 0 5 10 15 20 25 30 35 40 45 50

  http://www.imparareaprogrammare.it
*/


const tabellina = num => {

let n = 0;
while (n < num*10+1) {
  console.log(n);
  n += num;
}
}

tabellina(1)
tabellina(3)
tabellina(10)


