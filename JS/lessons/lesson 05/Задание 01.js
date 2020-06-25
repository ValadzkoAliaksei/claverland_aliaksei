"use striсt";
let month = +prompt('Введите номер месяца от 1 до 12');
while (!+month || month % 1 != 0 || month < 0 || month > 12) {
    alert('Вы ввели неправильное значение. Введите натуральное число  до 12!');
    month = +prompt('Введите номер месяца от 1 до 12');
};
switch (month) {
    case 1:
    case 2:
    case 12: alert ('зима');
    break;
    case 3:
    case 4:
    case 5: alert ('весна');
    break;
    case 6:
    case 7:
    case 8: alert ('лето');
    break;
    case 9:
    case 10:
    case 11: alert ('осень');
    break;
    default: alert ('Некоректный ввод');
}
