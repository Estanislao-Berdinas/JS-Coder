const numeroCarrito = () => {
let compraParcial = localStorage.getItem('carrito')
let carritoParcial = JSON.parse(compraParcial);
const carritoNum = carritoParcial.length;
console.log(carritoNum);

document.getElementById ('contador').innerHTML=`
<span> ${carritoNum} </span>
`
}