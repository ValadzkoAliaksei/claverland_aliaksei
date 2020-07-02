"use striсt";
let angle = +prompt('Введите значение угла в градусах.');
while (isNaN(angle) || angle < 0) {
    alert('Вы ввели неправильное значение. Введите положительное число!');
    angle = +prompt('Введите значение угла в градусах.');
};
let calcRad = () => angle * Math.PI / 180;
alert (`Угол ${angle} в градусах составляет ${calcRad ()} рад.`);