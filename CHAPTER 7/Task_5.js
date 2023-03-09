let cars = [
    {"name":"Toyota", "price": 12000000, "year": 2015, "volume": 2.2},
    {"name":"Mercedes", "price": 70000000, "year": 2018, "volume": 3.8},
    {"name":"Toyota", "price": 7000000, "year": 2013, "volume": 2.0},
    {"name":"BMW", "price": 11000000, "year": 2011, "volume": 3.0},
    {"name":"Lexus", "price": 60000000, "year": 2017 ,"volume": 5.7}
];

let chooseOption = prompt(
`INSERT [1] TO SEARCH BY NAME \n
INSERT [2] TO SEARCH BY YEAR \n
INSERT [3] TO SEARCH BY ENGINE VOLUME \n
INSERT [4] TO SEARCH BY PRICE \n
INSERT [5] TO EXIT`);

let response = "";
let flag = true;
if(chooseOption == 1){
    let carName = prompt(`INSERT NAME OF CAR:`);
    for(let i=0; i<cars.length; i++){
        if(carName == cars[i]["name"]){
            response = response + cars[i]["name"] +" - "+ cars[i]["year"] +" - "+ cars[i]["volume"].toFixed(1)+" liters - "+ cars[i]["price"] +" KZT" +"\n";
        }
    }
}else if(chooseOption == 2){
    let yearStartString = prompt(`INSERT YEAR STARTS FROM:`);
    let yearStart = parseInt(yearStartString);
    let yearEndString = prompt(`INSERT YEAR ENDS TO:`);
    let yearEnd = parseInt(yearEndString);
    for(let i=0; i<cars.length; i++){
        if(yearStart <= cars[i]["year"] && yearEnd >= cars[i]["year"]){
            response = response + cars[i]["name"] +" - "+ cars[i]["year"] +" - "+ cars[i]["volume"].toFixed(1)+" liters - "+ cars[i]["price"] +" KZT" +"\n";
        }
    }
}else if(chooseOption == 3){
    let volumeStartString = prompt(`INSERT ENGINE VOLUME STARTS FROM:`);
    let volumeEndString = prompt(`INSERT ENGINE VOLUME ENDS FROM:`);
    for(let i=0; i<cars.length; i++){
        if(volumeStartString <= cars[i]["volume"] && volumeEndString >= cars[i]["volume"]){
            response = response + cars[i]["name"] +" - "+ cars[i]["year"] +" - "+ cars[i]["volume"].toFixed(1)+" liters - "+ cars[i]["price"] +" KZT" +"\n";
        }
    }
}else if(chooseOption == 4){
    let priceStartString = prompt(`INSERT PRICE START FROM:`);
    let priceStart = parseInt(priceStartString);
    let priceEndString = prompt(`INSERT PRICE ENDS FROM:`);
    let priceEnd = parseInt(priceEndString);
    for(let i=0; i<cars.length; i++){
        if(priceStart <= cars[i]["price"] && priceEnd >= cars[i]["price"]){
            response = response + cars[i]["name"] +" - "+ cars[i]["year"] +" - "+ cars[i]["volume"].toFixed(1)+" liters - "+ cars[i]["price"] +" KZT" +"\n";
        }
    }
}else if(chooseOption == 5){
    alert("Thank you. Good bye");
    flag = false;
}

if(flag==true){
    alert(response);
}