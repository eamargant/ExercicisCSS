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
var myName = "Esteve Amargant Blanco", bool = true;
const funcio = (nom) =>{
    return nom;
}
console.log(funcio(myName));

function funko(numero) {
    console.log(numero);
}
funko(bool);
const saludar = function(...params) {
    params.forEach(element => {
        console.log(element)
    });
};
saludar(1,2,3,4,5,6,7,8,9,10);