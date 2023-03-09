let n = prompt("Please enter number");
let numbers = prompt().split(" ");
let answer = "";
for (i=n-1;i>=0;i--){
    answer = answer + numbers[i] + " ";
}
console.log(answer);