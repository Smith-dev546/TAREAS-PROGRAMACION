import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function primeraMayuscula(texto){
    return texto.split(' ').map(palabra => 
        palabra.charAt(0).toUpperCase() + palabra.slice(1)
    ).join(' ');
}

rl.question("Ingresa un texto: ", (texto) =>{
    let resultado = primeraMayuscula(texto);

    console.log(`El texto ingresado con ,ayusculas es: ${resultado}`);

    rl.close();
})