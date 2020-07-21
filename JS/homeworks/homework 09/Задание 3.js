"use striсt";
let string = prompt('Введите предложение. Все слова разделите одним пробелом.');
let arr = string.split(' ');
arr.sort();
string = arr.join(' ');
alert(string);