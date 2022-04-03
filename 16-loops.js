for ([initialExpression]; [conditionExpression]; [incrementExpresision]){
    //For loop body (code to be executed each loop)
}

//1. InitialExpression sets the starting value nof a loop control variable (LCV).
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

for(let i = 0; i <= 50; i += 5){
    console.log(i);
}