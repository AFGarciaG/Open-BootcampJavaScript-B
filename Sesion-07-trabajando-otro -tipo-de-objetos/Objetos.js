// Trabajando con objetos

const obj = {
    id: 4 ,
    nombre: 'juan' ,
    apellido: 'gonzales',
    isDev: true,
    libro_favoritos: ['odin', 'ciberseguridad'],
    '4-juegos': [1, 2, 3, 4]
}

// acceder a los items de los objs

console.log(obj.id);
console.log(obj["4-juegos"]);

const prop = 'isDev'
console.log(obj[prop]);

// cambio de obj y obj2, mismo sitio de la memoria
const obj2 = obj;

console.log(obj2);

obj2.nombre = 'iñigo'

console.log(obj2.nombre);
console.log(obj);

let val1 = 4
let val2 = val1

val2 = 6

console.log(val1);
console.log(val2);

// copiar o duplicar un obj dentro de otro como en las listas

const obj3 = {...obj}

console.log(obj3);
console.log(obj3.nombre);

obj3.nombre = 'gorka'

console.log(obj.nombre);
console.log(obj3.nombre);


// Como ordenar listas de objetos en funcion de una propiedad,variable....

const lsitaPeliculas = [
    {titulo: 'lo que el viento se llevo', año: 1939},
    {titulo: 'Titanic', año: 1997},
    {titulo: 'Moana', año: 2016},
    {titulo: 'El efecto mariposa', año: 2004},
    {titulo: 'TED', año: 2012}
]
console.log(lsitaPeliculas);

// ordenar metodo .sort() ----> Muta el valor de la lista original

lsitaPeliculas.sort((a, b) => a.año - b.año)
console.log(lsitaPeliculas);
