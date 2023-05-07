// Metodos de cadenas de texto parte 2

let input = 'Escorpio'
let db = 'escorpio'


// tolowerCase() o toUpperCase

console.log(input.toLowerCase())
console.log(db.toUpperCase())
console.log(db.toLocaleLowerCase())
console.log(input.toLowerCase() === db.toLowerCase())
console.log(input.toUpperCase() === db.toUpperCase())

// formas de contatenar dos cadenas de caracteres 

let str_1 = 'Hola soy la primera cadena.'
let str_2 = 'Y yo soy la segunda cadena'

console.log(str_1.concat(' ',str_2))
console.log(str_1 + " " + str_2)

console.log(`${str_1} ${str_2}`)

// Eliminar espacios al principio y al final

let str_3 = '  Hola soy str con espacio al final.  '

console.log(str_3.length)
// trin()
console.log(str_3.trim().length)
console.log(str_3.trimStart().length)
console.log(str_3.trimEnd().length)

// Obtener el caracter que hay en cierta posicion 

let str_4 = 'hola soy el str numero 4' //['h','o','l','a',' ', 's'......]
console.log(str_4.charAt(5))
console.log(str_4[5])

// Obtener la posicion de una palabra dentro de una cadena de caracteres

let str_5 = 'hola soy andres y me gusta el surf y andres come pudin'
console.log(str_5.indexOf("andres"))
console.log(str_5.charAt(5))
console.log(str_5.lastIndexOf("andres"))











