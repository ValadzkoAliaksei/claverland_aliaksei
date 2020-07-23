"use striсt";
// стаж работы
let experience = {
    Березовский: 2,
    Шкуратов: 15,
    Цыганчук: 1,
    Карпенко: 7,
    Шебеко: 8,
    Романов: 21,
    Володько: 6,
    Григораш: 12,
    Гузь: 7,
    Пустоход: 23,
}
let countMin = 0;
let countMax = 0;
let count = 0;
let sum = 0;
for (let value of Object.values(experience)) {
sum+=value;
count++;
if (value <= 3) countMin++;
if (value >= 20) countMax++;
}
let mean = sum/count;
alert(`Средний стаж работы сотрудников ${mean}`);
alert(`Количество сотрудников со стажем работы 3 года и менее равно ${countMin}`);
alert(`Количество сотрудников со стажем работы 20 лет и более равно ${countMax}`);