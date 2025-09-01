//Creamos el objeto estudiante
const estudiante ={
    nombre : "Smith",
    apellido : "Mendez",
    edad : "18 años",
    //Creamos y anidamos el objeto direccion
    direccion :{
        pasi: "El Salvador",
        calle: "Los almendros",
        numCasa : 6
    }
}

//Acceso al objeto
console.log(estudiante);

//Accedemos al objeto anidado (direccion)
console.log(estudiante.direccion);

console.log(estudiante['direccion']);

//Agregamos una nueva propiedad al objeto
estudiante.colorFavorito = "Azul";
console.log(estudiante);

//Agregamos una nueva propiedad al objeto anidado
estudiante.direccion.potal = 503;
console.log(estudiante['direccion']);

//Modificamos las propiedades de un objeto nidado
estudiante.direccion.numCasa = 20;
console.log(estudiante['direccion']);

//Eliminamos propiedadess del objeto anidado
delete estudiante.direccion.numCasa;
console.log(estudiante['direccion'])