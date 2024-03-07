import { isDarkTheme } from "./detect-theme.js"

if (isDarkTheme) {
  document.documentElement.classList.toggle('dark')
} 

export let darkMode = isDarkTheme

const buttonToggle = document.getElementById('toggle-mode')

buttonToggle.addEventListener('click', (event) => {
  document.documentElement.classList.toggle('dark')

  let mode = darkMode ? 'Light' : 'Dark'
  event.currentTarget.querySelector('span').textContent = `${mode} mode ativado`
  console.log(`${mode} mode ativado`)
  darkMode = !darkMode
})

