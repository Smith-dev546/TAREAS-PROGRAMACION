//Ejercico 3
//Importamos el modulo readline
import readline from 'readline';

//Creamos el interfaz de readline para leer la entrada del usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingresa el precio unitario",(precio) =>{
    rl.question("Ingrese la cantidad de productos que lleva ",(cantidad) =>{
        const total = (parseFloat(precio) * parseFloat(cantidad))

        console.log(`El total a cancelar es de $${total} dolares`)
           rl.close();
    });
});