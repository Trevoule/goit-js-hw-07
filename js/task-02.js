
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

ingredients.forEach((ingr) => {
  let box = document.createElement('li');
  
  box.textContent = ingr;
  console.log(box);

  const ingredientsBox = document.querySelector('#ingredients');
  ingredientsBox.append(box);
  
})
