// carga y sobrecarga de funciones


function saludar() {
    hola()
}

function hola() {
    console.log('hola! soy la funcion hola');
}

saludar()

/// 1. interpretando el codigo de arriba a abajo
// / cargar la funcion global 
// // 2. saludar() global()
// // 3. hola() saludar() global()
// // saludar() global()
// // global()

// function recursiva(){
//     recursiva()
// }

// recursiva()
