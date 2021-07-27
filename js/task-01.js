const categoriesRef = document.querySelector('ul#categories');
const itemListEl = categoriesRef.querySelectorAll('li.item');

console.log(`В списке ${itemListEl.length} категории.`);

itemListEl.forEach(item =>
  console.log(`
    - Категория: ${item.firstElementChild.textContent}
    - Количество элементов: ${item.querySelector('ul').children.length} `)
);
