// Numbers in JavaScript
0
1
0.99
-42
NaN
//Storing  umbers in variables

let theMeaningOfLife = 42;
const indianaIncomeTaxRate = 0.0323;
let powerLevel = 9001;
let southPoleTempF = -44;
let spaceStationCrewCount = 7;
const imNotANumber = NaN;

// Arithmetic Operators
1 + 1; //Addition
12 - 10; //Subtraction
125 * 1.07; //Multiplication
125 / 4; //Division
10 ** 2; //Exponentation
15 % 2; //Modulus

// You would think this nwould be 0.3 right?
console.log(0.1 + 0.2);

// Theres something fishy going on here?
console.log(1.1 * 1.1);

//====Mini Challenge====
let billAmount = 132.96;
let totalPeople = 5;
const indianaTax = .07;

// Calulate the amount of tax on the bill
let taxAmount = billAmount * indianaTax;

// Calculate the grand total
let grandTotal = billAmount + taxAmount;

// Calculate how much each person will pay
let individualContribution = grandTotal / totalPeople;

// Print the results to verify the procedure works!
console.log(individualContribution);
