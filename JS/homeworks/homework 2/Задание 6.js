'use stright'
let n = prompt('Введите количество долек шокаладки в длинну');
while (!+n || n % 1 !== 0 || n <= 0) {
    alert('Вы ввели неправильное значение. Введите целое положительное число!!!')
    n = prompt('Введите количество долек шокаладки в длинну');
};
let m = prompt('Введите количество долек шокаладки в ширину');
while (!+m || m % 1 !== 0 || m <= 0) {
    alert('Вы ввели неправильное значение. Введите целое положительное число!!!')
    m = prompt('Введите количество долек шокаладки в ширину');
};
let k = prompt('Введите сколько плиток отломить за один разлом по прямой между дольками');
while (!+k || k % 1 !== 0 || k <= 0) {
    alert('Вы ввели неправильное значение. Введите целое положительное число!!!')
    k = prompt('Введите сколько плиток отломить за один разлом по прямой между дольками');
};
(k % m == 0 || k % n == 0) ? 
    alert(`${k} плиток можно отломить за один раз`):
    alert(`${k} плиток нельзя отломить за один раз`);