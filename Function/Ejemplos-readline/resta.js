import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function saludar(nombre){
    console.log(`Hola ${nombre}, Bienvenido a JavaScript`);   
}

let resta = (num1,num2)=>{
    let res = num1 - num2;
    return res;
}

rl.question("Ingrese su nombre para saludarlo: ",(nombrecito) =>{
    rl.question("Ingrese el primer numero: ",(n1)=>{
        rl.question("Ingrese el segundo numero: ",(n2)=>{
            
            saludar(nombrecito);
            console.log(`La resta de ambos numeros es: ${resta(n1,n2)}`);

            rl.close();

        })
    })
})