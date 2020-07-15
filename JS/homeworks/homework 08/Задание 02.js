"use striсt";
let sentence = prompt('Введите предложение.');
 //1 способ: через длину cтроки
/* 
while (sentence[sentence.length - 1] != "." && sentence[sentence.length - 1] != "!" && sentence[sentence.length - 1] != "?") {
    alert('Вы ввели неправильное значение. Введите предложение вопросительное, восклицательное или повествовательное!');
    sentence = prompt('Введите предложение.');
};

let showStyle = () =>{
    if (sentence[sentence.length - 1] == ".") {
        alert (`Введенное Вами предложение "${sentence}" - является повествовательным`);
    } else if (sentence[sentence.length - 1] == "?") {
            alert (`Введенное Вами предложение "${sentence}" - является вопросительным`);
        } else {
           alert (`Введенное Вами предложение "${sentence}" - является восклицательным`);
        }
};
showStyle();
*/

// 2 способ:  через endsWith (заканчивается на)
/*
while (!sentence.endsWith(".") && !sentence.endsWith("!") && !sentence.endsWith("?")) {
    alert('Вы ввели неправильное значение. Введите предложение вопросительное, восклицательное или повествовательное!');
    sentence = prompt('Введите предложение.');
};

let showStyle = function () {
    if (sentence.endsWith(".")) {
        alert (`Введенное Вами предложение "${sentence}" - является повествовательным`);
    } else if (sentence.endsWith("?")) {
            alert (`Введенное Вами предложение "${sentence}" - является вопросительным`);
        } else {
           alert (`Введенное Вами предложение "${sentence}" - является восклицательным`);
        }
};
showStyle();
*/

// 3 способ: через substr (возвращает часть строки), можно так же через slice(-1), но через substring(-1) - нельзя!
while (sentence.substr(-1, 1) != "." && sentence.substr(-1, 1) != "!" && sentence.substr(-1, 1) != "?") {
    alert('Вы ввели неправильное значение. Введите предложение вопросительное, восклицательное или повествовательное!');
    sentence = prompt('Введите предложение.');
};

function showStyle () {
    if (sentence.slice(-1) == ".") {
        alert (`Введенное Вами предложение "${sentence}" - является повествовательным`);
    } else if (sentence.slice(-1) == "?") {
            alert (`Введенное Вами предложение "${sentence}" - является вопросительным`);
        } else {
           alert (`Введенное Вами предложение "${sentence}" - является восклицательным`);
        }
};
showStyle();