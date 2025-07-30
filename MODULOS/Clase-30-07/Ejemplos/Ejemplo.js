//Importamos el módulo readline para interactuar con la entrada estándar
//Este código permite al usuario ingresar dos números y muestra la suma de ellos

import readline from 'readline';

//Creamos el interfaz de readline para leer la entrada del usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Realizamos la pregunta al usuario para que pueda ingresar dos números

// rl.question('Ingresa un numero ', (num1) => {
//     rl.question('Ingresa otro numero ', (num2) => {
//         let suma = parseInt(num1) + parseInt(num2);
//         console.log(`La suma de ${num1} y ${num2} es: ${suma}`);
//         rl.close();
//     });
// })

rl.question("Ingrese una temperatura en Celcius ",(celcius)=>{
    let temParse= parseFloat(celcius);
    let Fah= (temParse* 9/5)+32
    console.log('La conversion de la temperatura es: ', Fah);
    rl.close();
    // rl.question("Ingrese un segundo numero ",(n2)=>{
    //     let num1= parseFloat(n1);
    //     let suma = num1+parseFloat(n2);
    //     console.log("El resultado de la suma: ",suma)
    //     rl.close();
    // })
})