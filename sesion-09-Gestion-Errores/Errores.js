//  throw (lanzar) devolver error, string throw new error

const miFuncion = val => {
    if(typeof val === 'number'){
        return val * 2
    } //return false
    throw new Error('El valor debe ser tipo numero')
}
console.log(miFuncion(2));
console.log(miFuncion(8));
console.log(miFuncion(8));


const numero = 8; //  numero = '8';
try {
    // codigo que puede fallar
    console.log('Esta ejecutandose de manera correta');
    const doble = miFuncion(numera)
    console.log(doble)
} catch (e) {
    // en caso de fallar, quiero que ejecutes
    console.error(`El valor de e es: ${e}`);
    console.error('ERROR!');
}finally{
    console.log('esto se va a ejecutar tanto si se produce un error, como si no existe ninguno');
}

// InternalError, SyntaxError, TypeError, RangeError y ReferenceError
// Pagina Error JavaScrip
// Problema interno 
// Fallo de sintanxis
// Pasar un numero cuando esperamos un boleano, viseversa type incorreto
// sobrepasando una posicion ej: 10 objetos y buscar el rango 12
// no exite esa referencia que buscamos acceder ej: ''doble'' no existe 


