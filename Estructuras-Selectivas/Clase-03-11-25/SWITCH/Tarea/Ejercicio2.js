import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function SaludoHora(hora){
    if(hora >= 6 && hora <= 11){
        return "Buenos dias";
    }else if(hora >= 12 && hora <= 17){
        return('Buenas tardes');
    }else if(hora >= 18 && hora <= 23){
        return ('Buenas noches');
    }else if(hora >=0 && hora <= 5){
        return ('A dormir');
    }else{
        return('Hora invalida');
    }
}

rl.question('Ingrese la hora actual (0 -23): ', (horaActual) =>{
    const hora = parseFloat(horaActual);

    console.log(SaludoHora(hora));

    rl.close();
})