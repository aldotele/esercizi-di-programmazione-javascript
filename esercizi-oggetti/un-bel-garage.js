/*
  Un bel garage
  Scrivi un programma per la gestione di un garage.
  Definisci un oggetto che rappresenti un automobile, dovrà contenere almeno marca del veicolo e nome del modello.
  Scrivi una funzione che prenda in input una marca e stampi i modelli presenti nel garage di quella stessa marca.

  Consigli:
  Puoi usare un array come base per salvare le automobili.

  http://www.imparareaprogrammare.it
*/

function Car(brand, model, color, fuel) {
  this.brand = brand;
  this.model = model;
  this.color = color;
  this.fuel = fuel;
}

Car.prototype.numWheels = 4

let OpelMokka = new Car('Opel', 'Mokka', 'Blue', 'diesel');
let A6Dark = new Car('Audi', 'A6', 'anthracite', 'diesel');
let A6Light = new Car('Audi', 'A6', 'grey', 'diesel');
let LanciaY = new Car('Lancia', 'Ypsilon', 'white', 'gpl');
let GrandePunto = new Car('Fiat', 'Punto', 'gunmetal grey', 'gasoline');

let garage = [OpelMokka, A6Dark, A6Light, LanciaY, GrandePunto]

let getCarByBrand = function(arg) {
  let brandedCars = []
  garage.forEach(function(el) {
    if (el.brand.toLowerCase() === arg.toLowerCase()) {
      brandedCars.push(el)
    }    
  })
  return brandedCars.length > 0 ? brandedCars : 'no car by this brand';
}

console.log(getCarByBrand('Audi'));
console.log(getCarByBrand('lancia'));
console.log(getCarByBrand('OPeL'))
console.log(getCarByBrand('FIAT'));
console.log(getCarByBrand('Mercedes'));



