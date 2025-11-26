import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Ingresa un numero: ",(num)=>{
    num = parseFloat(num);

    for(let i = 1; i <= 10; i++){
        let resultado = num * i;

        console.log(`${num} * ${i} = ${resultado}`);

    }

    rl.close();
})