window.addEventListener('DOMContentLoaded', (event) => {
    const buttonClassName = document.querySelector('#className');
    const buttonClassList = document.querySelector('#classList');
    const buttonClear = document.querySelector('#clear');
    const burgerMenu = document.querySelector('.menu-button');
    const uncoverPlate = document.querySelector('.plate')
    const textContent = document.querySelector('.content');
    buttonClassName.addEventListener('click', () => {
        const div = document.querySelector('.some_classes');
        div.append(div.className);
    });
    buttonClassList.addEventListener('click', () => {
        const div = document.querySelector('.some_classes');
        div.append(div.classList);
    });
    buttonClear.addEventListener('click', () => {
        const div = document.querySelector('.some_classes');
        div.innerHTML = '';
    });
    buttonClear.addEventListener('mouseenter', () => {
        buttonClear.classList.add('red-button');
    });
    buttonClear.addEventListener('mouseleave', () => {
        buttonClear.classList.remove('red-button');
    });
    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('closed');
    });
    uncoverPlate.addEventListener('click', () => {
        if (textContent.style.display == "block") {
            textContent.style.display = "none";
            uncoverPlate.innerHTML = "Расскрыть";
        } else {
            textContent.style.display = "block";
            uncoverPlate.innerHTML = "Скрыть";
        }
    });
});