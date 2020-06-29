"use striсt";
let n = +prompt('Введите целое число в диапазоне от 100 до 999.');
while (isNaN(n) || n % 1 != 0 || n < 100 || n > 999) {
    alert('Вы ввели неправильное значение. Введите целое число в диапазоне от 100 до 999.');
    n = +prompt('Введите целое число в диапазоне от 100 до 999.');
};
let fullWord = '';
switch ((n - n % 100) / 100) {
    case 1: fullWord = fullWord + 'сто ';
        break;
    case 2: fullWord = fullWord + 'двести ';
        break;
    case 3: fullWord = fullWord + 'триста ';
        break;
    case 4: fullWord = fullWord + 'четыреста ';
        break;
    case 5: fullWord = fullWord + 'пятьсот ';
        break;
    case 6: fullWord = fullWord + 'шестьсот ';
        break;
    case 7: fullWord = fullWord + 'семьсот ';
        break;
    case 8: fullWord = fullWord + 'восемьсот ';
        break;
    case 9: fullWord = fullWord + 'девятьсот ';
        break;
    default: alert('Некоректный ввод');
}
switch ((n % 100 - n % 10) / 10) {
    case 1:
        switch (n % 10) {
            case 1: fullWord = fullWord + 'одиннадцать';
                break;
            case 2: fullWord = fullWord + 'двенадцать';
                break;
            case 3: fullWord = fullWord + 'тринадцать';
                break;
            case 4: fullWord = fullWord + 'четырнадцать';
                break;
            case 5: fullWord = fullWord + 'пятнадцать';
                break;
            case 6: fullWord = fullWord + 'шестнадцать';
                break;
            case 7: fullWord = fullWord + 'семнадцать';
                break;
            case 8: fullWord = fullWord + 'восемнадцать';
                break;
            case 9: fullWord = fullWord + 'девятнадцать';
                break;
            case 0: fullWord = fullWord + 'десять';
                break;
            default: alert('Некоректный ввод');
        }
        break;
    case 2: fullWord = fullWord + 'двадцать ';
        break;
    case 3: fullWord = fullWord + 'тридцать ';
        break;
    case 4: fullWord = fullWord + 'сорок ';
        break;
    case 5: fullWord = fullWord + 'пятьдесят ';
        break;
    case 6: fullWord = fullWord + 'шестьдесят ';
        break;
    case 7: fullWord = fullWord + 'семьдесят ';
        break;
    case 8: fullWord = fullWord + 'восемьдесят ';
        break;
    case 9: fullWord = fullWord + 'девяносто ';
        break;
    case 0: fullWord = fullWord;
        break;
    default: alert('Некоректный ввод');
}
if ((n % 100 - n % 10) / 10 != 1) {
    switch (n % 10) {
        case 1: fullWord = fullWord + 'один';
            break;
        case 2: fullWord = fullWord + 'два';
            break;
        case 3: fullWord = fullWord + 'три';
            break;
        case 4: fullWord = fullWord + 'четыре';
            break;
        case 5: fullWord = fullWord + 'пять';
            break;
        case 6: fullWord = fullWord + 'шесть';
            break;
        case 7: fullWord = fullWord + 'семь';
            break;
        case 8: fullWord = fullWord + 'восемь';
            break;
        case 9: fullWord = fullWord + 'девять';
            break;
        case 0: fullWord = fullWord;
            break;
        default: alert('Некоректный ввод');
    };
};
alert(fullWord);