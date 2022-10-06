// Variables
// When we use var, in the root of the project, we are declarating a global variable

var name; // Declarating
var nickname = 'Charlie Leon' // Declarating and Initializing
var name = 'Carlos' // Initializing
var age = 12
age = 23 // Re initializing

// Global scope
var fruit = 'watermelon';
console.log(fruit)

function someFruit(){
  console.log(fruit);
}
someFruit();

function food(){
  // ! Here we declarate without initialize, this is created as a global variable
  food = 'burder';
  console.log(food)
}

food()
console.log(food)
