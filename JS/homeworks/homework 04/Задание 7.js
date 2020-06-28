"use striсt";
let n = +prompt('Введите целое число в диапазоне от 100 до 999.');
while (isNaN(n) || n % 1 != 0 || n < 100 || n > 999) {
    alert('Вы ввели неправильное значение. Введите целое число в диапазоне от 100 до 999.');
    n = +prompt('Введите целое число в диапазоне от 100 до 999.');
};
let ones = n % 10;
let tens = (n % 100 - ones) / 10;
let hundreds = (n - tens * 10 - ones) / 100;
let hundredsWord = ['', 'сто', 'двести', 'тристф', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];
let tensWord = ['', 'десять', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
let tensOnesWord = ['', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
let onesWord = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
let fullWord;
if (tens === 1 && ones > 0) {
    fullWord = hundredsWord[hundreds] + ' ' + tensOnesWord[ones];
} else {
    fullWord = hundredsWord[hundreds] + ' ' + tensWord[tens] + ' ' + onesWord[ones];
};
alert(fullWord);