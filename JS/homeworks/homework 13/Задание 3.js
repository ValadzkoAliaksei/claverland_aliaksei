"use striсt";
let input = document.querySelector('input');
input.id = "button";
alert(input.hasAttribute('id'));
input.value = "Жми";
alert(input.hasAttribute('value'));
input.setAttribute('value', 'Жми');
alert(input.getAttribute('maxlength'));
alert(input.hasAttribute('value'));
input.type = "button";
input.setAttribute('onclick', 'alert("Привет!!!")');
input.removeAttribute('maxlength');