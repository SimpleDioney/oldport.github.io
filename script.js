function darkMode() {
  const body = document.body
  body.classList.toggle('dark-mode')
  const btn = document.querySelector('#btn')
  btn.classList.toggle('dark-mode-btn')
  const nomeb = document.querySelector('#nomeb')
  nomeb.classList.toggle('dark-mode-n')
}
