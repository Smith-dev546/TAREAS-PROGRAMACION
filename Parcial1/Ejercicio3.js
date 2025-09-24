//Ejercicio 3

//Creamos el objeto vehiculo con sus propiedades
const vehiculo ={
    marca : "Toyota",
    año : "2025",
    seguro : {
        compañia : "Seguros JS",
        numPoliza : "12345678",
        vigente : true
    }
}

//Cambiamos el valor de la compañia
vehiculo.seguro.compañia = "Seguros JM";
//console.log(vehiculo)

//Agregamos una propiedad en seguro llamada fachaVencimiento
vehiculo.seguro.fechaVencimiento = "2026-12-31";
//console.log(vehiculo)

//Eliminamos la propiedad vid=gente
delete vehiculo.seguro.vigente;
//console.log(vehiculo)

//Mostramos por consola los resultados al usuario usando template literals
console.log(`=== FICHA DE VEHICULO ===`);
console.log(`Marca del Vehiculo: ${vehiculo.marca}`);
console.log(`Año: ${vehiculo.año}`);
console.log(`Compañia de Seguros: ${vehiculo.seguro.compañia}`);
console.log(`Numero de Poliza: ${vehiculo.seguro.numPoliza}`);
console.log(`Compañia de Seguros: ${vehiculo.seguro.compañia}`);
console.log(`Fecha de Vencimiento: ${vehiculo.seguro.fechaVencimiento}`);



