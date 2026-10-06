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

    const current = window.location.pathname.split('/').pop() || 'index.html';
    menu.querySelectorAll('a').forEach((link) => {
        const href = link.getAttribute('href');
        const isRecipes = href === 'recipes.html' && (current === 'recipes.html' || current === 'recipe.html');
        if (href === current || isRecipes || (href === 'index.html' && current === '')) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });
}

export async function fetchRecipes() {
    try {
        const response = await fetch('data/recipes.json');
        if (!response.ok) throw new Error('Recipe data could not be loaded.');
        return await response.json();
    } catch (error) {
        throw error;
    }
}

export function getLastViewedRecipe() {
    return localStorage.getItem('lastViewedRecipe') || '';
}

export function setLastViewedRecipe(title) {
    localStorage.setItem('lastViewedRecipe', title);
}

export function recipeCardHtml(recipe, heading = 'h3') {
    return `
        <article class="recipe recipe-${recipe.type}">
            <img src="${recipe.image}" alt="${recipe.title}" loading="lazy" width="640" height="420">
            <${heading}>${recipe.title}</${heading}>
            <p>${recipe.description}</p>
            <p><strong>Type:</strong> ${recipe.type}</p>
            <p><strong>Time:</strong> ${recipe.time}</p>
            <p><strong>Calories:</strong> ${recipe.calories}</p>
            <button type="button" class="recipe-details" data-recipe="${recipe.title}">View Details</button>
        </article>
    `;
}

export function setupRecipeModal(recipes) {
    const dialog = document.getElementById('recipe-dialog');
    const title = document.getElementById('dialog-title');
    const content = document.getElementById('dialog-content');
    const closeBtn = document.getElementById('dialog-close');
    if (!dialog || !title || !content) return;

    document.addEventListener('click', (event) => {
        const button = event.target.closest('.recipe-details');
        if (!button) return;
        const recipe = recipes.find((item) => item.title === button.dataset.recipe);
        if (!recipe) return;
        setLastViewedRecipe(recipe.title);
        title.textContent = recipe.title;
        content.innerHTML = `
            <p>${recipe.description}</p>
            <p><strong>Type:</strong> ${recipe.type}</p>
            <p><strong>Time:</strong> ${recipe.time}</p>
            <p><strong>Calories:</strong> ${recipe.calories}</p>
        `;
        dialog.showModal();
        updateLastViewedLabels();
    });

    closeBtn?.addEventListener('click', () => dialog.close());
}

export function updateLastViewedLabels() {
    const lastViewed = getLastViewedRecipe();
    document.querySelectorAll('[data-last-viewed]').forEach((el) => {
        el.textContent = lastViewed
            ? `Last recipe you viewed: ${lastViewed}`
            : 'Browse a recipe and we will remember it on this device.';
    });
}
