const display = document.querySelector('.display')
const buttons = document.querySelectorAll('.buttons button')
let currentNum = ''
let prevNum = ''
let operator = null

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('number')) {
      currentNum += button.value
      display.textContent = currentNum
    } else if (button.classList.contains('operator')) {
      operator = button.value
      prevNum = currentNum
      currentNum = ''
    } else if (button.classList.contains('decimal')) {
      if (!currentNum.includes('.')) {
        currentNum += '.'
        display.textContent = currentNum
      }
    } else if (button.classList.contains('equals')) {
      const result = eval(prevNum + operator + currentNum)
      display.textContent = result
      currentNum = result
      prevNum = ''
      operator = null
    } else if (button.classList.contains('clear')) {
      currentNum = ''
      prevNum = ''
      operator = null
      display.textContent = '0'
    }
  })
})