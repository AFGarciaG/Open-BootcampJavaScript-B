// iterar los valores de una lista

const array = ['hola', 2, 5, 90, false, undefined]

// forma antigua poco eficiente
for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}

// Forma ES6 (mas eficiente)
array.forEach(valor  => {
    console.log(valor)
});

let suma = 0;
const arraynums = [3, 4, 6, 7, 8, 8, 77, 93]
arraynums.forEach(valor  => {
    suma += valor
    console.log(valor)
});

console.log(suma);

// Busqueda de un valor dentro de una lista .find()
// Quiero encontrar el elemento 90 

const variable = array.find(valor =>{
    if(valor === 90){
        return trues
    }
})
console.log(variable);

const listaObjetos = [
    {nombre: 'andres', edad: 23},
    {nombre: 'suarez', edad: 37},
    {nombre: 'miguel', edad: 63},
    {nombre: 'andres', edad: 23},
    {nombre: 'amalia', edad: 4},
]

const objeto = listaObjetos.find(o =>{
    return o.nombre === 'miguel'
    
})
console.log(objeto.edad);

const {edad} = listaObjetos.find(o => o.nombre === 'miguel')
console.log(edad);