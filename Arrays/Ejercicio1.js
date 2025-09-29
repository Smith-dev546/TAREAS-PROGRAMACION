const carrito = [];

const productos1 = {
    nombre: "Camiseta",
    precio: 2.50
};

carrito.push(productos1);

console.log(carrito);

const producto2 ={
    nombre: "Zapatos",
    precio: 12.50
}

carrito.unshift(producto2);
console.log(carrito);