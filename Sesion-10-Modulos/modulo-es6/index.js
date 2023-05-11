// import{suma, eleva, nombre } from './modulos/matematicas.js' //importar
import * as modulomatematicas from "./modulos/matematicas.js";
import getAutor, {libro } from "./modulos/licteratura.js";


const sum = modulomatematicas.suma(4, 12)
console.log(sum);

const potencia = modulomatematicas.eleva(2, 21)
console.log(potencia);

console.log(modulomatematicas.nombre);


console.log(getAutor());
console.log(libro);