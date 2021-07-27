const inputRef = document.querySelector('#validation-input');
const validationInput = inputRef.dataset.length;

function borderPainter(event) {
  return event.target.value.length == validationInput
    ? inputRef.setAttribute('class', 'valid')
    : inputRef.setAttribute('class', 'invalid');
}

inputRef.addEventListener('blur', borderPainter);
