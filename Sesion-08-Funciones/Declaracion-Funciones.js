// Funciones
// Que son las funciones, como se declaran y como se utilizan
// bloques de codigo que se ejecutan con un fin en especifico


saludar(2, 'hola', false)
function saludar(parametro_1, parametro_2, parametro_3) {
    console.log('hola');
}


const non = 'gorka'
saludo(non) // sin parametro undefined 

function saludo(nombre){
    console.log(`hola ${nombre}`);
}

// //

let nombre_2 = 'juan'
console.log(nombre_2);

despedir(nombre_2)

function despedir(nombre) {
    nombre = 'Diego'
    console.log(`Adios ${nombre}`);
}

// // pasando una variable por valor o preferencia 

let persona = {nombre: 'juan', apellido: 'gonzales'}

function saludarPersona(objeto) {
    objeto.apellido = 'villar'
    console.log(`hola ${objeto.nombre} ${objeto.apellido}`);
}

saludarPersona(persona)

// //

saludo()

// // parametros por defecto

function imprimeNumero(numero = 7) { ////parametros opcionales, o por defecto
    console.log(numero)
}

imprimeNumero()

//  // Parametros inderteminados

function imprimir( ...parametro){
    console.log(parametro);
}
imprimir(1,2,3,4,5, 'hola', {id:9})


//  // suma

function suma(...nums){
    // console.log(typeof nums[2]); object
    // console.log(nums[2]); 3
    // console.log(...nums); 1 2 3 4 //valor express
    return (nums.reduce((a,b) => a+b))
}

const s = suma(1, 2, 3, 4, 9, 15, 16)
console.log(s);

//  /////////////////

let variable = 'hola'

function multiplicar(a = 0, b = 0) {
    console.log(variable);
    let variabel_interna = 'adios'
    console.log(variabel_interna);
    return a * b
}

console.log(multiplicar(4, 9))


