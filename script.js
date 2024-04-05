const input = document.getElementById('input');
const shoppingList = document.getElementById('shopping_list');

function addItems() {
  if (input.value === '') {
    alert('Enter an item');
    return;
  }

  let li = document.createElement('li');
  li.innerHTML = input.value;
  shoppingList.appendChild(li);
  input.value = '';

  let span = document.createElement('span');
  span.innerHTML = '\u00d7';
  li.appendChild(span);
  span.style.cursor = 'pointer';
}

// using an arrow function
// shoppingList.addEventListener("click", e => {
//   if(e.target.tagName === "SPAN"){
//     e.target.parentElement.remove();
//   }

// }, false);

shoppingList.addEventListener('click',
  function (e) {
    if (e.target.tagName === 'SPAN') {
      e.target.parentElement.remove();
    }
  },
  false
);

function clearItems() {
  shoppingList.innerHTML = '';
}

// const d = new Date(2022, 1, 10, 20, 0, 0);
// const hour = d.getHours();

// switch (true) {
//   case hour < 12 || hour === 6:
//     console.log('Good morning');
//     console.log('Wake up');
//     break;

//   case hour < 18 || hour === 13:
//     console.log('Good afternoon');
//     console.log('Time for siesta');
//     break;

//   default:
//     console.log('Good night');
//     console.log('Go to bed');

// }

// const x = 100;
// function add(){
//   const x = 50;
//   const y = 50;
//   console.log(x + y);
// }
// add();

// console.log (x + y);
