// const board = document.querySelector('.divS')
// const startBtn = document.querySelector('.startBtn')
// const startInp = document.querySelector('.startInp')
const setBtn = document.querySelector('.settingsBtn')
const setMenu = document.querySelector('.settingsMenu')
function OpenSettingsMenu() {
    console.warn('Поздравляю, вы открыли настройки!')
    setMenu.classList.toggle('active')
}
setBtn.addEventListener('click', OpenSettingsMenu)
