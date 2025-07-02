const productsData = {
    cpu: {
        title: 'CPU - Bộ xử lý',
        icon: '🧠',
        options: [
            { id: 'cpu1', name: 'Intel Core i5-13400F', specs: '10 nhân, 16 luồng, 2.5-4.6GHz', price: 4590000, brand: 'Intel', img:'https://product.hstatic.net/200000420363/product/i5-13400f_c4a5f544cd7f488b8065927308fd60f3_master.jpg' },
            { id: 'cpu2', name: 'Intel Core i7-13700F', specs: '16 nhân, 24 luồng, 2.1-5.2GHz', price: 8490000, brand: 'Intel', img:'https://product.hstatic.net/200000420363/product/i5-13400f_c4a5f544cd7f488b8065927308fd60f3_master.jpg' },
            { id: 'cpu3', name: 'Intel Core i9-13900F', specs: '24 nhân, 32 luồng, 2.0-5.8GHz', price: 13990000, brand: 'Intel', img:'https://product.hstatic.net/200000420363/product/i5-13400f_c4a5f544cd7f488b8065927308fd60f3_master.jpg' },
            { id: 'cpu4', name: 'AMD Ryzen 5 7600X', specs: '6 nhân, 12 luồng, 4.7-5.3GHz', price: 6290000, brand: 'AMD', img:'https://product.hstatic.net/200000420363/product/i5-13400f_c4a5f544cd7f488b8065927308fd60f3_master.jpg' },
            { id: 'cpu5', name: 'AMD Ryzen 7 7700X', specs: '8 nhân, 16 luồng, 4.5-5.4GHz', price: 8990000, brand: 'AMD', img:'https://product.hstatic.net/200000420363/product/i5-13400f_c4a5f544cd7f488b8065927308fd60f3_master.jpg' },
            { id: 'cpu6', name: 'AMD Ryzen 9 7900X', specs: '12 nhân, 24 luồng, 4.7-5.6GHz', price: 12490000, brand: 'AMD', img:'https://product.hstatic.net/200000420363/product/i5-13400f_c4a5f544cd7f488b8065927308fd60f3_master.jpg' },
            { id: 'cpu7', name: 'Intel Core i5-12400F', specs: '6 nhân, 12 luồng, 2.5-4.4GHz', price: 3890000, brand: 'Intel', img:'https://product.hstatic.net/200000420363/product/i5-13400f_c4a5f544cd7f488b8065927308fd60f3_master.jpg' },
            { id: 'cpu8', name: 'AMD Ryzen 5 5600X', specs: '6 nhân, 12 luồng, 3.7-4.6GHz', price: 4290000, brand: 'AMD', img:'https://product.hstatic.net/200000420363/product/i5-13400f_c4a5f544cd7f488b8065927308fd60f3_master.jpg' }
        ]
    },
    cooler: {
        title: 'Cooler - Quạt Tản nhiệt',
        icon: '🌪️',
        options: [
            { id: 'cooler1', name: 'Cooler Master Hyper 212 Spectrum V3 ARGB', price: 390000, brand: 'Cooler Master' },
            { id: 'cooler2', name: 'AIO Cooler Master MasterLiquid 360 Core SI ARGB', price: 1890000, brand: 'Cooler Master' },
            { id: 'cooler3', name: 'AIO NZXT Kraken 240 RGB', price: 4390000, brand: 'NZXT' },
            { id: 'cooler4', name: 'AIO Corsair iCUE LINK TITAN 360 RX RGB LCD Black', price: 6490000, brand: 'Corsair'}
        ]
    },
    ram: {
        title: 'RAM - Bộ nhớ',
        icon: '🖴',
        options: [
            { id: 'ram1', name: 'Corsair Vengeance LPX 16GB DDR4', specs: '16GB (2x8GB) DDR4-3200 CL16', price: 1590000, brand: 'Corsair' },
            { id: 'ram2', name: 'G.Skill Trident Z RGB 32GB DDR4', specs: '32GB (2x16GB) DDR4-3600 CL18', price: 3290000, brand: 'G.Skill' },
            { id: 'ram3', name: 'Kingston Fury Beast 16GB DDR5', specs: '16GB (2x8GB) DDR5-5600 CL36', price: 2890000, brand: 'Kingston' },
            { id: 'ram4', name: 'Corsair Dominator Platinum 32GB DDR5', specs: '32GB (2x16GB) DDR5-6000 CL36', price: 5990000, brand: 'Corsair' },
            { id: 'ram5', name: 'Team T-Force Delta RGB 16GB DDR4', specs: '16GB (2x8GB) DDR4-3200 CL16', price: 1390000, brand: 'Team' },
            { id: 'ram6', name: 'ADATA XPG Spectrix D60G 32GB DDR4', specs: '32GB (2x16GB) DDR4-3600 CL18', price: 2990000, brand: 'ADATA' }
        ]   
    },
    gpu: {
        title: 'GPU - Card đồ họa',
        icon: '✍️',
        options: [
            { id: 'gpu1', name: 'NVIDIA RTX 4060', specs: '8GB GDDR6, 1830MHz Base Clock', price: 8490000, brand: 'NVIDIA' },
            { id: 'gpu2', name: 'NVIDIA RTX 4070', specs: '12GB GDDR6X, 1920MHz Base Clock', price: 14990000, brand: 'NVIDIA' },
            { id: 'gpu3', name: 'NVIDIA RTX 4080', specs: '16GB GDDR6X, 2205MHz Base Clock', price: 26990000, brand: 'NVIDIA' },
            { id: 'gpu4', name: 'AMD Radeon RX 7600', specs: '8GB GDDR6, 1720MHz Game Clock', price: 7490000, brand: 'AMD' },
            { id: 'gpu5', name: 'AMD Radeon RX 7700 XT', specs: '12GB GDDR6, 1700MHz Game Clock', price: 11990000, brand: 'AMD' },
            { id: 'gpu6', name: 'AMD Radeon RX 7800 XT', specs: '16GB GDDR6, 1295MHz Game Clock', price: 15990000, brand: 'AMD' }
        ]
    },
    storage: {
        title: 'Storage - Ổ cứng',
        icon: '💾',
        options: [
            { id: 'storage1', name: 'Samsung 980 PRO 1TB NVMe SSD', specs: '1TB NVMe PCIe 4.0, 7000MB/s Read', price: 2490000, brand: 'Samsung' },
            { id: 'storage2', name: 'WD Black SN850X 2TB NVMe SSD', specs: '2TB NVMe PCIe 4.0, 7300MB/s Read', price: 4890000, brand: 'Western Digital' },
            { id: 'storage4', name: 'Crucial MX4 1TB SATA SSD', specs: '1TB SATA III, 560MB/s Read', price: 1890000, brand: 'Crucial' },
            { id: 'storage5', name: 'Seagate Barracuda 2TB HDD', specs: '2TB SATA III 7200RPM, 256MB Cache', price: 1490000, brand: 'Seagate' },
            { id: 'storage6', name: 'Kingston NV2 500GB NVMe SSD', specs: '500GB NVMe PCIe 4.0, 3500MB/s Read', price: 890000, brand: 'Kingston' }
        ]
    },
    motherboard: {
        title: 'Motherboard - Bo mạch chủ',
        icon: '💶',
        options: [
            { id: 'motherboard1', name: 'ASUS ROG Strix B650-F Gaming WiFi', specs: 'AMD B650, Socket AM5, DDR5, WiFi 6E', price: 5490000, brand: 'ASUS' },
            { id: 'motherboard2', name: 'MSI MAG B760M Mortar WiFi', specs: 'Intel B760, Socket LGA1700, DDR5, WiFi 6E', price: 4290000, brand: 'MSI' },
            { id: 'motherboard3', name: 'Gigabyte X670 AORUS Elite AX', specs: 'AMD X670, Socket AM5, DDR5, WiFi 6E', price: 6990000, brand: 'Gigabyte' },
            { id: 'motherboard4', name: 'ASRock B650M Pro4', specs: 'AMD B650, Socket AM5, DDR5, Micro-ATX', price: 3490000, brand: 'ASRock' }
        ]
    },
    psu: {
        title: 'PSU - Nguồn máy tính',
        icon: '⚡',
        options:[
            { id: 'psu1', name: 'Corsair RM750x 750W 80+ Gold', specs: '750W, 80+ Gold, Full Modular', price: 2890000, brand: 'Corsair' },
            { id: 'psu2', name: 'Seasonic Focus GX-850 850W 80+ Gold', specs: '850W, 80+ Gold, Full Modular', price: 3290000, brand: 'Seasonic' },
            { id: 'psu3', name: 'EVGA SuperNOVA 650W 80+ Gold', specs: '650W, 80+ Gold, Full Modular', price: 2490000, brand: 'EVGA' },
            { id: 'psu4', name: 'Cooler Master V850 SFX Gold', specs: '850W, 80+ Gold, SFX Form Factor', price: 3890000, brand: 'Cooler Master' }
        ]
    },
    case: {
        title: 'Case - Vỏ máy',
        icon: '📦',
        options: [
            { id: 'case1', name: 'Mid Tower RGB Premium', price: 2800000, brand: 'Generic' },
            { id: 'case2', name: 'Mid Tower Standard', price: 1500000, brand: 'Generic' },
            { id: 'case3', name: 'Full Tower RGB', price: 3500000, brand: 'Generic' },
            { id: 'case4', name: 'Mini ITX Case', price: 800000, brand: 'Generic' }
        ]
    }
};

