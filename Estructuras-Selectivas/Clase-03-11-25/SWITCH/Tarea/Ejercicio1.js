import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function Sumar(a,b){
    return a + b;
}

function Restar(a,b){
    return a - b;
}

function Multiplicar(a,b){
    return a * b;
}

function Dividir(a,b){
    return a / b;
}

rl.question('Ingrese el primer numero: ', (num1) =>{
    rl.question('Ingrese el segundo numero: ', (num2) =>{

        const a = parseFloat(num1);
        const b = parseFloat(num2);

        console.log('=== Menu de operaciones ===');
        console.log('1. Sumar');
        console.log('2. Restar');
        console.log('3. Multiplicar');
        console.log('4. Dividir');
        console.log('5. Salir');

        rl.question('Seleccione una operacion (1 - 5): ', (opcion) =>{
            const opcionNum = Number(opcion)

            switch (opcionNum){
                case 1: 1
                    console.log(`El resultado de la suma es: ${Sumar(a, b)}`);
                    break;
            case 2: 2
                    console.log(`El resultado de la resta es: ${Restar(a, b)}`);
                    break;
            case 3: 3
                    console.log(`El resultado de la Multiplicacion es: ${Multiplicar(a, b)}`);
                    break;
            case 4: 4
                    console.log(`El resultado de la Division es: ${Dividir(a, b)}`);
                    break;
            case 5: 5
                    console.log(`Saliendo del sistema...`);
                    break;
            default:
                console.log('Opcion  no valida');
            }

            rl.close();

        })
    })
})