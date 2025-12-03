/**
 * ======================================
 * Khadka Kirana Pasal - Admin Panel
 * ======================================
 * Admin dashboard, product, order, and
 * customer management functionality
 */

// ============================================
// ADMIN AUTHENTICATION
// ============================================

// Check if we're on the admin page
if (window.location.pathname.includes('admin.html')) {
    // Wait for auth.js to load
    if (typeof isLoggedIn === 'undefined') {
        window.location.href = 'auth.html';
        throw new Error('Auth not loaded');
    }

    // Check if user is admin
    if (!isLoggedIn()) {
        window.location.href = 'auth.html';
        throw new Error('Not logged in');
    }

    const currentUser = getCurrentUser();
    if (!currentUser || currentUser.role !== 'admin') {
        alert('Access denied! Admin privileges required.');
        window.location.href = 'index.html';
        throw new Error('Not admin');
    }
}

// Initialize product stock in localStorage if not exists
function initializeProductStock() {
    let productStock = JSON.parse(localStorage.getItem('productStock') || '{}');
    if (Object.keys(productStock).length === 0) {
        // Initialize all products with stock of 50
        products.forEach(product => {
            productStock[product.id] = 50;
        });
        localStorage.setItem('productStock', JSON.stringify(productStock));
    }
}

// Initialize product ratings if not exists
function initializeProductRatings() {
    let productRatings = JSON.parse(localStorage.getItem('productRatings') || '{}');
    if (Object.keys(productRatings).length === 0) {
        products.forEach(product => {
            productRatings[product.id] = {
                average: (Math.random() * 2 + 3).toFixed(1), // Random rating between 3-5
                count: Math.floor(Math.random() * 50) + 5, // Random review count 5-55
                reviews: []
            };
        });
        localStorage.setItem('productRatings', JSON.stringify(productRatings));
    }
}

// Show section
function showSection(section) {
    document.querySelectorAll('.admin-section').forEach(s => s.classList.add('hidden'));
    document.querySelectorAll('.admin-nav-btn').forEach(btn => {
        btn.classList.remove('bg-green-600', 'text-white');
        btn.classList.add('text-gray-700', 'hover:bg-gray-100');
    });
    
    if (section === 'dashboard') {
        document.getElementById('dashboardSection').classList.remove('hidden');
        loadDashboard();
    } else if (section === 'products') {
        document.getElementById('productsSection').classList.remove('hidden');
        loadProducts();
    } else if (section === 'orders') {
        document.getElementById('ordersSection').classList.remove('hidden');
        loadAllOrders();
    } else if (section === 'customers') {
        document.getElementById('customersSection').classList.remove('hidden');
        loadCustomers();
    } else if (section === 'reviews') {
        document.getElementById('reviewsSection').classList.remove('hidden');
        loadReviews();
    }
    
    event.target.classList.add('bg-green-600', 'text-white');
    event.target.classList.remove('text-gray-700', 'hover:bg-gray-100');
}

// Load dashboard
function loadDashboard() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const customers = users.filter(u => u.role === 'customer');
    const allOrders = [];
    let totalRevenue = 0;
    
    customers.forEach(customer => {
        if (customer.orders) {
            allOrders.push(...customer.orders);
            customer.orders.forEach(order => {
                totalRevenue += order.total;
            });
        }
    });
    
    document.getElementById('totalProducts').textContent = products.length;
    document.getElementById('totalOrders').textContent = allOrders.length;
    document.getElementById('totalCustomers').textContent = customers.length;
    document.getElementById('totalRevenue').textContent = 'Rs. ' + totalRevenue;
    
    // Recent orders
    const recentOrders = allOrders.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5);
    let html = '';
    
    if (recentOrders.length === 0) {
        html = '<p class="text-gray-500 text-center py-4">No orders yet</p>';
    } else {
        html = '<div class="space-y-3">';
        recentOrders.forEach(order => {
            const customer = customers.find(c => c.orders && c.orders.find(o => o.id === order.id));
            html += `
                <div class="flex justify-between items-center border-b pb-3">
                    <div>
                        <p class="font-semibold">Order #${order.id} - ${customer ? customer.name : 'Unknown'}</p>
                        <p class="text-sm text-gray-600">${new Date(order.date).toLocaleDateString()}</p>
                    </div>
                    <div class="text-right">
                        <p class="font-bold text-green-600">Rs. ${order.total}</p>
                        <span class="text-xs px-2 py-1 rounded ${order.status === 'delivered' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}">${order.status}</span>
                    </div>
                </div>
            `;
        });
        html += '</div>';
    }
    
    document.getElementById('recentOrdersList').innerHTML = html;
}

