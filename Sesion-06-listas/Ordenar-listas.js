// .sort()  --> MODIFICA EL ARRAY

const array = [2, 5, 9, 15, 1, 2, 0, 4]

console.log(array);

array.sort((a, b) =>{
    if (a < b){
        return -1
    }else if(a > b){
        return +1
    }else{   // a === b
        return 0
    }
})

console.log(array);


//  Ordenar unicamente arrays numericos

const arrayNumericos = [4, 1, 3, ,7, 3, 56, 1, 506, 10]

arrayNumericos.sort((a, b) => b - a )

console.log(arrayNumericos);


// Interensate en arrays de objetos

const listaObjetos = [
    {nombre: 'andres', edad: 23},
    {nombre: 'suarez', edad: 37},
    {nombre: 'miguel', edad: 63},
    {nombre: 'andres', edad: 26},
    {nombre: 'amalia', edad: 4},
]

listaObjetos.sort((a,b) => {
    if (a.edad < b.edad){
        return -1
    }else if(a.edad > b.edad){
        return +1
    }else{
        return 0
    }
})
console.log(listaObjetos);
