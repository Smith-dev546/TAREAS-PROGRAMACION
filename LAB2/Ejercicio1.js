import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let gastos = [];

rl.question("Ingrese el primer gasto de este mes: ", (gasto1) =>{
    gastos[0] = parseFloat(gasto1);

    rl.question("Ingrese el segundo gasto de este mes: ", (gasto2) =>{
    gastos[1] = parseFloat(gasto2);

        rl.question("Ingrese el tercer gasto de este mes: ", (gasto3) =>{
    gastos[2] = parseFloat(gasto3);

            let totalGastos = (gastos[0] + gastos[1] + gastos[2]);

            console.log(`El primer gasto del mes fue de: ${gastos[0]}`);
            console.log(`El segundo gasto del mes fue de: ${gastos[1]}`);
            console.log(`El tercer gasto del mes fue de: ${gastos[2]}`);
            console.log(`El total gastado en este mes es: ${totalGastos}`);

            rl.close();
        })
    })
})