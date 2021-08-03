const inputRef = document.querySelector('#controls input');
const renderBtnRef = document.querySelector('button[data-action="render"]');
const destroyBtnRef = document.querySelector('button[data-action="destroy"]');
const boxRef = document.querySelector('#boxes');

function createBoxes(amount) {
  const newBoxes = [];
  for (let i = 0; i < amount; i += 1) {
    const newBox = document.createElement('div');
    newBox.style.width = `${30 + i * 10}px`;
    newBox.style.height = `${30 + i * 10}px`;
    newBox.style.backgroundColor =
      '#' + (((1 << 24) * Math.random()) | 0).toString(16);
    newBoxes.push(newBox);
  }

  boxRef.append(...newBoxes);
}

function handleClickDestroy() {
  boxRef.innerHTML = '';
  inputRef.value = '';
}

renderBtnRef.addEventListener('click', () => createBoxes(inputRef.value));
destroyBtnRef.addEventListener('click', handleClickDestroy);
