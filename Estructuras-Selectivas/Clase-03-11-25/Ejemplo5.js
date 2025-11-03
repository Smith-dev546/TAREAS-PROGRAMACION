import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function RangoEdad(edad){
    if(edad >= 0 && edad <= 11){
        return `Su categoria de edad es de niñez por que tiene ${edad} años`;
    }else if(edad >= 12 && edad <= 17){
        return `Su categoria de edad es adolecencia por que tiene ${edad} años`;
    }else if(edad >= 18 && edad <= 59){
        return `Su categoria de edad es adulto por que tiene ${edad} años`;
    }else if(edad >= 60 && edad <= 110){
        return `Su categoria de edad es de adulto mayor por que tiene ${edad} años`;
    }else{
        return `Vuelva a ingresar una edad valida`;
    }
}

rl.question("Ingrese su edad por favor: ",(age)=>{
    let edad = Number(age);
    let Rango = RangoEdad(edad);

    console.log(Rango);

    rl.close();
})