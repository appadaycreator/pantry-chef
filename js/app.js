if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}

const ingredientsDiv = document.getElementById('ingredients');
const customInput = document.getElementById('custom-ingredient');
const addBtn = document.getElementById('add-ingredient');
const searchBtn = document.getElementById('search');
const resultsDiv = document.getElementById('results');
const timeFilter = document.getElementById('time-filter');

const selected = new Set();

function renderIngredients() {
  recipesData.ingredients.forEach(ing => {
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = ing;
    checkbox.addEventListener('change', e => {
      if (e.target.checked) selected.add(ing); else selected.delete(ing);
    });
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(ing));
    ingredientsDiv.appendChild(label);
  });
}

function addCustomIngredient() {
  const val = customInput.value.trim();
  if (!val) return;
  selected.add(val);
  const label = document.createElement('label');
  label.textContent = val;
  ingredientsDiv.appendChild(label);
  customInput.value = '';
}

function scoreRecipe(recipe) {
  const have = recipe.ingredients.filter(i => selected.has(i));
  return have.length / recipe.ingredients.length;
}

function search() {
  const maxTime = parseInt(timeFilter.value || '9999', 10);
  const matches = recipesData.recipes
    .filter(r => r.cookingTime <= maxTime)
    .map(r => ({recipe: r, score: scoreRecipe(r)}))
    .sort((a,b) => b.score - a.score)
    .slice(0,5);

  resultsDiv.innerHTML = '';
  matches.forEach(m => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <h3>${m.recipe.name}</h3>
      <p>調理時間: ${m.recipe.cookingTime}分</p>
      <ul>${m.recipe.ingredients.map(i=>`<li>${i} ${affiliateLink(i)}</li>`).join('')}</ul>
    `;
    resultsDiv.appendChild(card);
  });
}

addBtn.addEventListener('click', addCustomIngredient);
searchBtn.addEventListener('click', search);
renderIngredients();
