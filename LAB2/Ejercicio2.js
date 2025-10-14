import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let litros = [];

rl.question("Ingrese el total de litros consumidos en su primer viaje: ", (litro1) =>{
    litros[0] = parseFloat(litro1);

    rl.question("Ingrese el total de litros consumidos en su segundo viaje: ", (litro2) =>{
    litros[1] = parseFloat(litro2);

        rl.question("Ingrese el total de litros consumidos en su tercer viaje: ", (litro3) =>{
        litros[2] = parseFloat(litro3);

            let promedioLitros = (litros[0] + litros[1] + litros[2])/3;

            console.log(`El promedio de litros consumidos es de: ${promedioLitros} litros`);

            rl.close();
        })
    })
})