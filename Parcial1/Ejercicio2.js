//Ejercicio 2
 
//Creamos el objeto computadora con sus propiedades
const computer = {
    marca: "Lenovo",
    modelo : 123,
    especificaciones : {
        procesador : "RYZEN 7",
        ram : "15GB",
        almacenamiento : "512 GB"
    }
}

//Modificamos la propiedad ram
computer.especificaciones.ram = "16GB";
//console.log(computer)

//Agregamos dentro de especificaiones la propuiedad llamadda ASO
computer.especificaciones.ASO = "Windows 11";
//console.log(computer)

//Eliminamos la propiedad almacenamiento 
delete computer.especificaciones.almacenamiento;
//Console.log(computer)

//Mostramos en consola los resultyados al usuario usando tremplate literals
console.log(`=== FICHA DE COMPUTADORA ===`);
console.log(`Marca de la computadora: ${computer.marca}`);
console.log(`Modelo de la computadora: ${computer.modelo}`);
console.log(`Procesador: ${computer.especificaciones.procesador}`);
console.log(`RAM: ${computer.especificaciones.ram}`);
console.log(`Sistema Opertivo en uso: ${computer.especificaciones.ASO}`);
