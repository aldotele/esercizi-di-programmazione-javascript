/*
  Il genio delle date
  Scrivi una funzione che prenda in input due argomenti: il giorno e il mese.
  La funzione deve restituire a quale giorno dell'anno corrisponde (compreso tra 1 e 366).

  Esempio:
    Input : giorno = 5, mese = 2
    Output:
            36

  Consigli:
  Puoi definire un array con i giorni di ogni mese e ciclarlo.

          
  http://www.imparareaprogrammare.it
*/

let mesiDa31 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30, 31] // mesi 1-3-5-7-8-10-12
let mesiDa30 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30] // mesi 4-6-9-11
let febbraio = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28, 29] // mese 2

const genioDate = (mese,giorno) => {
  let giornoAnno
  if (mese===1) {
    giornoAnno = giorno 
  }
  if (mese===2) {
    giornoAnno = giorno + mesiDa31.length
  }
  if (mese===3) {
    giornoAnno = giorno + febbraio.length + mesiDa31.length 
  }
   if (mese===4) {
    giornoAnno = giorno + febbraio.length + (mesiDa31.length)*2 
  }
  if (mese===5) {
    giornoAnno = giorno + febbraio.length + (mesiDa31.length)*2 + mesiDa30.length
  }
   if (mese===6) {
    giornoAnno = giorno + febbraio.length + (mesiDa31.length)*3 + mesiDa30.length
  }
  if (mese===7) {
    giornoAnno = giorno + febbraio.length + (mesiDa31.length)*3 + (mesiDa30.length)*2
  }
  if (mese===8) {
    giornoAnno = giorno + febbraio.length + (mesiDa31.length)*4 + (mesiDa30.length)*2
  }
  if (mese===9) {
    giornoAnno = giorno + febbraio.length + (mesiDa31.length)*5 + (mesiDa30.length)*2
  }
  if (mese===10) {
    giornoAnno = giorno + febbraio.length + (mesiDa31.length)*5 + (mesiDa30.length)*3
  }
  if (mese===11) {
    giornoAnno = giorno + febbraio.length + (mesiDa31.length)*6 + (mesiDa30.length)*3
  }
  if (mese===12) {
    giornoAnno = giorno + febbraio.length + (mesiDa31.length)*6 + (mesiDa30.length)*4
  }

  return giornoAnno
}

console.log(genioDate(2, 15))
console.log(genioDate(5, 10))
console.log(genioDate(12, 31))
console.log(genioDate(10, 17))
console.log(genioDate(4, 26))
console.log(genioDate(6, 13))
console.log(genioDate(11, 11))


//ALTRO METODO (più lungo)
/*
let gen = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30, 31]
let feb = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28, 29]
let mar = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30, 31]
let apr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
let mag = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30, 31]
let giu = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
let lug = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30, 31]
let ago = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30, 31]
let set = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
let ott = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30, 31]
let nov = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
let dic = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30, 31]

const genioDate = (mese,giorno) => {
  let giornoAnno
  if (mese === 1) {
    giornoAnno = giorno
  }
  else if (mese === 2) {
    giornoAnno = giorno + gen.length
  }
   else if (mese === 3) {
    giornoAnno = giorno + gen.length + feb.length
  }
  else if (mese === 4) {
    giornoAnno = giorno + gen.length + feb.length + mar.length
  }
   else if (mese === 5) {
    giornoAnno = giorno + gen.length + feb.length + mar.length + apr.length
  }
    else if (mese === 6) {
    giornoAnno = giorno + gen.length + feb.length + mar.length + apr.length + mag.length
  }
   else if (mese === 7) {
    giornoAnno = giorno + gen.length + feb.length + mar.length + apr.length + mag.length + giu.length
  }
   else if (mese === 8) {
    giornoAnno = giorno + gen.length + feb.length + mar.length + apr.length + mag.length + giu.length + lug.length
  }
   else if (mese === 9) {
    giornoAnno = giorno + gen.length + feb.length + mar.length + apr.length + mag.length + giu.length + lug.length + ago.length
  }
  else if (mese === 10) {
    giornoAnno = giorno + gen.length + feb.length + mar.length + apr.length + mag.length + giu.length + lug.length + ago.length + set.length
  }
   else if (mese === 11) {
    giornoAnno = giorno + gen.length + feb.length + mar.length + apr.length + mag.length + giu.length + lug.length + ago.length + set.length + ott.length
  }
  else if (mese === 12) {
    giornoAnno = giorno + gen.length + feb.length + mar.length + apr.length + mag.length + giu.length + lug.length + ago.length + set.length + ott.length + nov.length
  }
  return giornoAnno

}

console.log(genioDate(2, 15))
console.log(genioDate(12, 31))
console.log(genioDate(2, 3))
*/