//SCOPE
/*
Scope is a way for our code editor to keep track of all the variabless in our code

2 kinds of Scope:
    - global - access to everything 
    - local - 
*/

let x = "declared outside of the function";

function exampleScope() {
    let x = "declare inside of the function";
    console.log(x, "this is coming from line 14");
}

exampleScope();
console.log(x, "This is coming from line 18");

/* Var Vs Let
Var - scoped to the nearest function block
let - scoped to nearest enclosing block
const - const, cant be reinitialized
*/
let color = "blue";

function skyColor() {
    color = "pink";
    if (true) {
        var color = "purple";
        console.log(color);
    }
    console.log(color);
}

skyColor();
console.log(color);

/*
    43 - purple
    45 - purple
    49 - blue
*/



