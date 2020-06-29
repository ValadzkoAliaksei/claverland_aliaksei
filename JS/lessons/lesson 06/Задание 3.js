"use striсt";
let number1 = +prompt('Введите первое число.');
while (isNaN(number1)) {
    alert('Введите число!');
    number1 = +prompt('Введите первое число.');
};
let number2 = +prompt('Введите второе число.');
while (isNaN(number2)) {
    alert('Введите число!');
    number2 = +prompt('Введите второе число.');
};
let number3 = +prompt('Введите третье число.');
while (isNaN(number3)) {
    alert('Введите число!');
    number3 = +prompt('Введите третье число.');
};
let minNumber = calcMin(number1, number2, number3);
alert( `Самое малое число ${minNumber}`);

function calcMin(a, b, c) {
    let min = a;
    if (min > b) {
        min = b;
    };
    if (min > c) {
        min = c;
    };
    return (min);
}