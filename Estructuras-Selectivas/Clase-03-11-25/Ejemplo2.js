import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let mensaje;

rl.question("Ingrese cualquier numero: ", (num) =>{
    if(num > 0){
        mensaje = 'El numero ingresado es positivo';
    }else{
        mensaje = 'El numero ingresado es negativo';
    }

    console.log(`${mensaje}`);

    rl.close();
})