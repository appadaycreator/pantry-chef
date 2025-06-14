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
const required = new Set();

function renderIngredients() {
  recipesData.ingredients.forEach(ing => {
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = ing;
    checkbox.addEventListener('change', e => {
      if (e.target.checked) selected.add(ing); else selected.delete(ing);
    });
    const star = document.createElement('span');
    star.className = 'require-star';
    star.textContent = '★';
    star.addEventListener('click', e => {
      e.stopPropagation();
      if (required.has(ing)) {
        required.delete(ing);
        star.classList.remove('required');
      } else {
        required.add(ing);
        star.classList.add('required');
        if (!checkbox.checked) {
          checkbox.checked = true;
          selected.add(ing);
        }
      }
    });
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(ing));
    label.appendChild(star);
    ingredientsDiv.appendChild(label);
  });
}

function addCustomIngredient() {
  const val = customInput.value.trim();
  if (!val) return;
  selected.add(val);
  const label = document.createElement('label');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = true;
  checkbox.addEventListener('change', e => {
    if (e.target.checked) selected.add(val); else selected.delete(val);
  });
  const star = document.createElement('span');
  star.className = 'require-star';
  star.textContent = '★';
  star.addEventListener('click', e => {
    e.stopPropagation();
    if (required.has(val)) {
      required.delete(val);
      star.classList.remove('required');
    } else {
      required.add(val);
      star.classList.add('required');
    }
  });
  label.appendChild(checkbox);
  label.appendChild(document.createTextNode(val));
  label.appendChild(star);
  ingredientsDiv.appendChild(label);
  customInput.value = '';
}

function scoreRecipe(recipe) {
  if (![...required].every(r => recipe.ingredients.includes(r))) {
    return 0;
  }
  const have = recipe.ingredients.filter(i => selected.has(i) || required.has(i));
  return have.length / recipe.ingredients.length;
}

function search() {
  if (selected.size === 0 && required.size === 0) return;
  const maxTime = parseInt(timeFilter.value || '9999', 10);
  const matches = recipesData.recipes
    .filter(r => r.cookingTime <= maxTime)
    .map(r => ({recipe: r, score: scoreRecipe(r)}))
    .filter(m => m.score > 0)
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

const shareBtn = document.getElementById('share-btn');
if (shareBtn) {
  shareBtn.style.display = 'inline-flex';
  shareBtn.addEventListener('click', () => {
    const shareData = {
      title: document.title,
      url: location.href
    };
    if (navigator.share) {
      navigator.share(shareData);
    } else {
      const url = encodeURIComponent(location.href);
      window.open(`https://twitter.com/intent/tweet?url=${url}`, '_blank');
    }
  });
}