let currentCategory = '';
let currentPage = 1;
let itemsPerPage = 6;
let filteredProducts = [];
let selectedComponents = {};

function openModal(category) {
    currentCategory = category;
    document.getElementById('modalTitle').textContent = `Chọn ${productsData[category].title}`;
    document.getElementById('productModal').style.display = 'block';
    
    // Load brands for filter
    loadBrandFilter(category);
    
    // Reset filters
    document.getElementById('searchInput').value = '';
    document.getElementById('brandFilter').value = '';
    document.getElementById('priceFilter').value = '';
    
    // Reset pagination
    currentPage = 1;
    
    // Load products
    loadProducts();
}

function closeModal() {
    document.getElementById('productModal').style.display = 'none';
}

function loadBrandFilter(category) {
    const brands = [...new Set(productsData[category].options.map(p => p.brand))];
    const brandFilter = document.getElementById('brandFilter');
    brandFilter.innerHTML = '<option value="">Tất cả thương hiệu</option>';
    brands.forEach(brand => {
        if (brand) { // Chỉ thêm brand nếu nó tồn tại
            brandFilter.innerHTML += `<option value="${brand}">${brand}</option>`;
        }
    });
}

function loadProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const brandFilter = document.getElementById('brandFilter').value;
    const priceFilter = document.getElementById('priceFilter').value;

    // Filter products
    filteredProducts = productsData[currentCategory].options.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) || 
                        (product.specs && product.specs.toLowerCase().includes(searchTerm));
        const matchesBrand = !brandFilter || product.brand === brandFilter;
        const matchesPrice = filterByPrice(product.price, priceFilter);

        return matchesSearch && matchesBrand && matchesPrice;
    });

    displayProducts();
    setupPagination();
}

