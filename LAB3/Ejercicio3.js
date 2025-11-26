import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Ingrese su edad: ", (edad)=>{
    rl.question("Tienes una computadora propia? (si/no) ", (respuesta)=>{

        let Edad = parseFloat(edad);
        let answer = respuesta.toLowerCase();

        if(Edad >= 15 && answer === "si"){
            console.log("Felicidades, Aprobastes a nuestro curso");
        }else{
            console.log("Lo sentimos, no puedes inscribirte a este curso");
        }

        rl.close();
    })
})