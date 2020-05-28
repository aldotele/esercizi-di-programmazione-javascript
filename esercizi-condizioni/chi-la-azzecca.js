/*
  Chi l'azzecca?
  Scrivi un programma che dati due numeri di due ipotetici giocatori,
  generi un numero casuale compreso tra 1 e 100 (zero escluso),
  verifichi se uno dei due giocatori ha azzeccato il numero casuale,
  e in caso contrario quale dei due si è avvicinato di più al numero.

  Esempio:
    Input: giocatore 1 = 5, giocatore 2 = 10
    Output: Numero casuale generato = 7
            "Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!"

  Consigli:
  Per generare un numero casuale utlizza la funzione javascript Math.random() che restituisce un intervallo compreso tra 0 e 1.
  Il valore ottenuto dovrà essere convertito per ottenere un valore valido per il tuo intervallo, in questo modo:
    (Math.random() * (max-min) + min) ovvero, nel tuo caso:
    (Math.random() * (100-1) + 1)
  Ricordati che il valore dovrà essere intero quindi dovrai arrontondarlo usando Math.floor()

  http://www.imparareaprogrammare.it
*/

const program = (num1, num2) => {
  let x = Math.floor(Math.random()* (100-1) +1);
  if(num1 === x && num2 === x) {
    console.log('entrambi i giocatori hanno azzeccato il numero casuale ' + x )
  } else if (num1 === x) {
    console.log('il giocatore 1 ha azzeccato il numero casuale ' + x)
  } else if (num2 === x) {
    console.log('il giocatore 2 ha azzeccato il numero casuale ' + x)
  } else {
     if (Math.abs(num1 - x) < Math.abs(num2 - x)) {
      console.log('nessuno dei due ha azzeccato ma il giocatore 1 si è avvicinato di più al numero casuale ' + x)
    } else {
      console.log('nessuno dei due ha azzeccato ma il giocatore 2 si è avvicinato di più al numero casuale ' + x)
    }
  }
}

program(33, 77)
program(33, 77)
program(33, 77)
program(33, 77)
program(33, 77)

// rivedere codice e aggingere casistica in cui entrambi sbaglino ma scelgano lo stesso numero