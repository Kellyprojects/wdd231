import { setPageMeta, setupNavigation } from './module.js';

const filter = document.getElementById('filter');
const recipeList = document.getElementById('recipe-list');
let recipes = [];

function renderRecipes(type) {
    const filtered = type === 'all' ? recipes : recipes.filter((recipe) => recipe.type === type);
    recipeList.innerHTML = filtered.map((recipe) => `
        <article class="recipe">
            <img src="${recipe.image}" alt="${recipe.title}" loading="lazy" width="640" height="420">
            <h2>${recipe.title}</h2>
            <p>${recipe.description}</p>
            <p><strong>Type:</strong> ${recipe.type} | <strong>Time:</strong> ${recipe.time} | <strong>Calories:</strong> ${recipe.calories}</p>
            <button type="button" class="recipe-details" data-recipe="${recipe.title}">View Details</button>
        </article>
    `).join('');
}

async function loadRecipes() {
    try {
        const response = await fetch('data/recipes.json');
        if (!response.ok) throw new Error('Recipe data could not be loaded.');
        recipes = await response.json();
        renderRecipes(filter.value);
    } catch (error) {
        recipeList.innerHTML = `<p role="alert">${error.message}</p>`;
    }
}

filter.addEventListener('change', () => renderRecipes(filter.value));
setPageMeta();
setupNavigation();
await loadRecipes();

