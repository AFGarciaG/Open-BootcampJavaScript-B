// Principales operaciones aritmeticas
let a = 3.5;
let b = 4.8;

// suma (+)
console.log(a + b);
// resta(-)
console.log(a -  b);
// multiplicacion (*)
console.log(a * b);
// Divicion (/)
console.log(a / b);

// Representacion de los numeros de cadenas de texto 
console.log(typeof a)
let a_b = a.toString()

console.log(a_b)
console.log(typeof a_b)

// Redondeo de numeros decimales
let c = 3.3;
let d = c * 3

console.log(d)

// .toFixed(x) - limitar el numero de decimales al valor x
console.log(d.toFixed(0))
console.log(typeof d.toFixed(0))

let e = 1839.12231233
let f = 120000
console.log(e.toFixed(0))
console.log(f.toFixed(3))

// .toPrecision(x)

console.log(e.toPrecision(4))
console.log(f.toPrecision(3))


