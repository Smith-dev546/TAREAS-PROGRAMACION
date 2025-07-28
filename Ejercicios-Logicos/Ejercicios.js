//Ejercicio 1   ==> Verificador de votacion

let edad = 20;
let tieneDUI = true;

let puedeVotar = (edad >= 18 && tieneDUI ) ? "Si puedes votar" : "No puedes votar aun";

console.log(`Puedes votar en las siguientes elecciones? ${puedeVotar}`);

//Ejercicio 2   ==> Descuento en el SuperMarket

let años = 25;
let membresia = true;

let descuento = (años >= 30 || membresia) ? "Aplicas al descuento de nuestro super" : "Lo sentimos, aun no aplicas a nuestros descuentos";

console.log(descuento);

// Ejercicio 3  ==> Entrada a Montania Rusa

let age = 12;
let altura = 1.60;

let entrada = (age >= 12 && altura === 1.60) ? "Si puedes ingresar a nuestra montaña rusa " : "Lo sentimos, Aun no puedes ingresar";

console.log(entrada);