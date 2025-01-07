// Example: Alert when 'Add to Cart' is clicked (for now)
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        alert('Item added to cart!');
    });
});



// Initialize an empty cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update the cart count on the header
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}

// Add item to the cart
function addToCart(productId, productName, productPrice) {
    const product = { id: productId, name: productName, price: productPrice };
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));  // Save cart to localStorage
    updateCartCount();  // Update the cart count in the header
}

// Handle 'Add to Cart' button click
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        const productId = this.dataset.productId;
        const productName = this.dataset.productName;
        const productPrice = this.dataset.productPrice;
        addToCart(productId, productName, productPrice);
    });
});

// Run this when the page loads to initialize cart count
updateCartCount();


// Initialize an empty cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update the cart count on the header
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}

// Add item to the cart
function addToCart(productId, productName, productPrice) {
    const product = { id: productId, name: productName, price: productPrice };
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));  // Save cart to localStorage
    updateCartCount();  // Update the cart count in the header
}

// Handle 'Add to Cart' button click
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        const productId = this.dataset.productId;
        const productName = this.dataset.productName;
        const productPrice = this.dataset.productPrice;
        addToCart(productId, productName, productPrice);
    });
});

// Run this when the page loads to initialize cart count
updateCartCount();


// Display cart items on the Cart page
function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';  // Clear previous items

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <h4>${item.name}</h4>
            <p>Price: $${item.price}</p>
        `;
        cartItemsContainer.appendChild(itemElement);
    });
}

// Call renderCart when the cart page is loaded
if (window.location.hash === '#cart') {
    renderCart();
}

