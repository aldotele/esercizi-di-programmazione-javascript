/*
  La bellezza della casualità
  Scrivi una funzione che prenda in input un numero e restituisca un numero casuale compreso tra 0 e l'argomento passato.


  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/


const casualRange = numeroScelto => {
  let numeroCasuale = Math.floor(Math.random()*(numeroScelto)+1)
  return 'il numero casuale è ' + numeroCasuale + ' , compreso tra 0 e ' + numeroScelto + '.'
  
}

console.log(casualRange(10))
console.log(casualRange(15))
console.log(casualRange(100))