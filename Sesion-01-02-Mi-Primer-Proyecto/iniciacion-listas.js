// listas, arrray o arreglo
const lista = [1, "hola mundo", null]
const lista2 = new Array(2, "hola mundo", null)
const lista3 = new Array(3)
lista3[0] = "soy el primer elemento, index 0"
const lista4 = [lista, lista2, lista3]


console.log(lista)
console.log(lista2)
console.log(lista3)
console.log(lista4)
// objetos
const movil = {
    altura: 10,
    anchura: 5,
    marca: "xiaomi",
    iswhite: false,
    contactos:["gorka", "martin", "raul"],
    tarjeta:{
        marca: "sandisk",
        almacenamiento: 32
    },
    "altura-tarjeta": 4
}
movil.anyo = 2019;
movil.marca = "Samsung"

console.log(movil.tarjeta.marca)

// fechas
// Librerias de apoyo moment.js
const Ahora = new Date()
console.log(Ahora)

const fecha_miles = new Date(10) // utilizando lso milisegundos
console.log(fecha_miles)

const fecha_cadena = new Date("march 25 2020")
console.log(fecha_cadena)

const fecha_valores = new Date(2022, 0, 15)
console.log(fecha_valores)

const dia = ahora.getdate()
const mes = ahora.getMontn()
const anyo = ahora.getanyo()
