// Sesion - 4 - strings (cadenas de caracteres)

let str_dbl = "Hola soy un texto con comillas dobles";
let str_sng = `Hola soy texto con comillas simples`;

console.log(str_dbl);
console.log(str_sng);


let str_commillas = "El otro dia me dijo literalmente \"css\" "
console.log(str_commillas)

let str_comillas_simples = 'El otro dia me dijo literalmente "css"'
console.log(str_comillas_simples)

let comillas_dobles = "El otro dia me dijo literalmente 'css'"
console.log(comillas_dobles)

str_comillas_simples_2 = 'El otro dia me dijo literalmente \'css\''
console.log(str_comillas_simples_2)

/////// Comillas invertidas (backticks)

let str_backticks = `Esto es un string con backticks`

console.log(str_backticks)

let nombre = "inide"
let saludo = `hola ${nombre} bienvenido`
console.log(saludo)


// plantillas html 

let plantilla = `
<html> 
    <titulo> esta pagina web es de ${nombre} </titulo>
    <p> parrafo es esto xd </p>
</html>
`
console.log( plantilla)

// introducion html

let libro_favoritos = ["hacking","cibersegurity","el poder del tiempo"]