//Importamos el modulo
import readline from 'readline';

//Creamos el interfaz de lectura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese un numero ', (num) =>{
    let numero = Number(num);

    console.log(`\n  Numero ingresado: ${numero}`);

    //Math.round()    => Redondea al entero mas cercano
    //console.log(`Math.round(${numero}) -> ${Math.round(numero)}`);

    //Math.floor()    => Redondea el numero hacia abajo
    //console.log(`Math.floor(${numero}) -> ${Math.floor(numero)}`);

    //Math.ceil() =>Redondea el numero hacia arribaa
    //console.log(`Math.ceil(${numero}) -> ${Math.ceil(numero)}`);

    //Math.sqrt()   => Nos permite obtener la raiz cuadrada d eun numero
    //console.log(`Math.sqrt(${numero}) -> ${Math.sqrt(numero)}`);

    //Math.pow()  => Nos permite elevar a una potencia, la potencia tenemos que ponerla como tal
    //console.log(`Math.pow(${numero}) -> ${Math.pow(numero,2)}`);

    //Math.abs()    => Nos devuelve el valor absoluto del numero
    //console.log(`Math.abs(${numero}) -> ${Math.abs(numero)}`);

    //Math.max()    => Funciona para seleccionar el numero maximo de una serie de numeros
    //console.log(`Math.max(${numero}) -> ${Math.max(numero,10,-5)}`);

     //Math.min()    => Funciona para seleccionar el numero minimo de una serie de numeros
    //console.log(`Math.min(${numero}) -> ${Math.min(numero,-5,30)}`);

    //Math.random() => Nos permite seleccionar un numero random
    //console.log(`Math.random(${numero}) -> ${Math.random()}`);

    //let randomNumero = Math.floor(Math.random()*numero) +1;
    //console.log(`Numero aaleatorio entre 1 y 20 -> ${randomNumero}`)

    //toFixed() => Nos permite ver con cuantos decimaales queremos trabajar
    //console.log(`toFixed(2): ${numero.toFixed(2)}`);

    // toPrecision()    => Solo nos muestra las cifras significativas que declaramos como parametro
    //console.log(`toPrecision(4): ${numero.toPrecision(4)}`);

    //toExponential()   => Nos permite pasar el numero a notacion cientifica
    //console.log(`toExponential(2): ${numero.toExponential(2)}`);

    // toString(2)   => Convierte el numero a numero binario
    //console.log(`toString(2): ${numero.toString(2)}`);

    //  toString(16)    => Convierte el numero a hexadecimal
     console.log(`toSttring(16): ${numero.toString(16)}`);
    rl.close()
})