function renderRecipes() {
  const listEl = document.getElementById('recipe-list');
  const search = document.getElementById('recipe-search').value.trim();
  const sort = document.getElementById('recipe-sort').value;

  let list = recipesData.recipes.slice();
  if (search) {
    list = list.filter(r => r.name.includes(search) || r.ingredients.some(i => i.includes(search)));
  }
  if (sort === 'name') {
    list.sort((a, b) => a.name.localeCompare(b.name, 'ja'));
  } else if (sort === 'time-asc') {
    list.sort((a, b) => a.cookingTime - b.cookingTime);
  } else if (sort === 'time-desc') {
    list.sort((a, b) => b.cookingTime - a.cookingTime);
  }

  document.getElementById('total-count').textContent = `総レシピ数: ${list.length}`;

  listEl.innerHTML = '';
  list.forEach(r => {
    const div = document.createElement('div');
    div.className = 'border bg-white p-2 rounded';
    const link = r.source ? `<a href="${r.source}" class="text-blue-600 underline" target="_blank" rel="noopener">${r.name}</a>` : r.name;
    const labels = r.ingredients.map(i => `<span class="ingredient-label">${i}</span>`).join(' ');
    div.innerHTML = `
      <div>${link} <span class="text-sm text-gray-600">(${r.cookingTime}分)</span></div>
      <div class="mt-1">${labels}</div>
    `;
    listEl.appendChild(div);
  });
}

document.getElementById('recipe-search').addEventListener('input', renderRecipes);
document.getElementById('recipe-sort').addEventListener('change', renderRecipes);

// 初期表示
renderRecipes();
