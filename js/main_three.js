var numOne = +prompt('Введите первое число!');
var numTwo = +prompt('Введите второе число!');
var numThree = +prompt('Введите третье число!');

if ((numOne > numTwo && numOne < numThree) || (numOne < numTwo && numOne > numThree)) {
    alert('Среднее число: ' + numOne);
} else if ((numTwo > numOne && numTwo < numThree) || (numTwo < numOne && numTwo > numThree)) {
    alert('Среднее число: ' + numTwo);
} else if ((numThree > numOne && numThree < numTwo) || (numThree > numTwo && numThree < numOne)) {
    alert('Среднее число: ' + numThree);
} else {
    alert('Упс! Что-то пошло не так!')
}