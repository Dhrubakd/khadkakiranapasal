// Profile Page Functionality

// Check authentication
if (!isLoggedIn()) {
    window.location.href = 'auth.html';
}

const currentUser = getCurrentUser();
if (!currentUser) {
    window.location.href = 'auth.html';
}

// Load user data
function loadUserData() {
    document.getElementById('userName').textContent = currentUser.name;
    document.getElementById('userEmail').textContent = currentUser.email;
    document.getElementById('settingName').value = currentUser.name;
    document.getElementById('settingEmail').value = currentUser.email;
    document.getElementById('settingPhone').value = currentUser.phone;
    
    // Update cart count
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    document.getElementById('cartCount').textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}

// Show section
function showSection(section) {
    // Hide all sections
    document.querySelectorAll('.profile-section').forEach(s => s.classList.add('hidden'));
    
    // Remove active class from all nav buttons
    document.querySelectorAll('.profile-nav-btn').forEach(btn => {
        btn.classList.remove('bg-green-600', 'text-white');
        btn.classList.add('text-gray-700', 'hover:bg-gray-100');
    });
    
    // Show selected section
    if (section === 'orders') {
        document.getElementById('ordersSection').classList.remove('hidden');
        loadOrders();
    } else if (section === 'addresses') {
        document.getElementById('addressesSection').classList.remove('hidden');
        loadAddresses();
    } else if (section === 'settings') {
        document.getElementById('settingsSection').classList.remove('hidden');
    }
    
    // Highlight active nav button
    event.target.classList.add('bg-green-600', 'text-white');
    event.target.classList.remove('text-gray-700', 'hover:bg-gray-100');
}

