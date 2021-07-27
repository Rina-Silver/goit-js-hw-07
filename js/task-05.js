const inputRef = document.querySelector('input#name-input');
const outputRef = document.querySelector('span#name-output');

function setNameOutput({ target }) {
  outputRef.textContent = target.value || 'незнакомец';
}

inputRef.addEventListener('input', setNameOutput);
