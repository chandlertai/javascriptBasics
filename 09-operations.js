// OPERATORS

// ASSIGNMENT OPERATOR
// The = sign in between our variables and our values. Helps assign values to our declarations.

let r = 5;

//COMPARISON OPERATORS
// EQUAL TO
console.log(3 == 3); // output: true Because 3 == 3!
console.log('3' == 3); //output true. 
//coercion is happening so JS assumed that we were doing 3 == 3.

// STRICT EQUALS TO
console.log("3" === 3); //output: false
//coecion does NOT happen here, so strictly equals to is checking the data type and the value.

// NOT EQUALS TO
console.LOG('3' != 3);//output: false because coercion is happening and 3 does equal 3. (we're not type checking)

//STRICTLY NOT EQUAL TO
console.log("3" !== 3);// output: true because the string data type of 3 does not equal the number 3

//Greater than
console.log(3 > 2);

// LESS THAN
console.log(2 < 3);

//GREATER THAN OR EQUAL TO
console.LOG(3 >= 2);

//LESS THAN OR EQUAL TO
console.log( 2 <= 3);

// AND
console.log(2 < 3 && 3 > 2); //output: true
console.log(2 < 3 && 3 < 2); //output: false

//OR
console.log( 2 < 3 || 3 < 2); //Output: true because one of our statemnts is true

//LOGIC OPERATORS

//ADDITION
r =r + 1;
r += 1;

// SUBTRACTION
r = r - 1;
r -= 1;

//MULTIPLICATION
r =r * 1;
r *= 1;

//DIVISION
r = r / 1;
r /= 1;

//EXPONENTIAL
r = r ** 2;
r **= 2;

//MODULUS
console.log(5 % 2); //output: 1 gives the remainder
