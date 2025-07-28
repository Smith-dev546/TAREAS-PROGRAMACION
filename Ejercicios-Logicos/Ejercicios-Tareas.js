//Ejercicio 1      ==>Entrada al cine

let ticket = true;
let edad = 15;

let entrada = (ticket && edad >= 13) ? "Disfruta de nuestra pelicula" : "Lo sentimos, No puedes ingresar a esta edicion";

console.log(entrada);

//Ejercicio 2   ==> Descuento especial en el Supermercado

let age = 60;
let discapacidad = true;

let descuento = ( age >= 60 || discapacidad) ? "Si aplicas a nuestros descuentos" : "Lo sentimos, Los descuentos no aplican";

console.log(descuento);

//Ejercio 3 ==> Aprobacion de notas estudiante

let nota = 6;
let recuperacion = true;

let aprobacion = (nota >= 7 || recuperacion) ? "Felicidades! Aprobastes este curso" : "Lo sentimos, No lograstes aprobar este curso";

console.log(aprobacion);
