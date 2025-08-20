//Importamos el modulo
import readline from 'readline';

//Creamos el interfaz de lectura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*
    Ejercicio 1

    1.	Solicita un nombre completo de usuario, muestra en consola los primeros 5 caracteres de ese nombre, sin espacios, en minúscula y agrega @gmail.com al final para crear una dirección de correo con ese nombre de usuario. 

    rl.question('Ingrese su nombre completo: ', (nombre) => {
        const nombreMinuscula = nombre.toLowerCase();
        const nombreLimpio = nombreMinuscula.trim();
        const nombreUsuario = nombreLimpio.substring(0,5) + '@gmail.com';
        
        console.log(`La direccion del correo generado es: ${nombreUsuario}`)


        rl.close();
    })
        */

    /*
        Ejercicio 2

        2.	Pide al usuario un texto y reemplaza todas las vocales de este texto por símbolos (a=@, e=#, i=$, o=%, u=&). 

        rl.question('Ingresa un texto cualquiera: ', (texto) => {
            const textoRemplazado = texto
            .replaceAll('a', '@')
            .replaceAll('e', '#')
            .replaceAll('i', '$')
            .replaceAll('o', '%')
            .replaceAll('u', '&');

            console.log(`El texto con las vocales reemplazadas es: ${textoRemplazado}`);

             rl.close();
        })

              */

        /*
            Ejercicio 3
            3.	Solicita al usuario una frase que contenga la palabra usuario y muestra en qué posición aparece. 

            rl.question('Ingresa una frase en donde contenga la frase "usuario": ', (frase) => {
                const FraseUsuario = frase.indexOf('usuario')

                console.log(`La palabra "usuario" aparece en la posicion ${FraseUsuario}`);

                rl.close();
            })
                */

            /*Ejercicio 4
            4.	Solicita al usuario una frase y muestra los primeros 6 caracteres de esa frase ingresada. 

            rl.question('Ingresa una frase: ', (frase) =>{
                const Caracteres = frase.substring(0,6)

                console.log(`Los primeros 6 caracteres de la frase son: ${Caracteres}`)

                rl.close();
            })

            */