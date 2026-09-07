const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.getElementById('nav-menu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('show');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
        menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    });
}

const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('#nav-menu a').forEach((link) => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
    }
});

const currentYear = document.getElementById('current-year');
const lastModified = document.getElementById('last-modified');
if (currentYear) currentYear.textContent = new Date().getFullYear();
if (lastModified) lastModified.textContent = document.lastModified;