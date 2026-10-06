import {
    setPageMeta,
    setupNavigation,
    fetchRecipes,
    recipeCardHtml,
    setupRecipeModal,
    updateLastViewedLabels
} from './module.js';

async function loadFeaturedRecipes() {
    const featuredContainer = document.getElementById('featured-recipes-container');
    try {
        const recipes = await fetchRecipes();
        featuredContainer.innerHTML = recipes.slice(0, 6).map((recipe) => recipeCardHtml(recipe, 'h3')).join('');
        localStorage.setItem('featuredRecipe', recipes[0].title);
        setupRecipeModal(recipes);
        updateLastViewedLabels();
    } catch (error) {
        featuredContainer.innerHTML = `<p role="alert">${error.message}</p>`;
    }
}

setPageMeta();
setupNavigation();
await loadFeaturedRecipes();
