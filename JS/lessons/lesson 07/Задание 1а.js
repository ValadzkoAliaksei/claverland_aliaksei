"use striсt";
let angle = +prompt('Введите значение угла в градусах.');
while (isNaN(angle) || angle < 0) {
    alert('Вы ввели неправильное значение. Введите положительное число!');
    angle = +prompt('Введите значение угла в градусах.');
};
alert (`Угол ${angle} в градусах составляет ${calcRad ()} рад.`);

function calcRad () {
    return (angle * Math.PI / 180);
}