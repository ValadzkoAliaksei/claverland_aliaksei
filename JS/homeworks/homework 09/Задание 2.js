// а
let Arr = [2, -15, 12, 83, -29, 111, -6, 22];
// б
let index100 = Arr.findIndex(item => Math.trunc(item / 100) > 0);
alert(`Индекс трёхзначного элемента в данном масиве равен ${index100}`);
// в
let number5 = Arr.find(item => item % 5 == 0);
alert(`Первый элемента кратный 5 в данном масиве: ${number5}`);
// г
let positiveNumbers = Arr.filter(item => item > 0);
alert(`Элементы являющиеся положительными числами в данном масиве: ${positiveNumbers}`);
// д
let sortArr = Arr.concat();
sortArr.sort((a, b) => a - b);
alert(`Данный масив отсортированный по возрастанию: ${sortArr}`);
// е
let mapArr = Arr.map(item => {
    item < 0 ? item = Math.abs(item) : item = item * 2
    return item;
});
alert (`Изменнённый данный массив ${mapArr}`);
// ж 
let reverseSortArr = sortArr.reverse();
alert(`Данный масив отсортированный по убыванию: ${reverseSortArr}`);
// з
let reverseArr = Arr.reverse();
alert(`Данный масив в обратном порядке ${reverseArr}`);
// и
let multiplication = Arr.reduce((mult, current) => mult * current);
alert(`Произведение элементов данного массива: ${multiplication}`);
// к
let mean = Arr.reduce((sum, current) => sum + current, 0) / Arr.length;
alert(`Среднее арифметическое элементов данного массива ${mean}`);