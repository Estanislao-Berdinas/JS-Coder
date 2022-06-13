//Listado de productos para trabajar

const productos = [{
        codigo: 001,
        nombre: 'huertero',
        img: "./images/ofertas1.jpeg",
        precio: 5000,
    },

    {
        codigo: 002,
        nombre: 'macetero',
        img: "./images/ofertas3.jpeg",
        precio: 3000,
    },

    {
        codigo: 003,
        nombre: 'portafoco',
        img: "./images/ofertas5.jpeg",
        precio: 2500,
    },

    {
        codigo: 004,
        nombre: 'tabla',
        img: "./images/categoriahogar2.jpeg",
        precio: 2000,
    },

    {
        codigo: 005,
        nombre: 'mesa',
        img: "./images/novedades1.jpeg",
        precio: 8000,
    },

    {
        codigo: 006,
        nombre: 'espejo',
        img: "./images/categoriadeco3.jpeg" ,
        precio: 3200,
    },


]

// Carrito 
const carrito = []



const guardarProducto = (i) => {
    let carga = productos[i]
    carrito.push(carga);
    localStorage.setItem('carrito', JSON.stringify(carrito))
    alert(`Se agregó un/a ${carga.nombre}`);
            
}

for (let i = 0; i < productos.length; i++) {
    const elemento = productos[i];
    document.getElementById(elemento.nombre).addEventListener ('click', function (){
        guardarProducto(i)
    })
 
}

