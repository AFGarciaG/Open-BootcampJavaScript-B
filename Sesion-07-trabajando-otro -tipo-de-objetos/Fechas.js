// Trabajando con fechas

const fecha = new Date()

console.log(fecha);

// Atencion los meses inicializan en 0 (0-Enero, 11-Diciembre)
const fecha2 = new Date(2000, 1, 23, 2, 23, 54, 102)

console.log(fecha2);

const fecha3 = new Date(-1000000000) //milisegundos
console.log(fecha3);

// string
const fecha4 = new Date('October 13, 1979 12:15:12')
console.log(fecha4);


// Comparacion fechas
console.log(fecha < fecha2)

const fecha5 = new Date(2000, 1, 23, 2, 23, 54, 102)

console.log(fecha2 === fecha5) /////ERROR- no se puede comparar fechas de esta forma

// metodo .gettime()  -->convertir fecha a milisegundos

console.log(fecha2.getTime() === fecha5.getTime()); /// Esta es la forma de comparar la igualdad entre fechas

////// Como obtener el dia el mes y el año de una fecha 


//  Obtener del dia .getDate()
console.log(fecha2.getDate());

// Obtner el mes .getMonth()
console.log(fecha2.getMonth() + 1);

// Obtener el año
console.log(fecha2.getFullYear());


// Truco si trabajas con Front, mostrar fecha en un string

console.log(fecha2);

// .tolocalDateString
// usando locales ----> pagina web

console.log(fecha2.toLocaleDateString());