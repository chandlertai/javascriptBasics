switch(expression) {
    case x: 
    //code block
        break;
    case y: 
    // code block
        break;
    default:
         //code block
}
/*
Line 1: When creating a switch statement you will always need to start with the switch keyword.
After that inside of the paranthesis you add the value that you are testing.
Line 2: Here we use the case keyword followed by a choice that the expression in paranthesis above could be.
Line 3: If the expression matches the case here the code will run
Line 4: The break keyword is added here so that if the case is met it will break out of the switch case and move on instead of checking the other cases below.
Line 5: We have another case here. You can add in as many as needed in a switch statement
Line 8: Similar to ending an if else statement with else, the default code block will be run if none of the cases above match.
*/

let ingredients = "Salmon"

switch (ingedients) {
    case "ground Beef":
        console.log("Ill make Hamburgers.")
        break;
    case "salmon":
        console.log("I'll make grilled salmon.")
        break;
    case "Chicken":
        console.log("I'll make Chicken tacos.")
        break;
    default:
        console.log("I guess I should order something.")
}
