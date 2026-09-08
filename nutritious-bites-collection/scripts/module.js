export function setPageMeta() {
    const year = document.getElementById('current-year');
    const modified = document.getElementById('last-modified');
    if (year) year.textContent = new Date().getFullYear();
    if (modified) modified.textContent = document.lastModified;
}

export function setupNavigation() {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('site-menu');
    if (!menuToggle || !menu) return;

    menuToggle.addEventListener('click', () => {
        const isOpen = menu.classList.toggle('show');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
        menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    });
}
