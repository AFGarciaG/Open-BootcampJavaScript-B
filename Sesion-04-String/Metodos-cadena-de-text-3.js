// Metodos de cadenas de texto (parte 3)
// https://regexr.com

let texto_largo = 'Como introducción a Python,los instale y configure las herramientas que los necesitará para compilar aplicaciones  los realesgure las herramientas que los nec'

console.log(texto_largo.match(/los/g))

// existe la palabra dentro del texto
console.log(texto_largo.includes("terremoto"))

// saber si el texto empieza con una palabra 

console.log(texto_largo.startsWith('Como'))
console.log(texto_largo.startsWith('python'))


// saber si el texto termina con una palabra

console.log(texto_largo.endsWith('nec'))
console.log(texto_largo.endsWith('para'))

