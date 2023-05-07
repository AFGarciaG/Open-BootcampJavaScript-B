//  Bucles for

// i = i + 1
// i += 1
// i++

for (let i = 0; i < 10; i++){
    // Esto es el bucle
    console.log(i)
}

let lista = [1, 2, 3, 4, 6, 10, 12]
for (let i = 0; i< lista.length; i++){
    console.log(lista[i] * 2)
}

// Estructura for...of
for (let valor of lista){
    console.log(valor)
}

// Estructura forEach
lista.forEach(valor =>{
    console.log(valor)
})

// Estructura for...in
let persona = {
    nombre: "andres",
    apellido: "garcia",
    edad: 34,
    isDeveloper: true,
}
let prop = "edad";
console.log(persona.nombre);
console.log(persona[prop])

for (let propiedad in persona){
    console.log(propiedad)
    console.log(persona)
    console.log(persona[propiedad])
}

