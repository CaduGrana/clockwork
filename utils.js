// Tema claro/escuro
const themeToggle = document.getElementById('theme-toggle');
const htmlEl = document.documentElement;
let isDark = localStorage.getItem('clockworkTheme') === 'dark';

function applyTheme() {
  htmlEl.classList.toggle('dark', isDark);
  htmlEl.classList.toggle('light', !isDark);
}

themeToggle.addEventListener('click', () => {
  isDark = !isDark;
  localStorage.setItem('clockworkTheme', isDark ? 'dark' : 'light');
  applyTheme();
});

applyTheme();
