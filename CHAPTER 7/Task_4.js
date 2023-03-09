let n = prompt("Please enter number");
let numbers = prompt().split(" ");
let numbersToInteger = [];
for(let i=0; i<numbers.length; i++){
    numbersToInteger.push(numbers[i]);
}
let multiplication = 1;
for(let num of numbersToInteger){
    if(num > 0){
        multiplication = multiplication * num;
    }
}
alert(multiplication);