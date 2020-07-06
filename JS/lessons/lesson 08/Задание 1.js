let person = {
    surname: 'Valadzko',
    name: 'Aliaksei',
    'middle name': 'Yurevich',
}
person['date of birth'] = '22.04.87';
person.prof = 'teсhnolog';
person.equp = 'ingineer';
person.exp = '10'
let clone = new Object();
clone.surname = person.surname;
clone.name = person.name;
clone['date of birth'] = person['date of birth'];
delete person['middle name'];
(['middle name'] in person) ? alert(person['middle name']) : alert('Такого свойства нет!');
let count = 0;
for (let key in person) {
  count++;
}
alert (count);
let countNumber = 0;
for (let key in person) {
    if (!isNaN(person[key])) countNumber++
}
alert (countNumber);