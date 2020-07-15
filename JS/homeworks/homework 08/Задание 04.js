"use striсt";
let money = prompt('Введите любую сумму в любой валюте и мы Вам её удвоим!');
//Сначало находим число, удваиваем его. и прибавляем к нему название валюты, после этого числа
let calcSum = (loot) => parseFloat(loot) * 2 + loot.slice(String(parseFloat(loot)).length);
alert(`Ваша удвоенная сумма равна ${calcSum(money)}.`);