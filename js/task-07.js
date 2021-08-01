const inputRef = document.getElementById('#font-size-control');
const textRef = document.getElementById('#text');

function changeFontSizeChange() {
  textRef.setAttribute('style', `font-size: ${inputRef.value}px`);
}

inputRef.addEventListener('input', changeFontSizeChange);
