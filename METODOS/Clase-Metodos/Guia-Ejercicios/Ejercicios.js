
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

/*
Ejercicio 1:

//En un formulario web pides al usuario su nombre completo y quieres asegurarte de que no haya espacios al inicio o final, y además quieres mostrar cuántos caracteres tiene el nombre sin contar los espacios.


rl.question("Ingrese su nombre completo:",(nombre)=>{
    const nombreLimpio = nombre.trim();
    const nombreSinEspacio = nombre.replaceAll(" ", "");
    const numCaract = nombreSinEspacio.length;

    console.log(`Nombre limpio: ${nombreLimpio}`);
    console.log(`Nombre sin espacio: ${nombreSinEspacio}`);
    console.log(`Cantidad de caracteres: ${numCaract}`);

       rl.close();
})

*/

/*
    Ejercico 2:

    Un sistema de registro de usuarios necesita guardar todos los correos
electrónicos en minúsculas para evitar duplicados causados por
diferencias en mayúsculas y minúsculas. Además, se requiere verificar si
el correo pertenece al dominio @gmail.com antes de aceptarlo.
El programa debe:
Solicitar al usuario su correo electrónico.
Convertir el correo ingresado a minúsculas.
Verificar si contiene el dominio @gmail.com

Mostrar en pantalla el correo normalizado y si es o no un dominio válido.


rl.question("Ingrese su correo electronico: ", (correo)=>{
    const correoMinuscula = correo.toLowerCase();
    const dominioValido = correoMinuscula.endsWith("@gmail.com");
    
    console.log(`Correo normalizado: ${correoMinuscula}`);
    console.log(`Dominio válido: ${dominioValido}`);

    rl.close();

})

*/

/*
    Ejercicio 3:

    de un código generado automáticamente solo se requiere mostrar los
últimos 4 caracteres

rl.question("Ingrese el código generado automáticamente: ", (codigo) => {
    const codigoLimpio = codigo.trim();
    const ultimosCuatro = codigoLimpio.slice(-4);

    console.log(`los ultimos 4 caracteres del código son: ${ultimosCuatro}`);

    rl.close();
})
    */

/*
    Ejercicio 4:

    Un programador quiere saber en qué parte de su mensaje aparece la
palabra error.

rl.question("Ingrese su mensaje: ", (mensaje) => {
    const mensajeLimpio = mensaje.trim();
    const posicionError = mensajeLimpio.indexOf("error");

    console.log(`La palabra "error" se encuentra en la posición: ${posicionError}`);
    
    rl.close();
})

*/
 