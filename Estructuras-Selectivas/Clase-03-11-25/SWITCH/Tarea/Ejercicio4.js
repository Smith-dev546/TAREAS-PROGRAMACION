import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function CalculoTarifa(tiempo){
    let tarifa;

    if (tiempo >= 0 && tiempo <= 1){
        tarifa = 1.00;
    }else if (tiempo >= 2 && tiempo <= 4){
        tarifa = 5.00;
    }else if (tiempo > 4){
        tarifa = 10.00;
    }else{
        console.log('Tiempo invalido');
    }

    return console.log(`La tarifa a cancelar es de: $${tarifa.toFixed(2)}`);

}

rl.question('Ingrese el tiempo de estacionamiento en horas: ', (Tiempo) =>{
    const tiempo = Number(Tiempo);

    CalculoTarifa(tiempo);

    rl.close();
})