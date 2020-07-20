// а
let fruits = ["Яблоко", "Апельсин", "Слива"];
// б
fruits.push("Абрикос");
// в
fruits.unshift("Нектарин", "Персик");
// г
fruits.splice(2, 2);
// д
let favoriteFruits = [];
// е
favoriteFruits = favoriteFruits.concat(fruits.slice(0, 3));
// ж
let berries = ["Барабарис", "Виноград", "Годжи"];
// з
fruits = fruits.concat(berries);
// и
alert(`Длина массива ${fruits} равна ${fruits.length}`);
// к
favoriteFruits.forEach((item, index, array) => {
    alert(`${item} имеет позицию ${index} в массиве ${array}`);
});
// л
alert(`Элемент "Слива" в массиве ${fruits} имеет индекс ${fruits.indexOf("Слива", 0)}`);
alert(`Массив ${fruits} содержит элемент "Яблоко" - ${fruits.includes("Яблоко", 0)}`);