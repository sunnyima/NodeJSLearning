var calculator = require('./calculator');
const readline = require('readline-sync');

let number1 = readline.question("Введите первое число:");
let number2 = readline.question("Ввведите второе число:");
if (isNaN(number1) || isNaN(number2)) {
    console.log('Не обходимо ввести два числа!');
}
else{
    console.log("Сумма : "+calculator.add(number1,number2));
    console.log("Разность : "+calculator.subtract(number1,number2));
    console.log("Произведение : "+calculator.multiply(number1,number2));
    console.log("Результат деления : "+calculator.division(number1,number2));
}



