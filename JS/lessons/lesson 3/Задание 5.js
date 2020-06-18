let number1;
let number2;
let number3;
do {
    number1 = +prompt ('Введите первое число');
} while (!number1 && number1!==0);
do {
    number2 = +prompt ('Введите второе число');
} while (!number2 && number2!==0);
do {
    number3 = +prompt ('Введите третье число');
} while (!number3 && number3!==0);
let max = number1;
if (max < number2) {
    max = number2
}; 
if (max < number3) {
    max = number3
}; 
alert (`Самое большое число ${max}`);