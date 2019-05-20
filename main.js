window.onload = init;

function init() {
    document.querySelector('.keyOperator')
        .addEventListener('click', operation);
    document.querySelector('.number')
        .addEventListener('click', number);
    document.querySelector('.clear')
        .addEventListener('click', clear);
    document.querySelector('.keyEqual')
        .addEventListener('click', result);
}