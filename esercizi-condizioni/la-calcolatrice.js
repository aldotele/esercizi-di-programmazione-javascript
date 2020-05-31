/*
  La calcolatrice
  Scrivi un programma che dati:
    - Due numeri
    - Una stringha che identifichi l'operazione da eseguire, es: "somma"
  Restituisca il valore ottenuto calcolando l'operazione tra i due numeri.

  Le operazioni supportate sono le suguenti:
    somma
    sottrazione
    moltiplicazione
    divisione
    modulo (solo tra interi)
    potenza
    media


  Esempi:
    Input: a = 5, b = 6, operazione = "somma"
    Output: 11

    Input: a = 5, b = 6, operazione = "media"
    Output: 5.5


  Utilizza il costrutto Switch-Case, gestire anche il caso di operazione non valida (non presente tra le operazioni consentite).


  http://www.imparareaprogrammare.it
*/

let operazione = 'prodotto'  // da SCEGLIERE
let a = 10  //da SCEGLIERE
let b = 100  //da SCEGLIERE
let result

switch(operazione) {
  case 'somma':
  case 'addizione':
  case 'addition':
  result = a+b
  console.log(result)
  break;
  case 'sottrazione':
  case 'differenza':
  case 'subtraction':
  result = a-b
  console.log(result);
  break;
  case 'moltiplicazione':
  case 'prodotto':
  case 'multiplication':
  result = a*b
  console.log(result)
  break;
  case 'divisione':
  case 'rapporto':
  case 'division':
  result = a/b
  console.log(result)
  break;
  case 'media':
  case 'average':
  result = (a+b)/2
  console.log(result)
  break;
  default:
  console.log('insert a valid operation.')
}