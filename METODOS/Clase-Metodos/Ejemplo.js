//Un sistema de gestion de pedidos recibe códigos de seguimiento en el formato: PED-2025-0045, se necesita extraer el año del pedido y el número de oren usando el metodo substring().
//Requisitos:
//1. Estraer el año del pedido (2025) y el número de orden (0045) usando substring().

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Ingrese el codigo del pedido( ej: PED-2025-0045):",(codigo)=>
{
    const año = codigo.substring(4,8);          // Obtenemos el anio del pedido
    const numeroOrden = codigo.substring(9);     //Obtenemos el numero de orden

    //Mostramos por consola el año y numero de orden del pedido
    console.log(`Año del pedido: ${año}`);
    console.log(`Numero de orden: ${numeroOrden}`);

    rl.close();
})