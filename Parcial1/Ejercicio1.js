//Ejercicio 1

//Creamos el pobjeto empleado con sus propiedades
const empleado = {
    nombreCompleto : "Ana Lucia Rodriguez",
    edad : "28 años",
    salario : 1380.58,
    activo : true,
    fechaIngreso : 2025,
    Habilidaades : ["Excel", "Contabilidad", "Anlisis"]
}

//Agregamos la propiedaad departamento con valor de "Contabilidaad"
empleado.departamento = "contabilidaad";
//console.log(empleado)

//Modificamos el salario y se lo aumentamos a un 15%
empleado.salario = empleado.salario *1.15;
//console.log(empleado)

//Eliminamos la propiedad de activo
delete empleado.activo;
//console.log(empleado)

//Mostramos por pantalla el resultado al usuario usando template literals
console.log(`=== FICHA DE EMPLEADO === `);
console.log(`Nombre: ${empleado.nombreCompleto}`);
console.log(`Edad: ${empleado.edad}  Salario: $${empleado.salario} dolares`);
console.log(`Departamento: ${empleado.departamento}`);
console.log(`Año de ingreso: ${empleado.fechaIngreso}`);
console.log(`Habilidades: ${empleado.Habilidaades}`);

