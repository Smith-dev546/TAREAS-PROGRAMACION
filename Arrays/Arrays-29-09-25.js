const numeros = [10,20,30,40,50];
console.log(numeros);

//Ingresamos un nuevo valor enmedio del array
numeros.splice(2,0,80);
console.log(numeros);

//Imprimir el primer y el yultimo dia de la semana
const dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
let primer = dias[0];
let ultimo = dias[dias.length - 1]; //Con length vemos cuaantos valores tiene el array y le restamos uno para que nos muestre por pantalla el ultimo valor
console.log(primer);
console.log(ultimo);