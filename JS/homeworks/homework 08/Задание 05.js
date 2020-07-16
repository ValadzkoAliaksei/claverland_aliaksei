"use striсt";
let email = prompt('Введите адрес Вашего почтового ящика.');
//Сначало определяем содержит ли емаил @, если да, то выводим от @ до конца методом slice
let checkEmail = (mail) => mail.includes('@') ? alert(mail.slice(mail.indexOf('@') + 1)) : alert("Адрес электронной почты имеет некорректный формат");
checkEmail(email);