function filterByPrice(price, filter) {
    switch(filter) {
        case 'under5': return price < 5000000;
        case '5to10': return price >= 5000000 && price < 10000000;
        case '10to20': return price >= 10000000 && price < 20000000;
        case 'over20': return price >= 20000000;
        default: return true;
    }
}

function displayProducts() {
    const container = document.getElementById('productsContainer');
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const productsToShow = filteredProducts.slice(startIndex, endIndex);

    if (productsToShow.length === 0) {
        container.innerHTML = '<div class="loading">😔 Không tìm thấy sản phẩm phù hợp</div>';
        return;
    }

    container.innerHTML = '<div class="products-grid">' + 
        productsToShow.map(product => `
            <div class="product-card">
                <div class="product-image">
                    ${product.img ? `<img src="${product.img}" alt="${product.name}" style="max-width:100%; max-height:100%;">` : product.name.charAt(0)}
                </div>
                <div class="product-info">
                    <div class="product-name">${product.name}</div>
                    <div class="product-specs">${product.specs || ''}</div>
                    <div class="product-price">${formatPrice(product.price)}</div>
                    <div class="product-actions">
                        <button class="btn-select" onclick="selectComponent('${currentCategory}', ${JSON.stringify(product).replace(/"/g, '&quot;')})">
                            Chọn
                        </button>
                    </div>
                </div>
            </div>
        `).join('') + '</div>';
}

