/*
All JavaScript objects inherit properties and methods from a prototype.

The JavaScript prototype property allows you to add new properties to object constructors:



*/

function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

Person.prototype.nationality = "English";


var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green")

console.log(myFather.nationality);
console.log(Person.prototype);
