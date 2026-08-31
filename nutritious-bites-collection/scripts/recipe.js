document.addEventListener("DOMContentLoaded", () => {
    const filter = document.getElementById("filter");
    const recipeList = document.getElementById("recipe-list");

    const loadRecipes = (type) => {
        fetch("data/recipes.json")
            .then(response => response.json())
            .then(data => {
                const filtered = type === "all" ? data : data.filter(recipe => recipe.type === type);
                recipeList.innerHTML = filtered.map(recipe => `
                    <div class="recipe">
                        <img src="${recipe.image}" alt="${recipe.title}" loading="lazy">
                        <h3>${recipe.title}</h3>
                        <p>${recipe.description}</p>
                    </div>
                `).join("");
            });
    };

    filter.addEventListener("change", () => loadRecipes(filter.value));
    loadRecipes("all");
});

