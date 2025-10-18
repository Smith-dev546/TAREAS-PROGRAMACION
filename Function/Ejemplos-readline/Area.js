import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularArea(base,altura){

    let calculo = parseFloat(base * altura);
    return calculo;
}

rl.question("Ingrese la base del rectangulo: ",(Base)=>{
    rl.question("Ingrese la altura del rectangulo: ",(Altura)=>{

        let result = calcularArea(Base,Altura);
        console.log(`El area del rectangulo es: ${result}`);

        rl.close();
    })
})