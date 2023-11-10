const numberButtons = document.querySelectorAll('[data-number]')
const operandButtons = document.querySelectorAll('[data-operand]')
const allClearButton = document.querySelector('[data-all-clear]')
const deleteButton = document.querySelector('[data-delete]')
const euqalSignButton = document.querySelector('[data-equal-sign]')
const previousResult = document.querySelector('[data-previous-result]')
const currentoperation = document.querySelector('[data-current-operation]')

function add (a,b) {
    return a+b
}
function subtract (a,b) {
    return a-b
}
function multiply (a,b) {
    return a*b
}
function divide (a,b) {
    if (b===0) return Infinity
    return a/b
}

function operate(operand, a, b) {
    //since I will use .innerText to get the value of button:
    a = Number(a)
    b = Number(b)

    switch (operand) {
        case '+': return add(a,b)
        case '-': return subtract(a,b)
        case '*': return multiply(a,b)
        case '÷': return divide(a,b)
        default: return 
    }
}

