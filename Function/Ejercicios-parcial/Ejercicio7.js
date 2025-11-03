import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularDescuento(precio, descuento){
    return precio - (precio * descuento / 100);
}

rl.question("Ingrese el precio del producto: ",(precio) =>{
    rl.question("Ingrese el descuento del producto: ",(descuento) =>{
        
        let precioFinal = calcularDescuento(parseFloat(precio), parseFloat(descuento));

        console.log(`El precio Final del producto es: ${precioFinal}`);

        rl.close();
    })
})