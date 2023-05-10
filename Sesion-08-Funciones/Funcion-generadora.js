// 

function* generaI() {
    let id = 0;
    while(true){
        id++
        if (id === 10)
            return id
        yield id

    }
}
// yield se queda esperando hasta que se vuelva a llamar
// objeto generator
// .next obtener un valor
const gen = generaI();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());