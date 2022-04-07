// HOISTING 

/*
2 passes when compiling our code.
1st pass is where hoisting is being performed. this is where code is being interpreted and our code is looking for declararions. Storing declares variables to memory.

2nd pass is where the execution is happening. This is where the initialization is taking place. Our values are being assigned and read.

Hoisting - variable and function declarations are put into memory during the second phase (the compile phase) but stay where they are.

*/

console.log(firstName);
let firstName = "taylor"; //Output: error; we cant de lare something after weve referecned it.

console.log(lastName);
var lastName = "Dickens"; //OUTPUT: undefined

//TLDR - declare your variables at the top of your file and then dont use var