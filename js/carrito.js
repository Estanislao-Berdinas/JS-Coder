//Ver contador de productos en el carrito

const numeroCarrito = () => {
let compraParcial = localStorage.getItem('carrito')
let carritoParcial = JSON.parse(compraParcial);
const carritoNum = carritoParcial?.length || 0;
console.log(carritoNum);

document.getElementById ('contador').innerHTML=`
<span> ${carritoNum} </span>
`
}