//Importamos el modulo
import readline from 'readline';

//Creamos el interfaz de lectura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Realizamos la pregunta al usuario
rl.question('Ingrese una frase: ', (frase) =>{
    console.log('\n === Tratamiento de Cadenas ===');

    // 1. length    => Nos devuelve la longitud de la cadena
    
    const fraseLength = frase.length;
    console.log(`La longitud de la frase es: ${fraseLength}`);

    // 2. toUpperCase() => Convierte la cadena a mayusculas
    const fraseMayus = frase.toUpperCase();
    console.log(`La frase en mayusculas es: ${fraseMayus}`);

    // 3. toLowerCase() => Convierte la cadena a minusculas
   const fraseMinus = frase.toLowerCase();
   console.log(`La frase en minusculas es: ${fraseMinus}`);

   // 4. trim() => Elimina los espacios en blanco al inicio y al final
   const fraseTrim = frase.trim();
   console.log(`La frase sin espacios es: ${fraseTrim}`);

   // 5. substring() => Extrae una parte de la cadena
   const fraseSub = frase.substring(0, 5);
   console.log(`Los primeros 5 caracteres de la frase son: ${fraseSub}`);

   // 6. slice() => Extrae una parte de la cadena
   const fraseSlice = frase.slice(0, 5);
   console.log(`Los primeros 5 caracteres de la frase son: ${fraseSlice}`);

   //Este si toma valores negativos
   const subCadenasSlice = frase.slice(-5);
   console.log(`Los ultimos 5 caracteres de la frase son: ${subCadenasSlice}`);

   //7. replace
   const fraseReplace = frase.replace('hola', 'adios');
   console.log(`La frase con 'hola' reemplazado por 'adios' es: ${fraseReplace}`);

   // 8. replaceAll() => Reemplaza todas las ocurrencias de una cadena
   const fraseReplaceAll = frase.replaceAll('hola', 'adios');
   console.log(`La frase con todas las ocurrencias de 'hola' reemplazadas por 'adios' es: ${fraseReplaceAll}`);

   // 9. split() => Divide la frase en plabras separandolas por un espacio
   const fraseAray = frase.split(' ');
   console.log(`La frase dividida en palabras es: ${fraseAray}`);

   //10. includes() => Verifica si laa cadena contiene un texto
   const fraseIncluyeHola = frase.includes('hola');
   console.log(`La frase incluye la palabra 'hola': ${fraseIncluyeHola}`);

   //11. indexOf() => Devuelve la posición de la primera ocurrencia de una cadena
   const IndiceHola = frase.indexOf('hola');
   console.log(`El indice de la primera ocurrencia de 'hola' es: ${IndiceHola}`);

   // 12. startsWith() => Comprueba si la cadena empieza con un  texto
   const fraseEmpiezaConHola = frase.startsWith('hola');
   console.log(`La frase empieza con 'hola': ${fraseEmpiezaConHola}`);

   //13. endsWith() => Comprueba si la cadena termina con un texto
   const fraseTerminaConAdios = frase.endsWith('adios');
   console.log(`La frase termina con 'adios': ${fraseTerminaConAdios}`);

    //Cerramos el interfaz
rl.close();

});

