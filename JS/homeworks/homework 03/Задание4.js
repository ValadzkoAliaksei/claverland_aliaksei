"use striсt";
let n = prompt('Введите число, до которого Вы желаете вычислить сумму всех чисел по порядку');
while (isNaN(n) || n % 1 !== 0 || n < 0) {
    alert('Вы ввели неправильное значение. Введите натуральное число!');
    n = prompt('Введите число, до которого Вы желаете вычислить сумму всех чисел по порядку');
};
let sum = 0n;
for (let i = 0n; i <= n; i++) {
    sum += i;
};
alert(sum);