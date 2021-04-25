
const nameEl = document.querySelectorAll('li.item');
console.log(`В списке ${nameEl.length} категории.`);

const nameOfCategories = nameEl.forEach(item => {
    console.log('Категория: ', item.querySelector('h2').textContent),
    console.log('Количество элементов: ', item.querySelectorAll('ul > li').length)
});






















 







