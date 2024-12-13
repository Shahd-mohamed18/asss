// دالة لجلب الفئات من API
function fetchCategories() {
    fetch('https://fakestoreapi.com/products/categories')
        .then(response => response.json())
        .then(data => {
            displayCategories(data);
        })
        .catch(error => console.error('Error fetching categories:', error));
}

// دالة لعرض الفئات في الصفحة
function displayCategories(categories) {
    const categoryContainer = document.querySelector('.row');  // تأكد أن هذه هي الـ container الخاصة بالفئات
    categoryContainer.innerHTML = '';  // مسح الفئات الحالية

    categories.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('col');

        // استخدام صورة افتراضية في حال كانت الصورة غير موجودة
        const imagePath = `images/${category.toLowerCase()}.webp`;
        
        categoryDiv.innerHTML = `
            <div class="box_main">
                <a href="${category}.html">
                    <div class="tshirt_img"><img src="${imagePath}" alt="${category}"></div>
                </a>
                <a href="${category}.html">${category}</a>
            </div>
        `;

        categoryContainer.appendChild(categoryDiv);
    });
}

// استدعاء الدالة عند تحميل الصفحة
window.onload = fetchCategories;
