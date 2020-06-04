/*
  Pa-pa-pa lindomo
  Scrivi una funzione che prenda in input una stringa e restituisca TRUE se è palindroma, FALSE se non lo è.
  Nel controllo scarta gli spazi e i segni di punteggiatura.

  Esempio:
    Input: i topi non avevano nipoti
    Output: TRUE


  Consigli:
  Puoi eliminare spazi e segni di punteggiatura usando le espressioni regolari o il metodo del tipo stringa chiamato replace,
  in questo modo: str.replace(/\W/g, "").

  http://www.imparareaprogrammare.it
*/

/* PREMESSA
let stringa1 = 'itopinonavevanonipoti'
console.log(stringa1.length) // 21
console.log(stringa1[stringa1.length-1]) // dato che il primo indice è 0, l'indice dell'ultimo elemento non è pari alla lunghezza 21 ma a (length-1) quindi a 20
*/


const palindromo = stringa => {
  let str = stringa.replace(/\W/g, "") // sto convertendo la stringa in modo da ignorare punteggiatura, spazi e segni
  let letteraUguale = 0 
  for (i=0; i<str.length; i++){
    if (str[i].toLowerCase()===str[str.length-1-i].toLowerCase()) { // comparo gli estremi convertiti in minuscolo
      letteraUguale += 1 // ogni volta che le lettere estreme combaciano, aggiungo +1 a letteraUguale
    } else {
      letteraUguale += 0 // se gli estremi non combaciano, lettaraUguale resta invariata
    }
  }
  return letteraUguale === str.length // se, in base alla logica usata, tutti gli estremi sono uguali, allora letteraUguale avrà valore pari alla lunghezza della stringa
 }


console.log(palindromo('Ad una vera pia donna dei simili fili misi ed annodai, pareva nuda'))
console.log(palindromo('Eterni in rete'))
console.log(palindromo('I topi non avevano nipoti'))
console.log(palindromo('i topi non avevano nipoti'))
console.log(palindromo('amo ridere di roma'))
console.log(palindromo('Era geloso: Anna osò legare!'))  // vedere come far combaciare è ed e
console.log(palindromo('si tratta di un palindromo?'))
console.log(palindromo('1,2,3,4,5,4,3,2,1'))
