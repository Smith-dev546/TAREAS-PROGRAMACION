//Creamos un array de la manera tradicional
const numeros = [10,20,30,40,50];
console.table(numeros); //Con el .table nos da una tabla para asi poder ver los indices de los datos dentro del array

//Creamos un array con el constructor
const meses = new Array("Enero",'febrero','Marzo');
console.log(meses);

//En este array tenemos de todo lo que puede tener un array
const deTodo = ["Holiwis",10,null,true,{nombre: 'Pepito', trabajo: 'Programador'},[1,2,3]];
console.table(deTodo);

//Obtenemos un valor del array
console.log(deTodo[3]);     //Obtenemos True

console.log(deTodo[4].nombre);      //Obtenemos el nombre del objeto que esta dentro del array (pepito)

console.log(deTodo[5][1]);          //Obtenemos el 2 que esta en el array 

//Modificamos el valor de un array
deTodo [1] = 100;
console.log(deTodo);

//Agregamos un elemeneto al final del array
meses.push('Abril');
console.log(meses);

//ELiminamos un elemento del array, elimina el ultimo elemento del array
meses.pop()
console.log(meses);

//ELiminamos un elemento del array, elimina el primer elemento del array
meses.shift();
console.log(meses);

//agregamaos un elemento al inicio del Array
meses.unshift('Enero');
console.log(meses);

//Recorremos el array y lo mostramos en consola
for(i = 0; i<meses.length; i++){
    console.log(meses[i]);
}