import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let productos = [];
let IVA = 0.13;

rl.question("Ingrese el precio del primer producto a llevar: ", (product1) =>{
    productos[0] = parseFloat(product1);

    rl.question("Ingrese el precio del segundo producto a llevar: ", (product2) =>{
    productos[1] = parseFloat(product2);

        rl.question("Ingrese el precio del tercer producto a llevar: ", (product3) =>{
    productos[2] = parseFloat(product3);

            let totalProducts = (productos[0] + productos[1] + productos[2]);
            console.log(`El total en los productos sin incluir IVA es de: ${totalProducts} dolares`);

            let totalIVA = (totalProducts * IVA);
            console.log(`El IVA adquirido por su compra es de: ${totalIVA} dolares`);

            let totalProductsFinal = (totalProducts + totalIVA);
            console.log(`El total a cancelar por su compra con IVA incluido es de: ${totalProductsFinal} dolares`)

            rl.close();
        })
    })
})