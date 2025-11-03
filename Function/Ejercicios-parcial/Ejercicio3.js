import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function contarCaracteres(texto){
    return texto.length;
}

rl.question("Ingrese una oracion o texto: ", (textito)=>{
    let cantidad = contarCaracteres(textito);

    console.log(`El texto ingresado tiene ${cantidad} caracteres`);

rl.close();
});