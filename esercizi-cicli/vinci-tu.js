/*
  Vinci tu!
  Scrivi un programma che dato il numero dei tiri da effettuare per ciascun giocatore (N),
  simuli un gioco di dadi tra due utenti, stampando il giocatore che ha totalizza più punti.
  Supponendo che ogni dado abbia al massimo 6 facce.

  Ogni giocatore tirerà il dado N volte, ciò significa che verrà generato un numero casuale
  ad ogni tiro che sarà sommato ai precedenti per calcolare il punteggio del giocatore.


  Consigli:
  Il numero casuale generato, deve essere convertito nel tuo intervallo (min = 1, max = 6).
  Se non ti ricordi come si fa puoi rivedere l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/


const giocoDadi = N => {
  let giocatore1 = 0;
  let giocatore2 = 0;
  for (let i = 0; i < N; i++) {
    let x = Math.round(Math.random()*(6-1)+1);
    let y = Math.floor(Math.random()*(6-1)+1);
    giocatore1 += x
    giocatore2 += y
  }
    if(giocatore1 === giocatore2) {
      return 'Parità: dopo ' + N + ' tiri, entrambi i giocatori hanno totalizzato ' + giocatore1 + ' punti'
    } else if(giocatore1>giocatore2) {
      return 'Vince il giocatore 1 con ' + giocatore1 + ' punti rispetto a ' + giocatore2 + ' punti dopo ' + N + ' tiri'
    } else {
      return 'Vince il giocatore 2 con ' + giocatore2 + ' punti rispetto a ' + giocatore1 + ' punti dopo ' + N + ' tiri'
    }
  
}

console.log(giocoDadi())