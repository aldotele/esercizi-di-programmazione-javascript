/*
  Caldo o freddo
  Scrivi un programma che dati sette valori relativi alle temperature della settimana
  stabilisca la giornata più calda e quella più fredda.

  Esempio:
    Input: a = 10, b = -2, c = 31, d = 22, e = 15, f = -6, g = 7
    Output: giornata più calda = 31, giornata più fredda = -6

  http://www.imparareaprogrammare.it
*/

// RICONTROLLARE IL CODICE SOTTO E AGGIUNGERE GIORNI DELLA SETTIMANA 
/*
let temperatures = [monday = 10, tuesday = -2, wednesday = 31, thursday = 22, friday = 15, saturday = -6, sunday = 7]

const meteo = array => {
  let hot = array[0]
  for (let i=0; i < array.length; i++) {
    if(array[i] >= hot) {
      hot=array[i]
    }
  }
  let cold = array[array.length-1]
  for (let j=array.length-1; j >= 0; j--){
    if(array[j] <= cold) {
      cold=array[j]
    }
  }
  return 'in the hottest day we will have ' + hot + ' degrees, ' + 'while in the coldest thay there will be ' + cold + ' degrees'
}

console.log(meteo(temperatures))
*/