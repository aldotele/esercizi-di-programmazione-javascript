/*
  I primi numeri…primi!
  Scrivi una funzione che prenda in input un numero e restituisca TRUE se è un numero primo, FALSE altrimenti.
  Scrivi una seconda funzione, che prenda in input un numero N e stampi i primi N numeri primi.

  Esempio:
    Input: n = 5
    Output:
          TRUE

            2
            3
            5
            7
            11


  Consigli:
  Per non ripetere il codice, nella seconda funzione puoi richiamare la prima funzione ;)

  http://www.imparareaprogrammare.it
*/

const numPrimo = numero => {
  if (numero == 1) {
    return false
  }
  else if (numero==3 || numero==5 || numero==7){
    return true
  }
  else if (numero%2>0 && numero%3>0 && numero%4>0 && numero%5>0 && numero%6>0 && numero%7>0 && numero%8>0 && numero%9>0) {
    return true
  } else {
    return false
  }

}

console.log(numPrimo(5))