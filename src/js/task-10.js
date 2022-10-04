function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const inputNumberEl = document.querySelector('number');
const buttonCreateEl = document.querySelector('data-create');
const buttonDestroyEl = document.querySelector('data-destroy');
const controlsEl = document.querySelector('#controls');
const boxesEl = document.querySelector('#boxes');



/*buttonCreateEl.addEventListener('click', () => {

  boxesEl.push(inputNumberEl * controlsEl);
});*/

let box = [];

inputNumberEl.addEventListener('input', (event) => {
 
  for (const i = 0; i < event.currentTarget.value; i += 1){
    box += 1;
  }
});
