let numbers = '';
let numbers2 = '';
let numbersArray = [];

window.onload = init;

function init() {
//Number Keys Event Listener
    numbersArray = Array.from(document.querySelectorAll('.number'));
    numbersArray.forEach(function(element) {element.addEventListener('click', numberKeys);});


//Other Event Listeners
    document.querySelector('.keyOperator')
        .addEventListener('click', operation);

    document.querySelector('.clear')
        .addEventListener('click', clear);

    document.querySelector('.keyEqual')
        .addEventListener('click', result);
}

function numberKeys (event) {
    event.preventDefault();
    let number = event.target.innerText;
    numbers = numbers.concat(number);
    console.log(numbers);
    clearUL();
    addToUL(numbers);
}

function operation(event) {
    event.preventDefault();
}

function clear(event) {
    event.preventDefault();
}

function result(event) {
    event.preventDefault();
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
    console.log(numbers);
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
    console.log(numbers);
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
    console.log(numbers);
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
    console.log(numbers);
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

