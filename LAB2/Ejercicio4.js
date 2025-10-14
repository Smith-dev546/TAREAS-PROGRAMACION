import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let Sueldo = [];
let Bono = 0.15;
let seguro = 0.05

rl.question("Ingrese su sueldo base: ", (SueldoBase) =>{
    Sueldo[0] = parseFloat(SueldoBase);

    //Calculamos la bonificacion

    let Bonificacion = (SueldoBase * Bono);
    console.log(`Usted ha recibido un bono del 15%, por lo que su bono es de: ${Bonificacion} dolares`);

    //Calculamos el descuento del seguro

    let descSeguro = (SueldoBase * seguro);
    console.log(`El descuento de su seguro es de: ${descSeguro} dolares`);

    //Calculamos el Salario total

    let SueldoTotal = ((Sueldo[0] + Bonificacion) - descSeguro);
    console.log(`Su sueldo total a recibir con bonificacion y descuento incluido es de: ${SueldoTotal} dolares`);

    rl.close();

})