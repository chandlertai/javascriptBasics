// Types

// Anything on the right side of our assignment operator (=). They are the values, the data that we store for later.

//booleans
// A boolean can only be true or false

//Strings
// 

//Numbers

let temp = 38;
console.log(temp);

let precise = 999999999999999;
console.log(precise);

let rounded = 9999999999999999;
console.log(rounded);

// Concantanation - adding one string with another string to combine them to create a singe string. We are just appending them together
let second = "1050" + "100";
console.log(second);


let firstName = "Martin";
let lastName = "Beall";

let fullName = firstName + " " + lastName;
console.log(fullName); //Output: Martin Beall

let third = 1050 + "100";
console.log(third); //Output: 1050100 Coercion.
//COERCION - Is when JS assumes when we are adding a number and a string together that they are both strings.

// NULL
// null acts as an empty container. It has nothing in it, but it still acts as a space to fill.

let empty = null;
console.log(empty);

//UNDEFINED
// Undefined has no value to be assigned and does not act as an empty container
let correct;
//let incorrect = undefined (you can technically do this its just not best practice.)
console.log(correct);

//NULL vs UNDEFINED
// Null is a container with nothing in it.
// Null is a package that has been assmbled. It is just waiting for somwthing to be put in it.
//UNDEFINED is when a variable has not been assigned a value nor has it been created yet
//Undefined as a package that is technically an unassembled box and it still needs to be assembled and have something packaged inside of it.