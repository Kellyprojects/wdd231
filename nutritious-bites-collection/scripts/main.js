document.addEventListener("DOMContentLoaded", () => {
    const featuredContainer = document.getElementById("featured-recipes-container");

    fetch("data/recipes.json")
        .then(response => response.json())
        .then(data => {
            featuredContainer.innerHTML = data.slice(0, 3).map(recipe => `
                <div class="recipe">
                    <img src="${recipe.image}" alt="${recipe.title}" loading="lazy">
                    <h3>${recipe.title}</h3>
                    <p>${recipe.description}</p>
                </div>
            `).join("");
        });
});

