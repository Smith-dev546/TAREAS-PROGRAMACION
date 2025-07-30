//Ejercico 1
//Importamos el modulo readline
import readline from 'readline';

//Creamos el interfaz de readline para leer la entrada del usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Pedimos las notas al usuario para calcular el promedio

rl.question("Ingrese la primera nota ",(nota1)=>{
    rl.question("Ingrese la segunda nota ",(nota2)=>{
        rl.question("Ingrese la tercera nota ",(nota3)=>{
    let promedio = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3 ;
    console.log(`El promedio de las tres notas ingresadas es: ${promedio} `);
    rl.close();

        });
    });
});
