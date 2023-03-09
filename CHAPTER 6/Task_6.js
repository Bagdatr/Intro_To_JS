let books = [
    {"name":"Harry Potter and the Philosopher's Stone", "author":"Joanne Rowling", "ISBN":"1233123", "price":"50$"},
    {"name":"Harry Potter and the Chamber of Secrets", "author":"Joanne Rowling", "ISBN":"222332", "price":"40$"},
    {"name":"Harry Potter and the Prisoner of Azkaban", "author":"Joanne Rowling", "ISBN":"452323", "price":"55$"}
]
let searchBookByAuthor = prompt("Please enter name of author");

for (let i = 0; i < books.length; i++){
    if(searchBookByAuthor == books[i]["author"]){
        console.log(books[i]["name"] + "-" + books[i]["author"] + "-" + books[i]["ISBN"] + "-" + books[i]["price"] +"\n");
    }
}
