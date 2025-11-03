import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function Mayuscula(texto){
    return texto.toUpperCase();
}

rl.question("Ingrese un texto o una oracion: ", (texto)=>{

    let resultado = Mayuscula(texto);

    console.log(`EL texto ingresado es: ${resultado}`);
})