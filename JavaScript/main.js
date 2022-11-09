/*
let si = "Esteve Amargant Blanco";
console.log(si);
console.log(typeof si);

alert(si); 
let person = prompt("Introduce tu nombre", "Esteve Amargant Blanco");
alert(person);
var nom = "Esteve", edad = 22, home = true, dona = false, dni = null, direccio, si = Symbol("No es pot cambiar");
const persona = {name: "Esteve", apellido: "Amargant", edad: 22, Dni: "39422511M", sexo: "A todas horas"}
console.table(persona);*/

var stringProba = "que cosas pasan";
var paraula1 = "academia";
var paraula2 = "escuela";
stringProba = stringProba.replaceAll('a', "o");
console.log(stringProba);
empiezaPor(paraula1);
empiezaPor(paraula2);
hola("Hola");
console.log("--------------");
hola("hola");



function empiezaPor(params) {
    let bool = params.startsWith('aca');
    console.log(params + " es " + bool);
}

function hola(params) {
    if(params == "Hola" || params == "hola"){
        console.log(params);
        console.log(params);
        console.log(params);
    }
}

