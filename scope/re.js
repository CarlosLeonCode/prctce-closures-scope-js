// Here we are gonna apply declaration and initializing concepts to variables and its differences.

// >>>>>>>>>>>>>>> VAR <<<<<<<<<<<<<<<<<<
var musicGenre;                 // Declaration
musicGenre = 'Dubstep'          // Initializing
console.log(musicGenre)         // ! OUT -> Dubstep
var musicGenre = 'Bass House'   // Redeclaration and initializing
console.log(musicGenre)         // ! OUT -> Bass House
musicGenre = 'Tech house'       // Reinitializing
console.log(musicGenre)         // ! OUT -> Tech house
// The var variable allows to declarate, to initialize, to redeclarate and reinitialize.
// This could be dangerous for our program. For this reason we don't use var.


// >>>>>>>>>>>>>>> LET <<<<<<<<<<<<<<<<<<
let food = 'Burger'             // Declaration and initializing
console.log(food)               // ! OUT -> Burger
food = 'Rice'                   // Reinitialize
console.log(food)               // ! OUT -> Burger
// ! let food;                  // Redeclaration, this is not allowed
// We can redeclarate variables. Only reinitialize, declarate and initialize.


// >>>>>>>>>>>>>>> CONST <<<<<<<<<<<<<<<<<<
// * We must declarate and initialize at the same time
const drink = 'Chocolate'
// ! drink = 'Pineapple juice'  // Reinitialization, this is not allowed
// ! const drink = 'Beer'       // Redeclaration and Reinitialization, this is not allowed
// We just can declare and initialize once.
// But we can changes the elements of Arrays and Objects.
