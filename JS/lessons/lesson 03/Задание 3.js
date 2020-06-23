let date = new Date();
let h = date.getHours();
let name = prompt('Здравствуйте. Введите Ваше имя');
let userName = (name)?name:'unnamed';
if (h > 4 && h < 10) {
    alert(`Доброе утро ${userName}`)
} else if (h > 9 && h < 16) {
    alert(`Добрый день ${userName}`)
} else if (h > 15 && h < 22) {
    alert(`Добрый вечер ${userName}`)
} else {
    alert(`Доброй ночи ${userName}`)
};