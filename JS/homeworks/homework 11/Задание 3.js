"use striсt";
let start = Date.now(); // количество миллисекунд с 1 января 1970 года
let sum = 0
for (let i = 1; i < 1000000; i++) {
  sum += i;
}
let end = Date.now(); // заканчиваем отсчёт времени
alert(`Цикл отработал за ${end - start} миллисекунд`);
alert(`Сумма чисел от 1 до 1 000 000 равна: ${sum}`);