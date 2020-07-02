"use striсt";
let number = +prompt('Введите число.');
while (isNaN(number) || number <= 0 || number % 1 != 0) {
    alert('Введите целое число больше нуля!');
    number = +prompt('Введите число.');
};

let calcNumeral = function(n, a) {
    let counter = 1;
    while ((n - n % a) / 10 > 0) {
        ++counter;
        n = (n - n % a) / 10;
    };
    return(counter);
};

alert(`Количиство цифр в числе ${number} составляет ${calcNumeral(number, 10)}`);