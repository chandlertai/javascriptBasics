function hello() {
    console.log("Hello World!");
}

//1. Use the function keyword.
//2. Name the function hello.
//3. Execute the code inside of te curly bois.

// To execute a function we call or invoke it, Using the function name followed by the () calls it.

// hello(); //invokes the function hello

// We can call a function as many times as needed.

/*
Functions are chunks of reuseable code that perform a set of actions when called upon or invoked

    SYNTAX
    function functionName() {
        nested code
    }
*/

function hi() {
    console.log("Hi");// NOT INVOKED
}

hi();//OUTPUT: Hi, this is what we call invoking

//FUNCTION EXPRESSIONS - storing functions into  variables
//NOTE - function expressions do Not get hoisted
let hello = function (hi) {
    console.log("hello there!");
};

hello();

//PARAMETERS - place holders for data to be passed into functions when we call or invoke our function.
/*
    SYNTAX

    function functionName(parameters) {
        NESTED CODE
    }

    functionName(argument);
    
    */

    function taylor(ticket) {
        console.log(`I exchanged my ticket for a ${ticket}`);
    }

    taylor("cheezy pizza");

    //mulitple parameters are separated by comas
    function myName() {
        let fullName = fName + ' ' + lName;
        console.log('Hello, my name is ${fullName}');
    }

    myName("Taylor", "Dickens");

    // ARROW FUNCTIONS - another way of writing out a function

    /*
    CONCISE BODY - just for one line of code
    let functionName = () => WHATEVER LOGIC

    BLOCK BODY - multiple lines of code
    let functionName = () => {
        NESTED LOGIC
    }
    */

    let greeting = () => console.log("Hey there!");
    greeting();

    let greetings = () => {
        console.log("Oh hey, friend!");
    };
    greetings();

    let apples = x => {
        if (x >= 10) {
            console.log("Too many apples.");
        } else {
            console.log("Just right!");
        }
    };

    apples(5);

    //RETURN - brings back our data outside of our function

    function coffeeshop() {
        console.log("White caramel mocha");
    }

    let customer = coffeeShop();
    console.log(customer);
