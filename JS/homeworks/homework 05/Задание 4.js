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