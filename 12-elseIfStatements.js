//1
if (condition1) {
    // code to be executed of condition1 is true
    //2
} else if (condition2) {
    // code tp be executed if the condition1 is false and condition2 is true
    //3
} else {
    // code to be executed if the condition1 is false and the condition2 is false
}

//1 As usual we start off with the if statement.
//2 Next comes the else if. If the condition above is not met this is the next one thayt will be checked. With else if you need to specify another condition in the () and code to be executed if this condition is met in the {}. You can chain as many else if's together as you need.
//3 The final portion of this is else. This is what will run if none of the conditions are met. Although it is not strictly required it is typically needed so that your conditional will execute some kind of code (whether its a console message, a message to the user, ect) even if none of the specified conditions are met.

let character = "Wizard";

if (character === 'Bard') {
    console.log('You sing nice songs.')
} else if (character === 'Warrior') {
    console.log('You beat things up.')
} else if (character === 'Rogue') {
    console.log('You use stealth.')
} else if (character === 'Wizard') {
    console.log('You use magic.')
} else {
    console.log('What type of character is this??')
}

let temp = 85;

if (temp >= 50){
  console.log('It is cool.')
} else if (temp >= 65){
  console.log('It is warm.')
} else if (temp >= 80) {
  console.log('It is hot.')
} else {
  console.log('It is cold.')
}