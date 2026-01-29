const board = document.querySelector('.divS')
const startBtn = document.querySelector('.startBtn')
const startInp = document.querySelector('.startInp')
let template = document.querySelector('#gameTableTemplate').cloneNode(true).content
const restartBtn = template.querySelector('.table__button')
const gameTable = template.querySelector('.table')
function createBoard(columns, count) {
    board.remove()
    let inpVal = startInp.value
    gameTable.style = `
    grid-template-columns: repeat(${columns}, 1fr)
    grid-template-rows: repeat(${columns}, 1fr)
    `
    board.append(gameTable)
    board.append(restartBtn)
    for(i = 0; i < count; i++) { gameTable.append(createCard())}
}
function createCard() {
    let templCard = document.querySelector('#cardTemplate').cloneNode(true).content
    let card = templCard.querySelector('.card')
}
restartBtn.addEventListener('click', () =>{
    location.reload()
})
startBtn.addEventListener('click', () => {
    let inpVal = startInp.value 
    if(inpVal) {
        if(inpVal % 2 === 0) {
            if(inpVal >= 2 && inpVal <= 6) {
                let num = inpVal * inpVal;
                console.warn(num) 
                createBoard()
            } else {
                alert('Число должно быть от 2 до 6')
            }
        } else {
            alert('Введите четное число')
        }
    } else {
        alert('Введите число')
    }
})
startInp.addEventListener('input', () => {
    let maxVal = 6
    let minVal = 2
    const inputValue = startInp.value
    if(inputValue >= 6) {startInp.value = maxVal}
    else if(inputValue <= 2) {startInp.value = minVal}
})
createCard(4, 4)