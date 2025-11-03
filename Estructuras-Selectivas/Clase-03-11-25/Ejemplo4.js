import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const nombres = ['Ana', 'Juan', 'Michael', 'ROberto'];

function existe(nombre){
    if(nombres.includes(nombre)){
        return `${nombre} si esta en la lista`;
    }else{
        return `${nombre} no esta en la lista`;
    }
}

rl.question("Ingrese un nombre: ",(name)=>{
    let resultado = existe(name);
    console.log(resultado);

    rl.close();
})