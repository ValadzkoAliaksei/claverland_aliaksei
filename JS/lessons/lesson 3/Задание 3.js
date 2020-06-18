let date = new Date();
let  h = date.getHours();
let name = prompt('Здравствуйте. Введите Ваше имя');
if (h > 4 && h < 10 ) {
    alert (`Доброе утро ${name}`)
} else if  (h > 9 && h < 16 ) {
    alert (`Добрый день ${name}`)
} else if  (h > 15 && h < 22 ) {
    alert (`Добрый вечер ${name}`)
} else {
    alert (`Доброй ночи ${name}`)
};