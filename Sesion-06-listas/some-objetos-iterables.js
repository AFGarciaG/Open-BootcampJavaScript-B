// .sone() para saber si los elementos de la lista cumo,en la condicion

const arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 42, 35, 7865, 23, -2]

const res = arrayNum.some( valor => valor < 0)

console.log(res);

const existe = arrayNum.some(valor => valor === 7)

console.log(existe);

const listaObjetos = [
    {nombre: 'andres', edad: 23},
    {nombre: 'suarez', edad: 37},
    {nombre: 'miguel', edad: 63},
    {nombre: 'andres', edad: 23},
    {nombre: 'amalia', edad: 4},
]

const existeMiguel = listaObjetos.some(persona => persona.nombre === 'miguel')

console.log(existeMiguel);

// como obtener una lista a partir de un obto iterable

const str = 'hola soy andres'
console.log(str[5]);

const ar_str = Array.from(str)
console.log(ar_str);

const set = new Set([2, 3, 'hola', 4])
const ar_set = Array.from(set)
console.log(ar_set);


// obtener un iterable de los indices del array
const keys = arrayNum.keys()
console.log(keys);

const ar_keys = Array.from(keys)
console.log(ar_keys);