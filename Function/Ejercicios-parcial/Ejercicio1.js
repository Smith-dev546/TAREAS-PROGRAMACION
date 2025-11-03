import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ordenarLetras(texto){
    return texto.split('').sort().join('');
}

rl.question("Ingrese una palabra o frase: ", (texto) => {
    let resultado = ordenarLetras(texto);

    console.log(`EL texto ingresado ordenado por orden alfabetico es: ${resultado}`)

    rl.close();
})