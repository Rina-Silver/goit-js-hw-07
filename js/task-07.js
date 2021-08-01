const inputRef = document.getElementById('font-size-control');
const textRef = document.getElementById('text');

function changeFontSize(event) {
  textRef.style.fontSize = `${event.currentTarget.value}px`;
}

inputRef.addEventListener('input', changeFontSize);