// Load products
function loadProducts() {
    const productStock = JSON.parse(localStorage.getItem('productStock') || '{}');
    const productRatings = JSON.parse(localStorage.getItem('productRatings') || '{}');
    
    let html = '';
    products.forEach(product => {
        const stock = productStock[product.id] || 0;
        const rating = productRatings[product.id] || { average: 0, count: 0 };
        
        html += `
            <tr class="border-b product-row" data-name="${product.name.toLowerCase()}" data-category="${product.category.toLowerCase()}">
                <td class="px-4 py-3">${product.id}</td>
                <td class="px-4 py-3 font-semibold">${product.name}</td>
                <td class="px-4 py-3">${product.category}</td>
                <td class="px-4 py-3">Rs. ${product.price}</td>
                <td class="px-4 py-3">
                    <i class="fas fa-star text-yellow-500"></i> ${rating.average} (${rating.count})
                </td>
                <td class="px-4 py-3">
                    <span class="px-2 py-1 rounded ${stock > 10 ? 'bg-green-100 text-green-700' : stock > 0 ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}">
                        ${stock}
                    </span>
                </td>
                <td class="px-4 py-3">
                    <button onclick="openStockModal(${product.id}, '${product.name}', ${stock})" class="text-blue-600 hover:text-blue-700">
                        <i class="fas fa-edit"></i>
                    </button>
                </td>
            </tr>
        `;
    });
    
    document.getElementById('productsTable').innerHTML = html;
}

