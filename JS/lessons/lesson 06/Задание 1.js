"use striсt";
let ageUser = +prompt('Введите возраст пользователя');
while (isNaN(ageUser) || ageUser % 1 != 0 || ageUser <= 0 || ageUser > 200) {
    alert('Вы ввели неправильное значение. Введите целое положительное число  до 200!');
    ageUser = +prompt('Введите возраст пользователя');
};
function showMessage() {
    if (ageUser > 16) {
        alert ('Добро пожаловать');
    } else {
    alert ('Вы еще молоды');
    };
};
showMessage();