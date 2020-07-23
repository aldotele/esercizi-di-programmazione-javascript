/*
  Il carcere di Gotham City
  Sei appena stato nominato direttore presso il carcere di Gotham City.
  Hai l'arduo compito di scrivere un programma che gestisca:
  - I dati anagrafici delle guardie
  - I dati anagrafici dei detenuti
  - I fascicoli personali dei detenuti, che devono contenere almeno queste informazioni:
      - Un identificativo del criminale
      - La data di carcerazione
      - La data di scarcerazione
      - Il crimine commesso

  Visto che sei tu il capo, decidi se usare lo stesso oggetto per gestire sia le guardie che i criminali.
  In ogni caso dovrai definire la banca dati della prigione: crea un array di guardie, uno di detenuti e uno per i fascicoli.

  Prevedi la possibilià di:
    - Assumere nuove guardie
    - Schedare nuovi carcerati
    - Aggiungere nuovi fascicoli
    - Visualizzare l'elenco per ciascuna categoria (guardie, criminali, fascicoli)
    - Effettuare ricerche nei fascicoli per nome del detenuto

  Nel carcere di Gothma City non tutti i detenuti arrivano alla data di scarcerazione,
  gestisci l’eventualità in cui un detenuto sia evaso e quella in cui sia deceduto.

  Scrivi una funzione di riepilogo dell'andamento del carcere e che stampi:
    - il numero delle guardie,
    - il numero di detenuti totali,
    - il numero di detenuti evasi,
    - il numero di detenuti deceduti all’interno della struttura.

  http://www.imparareaprogrammare.it
*/

function Criminal(name, age, nationality, id) {
  this.name = name;
  this.age = age;
  this.nationality = nationality;
  this.id = id
};

function Guard(name, age, nationality) {
  this.name = name;
  this.age = age;
  this.nationality = nationality;
};

function File(id, inDate, outDate, crime) {
  this.id = id;
  this.inDate = inDate;
  this.outDate = outDate;
  this.crime = crime
};

// -----------CREO l'oggetto per gestire le guardie
let guards = {
  arr: [],
  getAll: function() {
    for (let i=0; i<this.arr.length; i++) {
      console.log(this.arr[i])
    }
  },
  add: function(name, age, nationality) {
    this.arr.push(new Guard(name, age, nationality))
  },
};

// ----------CREO l'oggetto per gestire i detenuti
let criminals = {
  arr: [],
  fileArr: [],
  deaths: [],
  jailbreaks: [],
  getAll: function() {
    for (let i=0; i<this.arr.length; i++) {
      console.log(this.arr[i])
    }
  },
  add: function(name, age, nationality, id) {
    this.arr.push(new Criminal(name, age, nationality, id))
  },
  addFile: function(id, inDate, outDate, crime) {
    this.fileArr.push(new File(id, inDate, outDate, crime))
  },
  getAllFiles: function() {
    for (let i=0; i<this.fileArr.length; i++) {
      console.log(this.fileArr[i])
    }
  },
  searchFileByName: function(nameArg) {
    for(let i=0; i<this.arr.length; i++) { // ciclo prima l'array anagrafica 
      if(this.arr[i]['name'].toLowerCase() === nameArg.toLowerCase()) { // una volta trovato il detenuto in base al nome
        for(let j=0; j<this.fileArr.length; j++) { // effettuo un secondo ciclo sull'array di fascicoli
          if(this.arr[i]['id'] === this.fileArr[j]['id']) { // trovo il fascicolo di quel detenuto in base all'id che è presente in entrambe le array
            return this.fileArr[j] // una volta trovata la corrispondenza di id restituisco quel fascicolo
          }
        }
      }
    }
    return 'nome non valido' 
  }, // aggiungere possibiità di trovare corrispondenza passando soltanto il cognome del detenuto es. passando 'Grand' oppure 'grand' oppure 'GRAND' anzichè 'Will Grand'
  death: function(nameArg) {
    for(let i=0; i<this.arr.length; i++) {
      if(this.arr[i]['name'].toLowerCase() === nameArg.toLowerCase()) {
        this.deaths.push(this.arr[i]); // aggiungo il detenuto all'array dei deceduti
        this.arr.splice(i, 1); // rimuovo il detenuto dall'array arr
      }
    }
  },
  jailbreak: function(nameArg) {
    for(let i=0; i<this.arr.length; i++) {
      if(this.arr[i]['name'].toLowerCase() === nameArg.toLowerCase()) {
        this.jailbreaks.push(this.arr[i]); // aggiungo il detenuto all'array degli evasi
        this.arr.splice(i, 1); // rimuovo il detenuto dall'array arr
      }
    }
  }
}; 

// ----------CREO la funzione riassuntiva sull'andamento del carcere
let prisonInfo = function() {
  return 'Il carcere di Gotham ospita attualmente ' + criminals.arr.length + ' detenuti, al netto di un numero di evasioni pari a ' + criminals.jailbreaks.length + ' e un numero di morti pari a ' + criminals.deaths.length + '.\nA presidiare il carcere vi sono in totale ' + guards.arr.length + ' guardie.'    
}


// EFFETTUO I TEST
// aggiunta nuove guardie
guards.add('Will Grand', 41, 'american')
guards.add('Piotr Wladek', 45, 'polish' )
guards.add('Johnny Skate', 53, 'english')
guards.add('Elon Last', 39, 'south african')

// visualizzazione elenco guardie
//guards.getAll() // stampo le guardie una per una
//console.log(guards.arr) // stampo l'array che contiene tutte le guardie

// aggiunta nuovi detenuti
criminals.add('Scottie Storm', 28, 'american', 1567)
criminals.add('Fausto Clavero', 32, 'mexican', 1568)
criminals.add('Joaquin Herrera', 37, 'spanish', 1569)
criminals.add('Stanley Greed', 45, 'australian', 1570)

// visualizzazione elenco detenuti
//criminals.getAll() // stampo i detenuti uno per uno
//console.log(criminals['arr']) // stampo l'array che contiene tutti i detenuti

// aggiunta nuovi fascicoli
criminals.addFile(1567, '1 Agosto 2020', '1 Agosto 2040', 'voluntary manslaughter')
criminals.addFile(1568, '1 Agosto 2020', '1 Agosto 2030', 'involuntary manslaughter')
criminals.addFile(1569, '3 Agosto 2020', '3 Agosto 2025', 'robbery')
criminals.addFile(1570, '4 Agosto 2020', '4 Agosto 2023', 'extortion')

// visualizzazione elenco fascicoli
//criminals.getAllFiles() // stampo i fascicoli uno per uno
//console.log(criminals.fileArr) // stampo l'array che contiene tutti i fascicoli

// ricerca fasciolo in base al nome del detenuto
criminals.searchFileByName('Stanley Greed') // restituirà il suo fascicolo trovando l'id corrispondente al nome

// rilevazione morte di un detenuto
criminals.death('Scottie Storm')

// rilevazione evasione di un detenuto
criminals.jailbreak('Fausto Clavero')

// richiamo la funzione riassuntiva sull'andamento del carcere
console.log(prisonInfo())
// controllo i dati della funzione uno ad uno
console.log(criminals.arr)
criminals.getAll() 
console.log(criminals.deaths)
console.log(criminals.jailbreaks)

// DA AGGIUNGERE : prevedere la possibilità di passare soltanto il cognome del detenuto anzichè nome+cognome quando si utilizzano i metodi di ricerca
