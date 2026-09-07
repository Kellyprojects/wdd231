const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle?.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('show');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
});

let activeTrigger;

document.querySelectorAll('[data-modal]').forEach((button) => {
    button.addEventListener('click', () => {
        activeTrigger = button;
        const modal = document.getElementById(button.dataset.modal);
        modal.classList.add('open');
        modal.querySelector('.modal-content').focus();
    });
});

document.querySelectorAll('[data-close-modal]').forEach((button) => {
    button.addEventListener('click', () => {
        button.closest('.modal').classList.remove('open');
        activeTrigger?.focus();
    });
});

document.querySelectorAll('.modal').forEach((modal) => {
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.remove('open');
            activeTrigger?.focus();
        }
    });
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        const openModal = document.querySelector('.modal.open');
        if (openModal) {
            openModal.classList.remove('open');
            activeTrigger?.focus();
        }
    }
});

document.getElementById('timestamp').value = new Date().toISOString();
document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

