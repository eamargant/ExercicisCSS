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


//el random de por si devuelve un numero decimal entre el 0 y el 1, asi que si queremos un rango tenemos que hacerlo manual.
var numRandom = Math.random()* 10 +1;

console.log("Número random: "+ Math.trunc(numRandom));
console.log("-----------------");
console.log("Pi redondeado: "+ Math.trunc(Math.PI));

