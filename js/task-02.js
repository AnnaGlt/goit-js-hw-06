const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


/*Напиши скрипт, який для кожного елемента масиву ingredients:

Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
Додасть назву інгредієнта як його текстовий вміст.
Додасть елементу клас item.
Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

<li class="item">Potatoes</li>
<li class="item">Potatoes</li>
<li class="item">Potatoes</li>
<li class="item">Potatoes</li>
<li class="item">Potatoes</li>
________________________________________________________________________________________________

const  itemOneEl= document.createElement('li');
itemOneEl.textContent = 'Potatoes';
itemOneEl.classList.add('item');

const  itemTwoEl= document.createElement('li');
itemTwoEl.textContent = 'Mushrooms';
itemTwoEl.classList.add('item');

const  itemThreeEl= document.createElement('li');
itemThreeEl.textContent = 'Garlic';
itemThreeEl.classList.add('item');

const  itemFourEl= document.createElement('li');
itemFourEl.textContent = 'Tomatos';
itemFourEl.classList.add('item');

const  itemFiveEl= document.createElement('li');
itemFiveEl.textContent = 'Herbs';
itemFiveEl.classList.add('item');

const  itemSixEl= document.createElement('li');
itemSixEl.textContent = 'Condiments';
itemSixEl.classList.add('item');

console.log(itemOneEl);
console.log(itemTwoEl);
console.log(itemThreeEl);
console.log(itemFourEl);
console.log(itemFiveEl);
console.log(itemSixEl);

ingredientsRef.append(itemOneEl, itemTwoEl, itemThreeEl, itemFourEl, itemFiveEl, itemSixEl);
console.log(itemOneEl, itemTwoEl, itemThreeEl, itemFourEl, itemFiveEl, itemSixEl);
*/

const ingredientsRef = document.querySelector('#ingredients');
  
const makeIngredientCart = ingredient => {
  const itemEl = document.createElement('li');
  itemEl.textContent = ingredient;
  itemEl.classList.add('item');

  return itemEl;
};

const elem = ingredients.map(makeIngredientCart);

ingredientsRef.append(...elem);

console.log(ingredientsRef);
