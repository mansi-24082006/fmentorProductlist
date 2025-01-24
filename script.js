// FileName: MultipleFiles/script.js

let cartItems = [];
let totalAmount = 0;

function addToCart(itemName, itemPrice) {
    cartItems.push({ name: itemName, price: itemPrice });
    updateCart();
}

function updateCart() {
    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = '';
    totalAmount = 0;

    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsList.appendChild(li);
        totalAmount += item.price;
    });

    document.getElementById('total-price').textContent = totalAmount.toFixed(2);
    document.querySelector('.cart h1').textContent = `Your Cart (${cartItems.length})`;
}

function confirmOrder() {
    if (cartItems.length === 0) {
        alert("Your cart is empty!");
    } else {
        alert(`Order confirmed! Total amount: $${totalAmount.toFixed(2)}`);
        cartItems = [];
        updateCart();
    }
}