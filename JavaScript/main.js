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
var bool = suma(6,17,37);
console.log(bool);
nomC("Esteve ", "Amargant ","Blanco");
console.log(numGran(22,222));

function suma(num1, num2, num3) {
  let num = num1 + num2 + num3;
  return num;
}
function nomC(nom, cognom, cognom2) {
    let num = nom + cognom + cognom2 +"";
    console.log(num);
}
function numGran(num1, num2) {
    if(num1 > num2){
        return num1;
    }
    else if (num1 < num2 ){
        return num2;
    }
    else{
        return "Els dos números son iguals";
    }
    
  }