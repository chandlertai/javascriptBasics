// CONDITIONALS
// CONTROL the behavior of JS determines whether or not pieces of code are allowed to run. (either or situation). They are used to perform different actions based on certain conditions.

/*
    TRUTHY VALUES:
    -- IF (true)
    -- if ({})
    -- if ([])
    -- if (42) // positive and negative numbers
    -- if ("0")
    -- if ("false")

    FALSY VALUES:
    -- if (false)
    -- if (null)
    -- if (undefined)
    -- if (0)
    -- if (NaN) // Not a Number
    -- if ("") // empty string

    NOTE: A conditional will only if it is a "truthy" value. (If the condition is true).
*/

/*
SYNTAX:

*/

let snowing = true;

if (snowing  == true) {
    console.log("It is snopwing outside!");
}

if (snowing) {
    console.log("Its still snowing!");
}


// let snowing = false;

if (snowing == false) {
    console.log("It stopped snowing. It's too warm.");
}

if (snowing) {
    console.log("It is not snowing, bummer!");
}

let weather = 

/*
CHALLENGE
    Using a switch statement, write a dessert menu;
    If the dessert is pie, console.log("Pie, pie, pie, me oh my");
    If the dessert is cake, console.log("Cake is great");
    If the dessert is ice cream, console.log("I scream for ice cream.");
    Otherwise, have you switch statement console.log("Not on the menu.");
*/

let ,desserts = "Pie";

switch (desserts) {
    case "Pie":
        console.log("Pie, pie, pie, me oh my!").
        break;
    case "cake":
        console.log("Cake is great.")
        break;
    case "Ice Cream":
        console.log("I scream for ice cream.")
        break;
    default:
        console.log("not on the menu.")
};

// SWITCH STATEMENTS WITH MULTIPLE CONDITIONS

let num = -9;

switch (true) {
    case (num < 0 && num > -10):
        console.log("Oh hey there!");
        break;
    case (num > 0):
        console.log("Hey friend!");
        break;
    default:
        console.log("So long, buddy!");
};

//TERNARIES - tHIS IS THE SHORTHAND WAY OF WRITING IF ELSE STATEMENTS.
let number = 6;

(number > 0) ? console.log("Yes, your number is greater then zero.") : console.log("No, your number is not greater then 0");


if (number > 0) {
    console.log("Yes, your number is greater then zero.");
} else {
    console.log("No, your number is not greater then 0");
}

if (number == 0) {
    console.log("Hello");
}else if (number < 0) {
    console.log("Hi")
} else {
    console.log("Goodbye.")
}

number == 0 ? console.log("Hello") : number < 0 ? console.log("Hi") : console.log("Goodbye.")

//NOTE - ternaries need a catch all (default) unlike regular if conditionals.

/*
CHALLENGE
    Write out a conditional, then switch statement, and then ternary about ages. 
    If you're over the age of 18, print out "Yay! You can vote!"
    If you're over the age of 21, print out "Yay! You can drink!"
    If you're over the age of 25, print out "Yay! You can rent a car!"
    If you're younger than 18, print out "Sorry, you're too young to do anything fun."
*/

let age = 30;

age > 18 
    ? console.log("Yay! You can vote!") 
    : age > 21 
    ? console.log("Yay! You can drink!") 
    : age > 25 
    ? console.log("Yay! You can rent a car!")
    : age < 18 
    ? console.log("Sorry, You're too young to do anything fun.")
    : console.log("hey there")


let myAge = 17;

switch (true) {
    case myAge >= 25:
        console.log("Yay you can rent a car");
        break;
    case myAge >= 21:
        console.log("Yay you can drink");
        break;
    case myAge >= 18:
        console.log("Yay you can vote");
        break;
    default:
        console.log("Sorry you're too young to do anything fun.");
}

if (myAge >= 18) {
    console.log("Yay you can vote")
}


// CHALLENGE:
/*
    CHALLENGE:
    Create a variable named FB that takes on a number (it can be any number you want)
    Print out "Fizz" if the number is divisible by 3
    Print out "Buzz" if the number is divisible by 5
    Print out "Fizz Buzz" if the number is divisible by 3 and 5

    EXTRA BROWNIE POINTS:
    Convert this to a switch statement and then a ternary.
*/

for (i = 1; i <= 100; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log("Fizz Buzz")
    } else if (i % 3 == 0) {
        console.log("Fizz")
    } else if (i % 5 == 0) {
        console.log("BUZZ")
    } else {
    console.log(i)
    }
}

//Ternary

Fb % 3 === 0 && FB % 5 === 0 ? console.log("FizzBuzz") : FB % 5 === 0 ? console.log("Buzz") : FB % 3 === 0 ? console.log("Fizz") : console.log(FB);

//SWITCH

switch (true) {
    case FB % 5 === 0 && FB % 3 === 0:
        console.log("FizzBuzz");
        break;
    case FB % 5 === 0:
        console.log("Fizz");
        break;
    case FB % 3 === 0:
        console.log("Buzz");
        break;
    default:
        console.log("FB")
}