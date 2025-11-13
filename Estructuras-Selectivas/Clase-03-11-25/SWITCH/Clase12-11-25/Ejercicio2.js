import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const frutas = ['manzana', 'banana', 'naranja', 'fresas'];

function precioFrutas(fruta){
    let precio;

    switch(fruta.toLowerCase()){
        case 'manzana':
            precio = 0.75;
            break;
        case 'banana':
            precio = 0.50;
            break;
        case 'naranja':
            precio = 0.80;
            break;
        case 'fresas':
            precio = 1.20;
            break;
        default:
            precio = 0;
    }
    return precio;
}

rl.question('Ingrese el nombre de una fruta: ',(fruta)=>{
    const precio = precioFrutas(fruta);

    if(frutas.includes(fruta.toLowerCase())){
        console.log(`El precio de ${fruta} es ${precio.toFixed(2)}`);
    }else{
        console.log('Fruta no valida');
    }

    rl.close();
})