console.log("####Question 1####");
var student = {
  name: "Saurav Chatterjee",
  sclass: "2nd year ECE",
  rollno: 142,
};
console.log(student);

console.log("####Question 2####");
var student1 = {
  name: "Saurav Chatterjee",
  sclass: "2nd year ECE",
  rollno: 142,
};
console.log("Object property before deleterollno. property");
console.log(student1);
delete student1.rollno;
console.log("Object property after deleterollno. property");
console.log(student1);

console.log("####Question 3####");
var student2 = {
  name: "Saurav Chatterjee",
  sclass: "2nd year ECE",
  rollno: 142,
};
var count = 0;
for (let key in student2) {
  count = count + 1;
}
console.log("Total Elements" + "   " + count);

console.log("####Question 4####");
function Library(author, title, readingStatus) {
  this.author = author;
  this.title = title;
  this.readingStatus = readingStatus;
}
let book1 = new Library("Bill gates", "Road ahead", true);
let book2 = new Library("Steve Job", "Walter Isacsson", true);
let book3 = new Library(
  "Suzanne Collins",
  "Mockingjay: The Final Book of The Hunger Games",
  false
);
console.log(book1);
console.log(book2);
console.log(book3);

console.log("####Question 5####");

var cylinder = {
  pi: 3.1416,
  radius: 10,
  height: 8,
};
console.log(
  "Volume of Cylinder -",
  cylinder.pi * Math.pow(cylinder.radius, 2) * cylinder.height
);

console.log("###Question 6####");
var library = [
  { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
  { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];

var temp = [];
library.map((obj) => {
  temp.push(obj.libraryID);
});
temp.sort((a, b) => b - a);
for (let i in temp) {
  library.map((obj) => {
    if (obj.libraryID === temp[i]) console.log(obj);
  });
}
