window.addEventListener('DOMContentLoaded', (event) => {
    const buttonClassName = document.querySelector('#className');
    const buttonClassList = document.querySelector('#classList');
    const buttonClear = document.querySelector('#clear');
    const burgerMenu = document.querySelector('.menu-button');
    const uncoverPlate = document.querySelector('.plate')
    const textContent = document.querySelector('.content');
    const body = document.body;

    body.onclick = function (event) {
        let target = event.target;
        if (target.tagName != 'BUTTON') return;
        printId(target);
    }

    function printId(target) {
        const div = document.querySelector('.some_classes');
        if (target != buttonClear) {
            div.append(target.getAttribute('id'));
        } else {
            div.innerHTML = '';
        };
    }

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