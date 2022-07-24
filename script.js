// warningfunction darkMode() {
//  const body = document.body
//  body.classList.toggle('dark-mode')
//  const btn = document.querySelector('#btn')
//  const nomeb = document.querySelector('#nomeb')
//  nomeb.classList.toggle('dark-mode-n')
//

const theme = {
  light: {
    background: 'white',
    color: 'black',
  },
  dark: {
    background: '#111B21',
    color: 'darkgrey',
  }
};
function setTheme(newTheme) {
  const themeColors = themes[newTheme]; // Seleciona o tema para aplicar

  Object.keys(themeColors).map(function(key) {
    body.style.setProperty(`--${key}`, themeColors[key]); // Altera as variáveis no css
  });
}
const darkModeToggle = document.querySelector('input[name=theme]');
darkModeToggle.addEventListener('change', function({ target }) {
  setTheme(target.checked ? 'dark' : 'light');
});
