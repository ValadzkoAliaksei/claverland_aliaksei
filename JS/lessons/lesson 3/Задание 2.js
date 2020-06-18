let number;
do {
    number = +prompt ('Введите число');
} while (!number && number!==0);
if (number > 0) {
    alert ('Число положительное');
} else if (number < 0) {
    alert ('Число отрицательное')
} else {
    alert ('Число равно 0')
};