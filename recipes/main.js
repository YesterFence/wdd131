import { recipes } from './recipes.mjs';

document.addEventListener('DOMContentLoaded', () => {
    const recipeContainer = document.getElementById('recipe-container');

    recipes.forEach(recipe => {
        const recipeElement = document.createElement('div');
        recipeElement.className = 'recipe';

        recipeElement.innerHTML = `
        <div class="recipe-image">
            <img src="${recipe.image}" alt="${recipe.name}">
        </div>  
            
        <div class="recipe-info">
            <div class="tags">
                ${recipe.tags.map(tag => `<span>${tag}</span>`).join('')}
            </div>
            <h2>${recipe.name}</h2>
            <span class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
                ${'⭐'.repeat(recipe.rating)}${'☆'.repeat(5 - recipe.rating)}
            </span>
            <p>${recipe.description}</p>
        </div>`;

        recipeContainer.appendChild(recipeElement);
    });
});
