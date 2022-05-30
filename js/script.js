// Pedir edad antes del ingreso

let permiso = parseInt(prompt('Antes de ingresar a la Tienda, necesitamos saber tu edad: (en números)'))
if (permiso >= 13) {
    alert('Podes pasar');

} else {
    alert('Por favor, llamá a tus papás antes de continuar');
}

// Bienvenida al usuario

let bienvenida = prompt('Hola! ¿Cómo te llamás?')
alert('Gracias por elegirnos ' + bienvenida)

// Listado de productos

const productos = [{
        codigo: 001,
        nombre: 'Huertero',
        precio: 5000,
    },

    {
        codigo: 002,
        nombre: 'Macetero',
        precio: 3000,
    },

    {
        codigo: 003,
        nombre: 'Portafoco',
        precio: 2500,
    },

    {
        codigo: 004,
        nombre: 'Tablas de Cocina',
        precio: 2000,
    },

    {
        codigo: 005,
        nombre: 'Mesa comedor',
        precio: 8000,
    },

    {
        codigo: 006,
        nombre: 'Espejo',
        precio: 3200,
    },


]

// Carrito y sus variables de agregar/ver y borrar productos
const carrito = []

const productoSumado = () => {

    let lista = '';
    for (const trabajo of productos) {
        lista += trabajo.codigo + ' - ' + trabajo.nombre + ' - ' + trabajo.precio + '$' + '\n';
    }

    let productoElegido = parseInt(prompt(lista));
    carrito.push(productos[productoElegido - 1]);
    alert('Producto agregado!');

}

const carritoLleno = () => {
    let lista = 'Te estás llevando esto ' + bienvenida + '\n';

    let comprado = 1;

    for (const listado of carrito) {
        lista += comprado++ + ' - ' + listado.nombre + ' Valor: ' + listado.precio + '$' + '\n';
    }

    alert(lista);
}

const vaciarCarrito = () => {
    let lista = '¿Qué querés eliminar? ' + bienvenida + '\n';

    let comprado = 1;

    for (const listado of carrito) {
        lista += comprado++ + ' - ' + listado.nombre + '\n';
    }

    let productoElegido = parseInt(prompt(lista));
    carrito.splice(productoElegido - 1, 1);

    alert('Producto eliminado :(');

}

// Proceso de compra

let compra = prompt('Bienvenid@ ' + bienvenida + ' a la tienda de Raison Tandil! \nPara agregar productos a tu carrito, presioná 1. \nPara ver tus productos en el carrito, presioná 2. \nPara eliminar algún producto, presioná 3. \nPara confirmar la compra, presioná 0.')

const comprando = () => {

    while (compra != 0) {
        switch (compra) {
            case '1':
                productoSumado();
                break;
            case '2':
                carritoLleno();
                break;
            case '3':
                vaciarCarrito();
                break;
            default:
                alert("Cargá una opción válida");
                break;

        }
        compra = prompt(bienvenida + ' nos encanta que sigas en la tienda de Raison Tandil! \nPara agregar productos a tu carrito, presioná 1. \nPara ver tus productos en el carrito, presioná 2. \nPara eliminar algún producto, presioná 3. \nPara confirmar la compra, presioná 0.')
    }
}

comprando();

// Confirmación a un correo

let correoContacto = prompt('Por favor ' + bienvenida + ' registrá tu correo para confirmar la compra')

alert('Gracias ' + bienvenida + ' en breve recibirás un correo desde Raison Tandil para confirmar tu compra a la cuenta ' + correoContacto + '\nGracias por tu compra!');