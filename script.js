let ingredients = ['Flour', 'Sugar', 'Eggs', 'Butter', 'Vanilla'];
let selectedIngredients = [];
let customerOrder = 'Vanilla Cake';

// Display customer order
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('customer-orders').textContent = `Customer wants a: ${customerOrder}`;
    let ingredientsDiv = document.getElementById('cake-ingredients');
    
    ingredients.forEach(ingredient => {
        let button = document.createElement('button');
        button.textContent = ingredient;
        button.onclick = () => selectIngredient(ingredient);
        ingredientsDiv.appendChild(button);
    });
    
    document.getElementById('bake-cake').onclick = bakeCake;
});

function selectIngredient(ingredient) {
    if (!selectedIngredients.includes(ingredient)) {
        selectedIngredients.push(ingredient);
        alert(`${ingredient} added!`);
    } else {
        alert(`${ingredient} already added!`);
    }
}

function bakeCake() {
    if (selectedIngredients.includes('Vanilla') && selectedIngredients.length === 3) {
        document.getElementById('result').textContent = 'You made the perfect Vanilla Cake!';
    } else {
        document.getElementById('result').textContent = 'The cake didn\'t turn out well. Try again!';
    }
    selectedIngredients = [];
}
