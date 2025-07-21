// Operadores Aritmeticos

let a = 15;
let b = 4;

console.log("Suma: ", a + b);
console.log("Resta: ", a - b);
console.log("Multiplicacion: ", a * b);
console.log("Division: ", a / b);
console.log("Modulo: ", a % b);

// OPERADORES DE COMPARACION

let edad1 = 20;
let edad2 = 25;

console.log("Edad1 > Edad2?" , edad1 > edad2);
console.log("Edad1 < Edad2?" , edad1 < edad2);
console.log("Edad1 == Edad2?" , edad1 == edad2);
console.log("Edad1 != Edad2?" , edad1 != edad2);
console.log("Edad1 >= Edad2?" , edad1 >= edad2);
console.log("Edad1 <= Edad2?" , edad1 <= edad2);


//OPERAADORES DE ASIGNACION

let puntos = 0;

puntos += 10;
console.log(`El puntaje final es: ${puntos}`);

//puntos -= 5;
//puntos *= 2;

//OPERADORES LOGICO

let tieneTarea = false;
let estudio = true;

let puedeSalir = !tieneTarea && estudio;
console.log(`Puede salir a jugar? ${puedeSalir}`);

//OPERADORES TERNARIOS

let numero = 9;

let resultado = (numero % 2 ===0) ? "Par" : "Impar";

console.log(`El numero es: ${resultado}`);