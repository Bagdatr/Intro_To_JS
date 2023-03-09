let n = prompt("Please enter number");
let numbers = prompt().split(" ");
let numbersToInteger = [];
for(i = 0; i < n; i++){
    numbersToInteger.push(parseInt(numbers[i] * numbers[i]));
}
let squareOfNumbers = "";
for(i = 0; i < numbersToInteger.length; i++){
    squareOfNumbers += numbersToInteger[i] + " ";
}
console.log(squareOfNumbers);