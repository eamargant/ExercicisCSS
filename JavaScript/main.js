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
var array = ["🍔","🌯","🍣","🍕","🍜","🍱","🍙","🍘","🥩"];
var posicio;
let i =0;
array.find(item => {
    if (item == "🍕"){
        posicio = array.indexOf(item);
    }
});
console.log(posicio);
array.fill("🍺",posicio);
array.forEach(element => {
    console.log(element);
});

