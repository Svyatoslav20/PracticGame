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
    
    let icons = createIconsArray(inpVal * inpVal)
    icons.forEach((icon) => {
        gameTable.append(createCard(icon));
    });
}
function createCard(flippedIcon) {
    let templCard = document.querySelector('#cardTemplate').cloneNode(true).content
    let card = templCard.querySelector('.card')

    const flippedIconElement = card.querySelector('#flippedIcon')
    if (flippedIconElement && flippedIcon) {
        flippedIconElement.classList.add(`fa-${flippedIcon}`)
    }
    
    return card
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
function createIconsArray(initialCount) {
    let cardsIcons = [
        "compass", "cloud", "play", "bolt", "stop", "cogs", "atom",
        "basketball-ball", "arrows", "angle-left", "bars", "file", 
        "filter", "gear", "folder", "folder-open", "shield", "scissors", "pen-clip"
    ]
    let cards = cardsIcons.slice(0, Math.floor(initialCount / 2))      
    let doubleCards = dublicateElements(cards)
    return shuffleArray(doubleCards) 
}
function dublicateElements(array) {
    let massive = [];
    array.forEach((item) => {
        massive.push(item, item)
    })
    return massive;
}
function shuffleArray(array) {
    let shuffled = [...array]
    let currentIndex = array.length
    while(currentIndex > 0) {
        currentIndex--;
        const randomIndex = Math.floor(Math.random() * currentIndex)
        const temp = array[randomIndex]
        shuffled[currentIndex] = shuffled[randomIndex]
        shuffled[randomIndex] = temp
    }
    return shuffled
}