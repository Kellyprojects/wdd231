import {
    setPageMeta,
    setupNavigation,
    fetchRecipes,
    recipeCardHtml,
    setupRecipeModal,
    updateLastViewedLabels
} from './module.js';

const filter = document.getElementById('filter');
const recipeList = document.getElementById('recipe-list');
let recipes = [];

function renderRecipes(type) {
    const filtered = type === 'all' ? recipes : recipes.filter((recipe) => recipe.type === type);
    recipeList.innerHTML = filtered.map((recipe) => recipeCardHtml(recipe, 'h2')).join('');
    localStorage.setItem('recipeFilter', type);
}

async function loadRecipes() {
    try {
        const savedFilter = localStorage.getItem('recipeFilter') || 'all';
        filter.value = savedFilter;
        recipes = await fetchRecipes();
        renderRecipes(filter.value);
        setupRecipeModal(recipes);
        updateLastViewedLabels();
    } catch (error) {
        recipeList.innerHTML = `<p role="alert">${error.message}</p>`;
    }
}

filter.addEventListener('change', () => renderRecipes(filter.value));
setPageMeta();
setupNavigation();
await loadRecipes();
