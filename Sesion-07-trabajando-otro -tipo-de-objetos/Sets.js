// Sets o conjuntos (en español)

const array = [1, 2, 3, 4, 5, 6, 1, 2, 5, 'hola', {id:5}]

console.log({id:5} === {id:5});

const miSet = new Set(array)

// set cojunto no ordenado de valores unicos
console.log(array);
console.log(miSet);

// añadir  .add

miSet.add(9)
console.log(miSet);
miSet.add(10)
console.log(miSet);

// eliminar .delete

miSet.delete('hola')
console.log(miSet);

// elimnar todo .clear

// miSet.clear()
// console.log(miSet);

//  saber si contiene un valor  .has()
// console.log(array.includes(2)) como en los arrays

console.log(miSet.has(4));
console.log(miSet.has(40));

// tamaño de un set .size propiedad

console.log(miSet.size)

miSet.forEach(valor =>{
    console.log(valor);;
})
// metodo values
const it_miSet = miSet.values()
console.log(it_miSet)

const ar_miSet = [ ...miSet]
console.log(ar_miSet);





