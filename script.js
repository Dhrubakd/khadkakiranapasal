/**
 * ======================================
 * Khadka Kirana Pasal - Main Script
 * ======================================
 * Main product data and functionality
 * for the grocery store website
 */

// ============================================
// PRODUCTS DATA
// ============================================
const products = [
    // Vegetables
    { id: 1, name: 'Tomato', category: 'vegetables', price: 80, unit: 'kg', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=300' },
    { id: 2, name: 'Potato', category: 'vegetables', price: 60, unit: 'kg', image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=300' },
    { id: 3, name: 'Onion', category: 'vegetables', price: 70, unit: 'kg', image: 'https://images.unsplash.com/photo-1587049352846-4a222e784e38?w=300' },
    { id: 4, name: 'Cauliflower', category: 'vegetables', price: 90, unit: 'kg', image: 'https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=300' },
    { id: 5, name: 'Carrot', category: 'vegetables', price: 75, unit: 'kg', image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=300' },
    { id: 6, name: 'Cabbage', category: 'vegetables', price: 50, unit: 'kg', image: 'https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?w=300' },
    { id: 7, name: 'Green Beans', category: 'vegetables', price: 100, unit: 'kg', image: 'https://images.unsplash.com/photo-1591610930414-c44e4f7fc6f9?w=300' },
    
    // Fruits
    { id: 8, name: 'Apple', category: 'fruits', price: 250, unit: 'kg', image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300' },
    { id: 9, name: 'Banana', category: 'fruits', price: 120, unit: 'dozen', image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=300' },
    { id: 10, name: 'Orange', category: 'fruits', price: 200, unit: 'kg', image: 'https://images.unsplash.com/photo-1547514701-42782101795e?w=300' },
    { id: 11, name: 'Mango', category: 'fruits', price: 180, unit: 'kg', image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=300' },
    { id: 12, name: 'Grapes', category: 'fruits', price: 220, unit: 'kg', image: 'https://images.unsplash.com/photo-1599819177418-38e8d241bd0d?w=300' },
    
    // Dairy & Eggs
    { id: 13, name: 'Milk', category: 'dairy', price: 80, unit: 'liter', image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300' },
    { id: 14, name: 'Yogurt (Dahi)', category: 'dairy', price: 150, unit: 'kg', image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=300' },
    { id: 15, name: 'Cheese', category: 'dairy', price: 300, unit: 'kg', image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=300' },
    { id: 16, name: 'Butter', category: 'dairy', price: 500, unit: 'kg', image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=300' },
    { id: 17, name: 'Paneer', category: 'dairy', price: 350, unit: 'kg', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300' },
    { id: 18, name: 'Eggs', category: 'dairy', price: 15, unit: 'piece', image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=300' },
    
    // Grains & Pulses
    { id: 19, name: 'Rice (Basmati)', category: 'grains', price: 120, unit: 'kg', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300' },
    { id: 20, name: 'Rice (Regular)', category: 'grains', price: 70, unit: 'kg', image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?w=300' },
    { id: 21, name: 'Wheat Flour (Atta)', category: 'grains', price: 60, unit: 'kg', image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=300' },
    { id: 22, name: 'Sugar', category: 'grains', price: 80, unit: 'kg', image: 'https://images.unsplash.com/photo-1587735243615-c03f25aaff15?w=300' },
    { id: 23, name: 'Red Lentils (Masoor)', category: 'grains', price: 120, unit: 'kg', image: 'https://images.unsplash.com/photo-1602446655658-bc7624cd3f06?w=300' },
    { id: 24, name: 'Chickpeas (Chana)', category: 'grains', price: 140, unit: 'kg', image: 'https://images.unsplash.com/photo-1610640227979-15bbf66d3043?w=300' },
    { id: 25, name: 'Black Lentils (Urad)', category: 'grains', price: 130, unit: 'kg', image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300' },
    { id: 26, name: 'Soybeans (Bhatmas)', category: 'grains', price: 110, unit: 'kg', image: 'https://images.unsplash.com/photo-1584425229522-00c8ca9ab7d8?w=300' },
    
    // Spices & Masalas
    { id: 27, name: 'Turmeric Powder (Besar)', category: 'spices', price: 200, unit: '100g', image: 'https://images.unsplash.com/photo-1615485500834-bc10199bc768?w=300' },
    { id: 28, name: 'Chili Powder (Khursani)', category: 'spices', price: 180, unit: '100g', image: 'https://images.unsplash.com/photo-1599909533540-d7e8b55f69e1?w=300' },
    { id: 29, name: 'Cumin Seeds (Jeera)', category: 'spices', price: 250, unit: '100g', image: 'https://images.unsplash.com/photo-1596040033229-a0b3b8e887ee?w=300' },
    { id: 30, name: 'Coriander Powder (Dhaniya)', category: 'spices', price: 160, unit: '100g', image: 'https://images.unsplash.com/photo-1583137890992-06e6b0b0c8ad?w=300' },
    { id: 31, name: 'Garam Masala', category: 'spices', price: 220, unit: '100g', image: 'https://images.unsplash.com/photo-1599909533540-d7e8b55f69e1?w=300' },
    { id: 32, name: 'Chicken Masala', category: 'spices', price: 180, unit: '100g', image: 'https://images.unsplash.com/photo-1599909533540-d7e8b55f69e1?w=300' },
    { id: 33, name: 'Meat Masala', category: 'spices', price: 190, unit: '100g', image: 'https://images.unsplash.com/photo-1599909533540-d7e8b55f69e1?w=300' },
    { id: 34, name: 'Fish Masala', category: 'spices', price: 170, unit: '100g', image: 'https://images.unsplash.com/photo-1599909533540-d7e8b55f69e1?w=300' },
    { id: 35, name: 'Sabji Masala', category: 'spices', price: 160, unit: '100g', image: 'https://images.unsplash.com/photo-1599909533540-d7e8b55f69e1?w=300' },
    { id: 36, name: 'Chat Masala', category: 'spices', price: 150, unit: '100g', image: 'https://images.unsplash.com/photo-1599909533540-d7e8b55f69e1?w=300' },
    { id: 37, name: 'Momo Masala', category: 'spices', price: 180, unit: '100g', image: 'https://images.unsplash.com/photo-1599909533540-d7e8b55f69e1?w=300' },
    { id: 38, name: 'Panipuri Masala', category: 'spices', price: 140, unit: '100g', image: 'https://images.unsplash.com/photo-1599909533540-d7e8b55f69e1?w=300' },
    { id: 39, name: 'Achar Masala', category: 'spices', price: 160, unit: '100g', image: 'https://images.unsplash.com/photo-1599909533540-d7e8b55f69e1?w=300' },
    
    // Noodles & Instant Food
    { id: 40, name: 'Wai Wai (Rs. 20)', category: 'noodles', price: 20, unit: 'packet', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300' },
    { id: 41, name: 'Wai Wai (Rs. 15)', category: 'noodles', price: 15, unit: 'packet', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300' },
    { id: 42, name: 'Zoopy (Rs. 20)', category: 'noodles', price: 20, unit: 'packet', image: 'https://images.unsplash.com/photo-1612927601601-6638404737ce?w=300' },
    { id: 43, name: 'Zoopy (Rs. 15)', category: 'noodles', price: 15, unit: 'packet', image: 'https://images.unsplash.com/photo-1612927601601-6638404737ce?w=300' },
    { id: 44, name: 'Current', category: 'noodles', price: 50, unit: 'packet', image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=300' },
    { id: 45, name: 'Aakabarey', category: 'noodles', price: 20, unit: 'packet', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300' },
    { id: 46, name: 'Preeti Hariyo', category: 'noodles', price: 20, unit: 'packet', image: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=300' },
    { id: 47, name: 'Preeti Piro', category: 'noodles', price: 20, unit: 'packet', image: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=300' },
    { id: 48, name: 'Preeti Pahelo', category: 'noodles', price: 20, unit: 'packet', image: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=300' },
    { id: 49, name: 'Lali Piro Oppo', category: 'noodles', price: 10, unit: 'packet', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300' },
    
    // Cooking Oils
    { id: 50, name: 'Sunflower Oil', category: 'oils', price: 280, unit: 'liter', image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300' },
    { id: 51, name: 'Mustard Oil (Tori Ko Tel)', category: 'oils', price: 250, unit: 'liter', image: 'https://images.unsplash.com/photo-1608181823111-8ba3bc4ccf9f?w=300' },
    { id: 52, name: 'Ambe Oil (Packet)', category: 'oils', price: 260, unit: 'liter', image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300' },
    { id: 53, name: 'Til Ko Tel (Sesame Oil)', category: 'oils', price: 300, unit: 'liter', image: 'https://images.unsplash.com/photo-1608181823111-8ba3bc4ccf9f?w=300' },
    
    // Snacks
    { id: 54, name: 'Kurkure (Rs. 10)', category: 'snacks', price: 10, unit: 'packet', image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=300' },
    { id: 55, name: 'Kurkure (Rs. 20)', category: 'snacks', price: 20, unit: 'packet', image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=300' },
    { id: 56, name: 'Kurkure (Rs. 50)', category: 'snacks', price: 50, unit: 'packet', image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=300' },
    { id: 57, name: 'Cheese Balls (Rs. 5)', category: 'snacks', price: 5, unit: 'packet', image: 'https://images.unsplash.com/photo-1613919671781-e58a51920d03?w=300' },
    { id: 58, name: 'Cheese Balls (Rs. 20)', category: 'snacks', price: 20, unit: 'packet', image: 'https://images.unsplash.com/photo-1613919671781-e58a51920d03?w=300' },
    { id: 59, name: 'Cheese Balls (Rs. 50)', category: 'snacks', price: 50, unit: 'packet', image: 'https://images.unsplash.com/photo-1613919671781-e58a51920d03?w=300' },
    { id: 60, name: 'Current Chips', category: 'snacks', price: 50, unit: 'packet', image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=300' },
    { id: 61, name: 'Chakka Panka', category: 'snacks', price: 10, unit: 'packet', image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=300' },
    { id: 62, name: 'Punjabi Tadka', category: 'snacks', price: 20, unit: 'packet', image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=300' },
    { id: 63, name: 'Chatpata Matar', category: 'snacks', price: 15, unit: 'packet', image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=300' },
    { id: 64, name: 'Salted Peanuts', category: 'snacks', price: 25, unit: '100g', image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300' },
    { id: 65, name: 'Moong Dal', category: 'snacks', price: 20, unit: 'packet', image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=300' },
    { id: 66, name: 'Bulldozer Baba', category: 'snacks', price: 15, unit: 'packet', image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=300' },
    { id: 67, name: 'Kwiks', category: 'snacks', price: 30, unit: 'packet', image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=300' },
    
    // Beverages - Soft Drinks
    { id: 68, name: 'Coca-Cola', category: 'beverages', price: 80, unit: '1L', image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=300' },
    { id: 69, name: 'Fanta', category: 'beverages', price: 75, unit: '1L', image: 'https://images.unsplash.com/photo-1624517452488-04869289c4ca?w=300' },
    { id: 70, name: 'Sprite', category: 'beverages', price: 75, unit: '1L', image: 'https://images.unsplash.com/photo-1625740515370-4c71e50be97d?w=300' },
    { id: 71, name: 'Mountain Dew', category: 'beverages', price: 75, unit: '1L', image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf5934?w=300' },
    { id: 72, name: 'Red Bull', category: 'beverages', price: 200, unit: '250ml', image: 'https://images.unsplash.com/photo-1618170942096-7e21ccd4f316?w=300' },
    { id: 73, name: 'Sting', category: 'beverages', price: 50, unit: '250ml', image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=300' },
    
    // Beverages - Juices
    { id: 74, name: 'Litchi Juice', category: 'beverages', price: 60, unit: '200ml', image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300' },
    { id: 75, name: 'Frooti', category: 'beverages', price: 50, unit: '200ml', image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=300' },
    { id: 76, name: 'Appy Juice', category: 'beverages', price: 55, unit: '200ml', image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300' },
    { id: 77, name: 'Mineral Water', category: 'beverages', price: 25, unit: '1L', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300' },
    
    // Beverages - Beer & Alcohol
    { id: 78, name: 'Tuborg Beer', category: 'beverages', price: 350, unit: 'bottle', image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=300' },
    { id: 79, name: 'Dragon Beer', category: 'beverages', price: 320, unit: 'bottle', image: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=300' },
    { id: 80, name: 'Golden Oak', category: 'beverages', price: 280, unit: 'bottle', image: 'https://images.unsplash.com/photo-1584736286279-4b1e3211ee68?w=300' },
    { id: 81, name: 'Virgin', category: 'beverages', price: 280, unit: 'bottle', image: 'https://images.unsplash.com/photo-1584736286279-4b1e3211ee68?w=300' },
    { id: 82, name: '8848 Beer', category: 'beverages', price: 330, unit: 'bottle', image: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=300' },
    { id: 83, name: 'Blue Diamond', category: 'beverages', price: 300, unit: 'bottle', image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=300' },
    
    // Tobacco Products
    { id: 84, name: 'Surya', category: 'tobacco', price: 40, unit: 'packet', image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300' },
    { id: 85, name: 'Shikhar Ice', category: 'tobacco', price: 35, unit: 'packet', image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300' },
    { id: 86, name: 'Khukuri', category: 'tobacco', price: 38, unit: 'packet', image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300' },
    { id: 87, name: 'Chautari', category: 'tobacco', price: 32, unit: 'packet', image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300' },
    { id: 88, name: 'Gold Flake', category: 'tobacco', price: 45, unit: 'packet', image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300' },
    { id: 89, name: 'Zumbojit', category: 'tobacco', price: 20, unit: 'packet', image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300' },
    { id: 90, name: 'Superpower', category: 'tobacco', price: 30, unit: 'packet', image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300' },
    { id: 91, name: 'Surajmukhi', category: 'tobacco', price: 15, unit: 'packet', image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300' },
    { id: 92, name: 'Bhola', category: 'tobacco', price: 25, unit: 'packet', image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300' },
    { id: 93, name: 'Megashree', category: 'tobacco', price: 28, unit: 'packet', image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300' },
    { id: 94, name: 'Sweet Supari', category: 'tobacco', price: 5, unit: 'packet', image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300' },
    { id: 95, name: 'Aunti Supari', category: 'tobacco', price: 5, unit: 'packet', image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300' },
    
    // Personal Care - Soaps
    { id: 96, name: 'Lifebuoy Soap', category: 'personal-care', price: 30, unit: 'piece', image: 'https://images.unsplash.com/photo-1622016903904-137a445d2b18?w=300' },
    { id: 97, name: 'Dettol Soap', category: 'personal-care', price: 45, unit: 'piece', image: 'https://images.unsplash.com/photo-1622016903904-137a445d2b18?w=300' },
    { id: 98, name: 'Lux Soap', category: 'personal-care', price: 35, unit: 'piece', image: 'https://images.unsplash.com/photo-1622016903904-137a445d2b18?w=300' },
    { id: 99, name: 'Aura Soap', category: 'personal-care', price: 32, unit: 'piece', image: 'https://images.unsplash.com/photo-1622016903904-137a445d2b18?w=300' },
    { id: 100, name: 'Patanjali Soap', category: 'personal-care', price: 28, unit: 'piece', image: 'https://images.unsplash.com/photo-1622016903904-137a445d2b18?w=300' },
    
    // Personal Care - Dental
    { id: 101, name: 'Colgate Toothpaste', category: 'personal-care', price: 120, unit: '100g', image: 'https://images.unsplash.com/photo-1622372738946-62e02505feb3?w=300' },
    { id: 102, name: 'Dabur Red', category: 'personal-care', price: 100, unit: '100g', image: 'https://images.unsplash.com/photo-1622372738946-62e02505feb3?w=300' },
    { id: 103, name: 'Dabur Lal (Dibba)', category: 'personal-care', price: 95, unit: '100g', image: 'https://images.unsplash.com/photo-1622372738946-62e02505feb3?w=300' },
    { id: 104, name: 'Toothbrush (Rs. 10)', category: 'personal-care', price: 10, unit: 'piece', image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=300' },
    { id: 105, name: 'Toothbrush (Rs. 20)', category: 'personal-care', price: 20, unit: 'piece', image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=300' },
    { id: 106, name: 'Toothbrush (Rs. 30)', category: 'personal-care', price: 30, unit: 'piece', image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=300' },
    { id: 107, name: 'Toothbrush (Rs. 50)', category: 'personal-care', price: 50, unit: 'piece', image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=300' },
    
    // Personal Care - Hair & Skin
    { id: 108, name: 'Sterax Hair Oil', category: 'personal-care', price: 80, unit: '100ml', image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=300' },
    { id: 109, name: 'Livon Serum', category: 'personal-care', price: 150, unit: 'bottle', image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=300' },
    { id: 110, name: 'Emami 7 Oils in One', category: 'personal-care', price: 120, unit: '100ml', image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=300' },
    { id: 111, name: 'Vaseline', category: 'personal-care', price: 90, unit: '100g', image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300' },
    { id: 112, name: 'Joy Honey & Almonds', category: 'personal-care', price: 110, unit: 'bottle', image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=300' },
    { id: 113, name: 'Sunscreen', category: 'personal-care', price: 250, unit: 'tube', image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300' },
    { id: 114, name: 'Pocket Perfume', category: 'personal-care', price: 50, unit: 'piece', image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=300' },
    { id: 115, name: 'Lip Guard', category: 'personal-care', price: 40, unit: 'piece', image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=300' },
    
    // Personal Care - Sanitary
    { id: 116, name: 'Diapers (Small)', category: 'personal-care', price: 80, unit: 'piece', image: 'https://images.unsplash.com/photo-1584467541268-b040f83be3fd?w=300' },
    { id: 117, name: 'Diapers (Medium)', category: 'personal-care', price: 100, unit: 'piece', image: 'https://images.unsplash.com/photo-1584467541268-b040f83be3fd?w=300' },
    { id: 118, name: 'Diapers (Large)', category: 'personal-care', price: 120, unit: 'piece', image: 'https://images.unsplash.com/photo-1584467541268-b040f83be3fd?w=300' },
    { id: 119, name: 'Sanitary Pads (Rs. 50)', category: 'personal-care', price: 50, unit: 'pack', image: 'https://images.unsplash.com/photo-1583204930854-e3fb26268122?w=300' },
    { id: 120, name: 'Sanitary Pads (Rs. 80)', category: 'personal-care', price: 80, unit: 'pack', image: 'https://images.unsplash.com/photo-1583204930854-e3fb26268122?w=300' },
    { id: 121, name: 'Sanitary Pads (Rs. 100)', category: 'personal-care', price: 100, unit: 'pack', image: 'https://images.unsplash.com/photo-1583204930854-e3fb26268122?w=300' },
    
    // Cleaning Products
    { id: 122, name: 'Harpic Toilet Cleaner', category: 'cleaning', price: 180, unit: 'bottle', image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?w=300' },
    { id: 123, name: 'Tika Utensil Soap (Dibba)', category: 'cleaning', price: 40, unit: 'piece', image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=300' },
    { id: 124, name: 'Okhati', category: 'cleaning', price: 25, unit: 'bar', image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=300' },
    { id: 125, name: 'Tez Bar', category: 'cleaning', price: 30, unit: 'bar', image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=300' },
    { id: 126, name: 'Nanglo', category: 'cleaning', price: 28, unit: 'bar', image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=300' },
    { id: 127, name: 'Shova', category: 'cleaning', price: 32, unit: 'bar', image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=300' },
    { id: 128, name: 'Magic', category: 'cleaning', price: 35, unit: 'bar', image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=300' },
    { id: 129, name: 'Dhoni', category: 'cleaning', price: 30, unit: 'bar', image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=300' },
    { id: 130, name: 'Rich', category: 'cleaning', price: 33, unit: 'bar', image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=300' },
    { id: 131, name: 'Ghadi Surf', category: 'cleaning', price: 140, unit: '500g', image: 'https://images.unsplash.com/photo-1582735689869-f285ff53408b?w=300' },
    { id: 132, name: 'Pitambari', category: 'cleaning', price: 50, unit: 'piece', image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=300' },
    
    // Stationery
    { id: 133, name: 'English Copy (Rs. 150)', category: 'stationery', price: 150, unit: 'piece', image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=300' },
    { id: 134, name: 'English Copy (Rs. 100)', category: 'stationery', price: 100, unit: 'piece', image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=300' },
    { id: 135, name: 'English Copy (Rs. 50)', category: 'stationery', price: 50, unit: 'piece', image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=300' },
    { id: 136, name: 'English Copy (Rs. 40)', category: 'stationery', price: 40, unit: 'piece', image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=300' },
    { id: 137, name: 'English Copy (Rs. 30)', category: 'stationery', price: 30, unit: 'piece', image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=300' },
    { id: 138, name: 'English Copy (Rs. 20)', category: 'stationery', price: 20, unit: 'piece', image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=300' },
    { id: 139, name: 'Nepali Copy (Rs. 150)', category: 'stationery', price: 150, unit: 'piece', image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=300' },
    { id: 140, name: 'Nepali Copy (Rs. 100)', category: 'stationery', price: 100, unit: 'piece', image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=300' },
    { id: 141, name: 'Nepali Copy (Rs. 50)', category: 'stationery', price: 50, unit: 'piece', image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=300' },
    { id: 142, name: 'Rough Copy', category: 'stationery', price: 100, unit: 'piece', image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=300' },
    { id: 143, name: 'Drawing Copy', category: 'stationery', price: 45, unit: 'piece', image: 'https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?w=300' },
    { id: 144, name: 'Graph Copy', category: 'stationery', price: 50, unit: 'piece', image: 'https://images.unsplash.com/photo-1554475900-4b0e0d5d9699?w=300' },
    { id: 145, name: 'Chart Paper', category: 'stationery', price: 15, unit: 'piece', image: 'https://images.unsplash.com/photo-1606762449990-c65f3d391ff4?w=300' },
    { id: 146, name: 'Fountain Pen', category: 'stationery', price: 30, unit: 'piece', image: 'https://images.unsplash.com/photo-1564854099984-b5b78b4c8f5f?w=300' },
    { id: 147, name: 'Pencil', category: 'stationery', price: 10, unit: 'piece', image: 'https://images.unsplash.com/photo-1589932767498-3a95611d0cb6?w=300' },
    { id: 148, name: 'Dot Pen', category: 'stationery', price: 15, unit: 'piece', image: 'https://images.unsplash.com/photo-1564854099984-b5b78b4c8f5f?w=300' },
    { id: 149, name: 'Eraser', category: 'stationery', price: 8, unit: 'piece', image: 'https://images.unsplash.com/photo-1588854337221-4cf9fa96e9ca?w=300' },
    { id: 150, name: 'Sharpener', category: 'stationery', price: 5, unit: 'piece', image: 'https://images.unsplash.com/photo-1587486936321-b77e9e66f4b6?w=300' },
    { id: 151, name: 'Color Pencils', category: 'stationery', price: 50, unit: 'pack', image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=300' },
    { id: 152, name: 'Paint', category: 'stationery', price: 80, unit: 'set', image: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=300' },
    { id: 153, name: 'Clay', category: 'stationery', price: 60, unit: 'pack', image: 'https://images.unsplash.com/photo-1589519160732-57fc498494f8?w=300' },
    { id: 154, name: 'Ink', category: 'stationery', price: 40, unit: 'bottle', image: 'https://images.unsplash.com/photo-1616628188467-b2a47d89c0a5?w=300' },
    { id: 155, name: 'Ink Pen', category: 'stationery', price: 25, unit: 'piece', image: 'https://images.unsplash.com/photo-1564854099984-b5b78b4c8f5f?w=300' },
    { id: 156, name: 'Cartridge', category: 'stationery', price: 30, unit: 'pack', image: 'https://images.unsplash.com/photo-1616628188467-b2a47d89c0a5?w=300' },
    { id: 157, name: 'Geometry Box', category: 'stationery', price: 120, unit: 'piece', image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=300' },
    { id: 158, name: 'Scale (Ruler)', category: 'stationery', price: 15, unit: 'piece', image: 'https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=300' },
    { id: 159, name: 'Protractor', category: 'stationery', price: 20, unit: 'piece', image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=300' },
    { id: 160, name: 'Compass', category: 'stationery', price: 35, unit: 'piece', image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=300' },
    { id: 161, name: 'Superglue', category: 'stationery', price: 40, unit: 'piece', image: 'https://images.unsplash.com/photo-1618453292059-37a6d3f6e3be?w=300' },
    
    // Health & Wellness
    { id: 162, name: 'Horlicks', category: 'health', price: 380, unit: '500g', image: 'https://images.unsplash.com/photo-1584735175315-9d5df23860bc?w=300' },
    { id: 163, name: 'Mentha Rub', category: 'health', price: 90, unit: '25ml', image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=300' },
    
    // Biscuits
    { id: 164, name: 'Parle-G', category: 'biscuits', price: 18, unit: 'packet', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300' },
    { id: 165, name: 'Tiger Biscuit', category: 'biscuits', price: 22, unit: 'packet', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300' },
    { id: 166, name: 'Oreo', category: 'biscuits', price: 35, unit: 'packet', image: 'https://images.unsplash.com/photo-1606312619070-d48b4cda8949?w=300' },
    { id: 167, name: 'Coco Crunch', category: 'biscuits', price: 25, unit: 'packet', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300' },
    { id: 168, name: 'Potata Biscuit', category: 'biscuits', price: 20, unit: 'packet', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300' },
    { id: 169, name: 'Glucose Biscuit', category: 'biscuits', price: 16, unit: 'packet', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300' },
    { id: 170, name: 'Top 10 Biscuit', category: 'biscuits', price: 20, unit: 'packet', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300' },
    { id: 171, name: 'Marie Biscuit', category: 'biscuits', price: 18, unit: 'packet', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300' },
    { id: 172, name: '20-20 Biscuit', category: 'biscuits', price: 22, unit: 'packet', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300' },
    { id: 173, name: 'Happy Happy Biscuit', category: 'biscuits', price: 20, unit: 'packet', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300' },
    { id: 174, name: 'Good Day', category: 'biscuits', price: 25, unit: 'packet', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300' },
    { id: 175, name: 'Kreams Gold', category: 'biscuits', price: 30, unit: 'packet', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300' },
    
    // Chocolates
    { id: 176, name: 'Dairy Milk', category: 'chocolates', price: 50, unit: 'piece', image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=300' },
    { id: 177, name: 'Kit Kat', category: 'chocolates', price: 45, unit: 'piece', image: 'https://images.unsplash.com/photo-1606312619070-d48b4cda8949?w=300' },
    { id: 178, name: 'Choco Choco', category: 'chocolates', price: 20, unit: 'piece', image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=300' },
    { id: 179, name: '5 Star', category: 'chocolates', price: 40, unit: 'piece', image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=300' },
    
    // Candies & Mouth Fresheners
    { id: 180, name: 'Hajmola', category: 'candies', price: 5, unit: 'piece', image: 'https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=300' },
    { id: 181, name: 'Bubble Gum', category: 'candies', price: 1, unit: 'piece', image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=300' },
    
    // Incense (Dhupbatti)
    { id: 182, name: 'Kanchanjunga Dhupbatti', category: 'incense', price: 30, unit: 'packet', image: 'https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=300' },
    { id: 183, name: 'Mangaldeep Dhupbatti', category: 'incense', price: 35, unit: 'packet', image: 'https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=300' },
    
    // Tea (Chiyapatti)
    { id: 184, name: 'Hilife Tea', category: 'tea', price: 250, unit: '250g', image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=300' },
    { id: 185, name: 'Sai Kripa Tea', category: 'tea', price: 230, unit: '250g', image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=300' },
    
    // General Items
    { id: 186, name: 'Bheli (Puffed Rice)', category: 'general', price: 40, unit: '250g', image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=300' },
    { id: 187, name: 'Iodine', category: 'general', price: 25, unit: 'bottle', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300' },
    { id: 188, name: 'Peanuts', category: 'general', price: 120, unit: 'kg', image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300' },
    { id: 189, name: 'Slippers', category: 'general', price: 150, unit: 'pair', image: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?w=300' },
    { id: 190, name: 'Dried Fish', category: 'general', price: 200, unit: '250g', image: 'https://images.unsplash.com/photo-1534940519139-f860fb3c6e38?w=300' },
    { id: 191, name: 'Dhago (Thread)', category: 'general', price: 20, unit: 'piece', image: 'https://images.unsplash.com/photo-1617733939954-74706d850013?w=300' },
];

// Cart Management
let cart = [];

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    displayProducts('vegetables');
    loadCart();
    updateActiveNavLink();
});

// ============================================
// DISPLAY FUNCTIONS
// ============================================

/**
 * Display products filtered by category
 * @param {string} category - Category to filter ('all' or specific category)
 */
function displayProducts(category) {
    const grid = document.getElementById('productsGrid');
    const filteredProducts = category === 'all' ? products : products.filter(p => p.category === category);
    
    grid.innerHTML = filteredProducts.map(product => {
        const ratings = getProductRating(product.id);
        const stock = JSON.parse(localStorage.getItem('productStock') || '{}')[product.id] || 0;
        
        return `
        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition" data-product-id="${product.id}">
            <div class="relative">
                <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
                ${stock === 0 ? '<div class="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center"><span class="text-white font-bold text-xl">Out of Stock</span></div>' : ''}
            </div>
            <div class="p-4">
                <h3 class="text-lg font-semibold mb-1">${product.name}</h3>
                <div class="flex items-center mb-2">
                    <div class="text-yellow-500 text-sm mr-2">
                        ${generateStars(parseFloat(ratings.average))}
                    </div>
                    <span class="text-xs text-gray-600">${ratings.average} (${ratings.count})</span>
                </div>
                <p class="text-gray-600 mb-2">Rs. ${product.price} / ${product.unit}</p>
                <button onclick="addToCart(${product.id})" ${stock === 0 ? 'disabled' : ''} class="w-full ${stock === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'} text-white py-2 rounded-lg transition">
                    <i class="fas fa-cart-plus mr-2"></i>${stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                </button>
                <button onclick="showProductModal(${product.id})" class="w-full mt-2 text-green-600 hover:text-green-700 text-sm">
                    <i class="fas fa-star mr-1"></i>Reviews
                </button>
            </div>
        </div>
    `}).join('');
}

// Generate star rating HTML
function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i - 0.5 <= rating) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}

// ============================================
// FILTER & SEARCH FUNCTIONS
// ============================================

/**
 * Filter products by category
 * @param {string} category - Category to filter by
 */
function filterProducts(category) {
    displayProducts(category);
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('bg-green-600', 'text-white');
        btn.classList.add('bg-white', 'text-gray-700');
    });
    event.target.classList.remove('bg-white', 'text-gray-700');
    event.target.classList.add('bg-green-600', 'text-white');
}

// Add to Cart
function addToCart(productId) {
    // Check if user is logged in
    if (!isLoggedIn()) {
        if (confirm('Please login to add items to cart. Would you like to login now?')) {
            window.location.href = 'auth.html';
        }
        return;
    }
    
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCart();
    saveCart();
    showNotification('Added to cart!');
}



// Update Cart Count Display
function updateCart() {
    const cartCount = document.getElementById('cartCount');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Toggle Mobile Menu
function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('hidden');
}

// Update Active Navigation Link
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('header nav a[href^="#"]');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('text-green-600', 'border-b-2', 'border-green-600');
            link.classList.add('text-gray-700');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.remove('text-gray-700');
                link.classList.add('text-green-600', 'border-b-2', 'border-green-600');
            }
        });
    });
}

// Save Cart to LocalStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Load Cart from LocalStorage
function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart();
    }
}

// Show Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'fixed top-20 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 2000);
}

// Search Products
function searchProducts() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm.length === 0) {
        searchResults.classList.add('hidden');
        return;
    }
    
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) || 
        product.category.toLowerCase().includes(searchTerm)
    );
    
    if (filteredProducts.length === 0) {
        searchResults.innerHTML = '<div class="p-4 text-center text-gray-500">No products found</div>';
        searchResults.classList.remove('hidden');
        return;
    }
    
    let html = '<div class="p-4 space-y-2">';
    filteredProducts.slice(0, 10).forEach(product => {
        const ratings = getProductRating(product.id);
        html += `
            <div class="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded cursor-pointer" onclick="scrollToProduct(${product.id})">
                <img src="${product.image}" alt="${product.name}" class="w-12 h-12 object-cover rounded">
                <div class="flex-1">
                    <h4 class="font-semibold">${product.name}</h4>
                    <div class="flex items-center space-x-2">
                        <p class="text-sm text-gray-600">Rs. ${product.price}/${product.unit}</p>
                        <div class="text-yellow-500 text-sm">
                            <i class="fas fa-star"></i> ${ratings.average}
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    html += '</div>';
    searchResults.innerHTML = html;
    searchResults.classList.remove('hidden');
}

function scrollToProduct(productId) {
    document.getElementById('searchInput').value = '';
    document.getElementById('searchResults').classList.add('hidden');
    const product = products.find(p => p.id === productId);
    if (product) {
        filterProducts(product.category);
        setTimeout(() => {
            const productElement = document.querySelector(`[data-product-id="${productId}"]`);
            if (productElement) {
                productElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                productElement.classList.add('ring-2', 'ring-green-600');
                setTimeout(() => {
                    productElement.classList.remove('ring-2', 'ring-green-600');
                }, 2000);
            }
        }, 300);
    }
}

// Get product rating
function getProductRating(productId) {
    const productRatings = JSON.parse(localStorage.getItem('productRatings') || '{}');
    return productRatings[productId] || { average: '0.0', count: 0, reviews: [] };
}

// Update user section in header
function updateUserSection() {
    const userSection = document.getElementById('userSection');
    if (!userSection) return;
    
    const currentUserSession = localStorage.getItem('currentUser');
    if (currentUserSession) {
        const session = JSON.parse(currentUserSession);
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const user = users.find(u => u.id === session.userId);
        
        // Calculate user statistics
        let totalOrders = 0;
        let totalSpent = 0;
        let totalItems = 0;
        
        if (user && user.orders) {
            totalOrders = user.orders.length;
            user.orders.forEach(order => {
                totalSpent += order.total || 0;
                totalItems += order.items.reduce((sum, item) => sum + item.quantity, 0);
            });
        }
        
        userSection.innerHTML = `
            <div class="relative">
                <button onclick="toggleUserDropdown()" class="text-gray-700 hover:text-green-600 focus:outline-none">
                    <i class="fas fa-user-circle text-2xl"></i>
                </button>
                <div id="userDropdown" class="hidden absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl py-2 z-50 border border-gray-200">
                    <!-- User Info Header -->
                    <div class="px-4 py-3 border-b bg-gradient-to-r from-green-50 to-blue-50">
                        <div class="flex items-center space-x-3">
                            <div class="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                ${session.name.charAt(0).toUpperCase()}
                            </div>
                            <div class="flex-1">
                                <p class="font-bold text-gray-800">${session.name}</p>
                                <p class="text-xs text-gray-600">${session.email}</p>
                                <p class="text-xs text-green-600 font-semibold mt-1">
                                    <i class="fas fa-shield-alt"></i> ${session.role === 'admin' ? 'Administrator' : 'Customer'}
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    ${session.role === 'customer' ? `
                    <!-- User Statistics -->
                    <div class="px-4 py-3 border-b bg-gray-50">
                        <h4 class="text-xs font-semibold text-gray-500 uppercase mb-2">Your Activity</h4>
                        <div class="grid grid-cols-3 gap-2">
                            <div class="text-center">
                                <div class="text-lg font-bold text-green-600">${totalOrders}</div>
                                <div class="text-xs text-gray-600">Orders</div>
                            </div>
                            <div class="text-center border-x border-gray-200">
                                <div class="text-lg font-bold text-blue-600">${totalItems}</div>
                                <div class="text-xs text-gray-600">Items</div>
                            </div>
                            <div class="text-center">
                                <div class="text-lg font-bold text-purple-600">Rs.${totalSpent}</div>
                                <div class="text-xs text-gray-600">Spent</div>
                            </div>
                        </div>
                    </div>
                    ` : ''}
                    
                    <!-- Menu Options -->
                    <div class="py-2">
                        <a href="${session.role === 'admin' ? 'admin.html' : 'profile.html'}" class="flex items-center px-4 py-2 hover:bg-gray-100 transition">
                            <i class="fas fa-${session.role === 'admin' ? 'user-shield' : 'user'} w-6 text-green-600"></i>
                            <span class="ml-2 font-medium">My Account</span>
                        </a>
                        
                        ${session.role === 'customer' ? `
                        <a href="profile.html#orders" class="flex items-center px-4 py-2 hover:bg-gray-100 transition">
                            <i class="fas fa-shopping-bag w-6 text-blue-600"></i>
                            <span class="ml-2 font-medium">Order History</span>
                        </a>
                        <a href="profile.html#addresses" class="flex items-center px-4 py-2 hover:bg-gray-100 transition">
                            <i class="fas fa-map-marker-alt w-6 text-purple-600"></i>
                            <span class="ml-2 font-medium">My Addresses</span>
                        </a>
                        <a href="cart.html" class="flex items-center px-4 py-2 hover:bg-gray-100 transition">
                            <i class="fas fa-shopping-cart w-6 text-orange-600"></i>
                            <span class="ml-2 font-medium">My Cart</span>
                        </a>
                        ` : `
                        <a href="admin.html" class="flex items-center px-4 py-2 hover:bg-gray-100 transition">
                            <i class="fas fa-tachometer-alt w-6 text-blue-600"></i>
                            <span class="ml-2 font-medium">Admin Dashboard</span>
                        </a>
                        <a href="admin.html#products" class="flex items-center px-4 py-2 hover:bg-gray-100 transition">
                            <i class="fas fa-box w-6 text-purple-600"></i>
                            <span class="ml-2 font-medium">Manage Products</span>
                        </a>
                        <a href="admin.html#orders" class="flex items-center px-4 py-2 hover:bg-gray-100 transition">
                            <i class="fas fa-shopping-cart w-6 text-orange-600"></i>
                            <span class="ml-2 font-medium">Manage Orders</span>
                        </a>
                        `}
                    </div>
                    
                    <!-- Logout Button -->
                    <div class="border-t pt-2">
                        <button onclick="logout()" class="flex items-center w-full px-4 py-2 hover:bg-red-50 text-red-600 transition">
                            <i class="fas fa-sign-out-alt w-6"></i>
                            <span class="ml-2 font-medium">Logout</span>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
}

// Toggle user dropdown menu
function toggleUserDropdown() {
    const dropdown = document.getElementById('userDropdown');
    if (dropdown) {
        dropdown.classList.toggle('hidden');
    }
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    const userSection = document.getElementById('userSection');
    const dropdown = document.getElementById('userDropdown');
    
    if (dropdown && userSection && !userSection.contains(event.target)) {
        dropdown.classList.add('hidden');
    }
});

// Logout function
function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

// Contact Form
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});

// Product Modal Functions
let currentRating = 0;

function showProductModal(productId) {
    const product = products.find(p => p.id === productId);
    const ratings = getProductRating(productId);
    
    document.getElementById('modalProductName').textContent = product.name;
    document.getElementById('modalAvgRating').textContent = ratings.average;
    document.getElementById('modalStars').innerHTML = generateStars(parseFloat(ratings.average));
    document.getElementById('modalRatingCount').textContent = `Based on ${ratings.count} reviews`;
    document.getElementById('reviewProductId').value = productId;
    
    // Generate rating bars
    const ratingCounts = [0, 0, 0, 0, 0];
    ratings.reviews.forEach(review => {
        ratingCounts[review.rating - 1]++;
    });
    
    let barsHtml = '';
    for (let i = 5; i >= 1; i--) {
        const count = ratingCounts[i - 1];
        const percentage = ratings.count > 0 ? (count / ratings.count * 100) : 0;
        barsHtml += `
            <div class="flex items-center space-x-2 mb-1">
                <span class="text-sm w-8">${i} <i class="fas fa-star text-yellow-500 text-xs"></i></span>
                <div class="flex-1 bg-gray-200 rounded-full h-2">
                    <div class="bg-yellow-500 h-2 rounded-full" style="width: ${percentage}%"></div>
                </div>
                <span class="text-sm w-8 text-gray-600">${count}</span>
            </div>
        `;
    }
    document.getElementById('ratingBars').innerHTML = barsHtml;
    
    // Check if user is logged in
    const currentUserSession = localStorage.getItem('currentUser');
    if (!currentUserSession) {
        document.getElementById('addReviewSection').innerHTML = `
            <div class="bg-yellow-50 rounded-lg p-6 text-center">
                <i class="fas fa-sign-in-alt text-3xl text-gray-400 mb-2"></i>
                <p class="text-gray-600 mb-4">Please login to write a review</p>
                <a href="auth.html" class="inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">Login</a>
            </div>
        `;
    }
    
    // Load reviews
    loadProductReviews(productId, ratings.reviews);
    
    document.getElementById('productModal').classList.remove('hidden');
}

function closeProductModal() {
    document.getElementById('productModal').classList.add('hidden');
    currentRating = 0;
    document.getElementById('reviewComment').value = '';
    document.getElementById('selectedRating').value = '';
    document.querySelectorAll('.rating-star i').forEach(star => {
        star.classList.remove('fas', 'text-yellow-500');
        star.classList.add('far', 'text-gray-300');
    });
}

function setRating(rating) {
    currentRating = rating;
    document.getElementById('selectedRating').value = rating;
    
    document.querySelectorAll('.rating-star').forEach((star, index) => {
        const icon = star.querySelector('i');
        if (index < rating) {
            icon.classList.remove('far', 'text-gray-300');
            icon.classList.add('fas', 'text-yellow-500');
        } else {
            icon.classList.remove('fas', 'text-yellow-500');
            icon.classList.add('far', 'text-gray-300');
        }
    });
}

function submitReview(event) {
    event.preventDefault();
    
    const currentUserSession = localStorage.getItem('currentUser');
    if (!currentUserSession) {
        alert('Please login to submit a review');
        return;
    }
    
    const session = JSON.parse(currentUserSession);
    const productId = document.getElementById('reviewProductId').value;
    const rating = parseInt(document.getElementById('selectedRating').value);
    const comment = document.getElementById('reviewComment').value;
    
    if (!rating) {
        alert('Please select a rating');
        return;
    }
    
    const productRatings = JSON.parse(localStorage.getItem('productRatings') || '{}');
    if (!productRatings[productId]) {
        productRatings[productId] = { average: 0, count: 0, reviews: [] };
    }
    
    const newReview = {
        userName: session.name,
        userId: session.userId,
        rating: rating,
        comment: comment,
        date: new Date().toISOString()
    };
    
    productRatings[productId].reviews.push(newReview);
    
    // Recalculate average
    const reviews = productRatings[productId].reviews;
    const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
    productRatings[productId].average = (sum / reviews.length).toFixed(1);
    productRatings[productId].count = reviews.length;
    
    localStorage.setItem('productRatings', JSON.stringify(productRatings));
    
    alert('Review submitted successfully!');
    closeProductModal();
    displayProducts(document.querySelector('.filter-btn.bg-green-600') ? 
        products.find(p => p.id == productId).category : 'all');
}

function loadProductReviews(productId, reviews) {
    const reviewsList = document.getElementById('reviewsList');
    
    if (reviews.length === 0) {
        reviewsList.innerHTML = `
            <div class="text-center py-8 text-gray-500">
                <i class="fas fa-comment-slash text-4xl mb-2"></i>
                <p>No reviews yet. Be the first to review!</p>
            </div>
        `;
        return;
    }
    
    const sortedReviews = reviews.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    let html = '';
    sortedReviews.forEach(review => {
        html += `
            <div class="border rounded-lg p-4">
                <div class="flex justify-between items-start mb-2">
                    <div>
                        <h5 class="font-semibold">${review.userName}</h5>
                        <div class="text-yellow-500 text-sm">${generateStars(review.rating)}</div>
                    </div>
                    <span class="text-xs text-gray-500">${new Date(review.date).toLocaleDateString()}</span>
                </div>
                <p class="text-gray-700">${review.comment}</p>
            </div>
        `;
    });
    
    reviewsList.innerHTML = html;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Only update user section if on index page and logged in
    if (document.getElementById('userSection')) {
        updateUserSection();
    }
});
