/**
 * ======================================
 * Khadka Kirana Pasal - Shopping Cart
 * ======================================
 * Shopping cart display and checkout
 * functionality
 */

// ============================================
// CART DISPLAY & MANAGEMENT
// ============================================

// Load cart from localStorage
function loadCart() {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
}

// Save cart to localStorage
function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Note: products array is loaded from script.js

// Display cart items
function displayCartItems() {
    const cart = loadCart();
    const container = document.getElementById('cartItemsContainer');
    const cartCount = document.getElementById('cartCount');
    
    if (cart.length === 0) {
        container.innerHTML = `
            <div class="text-center py-12">
                <i class="fas fa-shopping-cart text-6xl text-gray-300 mb-4"></i>
                <h3 class="text-xl font-semibold text-gray-600 mb-2">Your cart is empty</h3>
                <p class="text-gray-500 mb-6">Add some products to get started</p>
                <a href="index.html#products" class="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
                    Browse Products
                </a>
            </div>
        `;
        updateSummary(0);
        cartCount.textContent = '0';
        return;
    }

    let html = '<div class="space-y-4">';
    cart.forEach(item => {
        const product = products.find(p => p.id === item.id);
        if (product) {
            html += `
                <div class="flex items-center border-b pb-4">
                    <img src="${product.image}" alt="${product.name}" class="w-20 h-20 object-cover rounded">
                    <div class="flex-1 ml-4">
                        <h3 class="font-semibold text-gray-800">${product.name}</h3>
                        <p class="text-green-600 font-semibold">Rs. ${product.price}</p>
                    </div>
                    <div class="flex items-center space-x-3">
                        <button onclick="updateQuantity(${item.id}, -1)" class="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span class="font-semibold">${item.quantity}</span>
                        <button onclick="updateQuantity(${item.id}, 1)" class="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300">
                            <i class="fas fa-plus"></i>
                        </button>
                        <button onclick="removeFromCart(${item.id})" class="text-red-500 hover:text-red-700 ml-4">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            `;
        }
    });
    html += '</div>';
    
    container.innerHTML = html;
    
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update summary
    const subtotal = cart.reduce((sum, item) => {
        const product = products.find(p => p.id === item.id);
        return sum + (product ? product.price * item.quantity : 0);
    }, 0);
    updateSummary(subtotal);
}

// Update quantity
function updateQuantity(productId, change) {
    let cart = loadCart();
    const itemIndex = cart.findIndex(item => item.id === productId);
    
    if (itemIndex > -1) {
        cart[itemIndex].quantity += change;
        if (cart[itemIndex].quantity <= 0) {
            cart.splice(itemIndex, 1);
        }
        saveCart(cart);
        displayCartItems();
    }
}

// Remove from cart
function removeFromCart(productId) {
    let cart = loadCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
    displayCartItems();
    showNotification('Item removed from cart');
}

// Update order summary
function updateSummary(subtotal) {
    const deliveryFee = subtotal > 0 ? 50 : 0;
    const total = subtotal + deliveryFee;
    
    document.getElementById('subtotal').textContent = `Rs. ${subtotal}`;
    document.getElementById('deliveryFee').textContent = `Rs. ${deliveryFee}`;
    document.getElementById('totalAmount').textContent = `Rs. ${total}`;
}

// Proceed to checkout
function proceedToCheckout() {
    const cart = loadCart();
    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }
    
    // Check if user is logged in
    const currentUserSession = localStorage.getItem('currentUser');
    if (!currentUserSession) {
        if (confirm('Please login to place an order. Would you like to login now?')) {
            window.location.href = 'auth.html';
        }
        return;
    }
    
    const session = JSON.parse(currentUserSession);
    const users = JSON.parse(localStorage.getItem('users'));
    const userIndex = users.findIndex(u => u.id === session.userId);
    
    if (userIndex === -1) {
        alert('User not found. Please login again.');
        return;
    }
    
    const user = users[userIndex];
    
    // Get or prompt for delivery address
    let selectedAddress = '';
    if (user.addresses && user.addresses.length > 0) {
        const defaultAddress = user.addresses.find(a => a.isDefault);
        selectedAddress = defaultAddress ? defaultAddress.address : user.addresses[0].address;
        
        if (!confirm(`Deliver to: ${selectedAddress}\n\nClick OK to confirm or Cancel to change address.`)) {
            alert('Please update your delivery address in your profile.');
            return;
        }
    } else {
        selectedAddress = prompt('Please enter your delivery address:');
        if (!selectedAddress) {
            alert('Delivery address is required to place an order.');
            return;
        }
    }
    
    const subtotal = cart.reduce((sum, item) => {
        const product = products.find(p => p.id === item.id);
        return sum + (product ? product.price * item.quantity : 0);
    }, 0);
    
    const deliveryFee = 50;
    const total = subtotal + deliveryFee;
    
    // Create order
    if (!users[userIndex].orders) {
        users[userIndex].orders = [];
    }
    
    const order = {
        id: users[userIndex].orders.length + 1,
        date: new Date().toISOString(),
        items: cart.map(item => {
            const product = products.find(p => p.id === item.id);
            return {
                id: item.id,
                name: product.name,
                price: product.price,
                quantity: item.quantity
            };
        }),
        subtotal: subtotal,
        deliveryFee: deliveryFee,
        total: total,
        address: selectedAddress,
        status: 'pending'
    };
    
    users[userIndex].orders.push(order);
    localStorage.setItem('users', JSON.stringify(users));
    
    // Update product stock
    const productStock = JSON.parse(localStorage.getItem('productStock') || '{}');
    cart.forEach(item => {
        if (productStock[item.id]) {
            productStock[item.id] = Math.max(0, productStock[item.id] - item.quantity);
        }
    });
    localStorage.setItem('productStock', JSON.stringify(productStock));
    
    alert(`Order placed successfully!\nOrder #${order.id}\nTotal: Rs. ${total}\n\nThank you for shopping with Khadka Kirana Pasal!`);
    localStorage.removeItem('cart');
    displayCartItems();
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'fixed top-20 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Initialize cart page
document.addEventListener('DOMContentLoaded', () => {
    displayCartItems();
});

