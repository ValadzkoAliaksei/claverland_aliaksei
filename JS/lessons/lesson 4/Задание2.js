"use striсt";
let n = prompt('Введите количество первых чётных чисел, которое Вы желаете вывести');
while (!+n || n % 1 !== 0 || n <= 0) {
    alert('Вы ввели неправильное значение. Введите целое положительное число!!!');
    n = prompt('Введите количество первых чётных чисел, которое Вы желаете вывести');
};
let sum = 0;
for (let i = 0; i <= n; i++) {
    if(i * 2 % 5 == 0) continue;
    console.log(i*2);
};