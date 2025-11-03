import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sumaPrecios(a, b, c){
    return a + b + c;
}

rl.question("Ingrese el precio del primer producto: ",(precio1) =>{
    rl.question("Ingrese el precio del primer producto: ",(precio2) =>{
        rl.question("Ingrese el precio del primer producto: ",(precio3) =>{
            
            let Total = parseFloat(precio1) + parseFloat(precio2) + parseFloat(precio3);


            console.log(`El total de los 3 productos es: ${Total}`)

            rl.close();
        })
    })
})