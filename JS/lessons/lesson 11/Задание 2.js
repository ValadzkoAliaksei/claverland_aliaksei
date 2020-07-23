"use striсt";
let birthday = new Date(1987, 3, 22)
let arr = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота',];
alert(`День недели рождения: ${arr[birthday.getDay()]}`);
let birthdayNow = new Date(2020, 3, 22);
alert(`День недели рождения в этом году: ${arr[birthdayNow.getDay()]}`);
let dayNow = new Date();
let age = dayNow.getFullYear() - birthday.getFullYear();
if (birthday.getMonth < dayNow.getMonth) {
    age--;
}
alert(`Количество полных лет на данный момент: ${age} года`);
let birthdayFuture = new Date(2021, 3, 22);
let days = Math.floor(( birthdayFuture.getTime() - dayNow.getTime() ) / (24 * 3600 * 1000));
alert(`Осталось до дня рождения ${days} дней`);