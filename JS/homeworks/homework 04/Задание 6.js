"use striсt";
let dayWeek = prompt('Введите название дня недели!');
while (dayWeek != 'понедельник' && dayWeek != 'вторник' && dayWeek != 'среда' && dayWeek != 'четверг' && dayWeek != 'пятница' && dayWeek != 'суббота' && dayWeek != 'воскресенье') {
    alert('Вы ввели неправильное значение. Введите название дня недели!');
    dayWeek = prompt('Введите название дня недели!');
};
switch (dayWeek) {
    case 'понедельник': alert(`${dayWeek} - 1, 8, 15, 22, 29 день месяца.`);
        break;
    case 'вторник': alert(`${dayWeek} - 2, 9, 16, 23, 30 день месяца.`);
        break;
    case 'среда': alert(`${dayWeek} - 3, 10, 17, 24 день месяца.`);
        break
    case 'четверг': alert(`${dayWeek} - 4, 11, 18, 25 день месяца.`);
        break
    case 'пятница': alert(`${dayWeek} - 5, 12, 19, 26 день месяца.`);
        break
    case 'суббота': alert(`${dayWeek} - 6, 13, 20, 27 день месяца.`);
        break
    case 'воскресенье': alert(`${dayWeek} - 7, 14, 21, 28 день месяца.`);
        break
    default: alert('Некоректный ввод');
}
