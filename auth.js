// Authentication System

// Initialize demo users
function initializeDemoUsers() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.length === 0) {
        const demoUsers = [
            {
                id: 1,
                name: 'Admin User',
                email: 'admin@khadka.com',
                password: 'admin123',
                phone: '+977-9812345678',
                role: 'admin',
                addresses: [],
                orders: [],
                createdAt: new Date().toISOString()
            },
            {
                id: 2,
                name: 'Test User',
                email: 'user@test.com',
                password: 'user123',
                phone: '+977-9876543210',
                role: 'customer',
                addresses: [{
                    id: 1,
                    label: 'Home',
                    address: 'Kathmandu, Nepal',
                    isDefault: true
                }],
                orders: [],
                createdAt: new Date().toISOString()
            }
        ];
        localStorage.setItem('users', JSON.stringify(demoUsers));
    }
}

// Toggle between login and register forms
function showLogin() {
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('registerForm').classList.add('hidden');
    document.getElementById('loginTab').classList.add('bg-green-600', 'text-white');
    document.getElementById('loginTab').classList.remove('text-gray-700');
    document.getElementById('registerTab').classList.remove('bg-green-600', 'text-white');
    document.getElementById('registerTab').classList.add('text-gray-700');
}

function showRegister() {
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('registerForm').classList.remove('hidden');
    document.getElementById('registerTab').classList.add('bg-green-600', 'text-white');
    document.getElementById('registerTab').classList.remove('text-gray-700');
    document.getElementById('loginTab').classList.remove('bg-green-600', 'text-white');
    document.getElementById('loginTab').classList.add('text-gray-700');
}

// Handle login
function handleLogin(event) {
    event.preventDefault();
    event.stopPropagation();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        // Store current user session
        const session = {
            userId: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
            loginTime: new Date().toISOString()
        };
        localStorage.setItem('currentUser', JSON.stringify(session));
        
        // Always redirect to index.html after login
        // Admin can access admin panel via direct URL or profile menu
        window.location.replace('index.html');
    } else {
        alert('Invalid email or password!');
    }
    
    return false;
}

// Handle registration
function handleRegister(event) {
    event.preventDefault();
    event.stopPropagation();
    
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const phone = document.getElementById('regPhone').value;
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirmPassword').value;
    
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return false;
    }
    
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Check if email already exists
    if (users.find(u => u.email === email)) {
        alert('Email already registered!');
        return;
    }
    
    // Create new user
    const newUser = {
        id: users.length + 1,
        name: name,
        email: email,
        password: password,
        phone: phone,
        role: 'customer',
        addresses: [],
        orders: [],
        createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    alert('Registration successful! Please login.');
    showLogin();
    
    // Clear form
    document.getElementById('regName').value = '';
    document.getElementById('regEmail').value = '';
    document.getElementById('regPhone').value = '';
    document.getElementById('regPassword').value = '';
    document.getElementById('regConfirmPassword').value = '';
    
    return false;
}

// Check if user is logged in
function isLoggedIn() {
    return localStorage.getItem('currentUser') !== null;
}

// Get current user
function getCurrentUser() {
    const session = localStorage.getItem('currentUser');
    if (!session) return null;
    
    const sessionData = JSON.parse(session);
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    return users.find(u => u.id === sessionData.userId);
}

// Logout
function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

// Open auth modal
function openAuthModal() {
    const modal = document.getElementById('authModal');
    if (modal) {
        modal.classList.remove('hidden');
    }
}

// Close auth modal
function closeAuthModal() {
    const modal = document.getElementById('authModal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('authModal');
    if (event.target === modal) {
        closeAuthModal();
    }
}

// Initialize on page load
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        initializeDemoUsers();
        
        // Show already logged in message if on auth page
        if (window.location.pathname.includes('auth.html') && isLoggedIn()) {
            const currentUser = getCurrentUser();
            const redirectMessage = document.createElement('div');
            redirectMessage.className = 'fixed top-4 right-4 bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg shadow-lg z-50';
            redirectMessage.innerHTML = `
                <div class="flex items-center space-x-3">
                    <i class="fas fa-check-circle text-2xl"></i>
                    <div>
                        <p class="font-semibold">Already Logged In</p>
                        <p class="text-sm">Welcome back, ${currentUser.name}!</p>
                        <button onclick="window.location.href='index.html'" class="mt-2 bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded text-sm">
                            Continue Shopping
                        </button>
                    </div>
                </div>
            `;
            document.body.appendChild(redirectMessage);
        }
    });
}
