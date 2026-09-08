import { setPageMeta, setupNavigation } from './module.js';

async function loadFeaturedRecipes() {
    const featuredContainer = document.getElementById('featured-recipes-container');
    try {
        const response = await fetch('data/recipes.json');
        if (!response.ok) throw new Error('Recipe data could not be loaded.');
        const recipes = await response.json();
        featuredContainer.innerHTML = recipes.slice(0, 6).map((recipe) => `
            <article class="recipe">
                <img src="${recipe.image}" alt="${recipe.title}" loading="lazy" width="640" height="420">
                <h3>${recipe.title}</h3>
                <p>${recipe.description}</p>
                <p><strong>Type:</strong> ${recipe.type} | <strong>Time:</strong> ${recipe.time}</p>
                <button type="button" class="recipe-details" data-recipe="${recipe.title}">View Details</button>
            </article>
        `).join('');
        localStorage.setItem('featuredRecipe', recipes[0].title);
        featuredContainer.addEventListener('click', (event) => {
            const button = event.target.closest('.recipe-details');
            if (!button) return;
            const recipe = recipes.find((item) => item.title === button.dataset.recipe);
            document.getElementById('dialog-title').textContent = recipe.title;
            document.getElementById('dialog-content').textContent = `${recipe.description} Preparation time: ${recipe.time}. Calories: ${recipe.calories}.`;
            document.getElementById('recipe-dialog').showModal();
        });
    } catch (error) {
        featuredContainer.innerHTML = `<p role="alert">${error.message}</p>`;
    }
}

document.getElementById('dialog-close')?.addEventListener('click', () => document.getElementById('recipe-dialog').close());
setPageMeta();
setupNavigation();
await loadFeaturedRecipes();

