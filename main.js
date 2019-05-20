let numbers = '';
let numbersArray = [];

window.onload = init;

function init() {
    document.querySelector('.keyOperator')
        .addEventListener('click', operation);


     numbersArray = Array.from(document.querySelectorAll('.number'));

     console.log(numbersArray);
    
    numbersArray.forEach(function(element) {element.addEventListener('click', numberKeys);});


    document.querySelector('.clear')
        .addEventListener('click', clear);
    document.querySelector('.keyEqual')
        .addEventListener('click', result);
}

function operation(event) {
    event.preventDefault();
}

function numberKeys (event) {
    event.preventDefault();
    let number = event.target.innerText;
    numbers = numbers.concat(number);
    // console.log(number);
    console.log(numbers);
}

function clear(event) {
    event.preventDefault();
}

function result(event) {
    event.preventDefault();
}



