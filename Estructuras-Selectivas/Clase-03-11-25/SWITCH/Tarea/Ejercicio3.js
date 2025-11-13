import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function precioEntrada(edad){
    let precio;
    
    if (edad < 0){
        console.log('Edad no valida');
    }else if (edad >= 0 && edad < 12){
        precio = 3.00;
    }else if (edad >= 12 && edad <= 59 ){
        precio = 5.00;
    }else if ( edad >= 60 && edad <= 110){
        precio = 2.50;
    }else{
         console.log('Edad no valida');
    }

    return console.log(`El precio de la entrada es: $${precio.toFixed(2)}`);
}

rl.question('Ingrese su edad: ', (Edad) =>{
    const edad = Number(Edad);

    precioEntrada(edad);

    rl.close();
})