/*
  Le tabelline nel tabellone
  Scrivi un programma che stampi il tabellone delle tabelline, da 0 a 10.
  In questo modo:
    x | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
    0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0
    1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
    2 | 0 | 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 20
    ...
    10 | 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100
    
  http://www.imparareaprogrammare.it
*/

//aggiungere righe e colonne degli 0 

let result = 'x '
for (let i=0; i<11; i++) {
  for (let j=0; j<11; j++) {
    if (i===0 && j>0) {
      result += '[' + j + ']'
    }
    else if (j===0 && i>0) {
      result += '[' + i + '] '
    }
    else if (i>0 && j>0) {    

    result += (i*j) + ' '  // i=1 rimane fisso e j varia fino a 10 per cui avrò: i=1 e j=1 poi i=1 e j=2 poi i=1 e j=3 ecc.
    }
  }
    result += '\n'  // qui stabilisco che ad ogni iterazione vado accapo, ovvero quando ho concluso ogni prodotto di i(fisso)*j(variabile)
}

console.log(result)


//inizialmente
var result = '\n';
for (var i = 1; i < 11; i++) {
    for (var j = 1; j < 11; j++) {
        result += (i*j) + ' ';
    }
    result += '\n'
}