// Load orders
function loadOrders() {
    const ordersList = document.getElementById('ordersList');
    
    if (!currentUser.orders || currentUser.orders.length === 0) {
        ordersList.innerHTML = `
            <div class="text-center py-12">
                <i class="fas fa-shopping-bag text-6xl text-gray-300 mb-4"></i>
                <h3 class="text-xl font-semibold text-gray-600 mb-2">No orders yet</h3>
                <p class="text-gray-500 mb-6">Start shopping to create your first order</p>
                <a href="index.html#products" class="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
                    Browse Products
                </a>
            </div>
        `;
        return;
    }
    
    let html = '<div class="space-y-4">';
    currentUser.orders.reverse().forEach(order => {
        const orderDate = new Date(order.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        html += `
            <div class="border rounded-lg p-6 hover:shadow-lg transition">
                <div class="flex justify-between items-start mb-4">
                    <div>
                        <h3 class="font-bold text-lg">Order #${order.id}</h3>
                        <p class="text-sm text-gray-600">${orderDate}</p>
                    </div>
                    <span class="px-3 py-1 rounded-full text-sm font-semibold ${
                        order.status === 'delivered' ? 'bg-green-100 text-green-700' :
                        order.status === 'processing' ? 'bg-blue-100 text-blue-700' :
                        'bg-yellow-100 text-yellow-700'
                    }">
                        ${order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </span>
                </div>
                <div class="border-t pt-4">
                    <p class="text-sm text-gray-600 mb-2">${order.items.length} item(s)</p>
                    <p class="text-xl font-bold text-green-600">Rs. ${order.total}</p>
                    ${order.address ? `<p class="text-sm text-gray-600 mt-2"><i class="fas fa-map-marker-alt mr-1"></i>${order.address}</p>` : ''}
                </div>
                <button onclick="viewOrderDetails(${order.id})" class="mt-4 text-green-600 hover:text-green-700 font-semibold">
                    View Details <i class="fas fa-arrow-right ml-1"></i>
                </button>
            </div>
        `;
    });
    html += '</div>';
    ordersList.innerHTML = html;
}

// View order details
function viewOrderDetails(orderId) {
    const order = currentUser.orders.find(o => o.id === orderId);
    if (!order) return;
    
    let itemsHtml = order.items.map(item => `
        <div class="flex justify-between py-2">
            <span>${item.name} × ${item.quantity}</span>
            <span>Rs. ${item.price * item.quantity}</span>
        </div>
    `).join('');
    
    alert(`Order Details\n\nOrder #${order.id}\nDate: ${new Date(order.date).toLocaleDateString()}\nStatus: ${order.status}\n\nItems:\n${order.items.map(i => `${i.name} × ${i.quantity} = Rs. ${i.price * i.quantity}`).join('\n')}\n\nSubtotal: Rs. ${order.subtotal}\nDelivery: Rs. ${order.deliveryFee}\nTotal: Rs. ${order.total}`);
}

// Load addresses
function loadAddresses() {
    const addressesList = document.getElementById('addressesList');
    
    if (!currentUser.addresses || currentUser.addresses.length === 0) {
        addressesList.innerHTML = `
            <div class="col-span-2 text-center py-12">
                <i class="fas fa-map-marker-alt text-6xl text-gray-300 mb-4"></i>
                <h3 class="text-xl font-semibold text-gray-600 mb-2">No addresses saved</h3>
                <p class="text-gray-500 mb-6">Add a delivery address to get started</p>
            </div>
        `;
        return;
    }
    
    let html = '';
    currentUser.addresses.forEach(address => {
        html += `
            <div class="border rounded-lg p-4 ${address.isDefault ? 'border-green-600' : ''}">
                <div class="flex justify-between items-start mb-2">
                    <h4 class="font-bold">${address.label}</h4>
                    ${address.isDefault ? '<span class="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Default</span>' : ''}
                </div>
                <p class="text-gray-600 text-sm mb-4">${address.address}</p>
                <div class="flex space-x-2">
                    ${!address.isDefault ? `<button onclick="setDefaultAddress(${address.id})" class="text-sm text-green-600 hover:text-green-700">Set Default</button>` : ''}
                    <button onclick="deleteAddress(${address.id})" class="text-sm text-red-600 hover:text-red-700">Delete</button>
                </div>
            </div>
        `;
    });
    addressesList.innerHTML = html;
}

// Show/hide add address modal
function showAddAddressModal() {
    document.getElementById('addAddressModal').classList.remove('hidden');
}

function closeAddAddressModal() {
    document.getElementById('addAddressModal').classList.add('hidden');
    document.getElementById('addressLabel').value = '';
    document.getElementById('addressFull').value = '';
    document.getElementById('addressDefault').checked = false;
}

// Add address
function addAddress(event) {
    event.preventDefault();
    
    const label = document.getElementById('addressLabel').value;
    const address = document.getElementById('addressFull').value;
    const isDefault = document.getElementById('addressDefault').checked;
    
    const users = JSON.parse(localStorage.getItem('users'));
    const userIndex = users.findIndex(u => u.id === currentUser.id);
    
    if (!users[userIndex].addresses) {
        users[userIndex].addresses = [];
    }
    
    // If setting as default, remove default from others
    if (isDefault) {
        users[userIndex].addresses.forEach(addr => addr.isDefault = false);
    }
    
    const newAddress = {
        id: users[userIndex].addresses.length + 1,
        label: label,
        address: address,
        isDefault: isDefault || users[userIndex].addresses.length === 0
    };
    
    users[userIndex].addresses.push(newAddress);
    localStorage.setItem('users', JSON.stringify(users));
    
    // Update current user
    currentUser.addresses = users[userIndex].addresses;
    
    closeAddAddressModal();
    loadAddresses();
}

// Set default address
function setDefaultAddress(addressId) {
    const users = JSON.parse(localStorage.getItem('users'));
    const userIndex = users.findIndex(u => u.id === currentUser.id);
    
    users[userIndex].addresses.forEach(addr => {
        addr.isDefault = addr.id === addressId;
    });
    
    localStorage.setItem('users', JSON.stringify(users));
    currentUser.addresses = users[userIndex].addresses;
    loadAddresses();
}

// Delete address
function deleteAddress(addressId) {
    if (!confirm('Are you sure you want to delete this address?')) return;
    
    const users = JSON.parse(localStorage.getItem('users'));
    const userIndex = users.findIndex(u => u.id === currentUser.id);
    
    users[userIndex].addresses = users[userIndex].addresses.filter(addr => addr.id !== addressId);
    localStorage.setItem('users', JSON.stringify(users));
    
    currentUser.addresses = users[userIndex].addresses;
    loadAddresses();
}

// Update profile
function updateProfile(event) {
    event.preventDefault();
    
    const name = document.getElementById('settingName').value;
    const phone = document.getElementById('settingPhone').value;
    
    const users = JSON.parse(localStorage.getItem('users'));
    const userIndex = users.findIndex(u => u.id === currentUser.id);
    
    users[userIndex].name = name;
    users[userIndex].phone = phone;
    
    localStorage.setItem('users', JSON.stringify(users));
    
    // Update session
    const session = JSON.parse(localStorage.getItem('currentUser'));
    session.name = name;
    localStorage.setItem('currentUser', JSON.stringify(session));
    
    alert('Profile updated successfully!');
    loadUserData();
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadUserData();
    loadOrders();
});
