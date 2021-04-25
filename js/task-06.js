
const inputBox = document.querySelector('#validation-input');

inputBox.classList.add('#validation-input');

inputBox.addEventListener('blur', (event) => {
    event.preventDefault();

    if (inputBox.value.length < 6 || inputBox.value.length >6)  {
        inputInvalid()
    } else {
        inputValid()
    }
});

function inputValid (event) {
    inputBox.classList.remove('invalid');
    inputBox.classList.add('valid');
};

function inputInvalid(event) {
    inputBox.classList.add('invalid');
    inputBox.classList.remove('valid');
};
