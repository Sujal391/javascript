// SPA Navigation
const nav = document.querySelectorAll('.nav-links a');
const pages = document.querySelectorAll('.page');

nav.forEach(link => {
    link.addEventListener('click', () => {
        const pageId = link.getAttribute('data-page');
        pages.forEach(page => {
            page.classList.remove('active');
        });
        document.getElementById(pageId).classList.add('active');
        nav.forEach(navLink => {
            navLink.classList.remove('active');
        });
        link.classList.add('active');
    });
});

// Responsive Grid
const grid = document.querySelector('.grid-container');

function updateGridColumns() {
    const width = window.innerWidth;
    
    if (width < 600) {
        grid.style.gridTemplateColumns = '1fr';
    } else if (width < 1000) {
        grid.style.gridTemplateColumns = '1fr 1fr';
    } else {
        grid.style.gridTemplateColumns = 'repeat(4, 1fr)';
    }
}

updateGridColumns();
window.addEventListener('resize', updateGridColumns);

// Theme Toggle with localStorage
const toggleButton = document.querySelector('.toggle-button');
const body = document.body;

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
    }
});

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme');

    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark-theme');
    } else {
        localStorage.setItem('theme', 'light-theme');
        body.classList.add('light-theme');
    }
});
        // Carousel
        const slides = document.getElementById('carouselSlides');
        const items = document.querySelectorAll('.carousel-item');
        let currentSlide = 0;

        function updateCarousel() {
            slides.style.transform = `translateX(-${currentSlide * 100}%)`;
        }

        setInterval(() => {
            currentSlide = (currentSlide + 1) % items.length;
            updateCarousel();
            console.log(currentSlide);
            
        }, 2000);