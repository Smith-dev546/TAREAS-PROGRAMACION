//Structure FOR

/*
for(let i = 1; i<=5; i++){
    console.log(i);
}
    */

//Ejercicio 2

/*
let suma = 0;
for(let i=1; i<=10; i++){
    suma = suma + i;

    //console.log(suma);
}

console.log(`La suma total es: ${suma}`);

*/

//Ejercicio 3
/*

import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Ingrese un numero: ",(num)=>{
    let numero = parseFloat(num);

    for(let i = 1; i <= numero; i ++){
        console.log(i);

    }
    rl.close();
})

*/

//Ejercicio 4

import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Ingrese un mensaje: ",(mensaje)=>{
    rl.question("Ingrese la cantidad de vesces que desea repetir el mensaje: ",(veces)=>{
        veces = parseFloat(veces);

        for(let i=1; i <= veces; i++){
            console.log(`${i}. ${mensaje}`);
        }

        rl.close();
    })
})