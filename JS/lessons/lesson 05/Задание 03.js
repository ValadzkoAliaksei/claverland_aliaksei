let date = new Date();
let  h = date.getHours();
let name = prompt('Введите своё имя');
switch (h) {
    case 22:
    case 23:
    case 24:
    case 0:
    case 1:
    case 2:
    case 3: alert (`Спокойной ночи, ${name}`);
    break;
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10: alert (`Доброе утро, ${name}`);
    break;
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16: alert (`Бодрый день, ${name}`);
    break;
    case 17:
    case 18:
    case 19:
    case 20:
    case 21: alert (`Добрый вечер, ${name}`);
    break;   
    break
    default: alert ('Некоректный ввод');
}