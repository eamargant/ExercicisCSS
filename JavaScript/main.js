/*
let si = "Esteve Amargant Blanco";
console.log(si);
console.log(typeof si);

alert(si); 
let person = prompt("Introduce tu nombre", "Esteve Amargant Blanco");
alert(person);*/
var nom = "Esteve", edad = 22, home = true, dona = false, dni = null, direccio, si = Symbol("No es pot cambiar");
const persona = {name: "Esteve", apellido: "Amargant", edad: 22, Dni: "39422511M", sexo: "A todas horas"}
console.log(nom);
console.log("Tipo de variable " + typeof nom);
console.log("----------------------");
console.log(edad);
console.log("Tipo de variable " + typeof edad);
console.log("----------------------");
console.log(home);
console.log("Tipo de variable " + typeof home);
console.log("----------------------");
console.log(dona);
console.log("Tipo de variable " + typeof dona);
console.log("----------------------");
console.log(dni);
console.log("Tipo de variable " + typeof dni);
console.log("----------------------");
console.log(direccio);
console.log("Tipo de variable " + typeof direccio);
console.log("----------------------");
console.log(si.description);
console.log("Tipo de variable " + typeof si);
console.log("----------------------");
console.table(persona);