//Ejercico 2
//Importamos el modulo readline
import readline from 'readline';

//Creamos el interfaz de readline para leer la entrada del usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese la cantidad de kilometros ",(kilometros)=>{
    let millas = (parseFloat(kilometros) * 0.621371);
    console.log(`Laa distancia de kilometros a millas es de: ${millas.toFixed(2)} millas `);
    rl.close();

});