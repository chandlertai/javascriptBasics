// LOOPS
// LOOPS allow developers to repeat a bit of code over and over


   // FOR LOOPS - 3 parameter, 

//SYNTAX
for ([initialExpression]; [conditionExpression]; [incrementExpresision]){
    //For loop body (code to be executed each loop)
}

//1. InitialExpression sets the starting value of a loop control variable (LCV).
//2. conditionExpression is evaluated, if true, stay in the loop, otherwise exit the loop.
//3. incrementExpression updates the LCV.

for (let i = 1; i <= 100; i++){
    console.log(i);
}

/*
1. we create the variable i and initialize it to 1.
2. Check: is i less than or equal to 100? i is 1, so the conditoin is true.
3. Execute console.log("Number:", i);.
4. Next: i++. (i++ is shorthand for incrementing by one)
5. Continue to execute steps 2, 3, 4 until i = 101.
*/

for (let i = 0; i <= 50; i += 5){
    console.log(i);
}

let i = 9;

for(i = 0; i <= 10; i++) {
    console.log(i);
}

for(i = 0; i <= 20; i += 2) {
    console.log(i);            // OUTPUTS: increments of 2, 0-20
}

for(i = 10; i>= 0; i--) {
    console.log(i);            // OUTPUT: decrements by 1 from 10
}

let name = "Elaina";

for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
}

// FOR IN - these loops are great for iterating over objects.
/*
let student = {
    name: "Conner",
    awesome: true,
    degree: "JavaScript",
    week: 3,
};*/

for (item in student) {
    console.log(item); //OUTPUT: name awesome degree week
    console.log(student[item]);
}

//               0,          1,       2,          3,             4
//let catArray = ["tabby", "siamese", "persian", "rag doll", "british shorthair"];
for (cat in catArray) {
    console.log(cat);  //OUTPUT: 0, 1, 2, 3, 4
    console.log(catArray[cat]);//OUTPUT: tabby siamese persian rag doll british short hair
}

// FOR OF LOOPS - great for iterating over arrays. They will iterate over the values of an object (array).

let student = {
    name: "Conner",
    awesome: true,
    degree: "JavaScript",
    week: 3,
};

let catArray = ["tabby", "siamese", "persian", "rag doll", "british shorthair"];
for (cat of catArray) {
    console.log(cat, "says meow");
}