function setupPagination() {
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const pagination = document.getElementById('pagination');
    
    if (totalPages <= 1) {
        pagination.innerHTML = '';
        return;
    }

    let paginationHTML = '';
    
    // Previous button
    if (currentPage > 1) {
        paginationHTML += `<button class="page-btn" onclick="changePage(${currentPage - 1})">‹ Trước</button>`;
    }

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
            paginationHTML += `<button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">${i}</button>`;
        } else if (i === currentPage - 2 || i === currentPage + 2) {
            paginationHTML += '<span>...</span>';
        }
    }

    // Next button
    if (currentPage < totalPages) {
        paginationHTML += `<button class="page-btn" onclick="changePage(${currentPage + 1})">Sau ›</button>`;
    }

    pagination.innerHTML = paginationHTML;
}

function changePage(page) {
    currentPage = page;
    displayProducts();
    setupPagination();
}

function selectComponent(componentType, option) {
    selectedComponents[componentType] = option;
    
    // Update selector display
    const textElement = document.getElementById(componentType + '-text');
    const priceElement = document.getElementById(componentType + '-price');
    const selectorElement = textElement.closest('.component-selector');
    
    textElement.textContent = option.name;
    textElement.classList.remove('selector-placeholder');
    priceElement.textContent = formatPrice(option.price);
    selectorElement.classList.add('selected');
    
    updateSummary();
    closeModal();
    
    // Animation effect
    selectorElement.style.transform = 'scale(1.05)';
    selectorElement.style.borderColor = '#4CAF50';
    setTimeout(() => {
        selectorElement.style.transform = '';
        selectorElement.style.borderColor = '';
    }, 300);
}

function updateSummary() {
    // Map component types to their display names
    const componentMap = {
        'cpu': 'cpu',
        'motherboard': 'motherboard',
        'gpu': 'gpu', 
        'cooler': 'cooler',
        'ram': 'ram',
        'storage': 'storage',
        'psu': 'psu',
        'case': 'case'
    };

    let totalPrice = 0;

    // Update each summary item
    Object.keys(componentMap).forEach(componentType => {
        const summaryId = componentMap[componentType] + '-summary';
        const summaryElement = document.getElementById(summaryId);
        
        if (selectedComponents[componentType]) {
            const component = selectedComponents[componentType];
            summaryElement.textContent = formatPrice(component.price);
            summaryElement.style.color = '#ff6b6b';
            totalPrice += component.price;
        } else {
            summaryElement.textContent = 'Chưa chọn';
            summaryElement.style.color = '#999';
        }
    });

    // Update total price
    document.getElementById('total-price').textContent = formatPrice(totalPrice);
}

function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(price);
}

// Event listeners
document.getElementById('searchInput').addEventListener('input', debounce(loadProducts, 300));
document.getElementById('brandFilter').addEventListener('change', loadProducts);
document.getElementById('priceFilter').addEventListener('change', loadProducts);

// Utility function for debounce
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('productModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Keyboard navigation
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

function buildPC() {
    const selectedCount = Object.keys(selectedComponents).length;
    
    if (selectedCount === 0) {
        alert('🚨 Vui lòng chọn ít nhất một linh kiện!');
        return;
    }
    
    const totalPrice = Object.values(selectedComponents)
        .reduce((sum, comp) => sum + comp.price, 0);
    
    let configDetails = '🎮 CẤU HÌNH PC GAMING ĐÃ CHỌN:\n\n';
    Object.keys(selectedComponents).forEach(type => {
        const comp = selectedComponents[type];
        if (comp) {
            configDetails += `• ${productsData[type].title}: ${comp.name} - ${formatPrice(comp.price)}\n`;
        }
    });
    
    configDetails += `\n💰 TỔNG GIÁ TRỊ: ${formatPrice(totalPrice)}`;
    configDetails += `\n\n🎉 Cảm ơn bạn đã tin tưởng chúng tôi!`;
    
    alert(configDetails);
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    console.log('PC Builder loaded successfully!');
});