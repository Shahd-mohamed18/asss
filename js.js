document.addEventListener('DOMContentLoaded', () => {
    // Carousel functionality
    const slides = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;
    const totalSlides = slides.length;

    const counterElement = document.getElementById('slideCounter');
    if (counterElement) counterElement.textContent = `1/${totalSlides}`;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        updateCounter(index);
    }

    function updateCounter(index) {
        if (counterElement) counterElement.textContent = `${index + 1}/${totalSlides}`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
    }

    // Search bar functionality
    const searchBtn = document.getElementById('search-btn');
    const closeSearch = document.getElementById('close-search');
    const searchBar = document.getElementById('search-bar');
    const headerSection = document.querySelector('.header_section');
    const body = document.body;

    const dimmedBackground = document.createElement('div');
    dimmedBackground.classList.add('dimmed-background');
    dimmedBackground.style.display = 'none';
    body.appendChild(dimmedBackground);

    if (searchBtn && closeSearch && searchBar && headerSection) {
        searchBtn.addEventListener('click', () => {
            searchBar.classList.remove('hidden');
            headerSection.classList.add('header-active');
            dimmedBackground.style.display = 'block';
        });

        closeSearch.addEventListener('click', () => {
            searchBar.classList.add('hidden');
            headerSection.classList.remove('header-active');
            dimmedBackground.style.display = 'none';
        });

        dimmedBackground.addEventListener('click', () => {
            searchBar.classList.add('hidden');
            headerSection.classList.remove('header-active');
            dimmedBackground.style.display = 'none';
        });
    }

    // Slider functionality
    const sliderContainer = document.querySelector('.slider-container');
    const productsContainer = document.querySelector('.products-container');
    const totalProductGroups = document.querySelectorAll('.product-group').length;
    let currentSlide = 0;

    function updateSlider() {
        if (sliderContainer && productsContainer) {
            const sliderWidth = sliderContainer.offsetWidth;
            productsContainer.style.transform = `translateX(-${currentSlide * sliderWidth}px)`;
        }
        const sliderCounter = document.getElementById('slider-counter');
        if (sliderCounter) sliderCounter.textContent = `${currentSlide + 1}/${totalProductGroups}`;
    }

    function nextProductSlide() {
        currentSlide = (currentSlide + 1) % totalProductGroups;
        updateSlider();
    }

    function prevProductSlide() {
        currentSlide = (currentSlide - 1 + totalProductGroups) % totalProductGroups;
        updateSlider();
    }

    // Quantity control functionality
    const decrementBtn = document.getElementById('decrement');
    const incrementBtn = document.getElementById('increment');
    const quantityInput = document.getElementById('quantity');
    let quantity = 1;
    const maxQuantity = 10;

    if (decrementBtn && incrementBtn && quantityInput) {
        function updateQuantity() {
            quantityInput.value = quantity;
            decrementBtn.disabled = quantity <= 1;
            incrementBtn.disabled = quantity >= maxQuantity;
        }

        incrementBtn.addEventListener('click', () => {
            if (quantity < maxQuantity) {
                quantity++;
                updateQuantity();
            }
        });

        decrementBtn.addEventListener('click', () => {
            if (quantity > 1) {
                quantity--;
                updateQuantity();
            }
        });

        updateQuantity();
    }

    // Modal functionality
    const addToCartLink = document.getElementById('addToCartLink');
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close-btn');

    if (addToCartLink && modal && closeBtn) {
        addToCartLink.addEventListener('click', (event) => {
            event.preventDefault();
            modal.style.display = 'block';
        });

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
});
