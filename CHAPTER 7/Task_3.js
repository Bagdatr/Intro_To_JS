let numbers = new Array();
let inputNumber = 0;
let flag = true;
while(flag = true){
    inputNumber = prompt();
    if(inputNumber!=0){
        numbers.push(parseInt(inputNumber));
    }else if(inputNumber==0){
        flag = false;
        break;
    }
}
let positiveNumbers = "";
for (let num of numbers){
    if(num > 0){
        positiveNumbers += num +" ";
    }
}
alert(positiveNumbers);