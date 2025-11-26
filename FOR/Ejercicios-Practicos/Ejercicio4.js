import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Ingresa 3 nombres separados por espacio: ', (input) => {
    
    const nombres = input.split(' ');
    
   
    for (let i = 0; i < nombres.length; i++) {
        console.log(nombres[i]);
    }
    
    rl.close();
});