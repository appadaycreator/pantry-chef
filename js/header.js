// Toggle mobile menu
window.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');
  if (btn && menu) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  }
});
