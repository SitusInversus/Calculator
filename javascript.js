const numberButtons = document.querySelectorAll('[data-number]')
const operandButtons = document.querySelectorAll('[data-operand]')
const allClearButton = document.querySelector('[data-all-clear]')
const deleteButton = document.querySelector('[data-delete]')
const equalSignButton = document.querySelector('[data-equal-sign]')
const previousOp = document.querySelector('[data-previous-result]')
const currentOp = document.querySelector('[data-current-operation]')

let operandincluded = false;
let operand = '';

function add (a,b) {
    return a+b
}
function subtract (a,b) {
    return (a-b)
}
function multiply (a,b) {
    return a*b
}
function divide (a,b) {
    if (b===0) return Infinity
    return (a/b)
}

function operate(operand, a, b) {
    //since I will use .innerText to get the value of button:
    a = parseFloat(a)
    b = parseFloat(b)

    switch (operand) {
        case '+': return add(a,b)
        case '-': return subtract(a,b)
        case '*': return multiply(a,b)
        case '÷': return divide(a,b)
        default: return 
    }
}
function cleanCurrentOp() {
    currentOp.innerText = '';
}
function cleanPreviousOp() {
    previousOp.innerText = '';
}

allClearButton.addEventListener('click', () => {
    cleanCurrentOp()
    previousOp.innerText = ''
    operand = ''
    operandincluded = false;
})

deleteButton.addEventListener('click', () => {
    currentOp.innerText = currentOp.innerText.slice(0,-1)
})

numberButtons.forEach(numberButton => {
    numberButton.addEventListener('click',() => currentOp.append(numberButton.innerText)) 
})

operandButtons.forEach( operandButton => {
    operandButton.addEventListener('click', function() {
        if (!operandincluded) {
            if (currentOp.innerText !== '') {
                currentOp.append(operandButton.innerText)
                previousOp.innerText = currentOp.innerText
                cleanCurrentOp();
            }
            else {
                previousOp.append(operandButton.innerText)
            }
            operandincluded=true;
            operand=operandButton.innerText;
        }

     })
})

equalSignButton.addEventListener('click', function () {
    if (operandincluded) {
        placeholder = (previousOp.innerText.slice(0,-1))
        previousOp.innerText = operate(operand,placeholder,currentOp.innerText)
        cleanCurrentOp();
        operand=''
        operandincluded=false;
    }
})
