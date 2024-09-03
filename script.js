let selectedIngredients = [];

document.addEventListener('DOMContentLoaded', () => {
    let ingredients = document.querySelectorAll('.ingredient');
    let bowl = document.getElementById('bowl');

    ingredients.forEach(ingredient => {
        ingredient.addEventListener('dragstart', dragStart);
    });

    bowl.addEventListener('dragover', dragOver);
    bowl.addEventListener('drop', drop);

    document.getElementById('bake-cake').addEventListener('click', bakeCake);
});

function dragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    let ingredientId = event.dataTransfer.getData('text/plain');
    let ingredient = document.getElementById(ingredientId);

    if (!selectedIngredients.includes(ingredientId)) {
        selectedIngredients.push(ingredientId);
        bowl.appendChild(ingredient);
        ingredient.classList.add('added');
    }
}

function bakeCake() {
    if (selectedIngredients.includes('vanilla') && selectedIngredients.length >= 3) {
        document.getElementById('result').textContent = 'You made the perfect Vanilla Cake!';
    } else {
        document.getElementById('result').textContent = 'The cake didn\'t turn out well. Try again!';
    }
    resetGame();
}

function resetGame() {
    selectedIngredients = [];
    let bowl = document.getElementById('bowl');
    let ingredients = document.querySelectorAll('.ingredient.added');
    
    ingredients.forEach(ingredient => {
        bowl.removeChild(ingredient);
        document.getElementById('ingredients').appendChild(ingredient);
        ingredient.classList.remove('added');
    });
}
