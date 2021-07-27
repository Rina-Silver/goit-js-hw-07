const decrementBtnRef = document.querySelector(
  '#counter button[data-action="decrement"]'
);
const incrementBtnRef = document.querySelector(
  '#counter button[data-action="increment"]'
);
const value = document.querySelector('#counter #value');

let counterValue = 0;

function decrement() {
  counterValue -= 1;
  value.textContent = counterValue;
}

function increment() {
  counterValue += 1;
  value.textContent = counterValue;
}

incrementBtnRef.addEventListener('click', increment);
decrementBtnRef.addEventListener('click', decrement);