// Search products
function searchProducts() {
    const searchTerm = document.getElementById('productSearch').value.toLowerCase();
    const rows = document.querySelectorAll('.product-row');
    
    rows.forEach(row => {
        const name = row.dataset.name;
        const category = row.dataset.category;
        
        if (name.includes(searchTerm) || category.includes(searchTerm)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

// Stock modal functions
function openStockModal(productId, productName, currentStock) {
    document.getElementById('stockProductId').value = productId;
    document.getElementById('stockProductName').value = productName;
    document.getElementById('stockQuantity').value = currentStock;
    document.getElementById('stockModal').classList.remove('hidden');
}

function closeStockModal() {
    document.getElementById('stockModal').classList.add('hidden');
}

function updateStock(event) {
    event.preventDefault();
    
    const productId = parseInt(document.getElementById('stockProductId').value);
    const quantity = parseInt(document.getElementById('stockQuantity').value);
    
    const productStock = JSON.parse(localStorage.getItem('productStock') || '{}');
    productStock[productId] = quantity;
    localStorage.setItem('productStock', JSON.stringify(productStock));
    
    closeStockModal();
    loadProducts();
    alert('Stock updated successfully!');
}

// Load all orders
function loadAllOrders() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const allOrders = [];
    
    users.forEach(user => {
        if (user.orders && user.role === 'customer') {
            user.orders.forEach(order => {
                allOrders.push({ ...order, customerName: user.name, customerId: user.id });
            });
        }
    });
    
    if (allOrders.length === 0) {
        document.getElementById('allOrdersList').innerHTML = `
            <p class="text-center text-gray-500 py-12">No orders found</p>
        `;
        return;
    }
    
    allOrders.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    let html = '<div class="space-y-4">';
    allOrders.forEach(order => {
        html += `
            <div class="border rounded-lg p-6">
                <div class="flex justify-between items-start mb-4">
                    <div>
                        <h3 class="font-bold text-lg">Order #${order.id}</h3>
                        <p class="text-sm text-gray-600">Customer: ${order.customerName}</p>
                        <p class="text-sm text-gray-600">${new Date(order.date).toLocaleDateString()}</p>
                    </div>
                    <div class="text-right">
                        <p class="text-xl font-bold text-green-600">Rs. ${order.total}</p>
                        <select onchange="updateOrderStatus(${order.customerId}, ${order.id}, this.value)" class="mt-2 px-3 py-1 border rounded">
                            <option value="pending" ${order.status === 'pending' ? 'selected' : ''}>Pending</option>
                            <option value="processing" ${order.status === 'processing' ? 'selected' : ''}>Processing</option>
                            <option value="delivered" ${order.status === 'delivered' ? 'selected' : ''}>Delivered</option>
                        </select>
                    </div>
                </div>
                <div class="border-t pt-4">
                    <p class="font-semibold mb-2">Items:</p>
                    <ul class="space-y-1">
                        ${order.items.map(item => `<li class="text-sm">• ${item.name} × ${item.quantity} = Rs. ${item.price * item.quantity}</li>`).join('')}
                    </ul>
                    ${order.address ? `<p class="text-sm text-gray-600 mt-3"><i class="fas fa-map-marker-alt mr-1"></i>${order.address}</p>` : ''}
                </div>
            </div>
        `;
    });
    html += '</div>';
    
    document.getElementById('allOrdersList').innerHTML = html;
}

// Update order status
function updateOrderStatus(customerId, orderId, newStatus) {
    const users = JSON.parse(localStorage.getItem('users'));
    const userIndex = users.findIndex(u => u.id === customerId);
    
    if (userIndex !== -1 && users[userIndex].orders) {
        const orderIndex = users[userIndex].orders.findIndex(o => o.id === orderId);
        if (orderIndex !== -1) {
            users[userIndex].orders[orderIndex].status = newStatus;
            localStorage.setItem('users', JSON.stringify(users));
            alert('Order status updated successfully!');
        }
    }
}

// Load customers
function loadCustomers() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const customers = users.filter(u => u.role === 'customer');
    
    let html = '';
    customers.forEach(customer => {
        const orderCount = customer.orders ? customer.orders.length : 0;
        html += `
            <tr class="border-b">
                <td class="px-4 py-3">${customer.id}</td>
                <td class="px-4 py-3 font-semibold">${customer.name}</td>
                <td class="px-4 py-3">${customer.email}</td>
                <td class="px-4 py-3">${customer.phone}</td>
                <td class="px-4 py-3">${orderCount}</td>
                <td class="px-4 py-3">${new Date(customer.createdAt).toLocaleDateString()}</td>
            </tr>
        `;
    });
    
    document.getElementById('customersTable').innerHTML = html || '<tr><td colspan="6" class="text-center py-4 text-gray-500">No customers found</td></tr>';
}

// Load reviews
function loadReviews() {
    const productRatings = JSON.parse(localStorage.getItem('productRatings') || '{}');
    let allReviews = [];
    
    Object.keys(productRatings).forEach(productId => {
        const product = products.find(p => p.id == productId);
        if (product && productRatings[productId].reviews) {
            productRatings[productId].reviews.forEach(review => {
                allReviews.push({
                    ...review,
                    productName: product.name,
                    productId: productId
                });
            });
        }
    });
    
    if (allReviews.length === 0) {
        document.getElementById('reviewsList').innerHTML = `
            <p class="text-center text-gray-500 py-12">No reviews yet</p>
        `;
        return;
    }
    
    allReviews.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    let html = '<div class="space-y-4">';
    allReviews.forEach(review => {
        html += `
            <div class="border rounded-lg p-4">
                <div class="flex justify-between items-start mb-2">
                    <div>
                        <h4 class="font-bold">${review.productName}</h4>
                        <p class="text-sm text-gray-600">By ${review.userName}</p>
                    </div>
                    <div class="text-right">
                        <div class="text-yellow-500">
                            ${'<i class="fas fa-star"></i>'.repeat(review.rating)}${'<i class="far fa-star"></i>'.repeat(5 - review.rating)}
                        </div>
                        <p class="text-xs text-gray-500">${new Date(review.date).toLocaleDateString()}</p>
                    </div>
                </div>
                <p class="text-gray-700">${review.comment}</p>
                <button onclick="deleteReview('${review.productId}', '${review.date}')" class="mt-2 text-red-600 hover:text-red-700 text-sm">
                    <i class="fas fa-trash mr-1"></i>Delete
                </button>
            </div>
        `;
    });
    html += '</div>';
    
    document.getElementById('reviewsList').innerHTML = html;
}

// Delete review
function deleteReview(productId, reviewDate) {
    if (!confirm('Are you sure you want to delete this review?')) return;
    
    const productRatings = JSON.parse(localStorage.getItem('productRatings'));
    if (productRatings[productId] && productRatings[productId].reviews) {
        productRatings[productId].reviews = productRatings[productId].reviews.filter(r => r.date !== reviewDate);
        
        // Recalculate average
        const reviews = productRatings[productId].reviews;
        if (reviews.length > 0) {
            const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
            productRatings[productId].average = (sum / reviews.length).toFixed(1);
            productRatings[productId].count = reviews.length;
        } else {
            productRatings[productId].average = '0.0';
            productRatings[productId].count = 0;
        }
        
        localStorage.setItem('productRatings', JSON.stringify(productRatings));
        loadReviews();
        alert('Review deleted successfully!');
    }
}

// Initialize - only on admin page
if (typeof document !== 'undefined' && window.location.pathname.includes('admin.html')) {
    document.addEventListener('DOMContentLoaded', () => {
        // Ensure products array is loaded
        if (typeof products !== 'undefined') {
            initializeProductStock();
            initializeProductRatings();
            loadDashboard();
        } else {
            console.error('Products array not loaded');
        }
    });
}
