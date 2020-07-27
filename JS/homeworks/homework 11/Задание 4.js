"use striсt";
let days = prompt('Введите количество дней, прошедших с данного момента.');
let date = new Date();
date.setDate(date.getDate() + parseInt(days));
alert(date);