import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function conversionTemperatura(celsius){
    return (celsius * 9 / 5) + 32;
}

rl.question("Ingreses las tempreatura en grados Farenheit: ",(celsius)=>{
    let fahrenheit = conversionTemperatura(parseFloat(celsius))

    console.log(`la conversion de celsius a Fahrenheit es: ${fahrenheit}`);

    rl.close();
});