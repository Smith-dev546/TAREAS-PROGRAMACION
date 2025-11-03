import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let desc;

// Creamos la funcion
function descuento(compra){
    if(compra >= 100){
        desc = 0.10;
    }else if(compra >= 50 && compra <= 99){
        desc = 0.05;
    }else{
        desc = 0;
    }

    const total = compra -(compra * desc);
    return total;
}

rl.question("Ingrese el total de su compra: ",(precio) =>{
    let compra = parseFloat(precio);
    const TotalPagar = descuento(compra);
    console.log(`EL monto de la compra es de: $${TotalPagar.toFixed(2)}`);
    rl.close();
})