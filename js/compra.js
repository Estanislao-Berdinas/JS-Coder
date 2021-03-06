const compraTerminada = localStorage.getItem('carrito')
let carritoFinal = JSON.parse(compraTerminada);

//Ver los productos en el carrito

for (let i = 0; i < carritoFinal.length; i++) {
    const elemento = carritoFinal[i]

    const carritoPadre = document.getElementById('carritopadre')
    const relleno = document.createElement('div')
    carritoPadre.append(relleno)
    console.log(carritoPadre);
    relleno.innerHTML = `
    <div class="card" style="width: 18rem;">
    <img src= "${elemento.img}" class="card-img-top" alt="...">
    <div class= "card-body">
    <h5 class="card-title">${elemento.nombre}</h5>
    <p class="card-text precio-carrito"> Precio: $ ${elemento.precio}</p>
    <button type="button" class="btn btn-primary" id="${elemento.nombre}">Eliminar</button>
    `

}
//Mostrar lista, cantidad y total en el carrito

for (let i = 0; i < carritoFinal.length; i++) {
    const elemento = carritoFinal[i]


    const listaCarrito = document.getElementById('listaCarrito')
    const lista = document.createElement('div')
    listaCarrito.append(lista)
    console.log(listaCarrito);
    lista.innerHTML = `
     <ul class="list-group lista-precio">
      <li class="list-group-item list-group-item-danger precio-unitario">${elemento.nombre} por un valor de $ ${elemento.precio}</li>
    </ul>
      `
    let total = 0;
    carritoTotal = document.getElementById('total')
    carritoFinal.forEach((producto) => {
        const precio = producto.precio
        total = total + precio
    })
    carritoTotal.innerHTML = `El total es de : $ ${total}`

}


//Borrar  productos del carrito

const borrarProducto = (i) => {
    let carga = carritoFinal[i]
    carritoFinal.splice(i, 1);
    localStorage.setItem('carrito', JSON.stringify(carritoFinal))
    Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Producto eliminado',
        showConfirmButton: false,
        timer: 1500
      })
    setTimeout(window.location.reload.bind(window.location), 2000);
    return false;
}

for (let i = 0; i < carritoFinal.length; i++) {
    const elemento = carritoFinal[i];
    document.getElementById(elemento.nombre).addEventListener('click', () => borrarProducto(i))

}

//Terminar compra del carrito

let sinCarrito = function vaciarCarrito() {
    carritoFinal = [];
    localStorage.setItem('carrito', JSON.stringify(carritoFinal))
    Swal.fire({
        title: 'Raison Tandil Compras',
        text: 'Pronto nos comunicaremos con usted, gracias por elegirnos.',
        icon: 'success',
    });
    setTimeout(window.location.reload.bind(window.location), 4000);
    return false;
}

const volver = document.getElementById('volver')
volver.addEventListener('click', sinCarrito)

const carrito = JSON.parse(localStorage.getItem('carrito')) || []
console.log(carrito);