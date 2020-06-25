"use striсt";
let n = +prompt('Введите целое положительное число от 1 до 5');
while (isNaN(n) || n % 1 != 0 || n <= 0 || n > 5) {
    alert('Вы ввели неправильное значение. Введите целое положительное число  до 5!');
    n = +prompt('Введите целое положительное число от 0 до 5');
};
switch (n) {
    case 1: alert (`${n} - плохо`);
    break;
    case 2: alert (`${n} - неудовлетворительно`);
    break;
    case 3: alert (`${n} - удовлетворительно`);
    break
    case 4: alert (`${n} - хорошо`);
    break
    case 5: alert (`${n} - отлично`);
    break
    default: alert ('Некоректный ввод');
}
