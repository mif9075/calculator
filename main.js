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
    result = parseFloat(numbers) + parseFloat(numbers2);
    clearUL();
    addToUL(result);
}
    
    else if (operator === '÷') {
        result = parseFloat(numbers) / parseFloat(numbers2);
        clearUL();
        addToUL(result); 
}

    else {
        result = parseFloat(numbers) * parseFloat(numbers2);
        clearUL();
        addToUL(result); 
}

}

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



