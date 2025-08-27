//Importamos el modulo
import readline from 'readline';

//Creamos el interfaz de lectura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*
    Ejercicio 1
        Solicita un número al usuario y muestra el cuadrado de ese número y su raíz cuadrada
       
rl.question('Ingrese un numero: ', (num) => {
    const numero = Number(num);

    //Elevamos al cuadrado el numero que proporciono el usuario
    console.log(`${numero} elevado al cuadrado es: ${Math.pow(numero,2)}`);

    //Mostramos la raiz cuadrada del numero que proporciono el usuario
     console.log(`La raiz cuadrada de ${numero} es: ${Math.sqrt(numero)}`);

    rl.close();
})
     */

/*
    Ejercicio 2
      	Un programa de sorteos necesita generar un número aleatorio entre 0 y 29 para asignar un premio
        

rl.question('Ingrese un numero entre 0 y 29:', (num) =>{
  const numero = Number(num);

  //Generamos el numero random a mostrar
  let randomNumero = Math.floor(Math.random()*numero) +1;
  console.log(`El numero aleatorio generado entre 1 y 29 es: ${randomNumero}`);

  rl.close();
})
  */

/*
    Ejercicio 3
    3.	Una tienda de electrodomésticos necesita encontrar el precio más barato
        y el más caro de su lista de precios: [30, 52, 35, 1, 12, -3].

      

    rl.question('Ingrese el precio de cualquier producto:', (precio) => {
      //Convertimos el precio ingresado a un dato numerico
      const precioNum = Number(precio);

      //Obtenemos el precio mas barato de los electrodomesticos
      console.log(`El precio mas barato de todos es: ${Math.min(precioNum,30,52, 35, 1, 12, -3)} `);

      //Obtenemos el precio mas caro de los electrodomesticos
      console.log(`El precio mas caro de todos es: ${Math.max(precioNum,30,52, 35, 1, 12, -3)} `);

      rl.close();
    })
          */

    /*
        Ejercicio 4
            Un edificio tiene 10 habitaciones por piso. El usuario ingreso el número de habitaciones en el que se encuentra (ejemplo: habitación 25). El programa debe calcular y mostrar en qué piso está. Deberá pedir el número de la habitación, dividir el número de habitaciones entre 10 y redondear hacia arriba y mostrar el piso correspondiente

            

  rl.question('Ingrese el numero de habitacion en donde se encuentra: ', (habitacion) => {
    //Convertimos a dato numerico el numero de habitacion
    const numHabitacion = Number(habitacion);
    //Calculamos el piso en el que se encuentra la habitacion
    const piso = Math.ceil(numHabitacion / 10);
    console.log(`Usted se encuentra en el piso: ${piso}`);

    rl.close();
  })
          */