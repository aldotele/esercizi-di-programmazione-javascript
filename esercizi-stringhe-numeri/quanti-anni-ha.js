/*
  Quanti anni ha?
  Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
    - l'età della persona,
    - quanti anni sono necessari per raggiungere i 100
  Restituisca in output entrambi i risultati.

  Esempio:
    Input: anno corrente = 2018, anno di nascita = 1991
    Ouput: età = 27, anni mancanti = 73

  http://www.imparareaprogrammare.it
*/

let guessAge = (currentYear, yearOfBirth) => {
  const age = currentYear - yearOfBirth
  const yearsTo100 = 100 - age
  return 'I\'m ' + age + ' and in ' + yearsTo100 + ' years I\'ll be 100 years old'  
}

console.log(guessAge(2020, 1994))
console.log(guessAge(2050, 1994))
console.log(guessAge(2020, 1952))