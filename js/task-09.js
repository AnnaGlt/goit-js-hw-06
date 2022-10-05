
const buttonEl = document.querySelector(".change-color");
const spanColorEl = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

buttonEl.addEventListener('click', () => {
  const randomColor = (document.body.style.backgroundColor = getRandomHexColor());
  spanColorEl.textContent = randomColor;
 document.body.style.backgroundColor = randomColor;
});