let counterValue = 0;

const buttonDecrementEl = document.querySelectorAll('button')[0];
const buttonIncrementEl = document.querySelectorAll("button")[1];
const valueEl = document.querySelector('#value');


buttonDecrementEl.addEventListener('click', () => {
    counterValue = counterValue - 1;
    valueEl.textContent = counterValue;
});

buttonIncrementEl.addEventListener('click', () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
});

console.log(valueEl);

