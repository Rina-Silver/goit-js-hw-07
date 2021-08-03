const inputRef = document.querySelector('#controls input');
const renderBtnRef = document.querySelector('button[data-action="render"]');
const destroyBtnRef = document.querySelector('button[data-action="destroy"]');
const boxRef = document.querySelector('#boxes');

function createBoxes(amount) {
  const newBoxes = [];

  for (let i = 0; i < amount; i += 1) {
    const width = 30 + i * 10;
    const height = 30 + i * 10;
    const color = ((1 << 24) * Math.random()) | 0;
    const newBox = `<div style="width:${width}px; height:${height}px; background-color: #${color.toString(
      16
    )}"></div>`;

    newBoxes.push(newBox);
  }

  boxRef.innerHTML = newBoxes.join('');
}

function handleClickDestroy() {
  boxRef.innerHTML = '';
  inputRef.value = '';
}

renderBtnRef.addEventListener('click', () => createBoxes(inputRef.value));
destroyBtnRef.addEventListener('click', handleClickDestroy);
