"use striсt";
let a = +prompt('Введите натуральное  целое число');
while (isNaN(a) || a <= 0 || a % 1 != 0) {
    alert('Вы ввели неправильное значение. Введите натуральное  целое число!');
    a = +prompt('Введите натуральное целое число.');
};

let calcFactorial = function() {
    let factorial = 1n;
    for(i = 1n; i <= a; i++) {
        factorial *= i;
    }
    return(factorial);
};

alert (`Факториал числа ${a} равен ${calcFactorial ()}`);