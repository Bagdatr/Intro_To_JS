let flag = true;
let students = [];
let studentIndex = 1;
let studentsList = "";

while(flag == true){
    let chosenOption = prompt(`
    PRESS 1 TO ADD STUDENT \n
    PRESS 2 TO LIST STUDENT \n
    PRESS 0 TO EXIT`)
    
    // let chosenOption = prompt(`Please select`);
    
    if (chosenOption == 1){
        let newStudent = {};
        newStudent.name = prompt(`Insert name`);
        newStudent.surname = prompt(`Insert surname`);
        newStudent.gpa = prompt(`Insert GPA`);
        students.push(newStudent);
        flag = true;
    }
    if (chosenOption == 2){
       for (let u of students){
        studentsList += studentIndex + " " + u.name +" "+ u.surname +" "+ u.gpa + "\n";
        // console.log(studentIndex +" "+ u.name +" "+ u.surname +" "+ u.gpa +"\n");
        studentIndex++;
       }
       alert(studentsList);
    }
    if(chosenOption == 0){
        flag = false;
        // break;
    }
}