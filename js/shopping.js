window.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('shopping-items');
  const clearBtn = document.getElementById('clear-list');
  function render() {
    container.innerHTML = '';
    let items = [];
    try {
      items = JSON.parse(localStorage.getItem('mama-shopping-list') || '[]');
    } catch (e) {
      console.log('Cannot load shopping list:', e);
    }
    if (!items || items.length === 0) {
      container.innerHTML = '<p>買い物リストは空です。</p>';
      return;
    }
    const ul = document.createElement('ul');
    items.forEach(i => {
      const li = document.createElement('li');
      li.textContent = i;
      ul.appendChild(li);
    });
    container.appendChild(ul);
  }
  clearBtn.addEventListener('click', () => {
    localStorage.removeItem('mama-shopping-list');
    render();
  });
  render();
});
