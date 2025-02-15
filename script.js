// Updated script.js with styled delete logo.

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

    cartItems.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;

        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '<svg id="Layer_1" data-name="Layer 1" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105.7 122.88"><title>trash-bin</title><path d="M30.46,14.57V5.22A5.18,5.18,0,0,1,32,1.55v0A5.19,5.19,0,0,1,35.68,0H70a5.22,5.22,0,0,1,3.67,1.53l0,0a5.22,5.22,0,0,1,1.53,3.67v9.35h27.08a3.36,3.36,0,0,1,3.38,3.37V29.58A3.38,3.38,0,0,1,102.32,33H98.51l-8.3,87.22a3,3,0,0,1-2.95,2.69H18.43a3,3,0,0,1-3-2.95L7.19,33H3.37A3.38,3.38,0,0,1,0,29.58V17.94a3.36,3.36,0,0,1,3.37-3.37Zm36.27,0V8.51H39v6.06ZM49.48,49.25a3.4,3.4,0,0,1,6.8,0v51.81a3.4,3.4,0,1,1-6.8,0V49.25ZM69.59,49a3.4,3.4,0,1,1,6.78.42L73,101.27a3.4,3.4,0,0,1-6.78-.43L69.59,49Zm-40.26.42A3.39,3.39,0,1,1,36.1,49l3.41,51.8a3.39,3.39,0,1,1-6.77.43L29.33,49.46ZM92.51,33.38H13.19l7.94,83.55H84.56l8-83.55Z"/></svg>';
        deleteBtn.style.border = 'none';
        deleteBtn.style.background = 'transparent';
        deleteBtn.style.color = 'black';
        deleteBtn.style.cursor = 'pointer';
        deleteBtn.style.padding = '0';
        deleteBtn.style.marginLeft = '10px';
        deleteBtn.onclick = () => deleteItem(index);

        li.appendChild(deleteBtn);
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

function insertItem(itemName, itemPrice) {
    cartItems.push({ name: itemName, price: itemPrice });
    updateCart();
}

function deleteItem(index) {
    if (index >= 0 && index < cartItems.length) {
        cartItems.splice(index, 1);
        updateCart();
    }
}
