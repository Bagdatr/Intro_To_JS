let n = prompt("Please enter number");
let numbers = prompt().split(" ");
let numbersToInteger = [];
for (i = 0; i < n; i++){
    numbersToInteger.push(parseInt(numbers[i]));
}
let sumOfNumbers = 0;
for (let num of numbersToInteger){
    sumOfNumbers+=num;
}
console.log(sumOfNumbers+" "+(sumOfNumbers/n));