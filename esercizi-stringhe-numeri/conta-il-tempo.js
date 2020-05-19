/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/

let TimeCount = (seconds) => {
  const hours = Math.floor(seconds/3600);
  const minutes = Math.floor([(seconds/3600) - hours] * 60);
  const secs = Math.floor(  [ [((seconds/3600) - hours) * 60] - minutes] * 60  )

  if (hours === 0) {
    return seconds + ' is ' + minutes + ' minutes ' + 'and ' + secs + ' seconds';
  } else if (minutes === 0 && secs === 0) {
    return seconds + ' is ' + hours + ' hours';
  } else if (minutes === 0) {
    return seconds + ' is ' + hours + ' hours' + ' and ' + secs + ' seconds';
  } else if (secs === 0) {
    return seconds + ' is ' + hours + ' hours' + ' and ' + minutes + ' minutes';
  }
  return seconds + ' is ' + hours + ' hours' + ', ' + minutes + ' minutes ' + 'and ' + secs + ' seconds'
}

console.log(TimeCount(12560));
console.log(TimeCount(13604));
console.log(TimeCount(50060505));
console.log(TimeCount(3600));
console.log(TimeCount(7200));
console.log(TimeCount(36000));





