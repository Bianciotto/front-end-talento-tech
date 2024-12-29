document.addEventListener('DOMContentLoaded', function() {
    
    let carritoDiv = document.getElementById('carrito'); 
    if (!carritoDiv){
        return;
    }
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) { 
        carritoDiv.innerHTML = '<p>El carrito está vacío.</p>'; 
    } 
    else { let itemsHTML = '<ul class="cart-list">'; let total = 0; cart.forEach(item => { itemsHTML += `<li>${item.name} - $${item.price.toFixed(2)}</li>`; total += item.price; }); itemsHTML += `</ul><p class="total">Total: $${total.toFixed(2)}</p>`; carritoDiv.innerHTML = itemsHTML; } }); function clearCart() { localStorage.removeItem('cart'); alert('El carrito ha sido vaciado.'); document.getElementById('carrito').innerHTML = '<p>El carrito está vacío.</p>'; }

    function addToCart(name, price) {
let cart = JSON.parse(localStorage.getItem('cart')) || [];
cart.push({ name, price }); localStorage.setItem('cart', JSON.stringify(cart));
alert(`${name} ha sido agregado al carrito.`); }

document.addEventListener('DOMContentLoaded', function() {
    const cargarUsuariosBtn = document.getElementById('cargarUsuarios');
    const usuariosDiv = document.getElementById('usuarios');
    if (cargarUsuariosBtn && usuariosDiv) {
    cargarUsuariosBtn.addEventListener('click', function() {
        fetch('https://randomuser.me/api/?results=5')
            .then(response => response.json())
            .then(data => {
                usuariosDiv.innerHTML = '';
                data.results.forEach(user => {
                    const userDiv = document.createElement('div');
                    userDiv.classList.add('user');
                    userDiv.innerHTML = `
                        <p>Nombre: ${user.name.first} ${user.name.last}</p>
                        <p>País: ${user.location.country}</p>
                    `;
                    usuariosDiv.appendChild(userDiv);
                });
            })
            .catch(error => {
                console.error('Error al obtener usuarios:', error);
                usuariosDiv.innerHTML = '<p>Error al cargar usuarios. Intenta nuevamente.</p>';
            });
    });}
});

