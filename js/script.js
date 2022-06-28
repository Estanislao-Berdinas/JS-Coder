//Listado de productos para trabajar

const productos = []



fetch('data.json')
    .then((respuesta) => {return respuesta.json()}).then(data=> {
        console.log(data);
        productos.push(...data)
    console.log(productos);

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
})



//Hacer que trabaje igual desde fetch


// let nuevosProductos = document.querySelector('#ofertaspadre');


    // .then((data) => {
    //     console.log(data); 
    //     // data.forEach((elemento) => {
        // //     const card = document.createElement('div')
        // //     card.className = 'card';
        // //     card.innerHTML = `
        // //             <div class="card" style="width: 18rem;">
        // //                 <img src=${elemento.img} class="card-img-top" alt="${elemento.nombre}" class=""card-img-top"></img>
        // //                 <div class="card-body">
        // //                 <h5 class="card-title">${elemento.nombre}</h5>
        // //                 <p class="card-text">Usalo en tu espacio favorito</p>
        // //                 <a href="#" class="btn btn-primary" id="${elemento.nombre}">Comprar</a>
        // //                 </div>
        // //             </div>
                     
        // //             `
            
        // //     nuevosProductos.append();
            
            
            
        
        // // })

