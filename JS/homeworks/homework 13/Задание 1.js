"use striсt";
let divBlock = document.body.getElementsByTagName('div');
alert(divBlock[0].innerHTML);
alert(divBlock[0].outerHTML);
divBlock[0].innerHTML += "Простота — залог надежности"