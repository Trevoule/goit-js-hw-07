/**
 * Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) 
 * и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.
 */


const rangeEl = document.querySelector('input#font-size-control');
const labelEl = document.querySelector('span#text');

labelEl.style.fontSize = `${rangeEl.value}px`;

const onInputHandler = function (event) {
  labelEl.style.fontSize = `${this.value}px`;
};

rangeEl.addEventListener('input', onInputHandler);