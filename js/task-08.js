const inputRef = document.querySelector('#controls input');
const renderBtnRef = document.querySelector('button[data-action="render"]');
const destroyBtnRef = document.querySelector('button[data-action="destroy"]');
const boxRef = document.querySelector('#boxes');

function handleClickRender() {
  inputRef;
}

function handleClickDestroy() {
  boxRef.innerHTML = '';
  inputRef.value = '';
}

enderBtnRef.addEventListener('click', handleClickRender);
destroyBtnRef.addEventListener('click', handleClickDestroy);
