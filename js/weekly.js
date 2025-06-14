function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const seasonalIngredients = {
  1: ['白菜', '大根', '長ねぎ', 'ほうれん草'],
  2: ['菜の花', 'ほうれん草', '大根'],
  3: ['キャベツ', '新玉ねぎ', 'いちご'],
  4: ['筍', 'アスパラガス', 'キャベツ'],
  5: ['新じゃがいも', 'アスパラガス', 'レタス'],
  6: ['きゅうり', 'トマト', 'ズッキーニ'],
  7: ['なす', 'ピーマン', 'オクラ'],
  8: ['なす', 'トマト', 'とうもろこし'],
  9: ['さつまいも', 'きのこ類', 'さんま'],
 10: ['さつまいも', 'きのこ類', 'かぼちゃ'],
 11: ['白菜', '大根', 'ほうれん草'],
 12: ['白菜', '長ねぎ', '大根']
};

function pickRecipe(list, seasonIngs) {
  const candidates = list.filter(r => r.ingredients.some(i => seasonIngs.includes(i)));
  const chosenList = candidates.length ? candidates : list;
  return chosenList[Math.floor(Math.random() * chosenList.length)];
}

function generateWeeklyMenu() {
  const month = new Date().getMonth() + 1;
  const seasonIngs = seasonalIngredients[month] || [];
  const mains = recipesData.recipes.filter(r => r.category === 'main');
  const sides = recipesData.recipes.filter(r => r.category === 'side');
  const soups = recipesData.recipes.filter(r => r.category === 'soup');

  shuffle(mains);
  shuffle(sides);
  shuffle(soups);

  const menuDiv = document.getElementById('menu');
  menuDiv.innerHTML = '';
  const days = ['月','火','水','木','金','土','日'];
  for (let i = 0; i < 7; i++) {
    const main = pickRecipe(mains, seasonIngs);
    const side = pickRecipe(sides, seasonIngs);
    const soup = pickRecipe(soups, seasonIngs);

    const card = document.createElement('div');
    card.className = 'border bg-white p-2 rounded';
    card.innerHTML = `
      <div class="font-bold">${days[i]}曜日</div>
      <div>メイン: ${main.name}</div>
      <div>副菜: ${side.name}</div>
      <div>スープ: ${soup.name}</div>
    `;
    menuDiv.appendChild(card);
  }
}

document.getElementById('gen-btn').addEventListener('click', generateWeeklyMenu);
