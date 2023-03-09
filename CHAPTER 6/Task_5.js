let users = [
    { "login": "ilyas", "password": "qwerty" },
    { "login": "eldar", "password": "qqqqq" },
    { "login": "assylkhan", "password": "qweqwe" },
    { "login": "anel", "password": "asdasd" },
    { "login": "alibek", "password": "aaaaaa" }
];
let checkUser = prompt("Please enter your login and password").split(" ");
for(let i = 0; i < users.length; i++){
    if(checkUser[0] == users[i]["login"] && checkUser[1] == users[i]["password"]){
        alert("Welcome, you are authenticated");
    }else alert("User not found");
    break;
}