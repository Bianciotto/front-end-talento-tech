function addToCart(name, price) { console.log(`Agregando ${name} al carrito con precio ${price}`);
let cart = JSON.parse(localStorage.getItem('cart')) || [];
cart.push({ name, price }); localStorage.setItem('cart', JSON.stringify(cart));
alert(`${name} ha sido agregado al carrito.`); }
