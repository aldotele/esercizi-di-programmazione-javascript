/*
  Rombo che stampa!
  Scrivi un programma che dato un numero dispari stampi un rombo di lettere.

  Esempio:
    Input : 5
    Output:
            X
           XXX
          XXXXX
           XXX
            X

  Consiglio:
  Per indentare puoi usare il tab con '\t'.
  
  http://www.imparareaprogrammare.it
*/
//INIZIO METà
let numeroDispari = 5
let lettera = 'X'
let indent = ''
for (let i=1; i<=Math.ceil(numeroDispari/2); i++) {
  if (i===1) {
    console.log(lettera)
  } else {
  lettera += 'XX'
  console.log(lettera)
  }
}

// esercizio creando rombo per un solo input
let numeroDispari = 5
let element 
for (let i=1; i<=5; i++){
  if (i===1 || i===5) {
    element = '\t  X'
    console.log(element)
  } else if (i===2 || i===4) {
    element = '\t XXX'
    console.log(element)
  } else if (i===3) {
    element = '\tXXXXX'
    console.log(element)
  }
}