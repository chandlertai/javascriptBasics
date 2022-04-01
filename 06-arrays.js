//ARRAYS

/*
array are containers that hold lists of items (data or info). They are denoted by [].
They can hold mulitiple data types. great for listing.
*/

/*
    let arrayVariableName = [ list1, list2, list3 ];
*/

let groceryList = ["milk", "bread", "cereal", "oreos"];
console.log(groceryList[3]);

let students = [
    "Connor",
    "benjamin",
    "Patrick",
    "Trista",
    "Tai",
    "Nate",
    15,
    true,
    ["Zack", "Elaina", "David"],
];

console.log( typeof students); //OUTPUT: objects because arrays are objects. indices act as keys on the backend.
//typeof operator gives me the data type of whatever follows it

console.log(students instanceof Array); //OUTPUT: true.
//instanceof operator is used to cherck the type of an object at runtime.

// CHALLENGE

//Dive into the nested Array "Elaina".
//Printout "Hello! Elaina! Nice to see ya."

console.log(students[8][1] + [" Nice to see ya"]);

 //       OR

console.log("Hello, " + students[8][1] + "! Nice to see ya.");

//    OR

console.log(`Hello, ${students[8][1]}! Nice to see ya.`)





//let rainbowColors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'violet'];
//let raceWinners = [33,72,64];
//let myFavoriteThings = ['Broccoli', 46074, 'Zombie Cats From Mars'];

var mySecretSpyInfo = ['James Bond', 007, true]; // A string, a number (although the 00 is ignored), and a boolean


var countryArray = ["USA", "Japan", "Belgium"];
console.log(countryArray[2]);// Belgium
console.log(countryArray[0]);// USA

let dogs = ["Shiba Inu", "husky", "corgi", "Great Dane"];
let cats = ["Maine Coon", "bengal", "Siamese", "Sphynx"];
let birds = ["African Grey Parrot", "Canary", "Macaw", "Finch"];
let fish = ["Goldfish", "Neon Tetra", "Betta", "Guppy"];
console.log(dogs[0]);
console.log(cats[1]);
console.log(fish[3]);
console.log(birds[0]);


//ARRAY METHODS

//Array methods allow us to manipulate the data inside of our array or the array itself.
// .length - simply returns the  number of the items in an array
let foods =[
    { name: "pizza", price: 20},
    { name: "burrito", price: 1},
    { name: "sushi", price: 15},
];

console.log(foods.length); //OUTPUT: 3

// .toString() - this method takes an array and converts it to a string (including all of the items in it).
let randomArray = [5, "Kristian", true, -100];
consolr.log(randomArray.toString());

// .shift() - this method removes the firat item of an array and returns the removed item.
console.log("Before :", foods);

let firstItem = foods.shift();

console.log("After : ", foods);
console.log("Shifted Items: ", firstItem); 

// .unshift() - adds an item to the beginning of our array
console.log("Before : ", foods);

foods.unshift({ name: "corn dogs", price: 4});

console.log("After : ", foods);

let nums = [1, 2, 3, 4, 5];
nums.unshift(0);
console.log(nums);// OUTPUT: [0, 1, 2, 3, 4, 5]

// .pop() - similar to the shift() method it removes the item in an array and returns the removwed item.

let sailorScouts = ["Moon", "Mars", "Saturn", "Jupitor"];
sailorScouts.pop();
console.log(sailorScouts);//OUTPUT: is our array without sailor Jupitor