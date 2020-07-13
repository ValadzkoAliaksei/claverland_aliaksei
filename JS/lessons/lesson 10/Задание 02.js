"use striсt";
let sentence = prompt('Введите предложение.');

while (sentence[sentence.length - 1] != "." || sentence[sentence.length - 1] != '!' || sentence[sentence.length - 1] != '?') {
    alert('Вы ввели неправильное значение. Введите предложение вопросительное, восклицательное или повествовательное!');
    sentence = prompt('Введите предложение.');
};

alert (sentence);