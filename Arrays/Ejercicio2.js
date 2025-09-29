import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/*  Ejercicio 1

//Solicitar al usuario tres nombres para guardarlos en un array y mostrar cada uno

let nombres=[];
rl.question("Ingrese el primer nombre: ",(nombre1)=>{
    nombres.push(nombre1);

    rl.question("Ingrese el segundo nombre: ",(nombre2)=>{
    nombres.push(nombre2);

        rl.question("Ingrese el tercerr nombre: ",(nombre3)=>{
         nombres.push(nombre3);

            console.log("Los nombres ingresados son:");
            console.log("Primer nombre: ", nombres[0]);
            console.log("segundo nombre: ", nombres[1]);
            console.log("Tercer nombre: ", nombres[2]);

            rl.close();

        })

    })

})

*/

/*

//Ejercicio2

//Pedir al usuario 3 numeros y calcular el promedio

let numeros =[];

rl.question("Ingrese el primer numero: ",(num1)=>{
    numeros[0]= parseInt(num1)

    rl.question("Ingrese un segundo numero: ",(num2)=>{
        numeros[1]= parseInt(num2)

        rl.question("Ingrese un tercer numero: ",(num3)=>{
            numeros[2]= parseInt(num3) 

            let promedio = (numeros[0] + numeros[1] + numeros[2])/3

            console.log(`El promedio de los tres numeros ingresados es: ${promedio}`)

            rl.close();
        })
    })
})

*/

//Ejercicio 3

//Solicita al usuario las temperaturas de tres días y muestra cuál fue la más alta

let temperaturas = [];

rl.question("Ingrese la temperatura del primer dia: ", (temp1)=>{
    temperaturas[0] = parseFloat(temp1)

    rl.question("Ingrese la temperatura del segundo dia: ", (temp2)=>{
    temperaturas[1] = parseFloat(temp2)

        rl.question("Ingrese la temperatura del tercer dia: ", (temp3)=>{
        temperaturas[2] = parseFloat(temp3)

        const tempMaxima = Math.max(temperaturas[0], temperaturas[1], temperaturas[2]);
        console.log(`La temperatura mas alta es: ${tempMaxima}`);

        rl.close();

        })
    })
})