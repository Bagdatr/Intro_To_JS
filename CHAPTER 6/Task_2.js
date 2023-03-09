let n = prompt();
let numbers = prompt().split(" ");
let numbersToInteger = [];
for (i = 0; i < n; i++) {
    numbersToInteger.push(parseInt(numbers[i]));
}
let maxNumber = numbersToInteger[0];
for (i = 0; i < numbersToInteger.length; i++) {
    if (maxNumber < numbersToInteger[i]) {
        maxNumber = numbersToInteger[i];
    }
}
console.log(maxNumber);