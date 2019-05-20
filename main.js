let numbers = '';
let numbers2 = '';
let operator = '';
let numbersArray = [];

window.onload = init;

function init() {
//Number Keys Event Listener
    numbersArray = Array.from(document.querySelectorAll('.number'));
    numbersArray.forEach(function(element) {element.addEventListener('click', numberKeys);});

//Other Event Listeners

    document.querySelector('.clear')
        .addEventListener('click', clearUL);

}

function numberKeys (event) {
    event.preventDefault();
    let number = event.target.innerText;

    numbersArray = Array.from(document.querySelectorAll('.keyOperator'));
    numbersArray.forEach(function(element) {element.addEventListener('click', operation);});

    if (operator === '') {
    numbers = numbers.concat(number);
    clearUL();
    addToUL(numbers);}
    else {
        numbersArray = Array.from(document.querySelectorAll('.keyOperator'));
        numbersArray.forEach(function(element) {element.addEventListener('click', operation);});
    }
    
}

function operation(event) {
    event.preventDefault();
    operator = event.target.innerText;

    numbersArray = Array.from(document.querySelectorAll('.number'));
    numbersArray.forEach(function(element) {element.addEventListener('click', numberKeys2);});
}

function numberKeys2 (event) {
    event.preventDefault();
    let number2 = event.target.innerText;
    numbers2 = numbers2.concat(number2);
    clearUL();
    addToUL(numbers2);

    document.querySelector('.keyEqual')
        .addEventListener('click', result);

}


function clear(event) {
    event.preventDefault();
}

function result(event) {
    event.preventDefault();

    if (operator === '-') {
    result = numbers - numbers2;
    clearUL();
    addToUL(result);
} 
    else if (operator === '+') {
    result = numbers + numbers2;
    clearUL();
    addToUL(result);
}

}
//Old Code from Previous Projects

function addToAll(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();

    // Grab value to add.

    let numberToAdd = document.querySelector('#numberForMath').value;

    if(isNaN(numberToAdd)  || numberToAdd===''){
        resetInput();
    }
    
    else{
    // Add value to everything on the list.
    for(let i = 0; i < numbers.length; i++) {
        numbers[i] = parseFloat(numbers[i]) + parseFloat(numberToAdd);
        }
    }  
    // Update our html.
    updateUL();
}

function subtractFromAll(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();
    
    // Grab value to subtract.
    let numberToSubtract = document.querySelector('#numberForMath').value;
    
    if(isNaN(numberToSubtract)  || numberToSubtract===''){
        resetInput();
    }
    
    else{
    // Subtract value to everything on the list.
    for(let i = 0; i < numbers.length; i++) {
        numbers[i] = parseFloat(numbers[i]) - parseFloat(numberToSubtract);
        }
    }
    // Update our html.
    updateUL();
}

function multiplyByAll(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();
    
    // Grab value to multiply.
    let numberToMultiply = document.querySelector('#numberForMath').value;

    if(isNaN(numberToMultiply) || numberToMultiply===''){
        resetInput();
    }
    
    else{
        
    // Grab value to Multiply.
    for(let i = 0; i < numbers.length; i++) {
        numbers[i] = parseFloat(numbers[i]) * parseFloat(numberToMultiply);
    }
    }
    // Update our html.
    updateUL();
}

function divideFromAll(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();

    // Grab value to divide.
    let numberToDivide = document.querySelector('#numberForMath').value;
    if(isNaN(numberToDivide)  || numberToDivide === ''){
        resetInput();
    }
    
    else{

    // Divide value from everything on the list.
    for(let i = 0; i < numbers.length; i++) {
        numbers[i] = parseFloat(numbers[i]) / parseFloat(numberToDivide);
        }
    }
    // Update our html.
    updateUL();
}

//Old Codes


/*
# ========================================================
# = HTML Management
# ========================================================
*/

// function updateUL() {
//     clearUL();
//     for(let i = 0; i < numbers.length; i++) {
//         addToUL(numbers[i]);
//     }
// }

function clearUL() {
    const ul = document.querySelector('.calculatorDisplay');
    while(ul.hasChildNodes()) {
        ul.removeChild(ul.firstChild);
    }
}

// Append to the UL.
function addToUL(numberToAppend) {
    const UL = document.querySelector('.calculatorDisplay');
    const newLI = document.createElement('p');
    newLI.innerText = numberToAppend;
    UL.appendChild(newLI);
}



