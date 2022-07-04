//Listado de productos para trabajar

const productos = []



fetch('data.json')
    .then((respuesta) => {
        return respuesta.json()
    }).then(data => {
        console.log(data);
        productos.push(...data)
        console.log(productos);

        // Carrito 
        const carrito = []
        numeroCarrito();

        
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
            numeroCarrito();
            
            
        }

        for (let i = 0; i < productos.length; i++) {
            const elemento = productos[i];
            document.getElementById(elemento.nombre).addEventListener('click', function () {
                guardarProducto(i)
            })

        }


               


    })