import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


function CalcularIMC(peso, altura){

    let IMC = peso / altura;

    let resultado;

    if(IMC >=0 && IMC <18.5){
        resultado = "Bajo peso";
    }else if(IMC >= 18.5 && IMC <= 24.9){
        resultado = "Normal";
    }else if(IMC >= 25 && IMC <= 29.9){
        resultado = "Sobrepeso";
    }else if(IMC >= 30){
        resultado = "Obesidad";
    }else{
        resultado = "IMC no valido";
    }

    return resultado;
}


rl.question("Ingrese su peso en Kg por favor: ", (Peso)=>{
    rl.question("Ingrese su altura en metros por favor: ", (Altura)=>{
        
        let peso = parseFloat(Peso);
        let altura = parseFloat(Altura);

        let result = CalcularIMC(peso, altura);

        console.log(result);

        rl.close();
    })
})