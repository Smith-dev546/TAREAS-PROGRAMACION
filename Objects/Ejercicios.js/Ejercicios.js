/*
    Ejercicio 1
                         */
    //Creamos el objeto animal
    const animal ={
        //le asignamos las propiedades que tendra nuestra propiedad
        raza : "pitbul",
        tamaño : 2,
        color : "White"
    }

    //Mostramos el objeto por consola
    console.log(animal);

    //Mostramos las propiedades del nuestro objeto por separado
    console.log(animal.raza);
    console.log(animal.tamaño);
    console.log(animal.color);

    /*
        Ejercicio 2
                        */

//Le asignamos una nueva propiedad a nuestro objeto animal
 animal.nombre = "Firulays";
 console.log(animal);

 //Eliminamos la propiedad raza de nuestro objeto
 delete animal.raza;
 console.log(animal);

   /*
        Ejercicio 3
                        */

//Creamos un objeto usuario
const usuario ={
    //Creamos las propiedades del usuario
    usuarito: "Smith",
    email: "smith@kapo.com",
    rol: "Semi-Senior"
}

//Creamos variables con Destructuring
const {usuarito, email, rol} = usuario;
//Mostramos el usuario por consola
console.log(usuarito);
//Mostramos el email por consola
console.log(email);
//Mostramos el rol del usuario por consola
console.log(rol);