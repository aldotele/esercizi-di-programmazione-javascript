/*
  Rincorri la decina
  Scrivi un programma che che stampi i numeri da 1 a 100 andando a capo ogni 10.

  Esempio:
    Output: 1 2 3 4 5 6 7 8 9 10
            11 12 13 14 15 16 17 18 19 20
            21 22 23 24 25 26 27 28 29 30
            31 32 33 34 35 36 37 38 39 40
            41 42 43 44 45 46 47 48 49 50
            51 52 53 54 55 56 57 58 59 60
            61 62 63 64 65 66 67 68 69 70
            71 72 73 74 75 76 77 78 79 80
            81 82 83 84 85 86 87 88 89 90
            91 92 93 94 95 96 97 98 99 100

  Consiglio:
  Per andare a capo usa '\n'.

  http://www.imparareaprogrammare.it
*/

let sequenza = ''

for (let i=1; i <= 100; i++) {
  sequenza += ' ' + i 
  if (i===10||i===20||i===30||i===40||i===50||i===60||i===70||i===80||i===90) { // controllare se ci sia un metodo più immediato
    sequenza += '\n'
  }
}
console.log(sequenza)


//ALTRO METOOD --> uso un'array con i numeri ai quali bisogna andare accapo
let sequenza = ''

for (let i=1; i <= 100; i++) {
  sequenza += ' ' + i 
  let j = [10,20,30,40,50,60,70,80,90]
  if (j.includes(i)) { // controllare se ci sia un metodo più immediato
    sequenza += '\n'
  }
}
console.log(sequenza)


// esempio su come andare accapo
console.log('ora vado accapo \necco fatto!')











