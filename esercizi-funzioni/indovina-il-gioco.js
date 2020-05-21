/*
  Indovina il giorno
  Scrivi un programma con due funzioni, la prima prende in ingresso un intero e verifica se sia compreso nel range da 1 a 7.
  Se è compreso, la funzione restituirà TRUE, se non è compreso restituirà FALSE.

  La seconda funzione:
  - nel caso la prima restituisca TRUE visualizza il giorno della settimana corrispondente,
    considerando la seguente corrispondenza:
        1 = Lunedì
        ...
        7 = Domenica
  - nel caso il giorno non sia compreso nel range, la funzione dovrà restituire un messaggio d'errore simile a questo: 'Peccato, non posso indovinare il giorno.'


  http://www.imparareaprogrammare.it
*/

const numVerify = num => {
  let day = ''
  if(num > 0 && num < 8) {
      switch(num) {
        case 1:
        day = num + ' is Monday'
        break;
        case 2:
        day = num + ' is Tuesday'
        break;
        case 3:
        day = num + ' is Wednesday'
        break;
        case 4:
        day = num + ' is Thursday'
        break;
        case 5:
        day = num + ' is Friday'
        break;
        case 6:
        day = num + ' is Saturday'
        break;
        case 7:
        day = num + ' is Sunday'
      }
  } else {
    console.log('cannot guess the day, sorry.')
  }
return console.log(day);
}

numVerify(7)
numVerify(3)
numVerify(1)
numVerify(6)
numVerify(8)
numVerify(0)
//capire perchè tra gli ultimi due function call viene lasciato uno spazio nella console