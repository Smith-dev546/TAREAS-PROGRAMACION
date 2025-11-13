import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese un numero del 1 - 3', (num)=>{
    let numero =Number(num);

    switch(numero){
        case 1:
            console.log('Number 1');
            break;
        case 2:
            console.log('Number 2');
            break;
        case 3:
            console.log('Number 3');
            break;
        default:
            console.log('Opcion invalida');    
    }

    rl.close();
})