/*
  Menu dei dolci
  Scrivi un programma che dato il seguente menu (da stampare):
    MENU:
    1. Tiramisù
    2. Torta della nonna
    3. Cheesecake alla nutella
    4. Macedonia

  Prenda in input un valore numerico che rappresenti la scelta e restituisca:
    - se la scelta non è tra quelle elencate la scritta 'Dolce non disponibile',
    - altrimenti la scelta effettuata 'Hai scelto il dolce X'.


  Esempi:
    Input: scelta = 4
    Output: Hai scelto il dolce Macedonia

    Input: scelta = 7
    Output: Dolce non disponibile

  http://www.imparareaprogrammare.it
*/


let dessert = num => {
const one = 'tiramisù'
const two = 'torta della nonna '
const three = 'cheescake alla nutella'
const four = 'macedonia'

switch (num) {
    case 1:
    console.log('Hai scelto il ' + one);
    break;
    case 2:
    console.log('Hai scelto il ' + two);
    break;
    case 3:
    console.log('Hai scelto il ' + three);
    break;
    case 4:
    console.log('Hai scelto il ' + four)
    break;
    default:
    console.log('Dolce non disponibile. Prova a selezionare un numero da 1 a 4')
  }
}

dessert(5)
dessert(1)





