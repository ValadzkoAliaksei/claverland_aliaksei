"use striсt";
let n = prompt('Введите количество поездок, которое Вы желаете совершить');
while (!+n || n % 1 !== 0 || n <= 0) {
    alert('Вы ввели неправильное значение. Введите целое положительное число!!!')
    n = prompt('Введите количество поездок, которое Вы желаете совершить');
};
let ticket1 = 15;
let ticket10 = 125;
let ticket60 = 440;
let ticket60Buy = (n - n % 60) / 60;
n = n - 60 * ticket60Buy;
let ticket10Buy = (n - n % 10) / 10;
let ticket1Buy = n - 10 * ticket10Buy;

if (ticket1Buy * ticket1 <= ticket10) {
    if (ticket10Buy * ticket10 + ticket1Buy * ticket1 >= ticket60) {
        ticket10Buy = 0;
        ticket1Buy = 0;
        ticket60Buy++;
    };
} else {
    ticket10Buy++;
    ticket1Buy = 0;
    if (ticket10Buy * ticket10 >= ticket60) {
        ticket10Buy = 0;
        ticket60Buy++;
    };
};
alert (`Дешевле всего преобрести: \n билеты на 60 поездок - ${ticket60Buy} шт., \n билеты на 10 поездок - ${ticket10Buy} шт, \n билеты на 1 поездку - ${ticket1Buy} шт.`);