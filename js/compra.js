const compraTerminada = localStorage.getItem('carrito')
let carritoFinal = JSON.parse(compraTerminada);

for (let i = 0; i < carritoFinal.length; i++) {
   const elemento = carritoFinal[i]

    const carritoPadre = document.getElementById('carritopadre')
    const relleno = document.createElement('div')
    carritoPadre.append(relleno)
    console.log(carritoPadre);
    relleno.innerHTML= `
    <div class="card" style="width: 18rem;">
    <img src= "${elemento.img}" class="card-img-top" alt="...">
    <div class= "card-body">
    <h5 class="card-title">${elemento.nombre}</h5>
    <p class="card-text"> Precio: $ ${elemento.precio}</p>
    <button type="button" class="btn btn-primary" id="${elemento.nombre}">Eliminar</button>
    ` 
  
    
}

const borrarProducto = (i) => {
    let carga = carritoFinal[i]
    carritoFinal.splice(i,1);
    localStorage.setItem('carrito', JSON.stringify(carritoFinal))
    alert(`Se elimino el producto: ${carga.nombre}`);
    location.reload();
    return false;
}

for (let i = 0; i < carritoFinal.length; i++) { 
    const elemento = carritoFinal[i]; 
    document.getElementById(elemento.nombre).addEventListener ('click', ()=> borrarProducto(i)
    )
 
}

let sinCarrito = function vaciarCarrito() { 
    carritoFinal = [];
    localStorage.setItem('carrito', JSON.stringify(carritoFinal))
    location.reload();
    return false;
}

const volver = document.getElementById('volver')
volver.addEventListener('click', sinCarrito) 

const carrito = JSON.parse(localStorage.getItem('carrito')) || []
console.log(carrito);