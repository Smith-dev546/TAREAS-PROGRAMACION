import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const contra = 'HolaMundo';
let mensaje;

rl.question("Ingrese la contraseña por favor: ",(contraseña)=>{
    if(contra === contraseña){
        mensaje = 'Contraseña Correcta';
    }else{
        mensaje = 'Contraseña Incorrecta';
    }

    console.log(`${mensaje}`);

    rl.close();
})