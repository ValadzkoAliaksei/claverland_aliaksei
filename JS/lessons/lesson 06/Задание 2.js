"use striсt";
let number;
do {
    number = prompt('Введите число.');
    while (isNaN(number)) {
        alert('Вы ввели неправильное значение. Введите число!');
        number = prompt('Введите число.');
    };
    if (number) {
        alert(calcNumber(number));
    };
} while (number);

function calcNumber(n) {
    if (n > 10) {
        return (n ** 2);
    } else if (number < 7) {
        return (`Число ${n} меньше 7`);
    } else {
        return (--n);
    };
}