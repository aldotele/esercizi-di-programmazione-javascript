/*
  Procedi alla cieca
  Scrivi un programma che stampi il contenuto di una matrice i cui valori interi sono generati casualmente nel range di 0 e 100.

  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/

// scritto non come array ma andando accapo

let risultato = ''
for (i=0; i<20; i++) {
  for (j=0; j<20; j++) {
    risultato += ' ' + Math.floor(Math.random()*100)
    
    
  }
 risultato += '\n'
}
console.log(risultato)

/* ESEMPIO matrice 15x20 con valori codice binario

let risultato = ''
for (i=0; i<15; i++) {
  for (j=0; j<20; j++) {
    risultato += ' ' + Math.round(Math.random()*1)
    
    
  }
 risultato += '\n'
}
console.log(risultato)
*/