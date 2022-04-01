// STRING PROPERTIES

/*
    Properties are qualities associated with a datatype.
    Strings have 3 properties. 
    The length property is the most popular one that developers prominently use.
*/

/*
    SYNTAX
    string.propertyName
*/
// length property - determines the length of a string.

// let myName = "Taylor";
let myName = "Taylor is my first name!"; //OUTPUT: 24
console.log(myName.length); //OUTPUT: 6 because there are 6 characters in my string.
// NOTE: the length property also accounts for spaces and punctuation in your string.

// STRING METHODS
// Methods are tools that can help us manipulate our data.

/*
    SYNTAX
    string.methodName()
*/

// toUpperCase method - capitalizes your string.
let myNameIs = "taYloR";
console.log(myNameIs.toUpperCase()); //OUTPUT: TAYLOR
console.log(myNameIs[0].toUpperCase() + myNameIs.substring(1).toLowerCase());
// substring() method starts at a specific index you give and grabs all the other indexes after it.
// toLowerCase() method lowercases your string.

// includes method - this method checks if a certain string is included (inside) of your string
let home = "My home is Texas!";
console.log(home.includes("Texas")); //OUTPUT: true because "Texas" exists in our string.
console.log(home.includes("texas")); //OUTPUT: false because "texas" DOES NOT exist in our string. JavaScript is case-sensitive.

let home2 = "My home is Texas part 2.";
console.log(home2.includes(2)); //OUTPUT: true the includes method is NOT comparing Data Types.
// NOTE: the includes method is NOT exclusive to just strings.

// CHALLENGE
/*
    USE GOOGLE! Open-book challenge. Research and use the split method to get an array of separate words back from the sentence.
*/
let sentence = "This sentence is going to be split into individual parts!";

let seperateWords = sentence.split(" ");
console.log(seperateWords[" "])
