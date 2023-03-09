let n = prompt("Please input number n");
let numbers = prompt().split(" ");
let m = prompt("Please input number m");
let flag = false;
for (let i = 0; i < n; i++){
    if(numbers[i]===m){
        flag = true;
        alert("YES"+" "+i);
        break;
    }
}
if(!flag){
    alert("NO");
}