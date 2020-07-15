"use striсt";
let inch = +prompt('Введите натуральное  целое число');
while (isNaN(inch) || inch <= 0 || inch % 1 != 0) {
    alert('Вы ввели неправильное значение. Введите натуральное  целое число!');
    inch = +prompt('Введите натуральное целое число.');
};

let calcCentimeter = () => (inch * 2.54).toFixed(2);

alert (`Диагональ монитора равная в дюймах: ${inch}, в сантиметрах будет равна: ${calcCentimeter()}см.`);