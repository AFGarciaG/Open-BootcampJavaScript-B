// Metodos mas utilizados con strings
// Como obtener la longitud de un string

let str = 'Hola soy un string';
console.log(str.length)

// Obtener partes de cadenas de caracteres
// slice() substring() substr()

let slice_str = str.slice(5,18)
console.log(slice_str)

let substring_str = str.substring(5, 10)
console.log(substring_str)

let substr_str = str.substr(5,10)
console.log(substr_str)

// Remplazar parte del contenido de una cadena de  texto 
let cadena = 'hola mi nombre es andres'
console.log(cadena)

console.log(cadena.replace('andres', 'samuel'))


let texto_largo = 'Como introducción a Python, instale y configure las herramientas que necesitará para compilar aplicaciones reales.'
console.log(texto_largo.replace('Como','e'))

console.log(texto_largo.replace(/y/g, 'e'))






























