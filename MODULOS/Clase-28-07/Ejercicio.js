import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
/*
    Ejemplo

rl.question('Cuál es tu nombre? ', (nombre) => {
    console.log(`Hola ${nombre}, Cómo estás?`)
    rl.close();


*/

/*
    //Ejercicio 1

    rl.question('En que ciudad vives? ', (ciudad) => {
        console.log(`${ciudad} es una ciudad muy bonita!`);
        rl.close();

*/

/*
//Ejercicio 2

    rl.question('Cuál es tu color favorito? ', (color) => {
    console.log(` tu color favorito es ${color}.`);
    rl.close();

    */

    // Ejercicio 3
    rl.question('Cuál es tu nombre? ', (nombre) => {
        rl.question('Cuál es tu apellido? ', (apellido) => {
    
    console.log(`Hola ${nombre} ${apellido}`);
    rl.close();
        });
    })
 