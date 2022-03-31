//1
if (condition) {
    //code to be executed if the condition is true//2
} else {//3
    //code to be executed if the condition is false
}

//1. The synatx for the if statement at the start is exactly the same as before. If the condition here is true, then the code in the {} of the if statement will run.
//2. After the closing curly brace of the if statement we add the else keyword.
//3. After the else we dont need a condition since the code in the else statement will run if the first condition is not met. Simply open up a set of curly braces and add in the code you would like to run.

//Example 1
if (10 > 5) {
    console.log("10 is greater than 5")
} else {
    console.log("10 is not greater than 5")
}

//Example 2
if (10 < 5) {
    console.log("10 is less than 5")
} else {
    console.log("10 is not less than 5")
}

//Example 3
let weather = "rainy"

if (weather === "rainy"){
    console.log("Bring an umbrella")
} else {
    console.log("You dont need an umbrella")
}