/*
  La mia rubrica
  Scrivi un programma per la gestione di una rubrica telefonica.

  Definisci un oggetto che rappresenti un contatto e, visto che stai diventando bravo/a, le proprietà dell'oggetto sono a tua discrizione.
  L'unico vincolo che hai è di inserire almeno il nome e il numero di telefono come stringhe.

  Definisci un altro oggetto che rappresenti la lista dei contatti, quindi sarà formato da un array di contatti.
  Implementa i metodi dell'oggetto per le seguenti operazioni:
      - Visualizzazione dell'intera lista contatti
      - Inserimento di un nuovo contatto
      - Modifica di uno contatto passando in input l'indice dell'array
      - Cancellazione di un contatto passando in input l'indice dell'array
      - Ricerca passando il nome e restituendo il singolo contatto.

  Variante:
  Migliora i metodi di Modifica e Cancellazione, al posto di prendere in input l'indice dell'array passa in input il nome
  e ricava l'indice sul quale applicare l'operazione.

  http://www.imparareaprogrammare.it
*/

function Contact(name, number, mail) {
  this.name = name;
  this.number = number;
  this.mail = mail;
}

let contacts = {
  list: [],
  getAll: function() {
    for(let i=0; i<this.list.length; i++) {
      console.log(this.list[i])
    }
  },
  add: function(name, number, mail) {
    this.list.push(new Contact(name, number, mail))
  },
  editByIndex: function(index, newNumber, newMail) {
    this.list[index]['number'] = newNumber;
    this.list[index]['mail'] = newMail;    
  },
  removeByIndex: function(index) {
    this.list.splice(index, 1)
  },
  searchByName: function(nameArg) {
    for (let i=0; i<this.list.length; i++) {  
        if (this.list[i]['name'].toLowerCase() === nameArg.toLowerCase()) {
          return this.list[i]
        }
    }
    return 'nome non valido'
  },
  getIndexByName: function(nameArg) {
    for (let i=0; i<this.list.length; i++) {  
      if (this.list[i]['name'].toLowerCase() === nameArg.toLowerCase()) {
        return i
      }
    }
    return 'nome non valido'
  }
};


// aggiungo i contatti
contacts.add('Bob', '3484848***', 'bob@mail.com');
contacts.add('Joe', '3392348***', 'joe@mail.com');
contacts.add('Jessie', '3669966***', 'jessie@mail.com')
contacts.add('Jessie 2', '3886572***', 'jessie2@mail.com')
// stampo tutti i contatti
contacts.getAll()
// modifico il primo contatto aggiornando numero e mail
contacts.editByIndex(0, '3384848***')
// elimino l'ultimo contatto
contacts.removeByIndex(3)
console.log(contacts.list[3]) // undefined perchè eliminato
// cerco un contatto in base al nome
console.log(contacts.searchByName('Joe'))
console.log(contacts.searchByName('joe'))
console.log(contacts.searchByName('JJoe'))

// trovo l'indice di un contatto in base al nome
console.log(contacts.getIndexByName('Bob'))
console.log(contacts.getIndexByName('Joe'))
console.log(contacts.getIndexByName('Jessie'))
console.log(contacts.getIndexByName('JESSIE'))
console.log(contacts.getIndexByName('Jessi'))