const siteMenuToggle = document.querySelector('.menu-toggle');
const siteNavMenu = document.getElementById('nav-menu');

if (siteMenuToggle && siteNavMenu) {
    siteMenuToggle.addEventListener('click', () => {
        const isOpen = siteNavMenu.classList.toggle('show');
        siteMenuToggle.setAttribute('aria-expanded', String(isOpen));
        siteMenuToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
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