//Sintaxis de una funcion
//function miFuncion(){
    //Procesos a realizar
//}

//Llamamos a una funcion
//miFuncion();

//function miSaludo(){
   // console.log("Hola, desde JS");
//}

//miSaludo();

//Creamos una funcion con parametros

//function saludar(nombre){
   // console.log("Holiwis " + nombre + " Bienvenido");
//}

//saludar("Smith");

//Funcion con Hosting

//let EnviarNombre = miSaludoObtenido("Smith")
//console.log(EnviarNombre)

//function miSaludoObtenido(nombre){
 //   let mensaje = "Hola " + nombre;

 //   return mensaje;
//}

//Funciones Anonimas => Despues de la palabra reservada Function  no tiene nombre como tal y se guardan en una variable comom tal

//let saludo = function(nombre){
 //   saludar = `Hola ${nombre}`

//    return saludar
//}

//console.log(saludo('Smith'));

//Funciones de Flecha

let Saludo = (nombre) => {
    return `Saludos ${nombre} `;
}

console.log(Saludo(`Jose`));

//Funciones flechas delimitadas

let Saludo2 = nombre2 => `Saludos ${nombre2}`;
console.log(Saludo2(`Smith`));

//Ejercicio de Ejemplo

//Funcion flecha para realizar una suma
let sumar = (num1, num2)=>{
    let resultado = num1 + num2;
    return resultado;
}

console.log("El resultado de la suma es: ", sumar(10, 5));


//Mismo ejercicio pero mas delimitado => Esto es Retorno implicito

let suma = (n1, n2)=> n1 + n2;
console.log(suma(5,3));