const board = document.querySelector('.divS')
const startBtn = document.querySelector('.startBtn')
const startInp = document.querySelector('.startInp')
function createBoard(event) {
    board.remove()
}
startBtn.addEventListener('click', () => {
    let inpVal = startInp.value
    if(inpVal) {
    if(inpVal % 2 === 2 || inpVal % 2 === 0 || inpVal % 2 === 3) {
        let num = inpVal * inpVal;
        console.error(num)
        createBoard()
    } else {
        alert('Введите четное число')
    }
    } else {return}
})