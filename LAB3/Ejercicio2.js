import { parse } from 'path';
import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Ingrese el saldo disponible en su cuenta: ", (saldo)=>{
    rl.question("Ingrese el precio del producto que desea comprar: ", (precio)=>{

        let Saldo = parseFloat(saldo);
        let PrecioProduct = parseFloat(precio);

        if( Saldo >= PrecioProduct){
            console.log("Compra realizada exitosamente");
        }else{
            console.log("Tarjeta declinada por fondos insuficientes para realizar la compra");
        }

        rl.close();

    })
})