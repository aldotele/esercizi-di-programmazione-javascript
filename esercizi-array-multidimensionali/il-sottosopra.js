/*
  Il sottosopra
  Scrivi un programma che prenda in input un array multidimensionale e stampi in output la sua trasposta.

  Esempio:
    Input: 
      [
        [1, 2],
        [3, 4],
        [5, 6]
      ]
    Output:
      [
        [1, 3, 5],
        [2, 4, 6],
      ]

  http://www.imparareaprogrammare.it
*/

let array = [[1, 2], [3, 4], [5, 6]]
let trasposta = []
let h = array[0].length
let w = array.length

for (let i=0; i<h; i++) {
  trasposta[i] = []
  for (let j=0; j<w; j++) {
    trasposta[i][j] = array[j][i]
  }
}

console.log(trasposta)

/*
nel primo for ragiono direttamente in termini della trasposta: stabilisco che avrà due nested array
perchè i potrà assumere valori 0 e 1 ovvero un numero di valori pari al numero di elementi presenti
in una qualsiasi delle nested array dell'array principale. Quindi ad ogni ciclo di i creo una nested
array vuota che andrò a popolare con il secondo for.
Nel secondo for popolo la nested array vuota creata: j può assumere tanti valori quante sono le nested
array della array originaria e corrisponderà all'indice di ogni nested array nell'array trasposta. 
Per esempio: 
nel PRIMO CICLO: i=0 e j=0 , creo un'array vuota nella trasposta con indice i e passo al secondo
for del primo ciclo, in cui stabilisco che il primo elemento della prima nested array sarà pari al primo elemento
(j=0) della prima array (i=0) dell'array originaria. Al secondo step avrò però i=0 e j=1 quindi sono nella
stessa nested array ma mi riferisco al secondo elemento (trasposta[0][1]) che sarà uguale al primo elemento
della SECONDA array dell'array originaria (array[1][0]). Al terzo step del primo ciclo avrò che il terzo
elemento della prima array della trasposta (trasposta[0][2]) sarà pari al primo elemento della TERZA 
array dell'array originaria (array[2][0]) e così si conclude il primo ciclo.
nel SECONDO CICLO: questa volta i passa a 1 e creo una nuova array vuota nella trasposta (trasposta[1]=[]).
Come secondo step del secondo ciclo inizio con il secondo for in cui ho i=1 e j=0 e stabilisco che nella seconda
array (della trasposta) appena creata includerò come primo elemento (trasposta[1][0] il secondo elemento della PRIMA array 
dell'array originaria (array[0][1]). Così alla seconda iterazione avrò sempre i=1 mentre j=1 quindi vado a
includere come secondo elemento della seconda array della trasposta (trasposta[1][1]) il secondo elemento della SECONDA array
dell'array originaria (array[1][1]). Infine alla terza iterazione sarà i=1 e j=2 quindi il terzo elemento
della seconda array della trasposta (trasposta[1][2]) sarà uguale al secondo elemento della TERZA array
dell'array originaria (array[2][1]) e così si conclude la trasposizione.

*/


/* TENTATIVO ERRATO
let array = [[1, 2], [3, 4], [5, 6]]
let trasposta = []

for (let i=0; i<array.length; i++) {
  for(let j=0; j<array[i].length; j++) {
    trasposta[j] = []
    trasposta[j][i] = array[i][j]
    
  }
  

}
console.log(trasposta)  / mi stampa solo l'ultimo elemento di ogni nested array
*/