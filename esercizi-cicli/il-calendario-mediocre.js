/*
  Il calendario mediocre
  Scrivi un programma che dato:
    - Il numero di giorni nel mese
    - Il giorno della settimana in cui questo comincia (0: lunedì ... 6: domenica)
  Stampi il calendario di un mese.

  Esempio:
    Input: numero giorni = 31, giorno settimana = 0
    Output: Lun 1
            Mar 2
            Mer 3
            Gio 4
            Ven 5
            Sab 6
            Dom 7
            Lun 8
            Mar 9
            Mer 10
            Gio 11
            Ven 12
            Sab 13
            Dom 14
            Lun 15
            Mar 16
            Mer 17
            Gio 18
            Ven 19
            Sab 20
            Dom 21
            Lun 22
            Mar 23
            Mer 24
            Gio 25
            Ven 26
            Sab 27
            Dom 28
            Lun 29
            Mar 30
            Mer 31


  Variante:
  Piuttosto che avere in input il numero dei giorni del mese passa direttamente il mese e calcola tu da quanti giorni è formato.

  http://www.imparareaprogrammare.it 
  */


let dayNumber = 0  // DA SCEGLIERE: questo numero stabilirà qual è il primo giorno del mese
let firstDay //in base al numero scelto da 0 a 6, firstDay cambierà. Se dayNumber è 0, allora firstDay è monday, ma se dayNumber è 1, firstDay sarà tuesday
let secondDay // se dayNumber è 0, allora secondDay sarà Tuesday, ma se per esempio dayNumber è 1, allora secondDay sarà wednesday
let thirdDay
let fourthDay
let fifthDay
let sixthDay
let seventhDay
switch(dayNumber) { // in pratica in base al dayNumber che scelgo, cambierà quello che io considero il primo giorno della settimana
  case 0:
  firstDay = 'monday';
  secondDay = 'tuesday';
  thirdDay = 'wednesday';
  fourthDay = 'thursday';
  fifthDay = 'friday';
  sixthDay = 'saturday';
  seventhDay = 'sunday';
  break
  case 1:
  firstDay = 'tuesday'
  secondDay = 'wednesday';
  thirdDay = 'thursday';
  fourthDay = 'friday';
  fifthDay = 'saturday';
  sixthDay = 'sunday'
  seventhDay = 'monday';
  break
  case 2: 
  firstDay = 'wednesday';
  secondDay = 'thursday';
  thirdDay = 'friday';
  fourthDay = 'saturday';
  fifthDay = 'sunday';
  sixthDay = 'monday'
  seventhDay = 'tuesday';
  break
  case 3:
  firstDay = 'thursday';
  secondDay = 'friday';
  thirdDay = 'saturday';
  fourthDay = 'sunday';
  fifthDay = 'monday';
  sixthDay = 'tuesday'
  seventhDay = 'wednesday';
  break
  case 4:
  firstDay = 'friday';
  secondDay = 'saturday';
  thirdDay = 'sunday';
  fourthDay = 'monday';
  fifthDay = 'tuesday';
  sixthDay = 'wednesday'
  seventhDay = 'thursday';
  break
  case 5:
  firstDay = 'saturday'
  secondDay = 'sunday';
  thirdDay = 'monday';
  fourthDay = 'tuesday';
  fifthDay = 'wednesday';
  sixthDay = 'thursday'
  seventhDay = 'friday';
  break
  case 6:
  firstDay = 'sunday';
  secondDay = 'monday';
  thirdDay = 'tuesday';
  fourthDay = 'wednesday';
  fifthDay = 'thursday';
  sixthDay = 'friday'
  seventhDay = 'saturday';
  break
  default:
  console.log('Not valid! Insert a number between 0 and 6')
} // chiusura switch: ho assegnato i giorni della settimana da 0 a 6

// inizio a creare il loop per assegnare i giorni ad ogni data del mese 
let monthDays = 31  // DA SCEGLIERE: in base al mese impostare il numero di giorni
for(let i=1; i<=monthDays; i++) {
  // if conditions 
  
  if(i===1||i===1+7||i===1+7+7||i===1+7+7+7||i===1+7+7+7+7) {
    console.log(i + ' ' + firstDay)    
  }
  if(i===2||i===2+7||i===2+7+7||i===2+7+7+7||i===2+7+7+7+7) {
    console.log(i + ' ' + secondDay)
  }     
  if(i===3||i===3+7||i===3+7+7||i===3+7+7+7||i===3+7+7+7+7) {
    console.log(i + ' ' + thirdDay)
  }  
  if(i===4||i===4+7||i===4+7+7||i===4+7+7+7||i===4+7+7+7+7) {
    console.log(i + ' ' + fourthDay)
  }
  if(i===5||i===5+7||i===5+7+7||i===5+7+7+7||i===5+7+7+7+7) {
    console.log(i + ' ' + fifthDay)
  }
  if(i===6||i===6+7||i===6+7+7||i===6+7+7+7||i===6+7+7+7+7) {
    console.log(i + ' ' + sixthDay)
  }
  if(i===7||i===7+7||i===7+7+7||i===7+7+7+7||i===7+7+7+7+7) {
    console.log(i + ' ' + seventhDay)
  }

} // chiusura for iniziale

