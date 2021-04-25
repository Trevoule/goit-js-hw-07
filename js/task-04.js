
let counterValue = 0;
const value = document.querySelector('#value');
const counterEl = document.querySelector('#counter');
console.log(counterEl.textContent);

const decrement = counterEl.firstElementChild;
const increment = counterEl.lastElementChild;

decrement.addEventListener('click', () => {
    counterValue -= 1;
    value.textContent = counterValue;
})

increment.addEventListener('click', () => {
    counterValue ++;
    value.textContent = counterValue;
})
