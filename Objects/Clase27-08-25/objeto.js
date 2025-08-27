//const nombre = "Eli";
//const edad = 30;
const altura = 1.50;

//Creacion de object literal
const persona = {
    nombre: "Eli",
    edad: 30,
    altura: 1.50
}

//Imprimimos en consola el objeto
console.log(persona)

//Acceder a las propiedades del objeto
//Acceso por el punto
console.log(persona.nombre)

//Acceso por corchete
console.log(persona['edad'])

//Agregamos mas propiedades al objeto
persona.apellido = "Gonzalez";

console.log(persona);

//Eliminando propiedades de un objeto
delete persona.altura;
console.log(persona);

//Modificamos el valor de una propiedad o llave
persona.nombre = "Smith";
console.log(persona);

//Asignamos el valor del objeto a una nuevaa variable
const nom =persona.nombre;
console.log(nom);

//Destructuring
//const {nombre} = persona;
//console.log(nombre)

//Reasignamos edad
//const {edad} = persona;
//console.log(edad);

//Creamos variables de varias propiedades
const {nombre, edad} = persona;
console.log(nombre);
console.log(edad);