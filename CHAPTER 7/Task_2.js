let arrayList = new Array();
let inputNumber = 0;
let flag = 1;
while(flag==1){
    inputNumber = prompt();
    if(inputNumber!=0){
        arrayList.push(parseInt(inputNumber));
    }else if(inputNumber==0){
        flag = 0;
        break;
    }
}
let multiplication = 1;
for (let i = 0; i < arrayList.length; i++){
    multiplication = multiplication * arrayList[i];
}
console.log(Math.pow(multiplication,1/arrayList.length));