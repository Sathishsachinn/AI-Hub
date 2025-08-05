// Toggle Light/Dark
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
});

// Scroll to Top
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Search Filter
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('keyup', () => {
    let filter = searchInput.value.toLowerCase();
    let cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        let text = card.textContent.toLowerCase();
        card.style.display = text.includes(filter) ? "block" : "none";
    });
});

// Sidebar Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const sideMenu = document.getElementById('side-menu');
const mainContent = document.getElementById('main-content');

menuToggle.addEventListener('click', () => {
    if (sideMenu.style.left === '0px') {
        sideMenu.style.left = '-220px';
        mainContent.classList.remove('menu-open');
    } else {
        sideMenu.style.left = '0px';
        mainContent.classList.add('menu-open');
    }
});

// Filter by Category
const menuLinks = document.querySelectorAll('.side-menu a');
menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const category = e.target.getAttribute('data-category');
        const cards = document.querySelectorAll('.card');

        cards.forEach(card => {
            if (category === 'all' || card.getAttribute('data-category') === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Back Button
const backButtons = document.querySelectorAll('.back-btn');
backButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        mainContent.style.display = 'block';
        pages.forEach(page => {
            page.classList.remove('active');
            page.style.display = 'none';
        });
    });
});