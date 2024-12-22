document.addEventListener('DOMContentLoaded', function() { 
    console.log('DOM completamente cargado y parseado'); 
    let cart = JSON.parse(localStorage.getItem('cart')) || []; 
    console.log('Contenido del carrito:', cart); 
    let carritoDiv = document.getElementById('carrito'); 
    
    if (cart.length === 0) { 
        carritoDiv.innerHTML = '<p>El carrito está vacío.</p>'; 
    } 
    else { let itemsHTML = '<ul class="cart-list">'; let total = 0; cart.forEach(item => { itemsHTML += `<li>${item.name} - $${item.price.toFixed(2)}</li>`; total += item.price; }); itemsHTML += `</ul><p class="total">Total: $${total.toFixed(2)}</p>`; carritoDiv.innerHTML = itemsHTML; } }); function clearCart() { localStorage.removeItem('cart'); alert('El carrito ha sido vaciado.'); document.getElementById('carrito').innerHTML = '<p>El carrito está vacío.</p>'; }
