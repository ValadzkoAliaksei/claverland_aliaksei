"use striсt";
let radius = +prompt('Введите радиус окружности');
while (isNaN(radius) || radius <= 0) {
    alert('Введите число больше нуля!');
    radius = +prompt('Введите радиус окружности.');
};
alert(`Площадь окружности радиусом ${radius} равна: ${circle(radius)}`);

function circle(r) {
    return (2 * Math.PI * r).toFixed(3);
};