/*
    Ejercicio 1

//Creamos el objeto producto
const producto ={
    detalles : {
        nombre: "laptop",
        precio : "$1000",
        categoria : "tecnologia"
    },
    inventario : {
        stock : 10,
        proveedor : "pepito fuentes",
        ubicacion : "San Miguel"
    },
    Historial : {
        fechaIngreso : "01/09/2025",
        ultimaVenta : "31/08/2025",
        ventasTotales : 50
    }
}

//Mostaros los detalles de nuestro producto
console.log(producto.detalles);

//Aumentamos elstck a 50 unidades
producto.inventario.stock = 60;
console.log(producto.inventario);

//Cambiamos la categoria a "Electronica"
producto.detalles.categoria = "Electronica";
console.log(producto. detalles);

//Extraemos el nombre y precio en variables separadas
const {nombre, precio} = producto.detalles;
console.log(`El producto ${nombre} tiene un precio de ${precio}`);

//Mostramos todo el objeto ya actualizado
console.log(producto);
    */


/*
    Ejercicio 2

    //Creamos el objeto principal
    const perfilUsuario ={
        infoPersonal : {
            nombre : "Pepito fuentes",
            edad : "18 años",
            email : "pepito@kapo.com"
        },
        Preferencias : {
            idioma : "Español",
            notificaciones : "True",
            tema : "Oscuro"
        },
        estadisticasUso : {
            fechaRegister : new Date("01/01/2025"),
            ultimoAcceso : "31/08/2025",
            numSesiones : "20 sesiones"
        }
    }

    //Mostraamos por consola cada seccion por separado
    //Mostramos el objeto principal completo
    console.log(perfilUsuario);

    //Mostramos el objeto en donde se aloja la informacion personal
    console.log(perfilUsuario.infoPersonal);

    //Mostramos el objeto en donde se alojan las preferencias de la aaplicacion
    console.log(perfilUsuario.Preferencias);

    //Mostramos el objeto en donde se aloja las estadisticas de uso de la aplicacion
    console.log(perfilUsuario.estadisticasUso);

    //Cambiamos el idioma
    perfilUsuario.Preferencias.idioma = "Ingles";
    console.log(perfilUsuario.Preferencias);

    //Actualizamos la fecha de ultimo acceso a la fecha actual
    perfilUsuario.estadisticasUso.ultimoAcceso = new Date();
    console.log( perfilUsuario.estadisticasUso);

    //Elimiminamos una preferencia innecesaria
    delete perfilUsuario.Preferencias.notificaciones;
    console.log(perfilUsuario.Preferencias);

    //Extraemos el email y el idioma en variables separadas
    const {email} = perfilUsuario.infoPersonal;
    const {idioma} = perfilUsuario.Preferencias;
    console.log(`El email del usuario es: ${email} y el idioma de prefrencia es: ${idioma}`);

//Motramos el perfil completo actualizado
console.log(perfilUsuario);

*/

/*
    Ejercio 3*/

    //Creamos el objeto libro
    const libro ={
        informacion :{
            titulo : "new book",
            autor : "pepito fuentes",
            genero : "Investigacion"
        },
        disponibilidad : {
            copias : 40,
            prestados : 20,
            ubicacion : "Biblioteca de la u"
        },
        Registro :{
            fechaPublicacion : "01/01/2024",
            fechaIngreso : "25/08/2024",
            ultimaRevision : "01/01/2025"
        }
    }   
    
    //Mostramos la informacion del autor
    console.log(libro.informacion);

    //Calculamos cuantos ejemplares quedan (copias - prestados)
    const librosDisponibles = libro.disponibilidad.copias - libro.disponibilidad.prestados;
    console.log(`Quedan ${librosDisponibles} ejemplares disponibles`);

    //Actualizamos la ultima revision con la fecha actual
    libro.Registro.ultimaRevision = new Date();
    console.log(libro.Registro);

    //Cambiamos el genero del libro
    libro.informacion.genero = "Romantico";
    console.log(libro.informacion);

    //Extraemos el titulo y ubicacion en variables
    const {titulo} = libro.informacion
    const {ubicacion} = libro.disponibilidad
    console.log(`El titulo del libro es: ${titulo} y la ubicacion esta en ${ubicacion}`);

    //Mostramos el objeto completo y actualizado
    console.log(libro);