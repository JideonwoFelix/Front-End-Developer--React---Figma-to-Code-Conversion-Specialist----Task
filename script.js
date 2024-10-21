// Sidebar Toggle
const sidebarToggle = document.getElementById('sidebar-toggle');
const sidebar = document.getElementById('sidebar');

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
});
sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('mobile-collapsed');
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
    darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Modal Pop-Up
const eventModal = document.getElementById('event-modal');
const closeModalButton = document.getElementById('close-modal');

function openModal() {
    eventModal.classList.remove('hidden');
}

closeModalButton.addEventListener('click', () => {
    eventModal.classList.add('hidden');
});

// Carousel Auto-Slide
let currentSlide = 0;
const carouselItems = document.querySelectorAll('.carousel-item');

function showSlide(index) {
    carouselItems.forEach((item, i) => {
        item.style.transform = `translateX(${(i - index) * 100}%)`;
    });
}

setInterval(() => {
    currentSlide = (currentSlide + 1) % carouselItems.length;
    showSlide(currentSlide);
}, 3000);