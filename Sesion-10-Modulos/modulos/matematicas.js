
// formas de importar/exportar modulos
// 1. CommonJS - require
//  2. Import ES6 - inport 

//  modulo --> una parte de codigo que se pude reutilizar en diferentes partes del programa

function suma(a,b){
    return a + b
}


function multiplica(a , b){
    return a * b
}


function eleva(a,  b){
    return a ** b
}

function factorial(a){
    // Factorial de 5: 5 *4 *3 *2 *1
    factorial = 1
    for (let i = 1; i <= a; i++){
        factorial *= i;
    }
    return factorial;
}


module.exports = {
    suma,
    multiplica,
    eleva,
    factorial
}


