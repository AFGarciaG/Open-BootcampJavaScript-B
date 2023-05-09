// Como trabajar con listas (arrays, arreglos,vectores...)
let var1 = 5
let array = [1, 2, 3, 4, 5, 'hola', true, {id:5}, null, undefined, var1]

console.log(array);

// Acceder a los valores de una arrays a traves de su posicion
// array[indice] => 0,1,2,3,4,5,6...................
console.log(array[0]);
console.log(array[5]);
console.log(array[6]);
console.log(array[7]);

// Metodos para introducir nuevos valores en nuestros arrays
// .push() .unshit() => Mutan el valor de nuestro array
//  valores al final => .push()
array.push('final', 45, 100, false)
console.log(array);

// Valores al principio  => Unshit

array.unshift("inicio", 87, 99)
console.log(array);

// Metodos para eliminar valores en nuestra arrays
// .pop( ) .shift() => Mutan el valor del array

array2 = [1, 3, 'hola', false]

// Valores al final => pop
array2.pop();
console.log(array2)

// Valores al inicio => shift

array2.shift()
console.log(array2)

// Metodo para e    liminar, modificar o añadir valores en nuestra array
// .splice(x, y, z)
const array3 = [1, 2, 3, 4, 5, 6]

// Eliminar valores .splice(indice, valores a eliminar)
array3.splice(2, 1)
console.log(array3);

// Añadir valores .splice(indice, 0, valores)

array3.splice(2, 0,'hola')
console.log(array3)

// Modificar valores .splice(indice, 1, valores)

array3.splice(2, 1, 3)
console.log(array3)




