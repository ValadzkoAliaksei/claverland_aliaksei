"use striсt";
let number = +prompt('Введите число.');
while (isNaN(number)) {
    alert('Введите число!');
    number = +prompt('Введите число.');
};
let degree = +prompt('Введите степень, в которую вы хотите возвести число.');
while (isNaN(degree)) {
    alert('Введите число!');
    degree = +prompt('Введите степень, в которую вы хотите возвести число.');
};
let numberDegree = calcDegree();
alert(`${number} в ${degree} степени = ${numberDegree}`);

function calcDegree() {
    return (Math.pow(number, degree));
};