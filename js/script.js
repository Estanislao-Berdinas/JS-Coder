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


console.log(...productos);
// Carrito 
const carrito = []


//Guardado de productos en el carrito

const guardarProducto = (i) => {
    let carga = productos[i]
    carrito.push(carga);
    localStorage.setItem('carrito', JSON.stringify(carrito))
    Swal.fire({
        title: 'Raison Tandil Compras',
        text: 'Producto agregado con éxito',
        icon: 'success',        
    });
            
}

for (let i = 0; i < productos.length; i++) {
    const elemento = productos[i];
    document.getElementById(elemento.nombre).addEventListener ('click', function (){
        guardarProducto(i)
    })
 
}

//Hacer que trabaje igual desde fetch
let newArray = []

let nuevosProductos = document.querySelector('#ofertaspadre');

fetch("./data.json")
    .then((respuesta) => respuesta.json())
    .then((data) => { 
        data.forEach((elemento) => {
            const card = document.createElement('div')
            card.className = 'card';
            card.innerHTML = `
                    <div class="card" style="width: 18rem;">
                        <img src=${elemento.img} class="card-img-top" alt="${elemento.nombre}" class=""card-img-top"></img>
                        <div class="card-body">
                        <h5 class="card-title">${elemento.nombre}</h5>
                        <p class="card-text">Usalo en tu espacio favorito</p>
                        <a href="#" class="btn btn-primary" id="${elemento.nombre}">Comprar</a>
                        </div>
                    </div>
                     
                    `
            
            nuevosProductos.append(card);
            console.log(card);
            
            
        
        })
        data.forEach((item)=>{
            newArray.push(item)
        
           // 1.- Para hacer un push de un atributo en particular acceder al eletemento actual y con "." a la propiedad deseada :
           newArray.push(item.nombre)
        
           
          })
                 
          // Imprimes tu arreglo para corroborar resultado.
          console.log(newArray)
    }
)
