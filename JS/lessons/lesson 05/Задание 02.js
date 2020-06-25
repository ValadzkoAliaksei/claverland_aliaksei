"use striсt";
let n = +prompt('Введите целое положительное число от 0 до 9');
while (isNaN(n) || n % 1 != 0 || n < 0 || n > 9) {
    alert('Вы ввели неправильное значение. Введите целое положительное число  до 9!');
    n = +prompt('Введите целое положительное число от 0 до 9');
};
switch (n) {
    case 0: alert (`${n} - ноль`);
    break;
    case 1: alert (`${n} - один`);
    break;
    case 2: alert (`${n} - два`);
    break
    case 3: alert (`${n} - три`);
    break
    case 4: alert (`${n} - четыре`);
    break
    case 5: alert (`${n} - пять`);
    break
    case 6: alert (`${n} - шесть`);
    break
    case 7: alert (`${n} - семь`);
    break
    case 8: alert (`${n} - восемь`);
    break
    case 9: alert (`${n} - девять`);
    break
    default: alert ('Некоректный ввод');
}
