"use striсt";
let sum = 0;
let n;
do {
    n = prompt('Введите числа, сумму которых Вы желаете вычислить');
    while (isNaN(n)) {
        alert('Вы ввели неправильное значение. Введите число!');
        n = prompt('Введите числа, сумму которых Вы желаете вычислить');
    };
    sum += (+n);
} while (n);
alert(sum);