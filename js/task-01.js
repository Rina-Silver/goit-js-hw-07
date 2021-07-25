const categoriesRef = document.querySelector('ul#categories');
const itemListEl = categoriesRef.querySelectorAll('li.item');

console.log(`В списке ${itemListEl.length} категории.`);

itemListEl.forEach(item =>
  console.log(`
    - Категория: ${item.querySelector('h2').textContent}
    - Количество элементов: ${item.querySelectorAll('li').length} `)
);
