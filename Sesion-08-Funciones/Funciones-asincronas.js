// Funciones asincronas y promesas
// que son: 

function miAsinc() {
    // hace una llmada a una base de datos externa
    //puede darnos algun error 
    // recursos externos
}

// Promesas funciones asincronas, pueden o no ejecutarde de forma correcta

const miPromesa = new Promise((resolve, reject) => {
    const i = Math.floor(Math.random() * 2)
    // si esta todo correto
    if (i !== 0){
        resolve()
    }else{
        reject()
    }
})

miPromesa  
    .then(() => console.log('se ha ejecutado de forma correcta'))
    .catch(() => console.log('ERROR'))
    .finally(() => console.log('YO me ejecuto siempre'))